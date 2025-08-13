SELECT
  DISTINCT (r.folio_rechazado),
  r.especie,
  CONVERT(varchar, r.fecha_rechazado, 103) AS Fecha_packing,
  r.cajas,
  r.camara
FROM
  rechazados AS r
WHERE
  r.nombre_estado = 'R';