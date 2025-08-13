SELECT
  envop.COD_ENVOP,
  envop.COD_ENVOP AS envop,
  NULL AS filler1,
  uenv.CNT_ID,
  uemb.IMB_ID,
  ues.SPE_ID,
  NULL AS clase,
  NULL AS Expr1,
  NULL AS Expr2,
  NULL AS Expr3,
  envop.PESO_NETO,
  (envop.PESO_BRUTO - envop.PESO_NETO) * 1000 AS tara,
  envop.PESO_MAQUINA,
  envop.COD_ENVOP AS envop2,
  NULL AS Expr4,
  genv.DESCRIPCION AS familia,
  NULL AS Expr5,
  NULL AS Expr6,
  1 AS activo,
  NULL AS Expr7,
  NULL AS Expr8,
  NULL AS Expr9,
  envop.COD_EMP,
  envop.COD_TEM,
  NULL AS Expr10,
  NULL AS Expr11,
  NULL AS Expr12,
  NULL AS Expr13
FROM
  Erpfrusys.dbo.ENVASEOPERACIONAL AS envop
  LEFT JOIN UNITEC.UNITEC_DB_SDT.DBO.ANA_Specie AS ues ON envop.COD_ESP = ues.SPE_Codice_Specie COLLATE SQL_Latin1_General_CP1_CI_as
  AND envop.COD_TEM = ues.SPE_CODICE_STAGIONE COLLATE SQL_Latin1_General_CP1_CI_as
  LEFT JOIN UNITEC.UNITEC_DB_SDT.dbo.ANA_Contenitore AS uenv ON envop.COD_ENV = uenv.CNT_Codice_Contenitore COLLATE SQL_Latin1_General_CP1_CI_as
  AND envop.COD_TEM = uenv.CNT_CODICE_STAGIONE COLLATE SQL_Latin1_General_CP1_CI_as
  LEFT JOIN Erpfrusys.dbo.GRUPOSENVASEOPERACIONAL AS genv ON envop.COD_GRP_ENVOP = genv.COD_GRP_ENVOP
  AND genv.COD_TEM = envop.COD_TEM
  AND envop.COD_EMP = genv.COD_EMP
  LEFT JOIN UNITEC.UNITEC_DB_SDT.dbo.ANA_Imballaggio AS uemb ON envop.COD_EMB = uemb.IMB_Codice_Imballaggio COLLATE SQL_Latin1_General_CP1_CI_as
WHERE
  (
    envop.COD_ESP IN ('10', '11', '40', '41', '42', '43')
  )
  AND (envop.COD_TEM = '5');