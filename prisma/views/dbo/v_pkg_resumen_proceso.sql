SELECT
  COD_EMP,
  COD_TEM,
  PLANILLA,
  fecha_proceso,
  c_linea,
  c_turno,
  n_exportadora,
  n_productor,
  NOM_VAR,
  NOM_ESP,
  SUM(Ingreso_ap) AS ingreso_ap,
  SUM(embalado) AS embalado,
  SUM(embalado) / (
    CASE
      WHEN SUM(Ingreso_ap) > 1 THEN SUM(Ingreso_ap)
      ELSE 1
    END
  ) AS exportable,
  SUM(mi_des) AS mi_des,
  SUM(Ingreso_ap) - (SUM(embalado) + SUM(mi_des)) AS merma,
  (SUM(Ingreso_ap) - (SUM(embalado) + SUM(mi_des))) / (
    CASE
      WHEN SUM(Ingreso_ap) > 1 THEN SUM(Ingreso_ap)
      ELSE 1
    END
  ) AS p_merma,
  CONVERT(varchar, fecha_proceso, 103) AS fecha_p
FROM
  (
    SELECT
      COD_EMP,
      COD_TEM,
      PLANILLA,
      fecha_proceso,
      c_linea,
      c_turno,
      n_exportadora,
      n_productor,
      NOM_VAR,
      NOM_ESP,
      CASE
        WHEN tipo = 'Ingreso a Proceso' THEN peso_neto_real
        ELSE 0
      END AS Ingreso_ap,
      CASE
        WHEN tipo = 'Salidas de Proceso' THEN peso_neto_real
        ELSE 0
      END AS embalado,
      CASE
        WHEN tipo = 'Salidas de Proceso GR' THEN peso_neto_real
        ELSE 0
      END AS mi_des
    FROM
      dbo.V_PKG_PRODUCCION_COMPLETO_GRUPADO
  ) AS resumen
GROUP BY
  COD_EMP,
  COD_TEM,
  PLANILLA,
  fecha_proceso,
  c_linea,
  c_turno,
  n_exportadora,
  n_productor,
  NOM_VAR,
  NOM_ESP;