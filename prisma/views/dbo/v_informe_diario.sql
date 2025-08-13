WITH base_data AS (
  SELECT
    DISTINCT CAST(Folio AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Folio,
    CAST(Especie AS NVARCHAR(30)) COLLATE Modern_Spanish_CI_AS AS Especie,
    CAST(Fecha_packing AS VARCHAR(30)) COLLATE Modern_Spanish_CI_AS AS Fecha_packing,
    Cajas,
    CAST(LINEA AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS LINEA,
    CAST(Camara AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Camara,
    Estado
  FROM
    (
      SELECT
        ec.Folio,
        ec.Especie,
        CONVERT(varchar(30), ec.Fecha_packing, 103) AS Fecha_packing,
        ec.Cajas,
        CASE
          ec.LINEA
          WHEN '8' THEN 'PALETIZADO 8 TENO'
          WHEN '9' THEN 'PALETIZADO 9 TENO'
          WHEN '10' THEN 'PALETIZADO 10 TENO'
          ELSE ec.LINEA
        END AS LINEA,
        CAST(NULL AS VARCHAR(100)) AS Camara,
        'En Existencia' AS Estado,
        3 AS priority
      FROM
        [192.168.1.3].consultas.dbo.existencias_cajas AS ec
    ) AS all_data
)
SELECT
  b.Folio,
  b.Especie,
  b.Fecha_packing,
  b.Cajas,
  b.LINEA,
  COALESCE(v.Camara, r.camara, b.Camara) AS Camara,
  CASE
    WHEN r.folio_rechazado IS NOT NULL THEN 'Rechazado'
    WHEN v.Folio IS NOT NULL THEN 'Validado'
    ELSE 'En Existencia'
  END AS Estado
FROM
  base_data AS b
  LEFT JOIN validaciones AS v ON b.Folio = CAST(v.Folio AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS
  LEFT JOIN rechazados AS r ON b.Folio = CAST(r.folio_rechazado AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS
  AND r.nombre_estado = 'R'
UNION
ALL
SELECT
  CAST(v.Folio AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Folio,
  CAST(v.Especie AS NVARCHAR(30)) COLLATE Modern_Spanish_CI_AS AS Especie,
  CAST(
    CONVERT(varchar(30), v.createdAt, 103) AS VARCHAR(30)
  ) COLLATE Modern_Spanish_CI_AS AS Fecha_packing,
  v.Cajas,
  CAST(NULL AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS LINEA,
  CAST(v.Camara AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Camara,
  'Validado' AS Estado
FROM
  validaciones AS v
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      [192.168.1.3].consultas.dbo.existencias_cajas AS ec
    WHERE
      CAST(ec.Folio AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS = CAST(v.Folio AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS
  )
UNION
ALL
SELECT
  CAST(r.folio_rechazado AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Folio,
  CAST(r.especie AS NVARCHAR(30)) COLLATE Modern_Spanish_CI_AS AS Especie,
  CAST(
    CONVERT(varchar(30), r.fecha_rechazado, 103) AS VARCHAR(30)
  ) COLLATE Modern_Spanish_CI_AS AS Fecha_packing,
  ISNULL(r.cajas, 0) AS Cajas,
  CAST(NULL AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS LINEA,
  CAST(r.camara AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Camara,
  'Rechazado' AS Estado
FROM
  rechazados AS r
WHERE
  r.nombre_estado = 'R'
  AND r.id_rechazado = (
    SELECT MIN(r2.id_rechazado)
    FROM rechazados AS r2
    WHERE r2.folio_rechazado = r.folio_rechazado
    AND r2.nombre_estado = 'R'
  )
  AND NOT EXISTS (
    SELECT
      1
    FROM
      [192.168.1.3].consultas.dbo.existencias_cajas AS ec
    WHERE
      CAST(ec.Folio AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS = CAST(r.folio_rechazado AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS
  );