SELECT
  p.COD_EMP AS Empresa,
  p.COD_PRO,
  p.NOM_PRO,
  pr.COD_PRE,
  pr.DESCRIPCION,
  c.COD_CUA,
  esp.NOM_ESP,
  c.DESCRIPCION AS Cuartel,
  p.FAX AS GGN,
  (
    SELECT
      MAX(COD_INSCRIPCION) AS Expr1
    FROM
      Erpfrusys.dbo.PREDIOS_INSPECCION AS pi
    WHERE
      (c.COD_EMP = COD_EMP)
      AND (c.COD_TEM = COD_TEM)
      AND (c.COD_CUA = COD_CUA)
  ) AS sdp,
  p.COD_TEM,
  CONVERT(varchar, p.RUT_PRO) + '-' + p.DV AS rut_productor,
  pr.DIRECCION,
  pv.DESCRIPCION AS n_provincia,
  com.DESCRIPCION AS n_comuna,
  pr.REGION AS n_region,
  e1.NOM_EXP AS Exportadora,
  pr.COD_PROVC,
  pr.COD_COM
FROM
  Erpfrusys.dbo.PRODUCTORES AS p
  LEFT JOIN Erpfrusys.dbo.PREDIOS AS pr ON p.COD_PRO = pr.COD_PRO
  AND p.COD_EMP = pr.COD_EMP
  AND p.COD_TEM = pr.COD_TEM
  LEFT JOIN Erpfrusys.dbo.CUARTELES AS c ON c.COD_TEM = pr.COD_TEM
  AND c.COD_PRO = pr.COD_PRO
  AND c.COD_PRE = pr.COD_PRE
  AND c.COD_EMP = pr.COD_EMP
  LEFT JOIN Erpfrusys.dbo.ESPECIE AS esp ON c.COD_ESP = esp.COD_ESP
  AND c.COD_TEM = esp.COD_TEM
  AND c.COD_EMP = esp.COD_EMP
  LEFT JOIN Erpfrusys.dbo.PREDIOS_INSPECCION AS pi ON pi.COD_CUA = c.COD_CUA
  AND pi.COD_EMP = c.COD_EMP
  AND pi.COD_TEM = c.COD_TEM
  LEFT JOIN Erpfrusys.dbo.PROVINCIAS AS pv ON pr.COD_PROVC = pv.COD_PROVC
  AND pv.COD_EMP = pr.COD_EMP
  AND pr.COD_TEM = pv.COD_TEM
  LEFT JOIN Erpfrusys.dbo.COMUNAS AS com ON com.COD_EMP = pr.COD_EMP
  AND com.COD_TEM = pr.COD_TEM
  AND pr.COD_COM = com.COD_COM
  LEFT JOIN Erpfrusys.dbo.PRODUCTOR_X_EXPORTADOR AS e ON e.COD_EMP = p.COD_EMP
  AND e.COD_TEM = p.COD_TEM
  AND e.COD_PRO = p.COD_PRO
  LEFT JOIN Erpfrusys.dbo.EXPORTADORES AS e1 ON e.COD_EMP = e1.COD_EMP
  AND e.COD_TEM = e1.COD_TEM
  AND e.COD_EXP = e1.COD_EXP
WHERE
  (p.COD_EMP = 'MER')
  AND p.COD_TEM IN (7)
UNION
ALL
SELECT
  p.COD_EMP AS Empresa,
  p.COD_PRO,
  p.NOM_PRO,
  pr.COD_PRE,
  pr.DESCRIPCION,
  c.COD_CUA,
  esp.NOM_ESP,
  c.DESCRIPCION AS Cuartel,
  p.FAX AS GGN,
  (
    SELECT
      MAX(COD_INSCRIPCION) AS Expr1
    FROM
      Erpfrusys.dbo.PREDIOS_INSPECCION AS pi
    WHERE
      (c.COD_EMP = COD_EMP)
      AND (c.COD_TEM = COD_TEM)
      AND (c.COD_CUA = COD_CUA)
  ) AS sdp,
  p.COD_TEM,
  CONVERT(varchar, p.RUT_PRO) + '-' + p.DV AS rut_productor,
  pr.DIRECCION,
  pv.DESCRIPCION AS n_provincia,
  com.DESCRIPCION AS n_comuna,
  pr.REGION AS n_region,
  e1.NOM_EXP AS Exportadora,
  pr.COD_PROVC,
  pr.COD_COM
FROM
  [192.168.1.104].erpfrusys.dbo.PRODUCTORES AS p
  LEFT JOIN [192.168.1.104].erpfrusys.dbo.PREDIOS AS pr ON p.COD_PRO = pr.COD_PRO
  AND p.COD_EMP = pr.COD_EMP
  AND p.COD_TEM = pr.COD_TEM
  LEFT JOIN [192.168.1.104].erpfrusys.dbo.CUARTELES AS c ON c.COD_TEM = pr.COD_TEM
  AND c.COD_PRO = pr.COD_PRO
  AND c.COD_PRE = pr.COD_PRE
  AND c.COD_EMP = pr.COD_EMP
  LEFT JOIN [192.168.1.104].erpfrusys.dbo.ESPECIE AS esp ON c.COD_ESP = esp.COD_ESP
  AND c.COD_TEM = esp.COD_TEM
  AND c.COD_EMP = esp.COD_EMP
  LEFT JOIN [192.168.1.104].erpfrusys.dbo.PREDIOS_INSPECCION AS pi ON pi.COD_CUA = c.COD_CUA
  AND pi.COD_EMP = c.COD_EMP
  AND pi.COD_TEM = c.COD_TEM
  LEFT JOIN [192.168.1.104].erpfrusys.dbo.PROVINCIAS AS pv ON pr.COD_PROVC = pv.COD_PROVC
  AND pv.COD_EMP = pr.COD_EMP
  AND pr.COD_TEM = pv.COD_TEM
  LEFT JOIN [192.168.1.104].erpfrusys.dbo.COMUNAS AS com ON com.COD_EMP = pr.COD_EMP
  AND com.COD_TEM = pr.COD_TEM
  AND pr.COD_COM = com.COD_COM
  LEFT JOIN [192.168.1.104].erpfrusys.dbo.PRODUCTOR_X_EXPORTADOR AS e ON e.COD_EMP = p.COD_EMP
  AND e.COD_TEM = p.COD_TEM
  AND e.COD_PRO = p.COD_PRO
  LEFT JOIN [192.168.1.104].erpfrusys.dbo.EXPORTADORES AS e1 ON e.COD_EMP = e1.COD_EMP
  AND e.COD_TEM = e1.COD_TEM
  AND e.COD_EXP = e1.COD_EXP
WHERE
  (p.COD_EMP = 'QUE')
  AND p.COD_TEM IN (7);