SELECT
  CP.COD_TEM,
  cp.COD_PRES_SOL,
  cp.DESCRIPCION,
  e.NOM_ESP,
  cps.PLANILLA,
  cps.ROW,
  cps.VALOR,
  cps.PROMEDIO,
  cps.SOLIDOS_SOLUBLES,
  cps.TAMANO,
  cps.ORDEN_SOLIDO_SOLUBLE,
  cps.ALMIDON,
  cps.COD_CAL
FROM
  Erpfrusys.dbo.CTRL_PRESIONES AS cp
  LEFT JOIN Erpfrusys.dbo.CTRL_PRES_SOLIDOS AS cps ON cp.COD_EMP = cps.COD_EMP
  AND cp.COD_TEM = cps.COD_TEM
  AND cp.ZON = cps.ZON
  AND cp.COD_PRES_SOL = cps.COD_PRES_SOL
  LEFT JOIN Erpfrusys.dbo.ESPECIE AS e ON cp.COD_ESP = e.COD_ESP
  AND cp.COD_TEM = e.COD_TEM
WHERE
  cp.COD_TEM = '7'
  AND cp.COD_ESP IN ('3', '5', '11', '43');