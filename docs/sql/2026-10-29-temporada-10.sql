-- Base Validacion (192.168.7.25). Paso a temporada 10, 29-oct-2026.
-- Los folios se reinician cada temporada: validaciones y rechazados se separan por Temporada
-- en vez de partir con tablas vacías (como se hizo en T8 -> T9).
-- Reversa: 2026-10-29-temporada-10-reversa.sql

-- 1. Temporada vigente de la app (cambiarla junto con TEMPORADA del backend)
CREATE VIEW dbo.v_temporada_actual
AS
-- Temporada vigente de la app de validación. Al cambiarla, cambiar también TEMPORADA en el
-- .env del backend (ver docs/CAMBIO-TEMPORADA.md de ValidacionAppBack).
SELECT CAST(N'10' AS nvarchar(2)) COLLATE Modern_Spanish_CI_AI AS Temporada
GO

-- 2. Un folio se valida una vez por temporada
ALTER TABLE dbo.validaciones DROP CONSTRAINT Validacion_Folio_key;
ALTER TABLE dbo.validaciones ADD CONSTRAINT Validacion_Folio_Temporada_key UNIQUE NONCLUSTERED (Folio, Temporada);
GO

-- 3. Vistas que lee el backend: solo la temporada vigente
ALTER VIEW dbo.v_cajas_validadas
AS SELECT v.Especie,CONVERT(varchar,DATEADD(HOUR, -3, v.createdAt), 103) AS Fecha_packing, v.Folio, v.Cajas, v.Camara
FROM validaciones v
JOIN dbo.v_temporada_actual t ON t.Temporada = v.Temporada
GO

ALTER VIEW dbo.v_cajas_rechazadas
AS SELECT  distinct(r.folio_rechazado),r.especie,CONVERT(varchar, r.fecha_rechazado, 103) AS Fecha_packing, r.cajas, r.camara
FROM rechazados r
JOIN dbo.v_temporada_actual t ON t.Temporada = r.Temporada
WHERE r.nombre_estado = 'R'
GO

ALTER VIEW dbo.v_informe_diario
AS WITH val AS (
  -- Solo la temporada vigente: los folios se reinician cada temporada
  SELECT v.Folio, v.Especie, v.Cajas, v.Camara, v.createdAt
  FROM validaciones v
  JOIN dbo.v_temporada_actual t ON t.Temporada = v.Temporada
),
rech AS (
  SELECT r.id_rechazado, r.folio_rechazado, r.especie, r.cajas, r.camara, r.fecha_rechazado, r.nombre_estado
  FROM rechazados r
  JOIN dbo.v_temporada_actual t ON t.Temporada = r.Temporada
),
base_data AS (
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
          WHEN '08' THEN 'PALETIZADO 8 TENO'
          WHEN '09' THEN 'PALETIZADO 9 TENO'
          WHEN '10' THEN 'PALETIZADO 10 TENO'
          ELSE ec.LINEA
        END AS LINEA,
        CAST(NULL AS VARCHAR(100)) AS Camara,
        'En Existencia' AS Estado,
        3 AS priority
      FROM
        [192.168.1.3].consultas.dbo.existencias_cajas AS ec
    ) AS all_data
),
first_rechazados AS (
  SELECT
    folio_rechazado,
    camara,
    fecha_rechazado,
    ROW_NUMBER() OVER (PARTITION BY folio_rechazado ORDER BY id_rechazado) as rn
  FROM rech
  WHERE nombre_estado = 'R'
)
SELECT
  b.Folio,
  b.Especie,
  -- AQUÍ ESTÁ EL CAMBIO PRINCIPAL: usar la fecha según el estado
  CASE
    WHEN fr.folio_rechazado IS NOT NULL THEN CAST(CONVERT(varchar(30), fr.fecha_rechazado, 103) AS VARCHAR(30)) COLLATE Modern_Spanish_CI_AS
    WHEN v.Folio IS NOT NULL THEN CAST(CONVERT(varchar(30),  DATEADD(HOUR, -3, v.createdAt),103) AS VARCHAR(30)) COLLATE Modern_Spanish_CI_AS
    ELSE b.Fecha_packing
  END AS Fecha_packing,
  b.Cajas,
  b.LINEA,
  COALESCE(v.Camara, fr.camara, b.Camara) AS Camara,
  CASE
    WHEN fr.folio_rechazado IS NOT NULL THEN 'Rechazado'
    WHEN v.Folio IS NOT NULL THEN 'Validado'
    ELSE 'En Existencia'
  END AS Estado
