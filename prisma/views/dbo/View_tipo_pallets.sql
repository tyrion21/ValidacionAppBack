SELECT
  [Numero de Pallet],
  [Nombre de Especie],
  SUM([Cantidad de Cajas]) AS cajas,
  [Codigo de Envase Operacional],
  CASE
    WHEN SUM([Cantidad de Cajas]) < (
      SELECT
        TOP (1) CPL_ENV
      FROM
        Erpfrusys.dbo.ENVASEOPERACIONAL AS op
      WHERE
        (COD_ENVOP = e.[Codigo de Envase Operacional])
    ) THEN 'S'
    ELSE 'P'
  END AS tipo_pal,
  SUM([Cantidad de Cajas]) / (
    SELECT
      TOP (1) CPL_ENV
    FROM
      Erpfrusys.dbo.ENVASEOPERACIONAL AS op
    WHERE
      (COD_ENVOP = e.[Codigo de Envase Operacional])
  ) AS fp
FROM
  Erpfrusys.dbo.viewReportesDeExistencia AS e
WHERE
  (Empresa = 'mer')
GROUP BY
  [Numero de Pallet],
  [Nombre de Especie],
  [Codigo de Envase Operacional];