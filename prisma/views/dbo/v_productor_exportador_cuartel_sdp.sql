SELECT
  pro.COD_PRO,
  pro.NOM_PRO,
  ex.COD_EXP,
  ex.NOM_EXP,
  cu.COD_PRE,
  cu.COD_CUA,
  cu.DESCRIPCION,
  cu.COD_ESP,
  cu.COD_VAR,
  (
    SELECT
      MAX(COD_INSCRIPCION) AS Expr1
    FROM
      Erpfrusys.dbo.PREDIOS_INSPECCION AS pi
    WHERE
      (COD_PRO = cu.COD_PRO)
      AND (cu.COD_PRE = COD_PRE)
      AND (cu.COD_EMP = COD_EMP)
      AND (cu.COD_TEM = COD_TEM)
      AND (cu.COD_CUA = COD_CUA)
  ) AS SDP,
  cu.COD_EMP,
  cu.COD_TEM
FROM
  Erpfrusys.dbo.CUARTELES AS cu
  JOIN Erpfrusys.dbo.PREDIOS AS pre ON cu.COD_EMP = pre.COD_EMP
  AND cu.COD_TEM = pre.COD_TEM
  AND cu.COD_PRO = pre.COD_PRO
  AND cu.COD_PRE = pre.COD_PRE
  JOIN Erpfrusys.dbo.PRODUCTORES AS pro ON pre.COD_EMP = pro.COD_EMP
  AND pre.COD_TEM = pro.COD_TEM
  AND pre.COD_PRO = pro.COD_PRO
  JOIN Erpfrusys.dbo.PRODUCTOR_X_EXPORTADOR AS pe
  JOIN Erpfrusys.dbo.EXPORTADORES AS ex ON pe.COD_EXP = ex.COD_EXP
  AND pe.COD_TEM = ex.COD_TEM
  AND pe.COD_EMP = ex.COD_EMP;