SELECT
  cal.COD_CAL,
  cal.COD_CAL AS classe,
  NULL AS filler1,
  NULL AS filler2,
  cal.COD_CAL AS cal_et,
  NULL AS filler3,
  u_esp.SPE_ID,
  NULL AS Expr1,
  NULL AS filler4,
  NULL AS filler5,
  NULL AS filler6,
  'True' AS activo,
  NULL AS filler7,
  cal.COD_EMP,
  cal.COD_TEM
FROM
  Erpfrusys.dbo.CALIBRES AS cal
  LEFT JOIN UNITEC.UNITEC_DB_SDT.dbo.ANA_Specie AS u_esp ON u_esp.SPE_Codice_Specie = cal.COD_ESP COLLATE SQL_Latin1_General_CP1_CI_AS
WHERE
  (cal.COD_TEM = '5')
  AND (cal.COD_EMP = 'mer')
  AND (cal.COD_ESP IN ('10', '40', '41', '42', '43'));