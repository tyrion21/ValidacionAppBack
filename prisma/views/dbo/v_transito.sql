SELECT
  e1.id_tipo,
  e1.fecha_hora,
  e1.patente,
  e1.n_guia,
  e1.tipo_camion,
  e2.fecha_hora AS fh_ep,
  e5.fecha_hora AS ini_descarga,
  e3.fecha_hora AS fh_descarga,
  e4.fecha_hora AS fh_salida,
  e1.id,
  e1.des_camion,
  DATEDIFF(MINUTE, e1.fecha_hora, e3.fecha_hora) AS time_descarga,
  e18.fecha_hora AS fh_registro
FROM
  dbo.camion_porteria AS e1
  LEFT JOIN dbo.camion_porteria AS e5 ON e1.patente = e5.patente
  AND e1.n_guia = e5.n_guia
  AND e5.id_tipo = 5
  LEFT JOIN dbo.camion_porteria AS e2 ON e1.patente = e2.patente
  AND e1.n_guia = e2.n_guia
  AND e2.id_tipo = 4
  LEFT JOIN dbo.camion_porteria AS e3 ON e1.patente = e3.patente
  AND e1.n_guia = e3.n_guia
  AND e3.id_tipo = 2
  LEFT JOIN dbo.camion_porteria AS e4 ON e1.patente = e4.patente
  AND e1.n_guia = e4.n_guia
  AND e4.id_tipo = 3
  LEFT JOIN dbo.camion_porteria AS e18 ON e1.patente = e18.patente
  AND e1.n_guia = e18.n_guia
  AND e18.id_tipo = 18
WHERE
  (e1.id_tipo = 1);