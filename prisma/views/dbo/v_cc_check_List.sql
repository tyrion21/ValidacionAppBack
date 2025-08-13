SELECT
  cc.id,
  cc.cod_emp,
  cc.cod_tem,
  cc.fec_muestra AS [Fecha Muestra],
  cc.n_proceso AS [Nro. Proceso],
  cc.cod_esp AS [Codigo Especie],
  e.NOM_ESP AS Especie,
  cc.cod_var AS [Codigo Variedad],
  v.NOM_VAR AS Variedad,
  cc.cod_pro,
  p.NOM_PRO AS Productor,
  cc.cod_linea,
  l.NOM_LINEA AS [Linea de Proceso],
  cc.fecha AS [Fecha Proceso],
  cc.cal_encerado AS [Calidad Encerado],
  cc.porc_exp AS [% Exp. en Descarte],
  cc.porc_exp_c AS [% Exp. en Descarte (C/NC)],
  cc.cal_cajas AS [Calidad de Cajas],
  cc.porc_plu AS [% PLU PT],
  cc.porc_plu_c AS [%PLU en PT (C/NC)],
  cc.cod_envop AS Embalaje,
  cc.peso_caj AS [Peso Neto PT],
  cc.peso_c AS [Peso Caja (C/NC)],
  cc.cal_palet AS [Calidad de Pallet],
  cc.saturacion AS [Saturacion de TriPack],
  cc.usuario AS [Usiario Muestra],
  pe.COD_EXP,
  ex.NOM_EXP AS Exportadora
FROM
  dbo.cc_checklist AS cc
  LEFT JOIN Erpfrusys.dbo.TIPOLINEAPK AS l ON cc.cod_tem = l.COD_TEM
  AND cc.cod_emp = l.COD_EMP
  AND l.COD_LINEA = cc.cod_linea
  LEFT JOIN Erpfrusys.dbo.PRODUCTORES AS p ON cc.cod_tem = p.COD_TEM
  AND cc.cod_emp = p.COD_EMP
  AND p.COD_PRO = cc.cod_pro
  LEFT JOIN Erpfrusys.dbo.VARIEDAD AS v ON cc.cod_tem = v.COD_TEM
  AND cc.cod_emp = v.COD_EMP
  AND cc.cod_esp = v.COD_ESP
  AND v.COD_VAR = cc.cod_var
  LEFT JOIN Erpfrusys.dbo.ESPECIE AS e ON cc.cod_tem = e.COD_TEM
  AND cc.cod_emp = e.COD_EMP
  AND cc.cod_esp = e.COD_ESP
  LEFT JOIN Erpfrusys.dbo.PRODUCTOR_X_EXPORTADOR AS pe ON cc.cod_tem = pe.COD_TEM
  AND cc.cod_emp = pe.COD_EMP
  AND pe.COD_PRO = cc.cod_pro
  LEFT JOIN Erpfrusys.dbo.EXPORTADORES AS ex ON cc.cod_emp = ex.COD_EMP
  AND cc.cod_tem = ex.COD_TEM
  AND pe.COD_EXP = ex.COD_EXP;