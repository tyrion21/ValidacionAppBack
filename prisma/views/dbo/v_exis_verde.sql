SELECT
  TOP (100) PERCENT e.COD_EMP,
  e.COD_TEM,
  e.ZON,
  e.LOTE,
  e.PLANILLA,
  e.FECHA_RPA,
  CONVERT(varchar, e.FECHA_RPA, 103) AS fecha,
  e.COD_PACK,
  e.COD_PRO,
  e.COD_FRI,
  e.COD_ESP,
  e.COD_VAR,
  e.COD_CAL,
  e.HORA_REC,
  e.COD_ENV,
  e.CANTIDAD,
  e.KILOS,
  e.TIPOFRU,
  e.T_PROCESO,
  e.COD_JORNADA,
  e.GUIA,
  e.VALOR,
  e.VENT_KILOS,
  e.COD_CALIDAD,
  e.COD_PRE,
  e.COD_CUA,
  e.TOTAL_KILOS,
  e.COD_CAM,
  e.COD_BANDA,
  e.FILA,
  e.PISO,
  e.COD_TIPO_TRA,
  e.CANT_ENV_CONT,
  e.NRO_MIX,
  CONVERT(varchar, e.FECHA_RPA, 103) AS Expr1,
  CONVERT(varchar, e.HORA_REC, 114) AS hora,
  (
    SELECT
      NOM_VAR
    FROM
      Erpfrusys.dbo.VARIEDAD
    WHERE
      (COD_EMP = e.COD_EMP)
      AND (COD_TEM = e.COD_TEM)
      AND (e.COD_VAR = COD_VAR)
  ) AS n_variedad,
  ISNULL(dbo.v_desverdizado.pro_nro, 0) AS PROCESO,
  ISNULL(dbo.v_desverdizado.fec_ini, NULL) AS fec_ini,
  ISNULL(dbo.v_desverdizado.fec_fin, N'01-01-1900') AS fec_fin,
  ISNULL(dbo.v_desverdizado.fec_ven, '01-01-1900') AS fec_ven,
  dbo.v_desverdizado.pro_nro
FROM
  Erpfrusys.dbo.EXISPACK AS e
  LEFT JOIN dbo.v_desverdizado ON e.LOTE = dbo.v_desverdizado.folio
WHERE
  (
    e.COD_CALIDAD = 'ad'
    OR e.COD_CALIDAD = 'AP5'
    OR e.COD_CALIDAD = 'AP6'
    OR e.COD_CALIDAD = 'AP10'
    OR e.COD_CALIDAD = 'vl'
  )
  AND (e.COD_EMP = 'mer')
  OR (e.COD_EMP = 'mer')
  AND (e.COD_CAL = 'dv')
ORDER BY
  dbo.v_desverdizado.n_Variedad,
  e.COD_CAL,
  e.FECHA_RPA;