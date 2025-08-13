SELECT
  cl.GUIA_CAMBIO,
  cl.LOTE_ANTIGUO,
  cl.LOTE_NUEVO,
  cl.COD_PRO,
  e.NOM_ESP,
  v.NOM_VAR,
  p.NOM_PRO,
  pe.COD_EXP,
  ex.NOM_EXP,
  CONVERT(varchar(10), cl.FECHA_RPA, 103) AS fecha,
  cl.CAJAS,
  cl.COD_CAL,
  cl.COD_CAT,
  cl.FECHA_CAMBIO,
  cl.COD_TEM
FROM
  Erpfrusys.dbo.CAMBIOLOTE AS cl
  JOIN Erpfrusys.dbo.ESPECIE AS e ON cl.COD_ESP = e.COD_ESP
  AND cl.COD_TEM = e.COD_TEM
  AND cl.COD_EMP = e.COD_EMP
  JOIN Erpfrusys.dbo.VARIEDAD AS v ON e.COD_ESP = v.COD_ESP
  AND e.COD_TEM = v.COD_TEM
  AND e.COD_EMP = v.COD_EMP
  JOIN Erpfrusys.dbo.PRODUCTORES AS p ON cl.COD_EMP = p.COD_EMP
  AND cl.COD_TEM = p.COD_TEM
  AND cl.COD_PRO = p.COD_PRO
  JOIN Erpfrusys.dbo.PRODUCTOR_X_EXPORTADOR AS pe ON p.COD_EMP = pe.COD_EMP
  AND p.COD_TEM = pe.COD_TEM
  AND p.COD_PRO = pe.COD_PRO
  JOIN Erpfrusys.dbo.EXPORTADORES AS ex ON pe.COD_EXP = ex.COD_EXP
  AND pe.COD_TEM = ex.COD_TEM
  AND pe.COD_EMP = ex.COD_EMP
WHERE
  (cl.COD_EMP = 'mer');