SELECT
  ec.Folio,
  ec.Especie,
  CONVERT(varchar, ec.Fecha_packing, 103) AS Fecha_packing,
  ec.Cajas,
  CASE
    ec.LINEA
    WHEN '8' THEN 'PALETIZADO 8 TENO'
    WHEN '9' THEN 'PALETIZADO 9 TENO'
    WHEN '10' THEN 'PALETIZADO 10 TENO'
    ELSE LINEA
  END AS LINEA
FROM
  [192.168.1.3].consultas.dbo.existencias_cajas AS ec;