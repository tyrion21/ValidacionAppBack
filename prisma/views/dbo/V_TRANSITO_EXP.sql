SELECT
  T.id_tipo,
  T.fecha_hora,
  T.patente,
  T.n_guia,
  T.tipo_camion,
  T.fh_ep,
  T.ini_descarga,
  T.fh_descarga,
  T.fh_salida,
  T.id,
  T.des_camion,
  T.time_descarga,
  T.fh_registro,
  TR.COD_PRO,
  PE.COD_EXP,
  E.NOM_EXP,
  TR.PLANILLA AS n_lote,
  esp.NOM_ESP,
  r.LOTE,
  r.COD_ESP
FROM
  dbo.v_transito AS T
  LEFT JOIN Erpfrusys.dbo.TIT_RECEPACK AS TR ON T.n_guia = TR.GUIA
  AND TR.COD_TEM = '5'
  LEFT JOIN Erpfrusys.dbo.PRODUCTOR_X_EXPORTADOR AS PE ON TR.COD_PRO = PE.COD_PRO
  AND TR.COD_TEM = '5'
  LEFT JOIN Erpfrusys.dbo.EXPORTADORES AS E ON E.COD_EXP = PE.COD_EXP
  AND TR.COD_TEM = '5'
  LEFT JOIN Erpfrusys.dbo.RECEPACK AS r ON TR.PLANILLA = r.PLANILLA
  AND TR.COD_EMP = r.COD_EMP
  AND TR.COD_TEM = r.COD_TEM
  LEFT JOIN Erpfrusys.dbo.ESPECIE AS esp ON esp.COD_TEM = TR.COD_TEM
  AND esp.COD_EMP = TR.COD_EMP
  AND r.COD_ESP = esp.COD_ESP;