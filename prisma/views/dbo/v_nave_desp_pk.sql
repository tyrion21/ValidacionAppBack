SELECT
  COD_EMP,
  COD_TEM,
  TIP_TRA,
  COD_SIT,
  NOM_SIT,
  SUM(CAJAS) AS CAJAS,
  CASE
    WHEN pk_original = 0 THEN planilla
    ELSE pk_original
  END AS pk_original,
  FECHA_DESP,
  NRO_CONT,
  COD_ENVOP,
  COD_CAL,
  COD_PRO,
  Pais_destino,
  COD_REC,
  COD_VAR,
  COD_ESP
FROM
  Erpfrusys.dbo.UNE_DESPACHOS_MIXTOS_NS AS dm
GROUP BY
  COD_EMP,
  COD_TEM,
  TIP_TRA,
  COD_SIT,
  NOM_SIT,
  CASE
    WHEN pk_original = 0 THEN planilla
    ELSE pk_original
  END,
  FECHA_DESP,
  NRO_CONT,
  COD_ENVOP,
  COD_CAL,
  COD_PRO,
  Pais_destino,
  COD_REC,
  COD_VAR,
  COD_ESP;