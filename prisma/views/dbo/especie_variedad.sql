SELECT
  DISTINCT a.COD_VAR,
  a.COD_ESP,
  a.NOM_VAR,
  b.NOM_ESP
FROM
  Erpfrusys.dbo.VARIEDAD AS a
  JOIN Erpfrusys.dbo.ESPECIE AS b ON a.COD_ESP = b.COD_ESP
WHERE
  (a.COD_EMP = 'mer')
  AND (a.COD_TEM = '5');