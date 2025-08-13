SELECT
  p.COD_PRO,
  p.NOM_PRO,
  e.COD_EXP,
  e.NOM_EXP
FROM
  Erpfrusys.dbo.PRODUCTOR_X_EXPORTADOR AS pe
  JOIN Erpfrusys.dbo.PRODUCTORES AS p ON pe.COD_EMP = p.COD_EMP
  AND pe.COD_TEM = p.COD_TEM
  AND pe.COD_PRO = p.COD_PRO
  JOIN Erpfrusys.dbo.EXPORTADORES AS e ON pe.COD_EXP = e.COD_EXP
  AND pe.COD_TEM = e.COD_TEM
  AND pe.COD_EMP = e.COD_EMP
WHERE
  (pe.COD_EMP = 'mer')
  AND (pe.COD_TEM = '7');