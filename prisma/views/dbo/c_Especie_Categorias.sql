SELECT
  e.COD_ESP,
  e.NOM_ESP,
  c.COD_CAT,
  c.NOM_CAT
FROM
  Erpfrusys.dbo.ESPECIE AS e
  JOIN Erpfrusys.dbo.CATEGORIA AS c ON e.COD_ESP = c.COD_ESP
  AND e.COD_TEM = c.COD_TEM
  AND e.COD_EMP = c.COD_EMP
WHERE
  (e.COD_EMP = 'mer');