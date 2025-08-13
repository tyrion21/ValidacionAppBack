SELECT
  e.COD_ESP,
  e.NOM_ESP,
  c.COD_CAL,
  c.DESCRIPCION AS NOM_Calibre
FROM
  Erpfrusys.dbo.ESPECIE AS e
  JOIN Erpfrusys.dbo.CALIBRES AS c ON e.COD_ESP = c.COD_ESP
  AND e.COD_TEM = c.COD_TEM
  AND e.COD_EMP = c.COD_EMP
WHERE
  (e.COD_EMP = 'mer');