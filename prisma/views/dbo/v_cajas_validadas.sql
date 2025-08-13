SELECT
  v.Especie,
  CONVERT(varchar, v.createdAt, 103) AS Fecha_packing,
  v.Folio,
  v.Cajas,
  v.Camara
FROM
  validaciones AS v;