SELECT
  AB.PLANILLA AS [Planilla],
  RP.COD_TEM,
  RP.COD_EMP,
  RP.COD_PACK,
  RP.COD_PRO,
  RP.COD_FRI,
  RP.COD_ESP,
  RP.COD_VAR,
  RP.LOTE,
  RP.COD_ENV,
  RP.COD_ETI AS Etiqueta,
  RP.COD_EMB AS Embalaje,
  RP.COD_ENVOP,
  RP.PLU AS Plu,
  [Saldo Cajas] = AB.SALDOCAJAS,
  Cajas = RP.CAJAS,
  [Cajas Merma] = (AB.SALDOCAJAS - RP.CAJAS),
  RP.COD_CAT AS [Codigo Categoria],
  RP.COD_CAL AS [Codigo Calibre],
  AB.COD_TIP_BAJ,
  RP.COD_PRO_ETIQUETADO AS [Codigo Productor Etiquetado],
  RP.ZON,
  RP.FECHA_PAC
FROM
  ERPFRUSYS.DBO.Repaletizados_bj AS RP
  JOIN ERPFRUSYS.DBO.APORTE_BJ AS AB ON AB.LOTE = RP.LOTE
  AND AB.COD_EMP = RP.COD_EMP
  AND AB.COD_TEM = RP.COD_TEM
  AND AB.PLANILLA = RP.GUIA_REPA
WHERE
  nro_mix = 0
UNION
ALL
SELECT
  AB.PLANILLA AS [Numero Planilla],
  RPM.COD_TEM AS [Temporada],
  RPM.COD_EMP AS [Empresa],
  RPM.COD_PACK AS [Codigo Packing],
  RPM.COD_PRO AS [Codigo Productor Real],
  RPM.COD_FRI AS [Codigo Frio],
  RPM.COD_ESP AS [Codigo Especie],
  RPM.COD_VAR AS [Codigo Variedad],
  RPM.LOTE AS Pallet,
  RPM.COD_ENV AS Envase,
  RPM.COD_ETI AS Etiqueta,
  RPM.COD_EMB AS Embalaje,
  RPM.COD_ENVOP AS [Envase Operacional],
  RPM.PLU AS Plu,
  [Saldo Cajas] = AB.SALDOCAJAS,
  Cajas = RPM.CAJAS,
  [Cajas Merma] = (RPm.SALDOCAJAS - RPm.CAJAS),
  RPM.COD_CAT AS [Codigo Categoria],
  RPM.COD_CAL AS [Codigo Calibre],
  AB.COD_TIP_BAJ,
  RPM.COD_PRO_ETIQUETADO AS [Codigo Productor Etiquetado],
  RPM.ZON,
  RPM.FECHA_PAC
FROM
  ERPFRUSYS.DBO.Repaletizadomix_bj AS RPM
  JOIN ERPFRUSYS.DBO.APORTE_BJ AS AB ON AB.LOTE = RPM.LOTE
  AND AB.COD_EMP = RPM.COD_EMP
  AND AB.COD_TEM = RPM.COD_TEM
  AND AB.PLANILLA = RPM.GUIA_REPA;