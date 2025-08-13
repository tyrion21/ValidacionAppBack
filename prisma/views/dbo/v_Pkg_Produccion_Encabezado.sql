SELECT
  t.COD_EMP,
  t.COD_TEM,
  t.ZON,
  t.PLANILLA,
  t.FECHA_RPA,
  t.COD_PACK,
  t.COD_PRO,
  t.COD_ESP,
  t.COD_VAR,
  t.COD_FRI,
  t.T_PROCESO,
  t.COD_JORNADA,
  t.OBSERVACIONES,
  t.ING_MAS,
  t.FECHA_COSECHA,
  t.NRO_ORDEN,
  t.OBSERVACION,
  t.COD_LINEA,
  t.NUM_PERSONAS,
  t.HORA_INICIO,
  t.HORA_TERMINO,
  t.HORAS_INACTIVIDAD,
  t.MOTIVO_INACTIVIDAD,
  t.COD_PRE,
  t.COD_CUA,
  t.COD_TIPO_TRA,
  t.TIPO_INGRESO,
  t.ID_PROCESO,
  t.LOTE_ETIQUETAR,
  t.ENVIADO,
  t.FECHA_ENVIO,
  pd.NOM_PRO AS n_productor_proceso,
  pr.DESCRIPCION AS n_predio,
  pr.COD_CSG AS csg_predio,
  (
    SELECT
      TOP (1) COD_INSCRIPCION
    FROM
      Erpfrusys.dbo.PREDIOS_INSPECCION
    WHERE
      (COD_EMP = t.COD_EMP)
      AND (COD_TEM = t.COD_TEM)
      AND (COD_CUA = t.COD_CUA)
  ) AS SDP,
  es.NOM_ESP AS n_especie,
  va.NOM_VAR AS n_variedad_Proceso
FROM
  Erpfrusys.dbo.TIT_PROCEPACK AS t
  JOIN Erpfrusys.dbo.PRODUCTORES AS pd ON t.COD_EMP = pd.COD_EMP
  AND t.COD_TEM = pd.COD_TEM
  AND t.COD_PRO = pd.COD_PRO
  JOIN Erpfrusys.dbo.PREDIOS AS pr ON t.COD_EMP = pr.COD_EMP
  AND t.COD_TEM = pr.COD_TEM
  AND t.COD_PRE = pr.COD_PRE
  JOIN Erpfrusys.dbo.ESPECIE AS es ON t.COD_EMP = es.COD_EMP
  AND t.COD_TEM = es.COD_TEM
  AND t.COD_ESP = es.COD_ESP
  JOIN Erpfrusys.dbo.VARIEDAD AS va ON t.COD_EMP = va.COD_EMP
  AND t.COD_TEM = va.COD_TEM
  AND t.COD_VAR = va.COD_VAR;