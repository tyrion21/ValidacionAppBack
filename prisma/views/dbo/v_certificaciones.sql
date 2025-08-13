SELECT
  e.NOM_EXP,
  c.productor,
  p.NOM_PRO,
  c.ggn,
  c.fecha_emision,
  c.fecha_caducidad,
  c.vigencia,
  c.especie,
  c.mercados
FROM
  consultas.dbo.certificacion AS c
  LEFT JOIN Erpfrusys.dbo.EXPORTADORES AS e ON e.COD_EXP = c.exportadora
  AND e.COD_TEM = 7
  LEFT JOIN Erpfrusys.dbo.PRODUCTORES AS p ON p.COD_PRO = LEFT(c.productor, CHARINDEX('-', c.productor) - 1)
  AND p.COD_TEM = 7;