FROM
  base_data AS b
  LEFT JOIN val AS v ON b.Folio = CAST(v.Folio AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS
  LEFT JOIN first_rechazados AS fr ON b.Folio = CAST(fr.folio_rechazado AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS
  AND fr.rn = 1
UNION
ALL
SELECT
  CAST(v.Folio AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Folio,
  CAST(v.Especie AS NVARCHAR(30)) COLLATE Modern_Spanish_CI_AS AS Especie,
  CAST(
    CONVERT(varchar(30), DATEADD(HOUR, -3, v.createdAt),103) AS VARCHAR(30)
  ) COLLATE Modern_Spanish_CI_AS AS Fecha_packing,
  v.Cajas,
  CAST(NULL AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS LINEA,
  CAST(v.Camara AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Camara,
  'Validado' AS Estado
FROM
  val AS v
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
  rech AS r
WHERE
  r.nombre_estado = 'R'
  AND r.id_rechazado = (
    SELECT MIN(r2.id_rechazado)
    FROM rech AS r2
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
  )
GO

-- 4. Vista de reporte (se consulta con WHERE Temporada = ...): trae T9 y T10 y cruza
--    validaciones y rechazos por folio Y temporada. Al pasar a T11, cambiar las 3 listas IN.
ALTER VIEW dbo.v_existencias_con_estado
AS WITH existencias_base AS (
    SELECT
        e.COD_TEM AS Temporada,
        c.DES_CAM AS Camara,
        CONVERT(varchar, ISNULL(m.FECHA_PAC, e.FECHA_PAC), 103) AS Fecha_Estado,
        e.COD_PACK AS Packing,
        e.LOTE AS Folio,
        e.COD_PRO_ETIQUETADO AS Productor,
        ISNULL(m.COD_PRE, e.COD_PRE) AS CSG,
        ISNULL(m.COD_CUA, e.COD_CUA) as Cuartel,
        (SELECT TOP (1) NOM_VAR
         FROM [192.168.1.3].Erpfrusys.dbo.VARIEDAD AS f_var
         WHERE (e.COD_EMP = COD_EMP)
           AND (e.COD_TEM = COD_TEM)
           AND (COD_VAR = ISNULL(m.COD_VAR_ETI, e.COD_VAR_ETI))) AS Variedad,
        ISNULL(m.COD_ENVOP, e.COD_ENVOP) AS Embalaje,
        (SELECT NOM_ETI
         FROM [192.168.1.3].Erpfrusys.dbo.Etiqueta AS f_eti
         WHERE (e.COD_EMP = COD_EMP)
           AND (e.COD_TEM = COD_TEM)
           AND (COD_ETI = ISNULL(m.COD_ETI, e.COD_ETI))) AS Etiqueta,
        ISNULL(m.COD_CAL, e.COD_CAL) AS Calibre,
        (SELECT NOM_CAT
         FROM [192.168.1.3].Erpfrusys.dbo.CATEGORIA AS cat
         WHERE (e.COD_EMP = COD_EMP)
           AND (e.COD_TEM = COD_TEM)
           AND (e.COD_ESP = COD_ESP)
           AND (ISNULL(m.COD_CAT, e.COD_CAT) = COD_CAT)) AS Categoria,
        ISNULL(m.CAJAS, e.CAJAS) AS Cajas,
        ISNULL(m.PROCESO, ISNULL(m.PLANILLA, e.PLANILLA)) AS Proceso,
        (SELECT NOM_ESP
         FROM [192.168.1.3].Erpfrusys.dbo.ESPECIE AS esp
         WHERE esp.COD_EMP = e.COD_EMP
           AND esp.COD_TEM = e.COD_TEM
           AND esp.COD_ESP = e.COD_ESP) AS Especie,
        e.COD_ESP
    FROM [192.168.1.3].Erpfrusys.dbo.EXISTENCIA AS e
    LEFT OUTER JOIN [192.168.1.3].Erpfrusys.dbo.MIXEXISTENCIA AS m
        ON e.LOTE = m.LOTE
        AND e.COD_EMP = m.COD_EMP
        AND e.COD_TEM = m.COD_TEM
    LEFT JOIN [192.168.1.3].Erpfrusys.dbo.CAMARAS AS c
        ON e.COD_EMP = c.COD_EMP
        AND e.COD_TEM = c.COD_TEM
        AND e.COD_FRI = c.COD_FRI
        AND e.COD_CAM = c.COD_CAM
    WHERE (e.COD_EMP = 'MER')
      AND e.COD_TEM IN ('9', '10')
),
first_rechazados AS (
    SELECT
        folio_rechazado,
        Temporada,
        camara,
        fecha_rechazado,
        usuario,
        ROW_NUMBER() OVER (PARTITION BY folio_rechazado, Temporada ORDER BY id_rechazado) as rn
    FROM rechazados
    WHERE nombre_estado = 'R'
)
-- PRIMERA PARTE: TODOS los registros de existencias con su estado
SELECT
    CAST(eb.Temporada AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Temporada,
    CAST(eb.Camara AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Camara,
    -- Fecha sin hora
    CASE
        WHEN fr.folio_rechazado IS NOT NULL
        THEN CAST(CONVERT(varchar(10), DATEADD(HOUR, -3, fr.fecha_rechazado), 103) AS VARCHAR(30)) COLLATE Modern_Spanish_CI_AS

        WHEN v.Folio IS NOT NULL
        THEN CAST(CONVERT(varchar(10), DATEADD(HOUR, -3, v.createdAt), 103) AS VARCHAR(30)) COLLATE Modern_Spanish_CI_AS

        ELSE CAST(eb.Fecha_Estado AS VARCHAR(30)) COLLATE Modern_Spanish_CI_AS
    END AS Fecha_Estado,
    -- Nueva columna HORA
    CASE
        WHEN fr.folio_rechazado IS NOT NULL
        THEN CAST(CONVERT(varchar(8), DATEADD(HOUR, -3, fr.fecha_rechazado), 108) AS VARCHAR(8)) COLLATE Modern_Spanish_CI_AS

        WHEN v.Folio IS NOT NULL
        THEN CAST(CONVERT(varchar(8), DATEADD(HOUR, -3, v.createdAt), 108) AS VARCHAR(8)) COLLATE Modern_Spanish_CI_AS

        ELSE NULL
    END AS Hora,
    CAST(eb.Packing AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS Packing,
    CAST(eb.Folio AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Folio,
    CAST(eb.Productor AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Productor,
    CAST(eb.CSG AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS CSG,
    CAST(eb.Cuartel AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS Cuartel,
    CAST(eb.Variedad AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Variedad,
    CAST(eb.Embalaje AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS Embalaje,
    CAST(eb.Etiqueta AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Etiqueta,
    CAST(eb.Calibre AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS Calibre,
    CAST(eb.Categoria AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS Categoria,
    eb.Cajas,
    CAST(eb.Proceso AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS Proceso,
    CAST(eb.Especie AS NVARCHAR(30)) COLLATE Modern_Spanish_CI_AS AS Especie,
    CASE
        WHEN v.Folio IS NOT NULL AND LEFT(CAST(eb.Folio AS VARCHAR(20)), 5) like '00700%' THEN 'Repa Validado'
        WHEN fr.folio_rechazado IS NOT NULL THEN 'Rechazado'
        WHEN v.Folio IS NOT NULL THEN 'Validado'
        ELSE 'En Existencia'
    END AS Estado,
    CASE
        WHEN fr.folio_rechazado IS NOT NULL THEN CAST(fr.usuario AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS
        WHEN v.Folio IS NOT NULL THEN CAST(v.usuario AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS
        ELSE NULL
    END AS Usuario
FROM existencias_base eb
LEFT JOIN validaciones AS v
    ON CAST(eb.Folio AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS = CAST(v.Folio AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS
    AND eb.Temporada COLLATE Modern_Spanish_CI_AS = v.Temporada COLLATE Modern_Spanish_CI_AS
LEFT JOIN first_rechazados AS fr
    ON CAST(eb.Folio AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS = CAST(fr.folio_rechazado AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS
    AND eb.Temporada COLLATE Modern_Spanish_CI_AS = fr.Temporada COLLATE Modern_Spanish_CI_AS
    AND fr.rn = 1

UNION ALL

-- SEGUNDA PARTE: Solo validaciones que NO están en existencias (de su misma temporada)
SELECT
    CAST(v.Temporada AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Temporada,
    CAST(v.Camara AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Camara,
    CAST(CONVERT(varchar(10), DATEADD(HOUR, -3, v.createdAt), 103) AS VARCHAR(30)) COLLATE Modern_Spanish_CI_AS AS Fecha_Estado,
    CAST(CONVERT(varchar(8), DATEADD(HOUR, -3, v.createdAt), 108) AS VARCHAR(8)) COLLATE Modern_Spanish_CI_AS AS Hora,
    CAST(NULL AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS Packing,
    CAST(v.Folio AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Folio,
    CAST(NULL AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Productor,
    CAST(NULL AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS CSG,
    CAST(NULL AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS Cuartel,
    CAST(NULL AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Variedad,
    CAST(NULL AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS Embalaje,
    CAST(NULL AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Etiqueta,
    CAST(NULL AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS Calibre,
    CAST(NULL AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS Categoria,
    v.Cajas,
    CAST(NULL AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS Proceso,
    CAST(v.Especie AS NVARCHAR(30)) COLLATE Modern_Spanish_CI_AS AS Especie,
    CASE
        WHEN LEFT(CAST(v.Folio AS VARCHAR(20)), 5) LIKE '00700%' THEN 'Repa Validado'
        ELSE 'Validado'
    END AS Estado,
    CAST(v.usuario AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Usuario
FROM validaciones AS v
WHERE NOT EXISTS (
    SELECT 1
    FROM [192.168.1.3].Erpfrusys.dbo.EXISTENCIA AS e
    LEFT JOIN [192.168.1.3].Erpfrusys.dbo.MIXEXISTENCIA AS m
        ON e.LOTE = m.LOTE
        AND e.COD_EMP = m.COD_EMP
        AND e.COD_TEM = m.COD_TEM
    WHERE e.COD_EMP = 'MER'
      AND e.COD_TEM IN ('9', '10')
      AND e.COD_TEM COLLATE Modern_Spanish_CI_AS = v.Temporada COLLATE Modern_Spanish_CI_AS
      AND CAST(e.LOTE AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS = CAST(v.Folio AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS
)

UNION ALL

-- TERCERA PARTE: Solo rechazados que NO están en existencias (de su misma temporada)
SELECT
    CAST(r.Temporada AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Temporada,
    CAST(r.camara AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Camara,
    CAST(CONVERT(varchar(10), DATEADD(HOUR, -3, r.fecha_rechazado), 103) AS VARCHAR(30)) COLLATE Modern_Spanish_CI_AS AS Fecha_Estado,
    CAST(CONVERT(varchar(8), DATEADD(HOUR, -3, r.fecha_rechazado), 108) AS VARCHAR(8)) COLLATE Modern_Spanish_CI_AS AS Hora,
    CAST(NULL AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS Packing,
    CAST(r.folio_rechazado AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Folio,
    CAST(NULL AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Productor,
    CAST(NULL AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS CSG,
    CAST(NULL AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS Cuartel,
    CAST(NULL AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Variedad,
    CAST(NULL AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS Embalaje,
    CAST(NULL AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Etiqueta,
    CAST(NULL AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS Calibre,
    CAST(NULL AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS Categoria,
    ISNULL(r.cajas, 0) AS Cajas,
    CAST(NULL AS NVARCHAR(50)) COLLATE Modern_Spanish_CI_AS AS Proceso,
    CAST(r.especie AS NVARCHAR(30)) COLLATE Modern_Spanish_CI_AS AS Especie,
    'Rechazado' AS Estado,
    CAST(r.usuario AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS AS Usuario
FROM rechazados AS r
WHERE r.nombre_estado = 'R'
  AND r.id_rechazado = (
    SELECT MIN(r2.id_rechazado)
    FROM rechazados AS r2
    WHERE r2.folio_rechazado = r.folio_rechazado
    AND r2.Temporada = r.Temporada
    AND r2.nombre_estado = 'R'
  )
  AND NOT EXISTS (
    SELECT 1
    FROM [192.168.1.3].Erpfrusys.dbo.EXISTENCIA AS e
    LEFT JOIN [192.168.1.3].Erpfrusys.dbo.MIXEXISTENCIA AS m
        ON e.LOTE = m.LOTE
        AND e.COD_EMP = m.COD_EMP
        AND e.COD_TEM = m.COD_TEM
    WHERE e.COD_EMP = 'MER'
      AND e.COD_TEM IN ('9', '10')
      AND e.COD_TEM COLLATE Modern_Spanish_CI_AS = r.Temporada COLLATE Modern_Spanish_CI_AS
      AND CAST(e.LOTE AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS = CAST(r.folio_rechazado AS NVARCHAR(100)) COLLATE Modern_Spanish_CI_AS
  )
GO
