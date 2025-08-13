SELECT
  cua.COD_EMP,
  cua.COD_TEM,
  cua.COD_PRO,
  cua.COD_PRE,
  cua.COD_CUA,
  cua.DESCRIPCION AS n_cuartel,
  cua.ASOCIADO_SUELO,
  cua.COD_ESP,
  cua.COD_VAR,
  cua.HAS,
  cua.DIST1,
  cua.DIST2,
  cua.FECHA_COS,
  cua.PLANTAS,
  cua.ANO_PLAN,
  cua.TIPO_CUARTEL,
  cua.USO_MAQ,
  cua.SUBCENTRO_COSTO,
  cua.COD_EMP_CONT,
  cua.COD_CENTROCOSTO,
  cua.COD_SUBCENTRO,
  cua.FACTOR_MOJAMIENTO,
  cua.COD_TIP_SEC,
  cua.COD_TIP_PRI,
  cua.RUT_RESP,
  cua.COD_CAB,
  cua.SW_ETAPA_INV,
  cua.TIPO_RIEGO,
  cua.RUT_RESP1,
  cua.COD_TIP_PRI1,
  cua.COD_TIP_SEC1,
  cua.COD_GRP_CUA,
  cua.ZON,
  cua.COD_CUENTA,
  cua.COD_GRP_SEC,
  cua.COD_RIEGO,
  cua.COD_CICLO,
  cua.COD_NIVEL,
  cua.KILOS_FER,
  cua.COD_GRP_SEC_MAT,
  cua.HILERAS,
  cua.USO_MAQ_SD,
  cua.SDP,
  cua.SW_DISTRIB,
  cua.SW_COSTO_PACK,
  cua.SW_COSTO_FRIO,
  cua.ACTIVO,
  cua.COD_CSG,
  cua.COD_EMP_GESTION,
  cua.COD_ETA,
  pre.DESCRIPCION AS n_predio,
  pro.NOM_PRO AS n_productor,
  (
    SELECT
      TOP (1) NOM_ESP
    FROM
      Erpfrusys.dbo.ESPECIE
    WHERE
      (COD_ESP = cua.COD_ESP)
  ) AS n_especie,
  v.NOM_VAR AS n_variedad,
  (
    SELECT
      MAX(COD_INSCRIPCION) AS Expr1
    FROM
      Erpfrusys.dbo.PREDIOS_INSPECCION AS pi
    WHERE
      (COD_PRO = cua.COD_PRO)
      AND (COD_PRE = cua.COD_PRE)
      AND (COD_CUA = cua.COD_CUA)
      AND (COD_TEM = cua.COD_TEM)
  ) AS SDP_cuartel
FROM
  Erpfrusys.dbo.CUARTELES AS cua
  JOIN erpfrusys.dbo.VARIEDAD AS v ON v.COD_VAR = cua.COD_VAR
  AND v.COD_TEM = cua.cod_tem
  AND v.COD_EMP = cua.COD_EMP
  JOIN Erpfrusys.dbo.PRODUCTORES AS pro ON cua.COD_PRO = pro.COD_PRO
  AND cua.COD_TEM = pro.COD_TEM
  AND pro.COD_EMP = cua.COD_EMP
  JOIN Erpfrusys.dbo.PREDIOS AS pre ON cua.COD_PRE = pre.COD_PRE
  AND cua.COD_PRO = pre.COD_PRO
  AND cua.COD_TEM = pre.COD_TEM
  AND pre.COD_EMP = cua.COD_EMP;