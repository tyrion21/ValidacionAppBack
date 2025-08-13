SELECT
  CASE
    WHEN tipofru = 'E'
    AND t_proceso = 'PreProceso' THEN 'Salidas de PreProceso (AP)'
    ELSE 'Ingreso a Proceso'
  END AS tipo,
  *,
  '' AS n_etiqueta
FROM
  dbo.v_procesos_entradas
WHERE
  cod_esp = '3'
  AND cod_pro <> 'QL055'
UNION
ALL
SELECT
  'Salidas de Proceso GR' AS tipo,
  *,
  '' AS n_etiqueta
FROM
  dbo.v_procesos_salidas_comercial
WHERE
  cod_esp = '3'
  AND cod_pro <> 'QL055'
UNION
ALL
SELECT
  'Salidas de Proceso' AS tipo,
  *
FROM
  dbo.v_procesos_salidas_embalado
WHERE
  cod_esp = '3'
  AND cod_pro <> 'QL055';