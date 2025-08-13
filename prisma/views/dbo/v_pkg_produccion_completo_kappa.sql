SELECT
  vp.tipo,
  vp.COD_EMP,
  vp.COD_TEM,
  vp.fecha_proceso,
  vp.c_turno,
  vp.c_linea,
  vp.n_linea,
  vp.NRO_ORDEN,
  vp.PLANILLA,
  vp.T_PROCESO,
  vp.KILOS,
  vp.LOTE,
  vp.COD_CALIDAD,
  vp.n_categoria,
  vp.CANTIDAD,
  vp.cod_envop,
  vp.COD_EXP,
  vp.COD_CAL,
  vp.COD_VAR,
  vp.COD_ESP,
  vp.NOM_VAR,
  vp.NOM_VAR_PROCESO,
  vp.NOM_ESP,
  vp.COD_ENV,
  vp.COD_PRO,
  vp.n_productor,
  vp.COD_PRE,
  vp.n_predio,
  vp.TIPOFRU,
  vp.neto_std,
  vp.kg_real_embalaje,
  vp.peso_neto_real,
  vp.n_exportadora,
  vp.N_CUARTEL,
  vp.COD_CUA,
  vp.n_semana,
  vp.c_etiqueta,
  vp.n_etiqueta,
  vp.n_embalaje,
  vp.tipo_pallet,
  vp.Nota_Segregacion,
  vp.fecha_hora_cierre,
  vp.guia_recepcion,
  vp.fecha_recepcion,
  vp.factor_exp
FROM
  dbo.v_pkg_produccion_completo AS vp
  JOIN Erpfrusys.dbo.TIT_PROCEPACK_CIERRE AS pc ON pc.COD_EMP = vp.COD_EMP
  AND pc.COD_TEM = '7'
  AND pc.PLANILLA = vp.PLANILLA
WHERE
  (vp.COD_EMP = 'MER')
  AND (vp.COD_TEM = '7');