SELECT
  csd.COD_TEM AS Temporada,
  csd.COD_EMP AS Empresa,
  csd.PLANILLA AS Planilla,
  cps.DESCRIPCION AS Segregacion,
  ctd.DESCRIPCION AS Parametro,
  csd.VALOR AS Valor
FROM
  Erpfrusys.dbo.CTRL_SEG_DATOS AS csd
  LEFT JOIN Erpfrusys.dbo.CTRL_TIPO_SEGREGACION AS ctd ON csd.COD_TEM = ctd.COD_TEM
  AND csd.COD_EMP = ctd.COD_EMP
  AND csd.COD_TIPO_SEG = ctd.COD_TIPO_SEG
  LEFT JOIN Erpfrusys.dbo.CTRL_PERIODO_SEGREGACION AS cps ON csd.COD_TEM = cps.COD_TEM
  AND csd.COD_EMP = cps.COD_EMP
  AND csd.COD_PERIODO_SEG = cps.COD_PERIODO_SEG
WHERE
  csd.COD_TEM = 7;