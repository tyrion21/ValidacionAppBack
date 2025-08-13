SELECT
  DISTINCT id,
  e.NOM_EXP AS Exportadora,
  LEFT(c.productor, CHARINDEX('-', c.productor) - 1) AS COD_PRO,
  SUBSTRING(
    c.productor
    FROM
      CHARINDEX('-', c.productor) + 1 FOR LEN(c.productor)
  ) AS COD_PRE,
  p.NOM_PRO AS Productor,
  c.ggn AS GGN,
  c.fecha_emision AS Fecha_Emision,
  c.fecha_caducidad AS Fecha_Caducidad,
  vigencia AS Vigencia,
  especie AS Especie,
  mercados AS Mercados
FROM
  consultas.dbo.certificacion AS c
  LEFT JOIN Erpfrusys.dbo.EXPORTADORES AS e ON e.COD_EXP = c.exportadora
  AND e.COD_TEM = 7
  LEFT JOIN Erpfrusys.dbo.PRODUCTORES AS p ON p.cod_pro = LEFT(c.productor, CHARINDEX('-', c.productor) - 1)
  AND p.COD_TEM = '7';