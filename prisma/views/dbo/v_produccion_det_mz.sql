SELECT
  CASE
    WHEN p.tipofru = 'E'
    AND p.t_proceso = 'PreProceso' THEN 'Salidas de PreProceso (AP)'
    ELSE 'Ingreso a Proceso'
  END AS tipo,
  p.*,
  '' AS n_etiqueta,
  0 AS Kilos_a_exportar,
  CASE
    WHEN t.planilla IS NOT NULL THEN 1
    ELSE 0
  END AS cierre_p
FROM
  dbo.v_procesos_entradas AS p
  LEFT JOIN erpfrusys.dbo.TIT_PROCEPACK_CIERRE AS t ON t.planilla = p.planilla
  AND t.cod_tem = p.cod_tem
  AND t.cod_emp = p.cod_emp
WHERE
  p.cod_tem = '5'
  AND p.cod_esp = '10'
UNION
ALL
SELECT
  'Salidas de Proceso GR' AS tipo,
  p.*,
  '' AS n_etiqueta,
  0 AS Kilos_a_exportar,
  CASE
    WHEN t.planilla IS NOT NULL THEN 1
    ELSE 0
  END AS cierre_p
FROM
  dbo.v_procesos_salidas_comercial AS p
  LEFT JOIN erpfrusys.dbo.TIT_PROCEPACK_CIERRE AS t ON t.planilla = p.planilla
  AND t.cod_tem = p.cod_tem
  AND t.cod_emp = p.cod_emp
WHERE
  p.cod_tem = '5'
  AND p.cod_esp = '10'
UNION
ALL
SELECT
  'Salidas de Proceso' AS tipo,
  p.*,
  p.total_kilos AS Kilos_a_exportar,
  CASE
    WHEN t.planilla IS NOT NULL THEN 1
    ELSE 0
  END AS cierre_p
FROM
  dbo.v_procesos_salidas_embalado AS p
  LEFT JOIN erpfrusys.dbo.TIT_PROCEPACK_CIERRE AS t ON t.planilla = p.planilla
  AND t.cod_tem = p.cod_tem
  AND t.cod_emp = p.cod_emp
WHERE
  p.cod_tem = '5'
  AND p.cod_esp = '10';