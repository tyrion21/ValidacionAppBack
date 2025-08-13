SELECT
  COD_TEM,
  tipo,
  fecha_proceso,
  CANTIDAD,
  COD_EXP,
  COD_ESP,
  NOM_ESP,
  COD_VAR,
  NOM_VAR_PROCESO,
  COD_PRO,
  n_productor,
  n_exportadora,
  peso_neto_real AS peso_neto,
  lote AS folio,
  NETO_STD,
  cod_cal,
  tipofru
FROM
  dbo.v_pkg_produccion_completo
UNION
ALL
SELECT
  COD_TEM,
  'Despachos (Embarques)' AS tipo,
  FECHA_DESP AS fecha_proceso,
  CAJAS * -1 AS cantidad,
  COD_EXP_cli AS cod_exp,
  COD_ESP,
  NOM_ESP,
  COD_VAR,
  NOM_VAR AS nom_var_proceso,
  COD_PRO,
  nom_pro AS n_productor,
  (
    SELECT
      TOP (1) nom_exp
    FROM
      ERPFRUSYS.DBO.EXPORTADORES
    WHERE
      cod_exp = dm.cod_exp_cli
      AND cod_tem = dm.cod_tem
  ) AS n_exportadora,
  Neto_Total * -1 AS peso_neto,
  lote AS folio,
  (
    SELECT
      TOP (1) PESO_NETO
    FROM
      Erpfrusys.dbo.ENVASEOPERACIONAL
    WHERE
      (DM.COD_TEM = COD_TEM)
      AND (DM.COD_ENVOP = COD_ENVOP)
  ) AS NETO_STD,
  cod_cal,
  'E' AS tipofru
FROM
  Erpfrusys.dbo.UNE_DESPACHOS_MIXTOS_ns AS DM
UNION
ALL
SELECT
  Temporada AS cod_tem,
  'Existencia' AS tipo,
  [Fecha de Packing] AS fecha_proceso,
  [Cantidad de Cajas] * -1 AS cantidad,
  [Cod Exportador Cliente] AS cod_exp,
  [Codigo de Especie] AS COD_ESP,
  [Nombre de Especie] AS NOM_ESP,
  [Codigo de Variedad Real] AS cod_var,
  [Nombre de Variedad Real] AS nom_var_proceso,
  [Codigo de Productor Real] AS cod_pro,
  [Nombre de Productor Real] AS n_productor,
  [Exportadora Cliente] AS n_exportadora,
  [Peso Neto Envase Operacional] * [Cantidad de Cajas] * -1 AS peso_neto,
  [Numero de Pallet] AS folio,
  (
    SELECT
      TOP (1) PESO_NETO
    FROM
      Erpfrusys.dbo.ENVASEOPERACIONAL
    WHERE
      (EX.TEMPORADA = COD_TEM)
      AND (EX.[cODIGO DE eNVASE oPERACIONAL] = COD_ENVOP)
  ) AS NETO_SDT,
  [Codigo de Calibre] AS cod_cal,
  'E' AS tipofru
FROM
  Erpfrusys.dbo.viewReportesDeExistencia AS EX
UNION
ALL
SELECT
  COD_TEM,
  tipo,
  FECHA_RPA AS fecha_proceso,
  CAJAS * -1 AS cantidad,
  COD_EXP,
  COD_ESP,
  NOM_ESP,
  COD_VAR,
  NOM_VAR AS nom_var_proceso,
  COD_PRO,
  NOM_PRO AS n_productor,
  (
    SELECT
      TOP (1) NOM_EXP
    FROM
      Erpfrusys.dbo.EXPORTADORES
    WHERE
      (re.COD_EXP = COD_EXP)
      AND (re.COD_TEM = COD_TEM)
  ) AS n_exportadora,
  TOTAL_KILOS * -1 AS peso_neto,
  LOTE AS folio,
  KILOS AS NETO_SDT,
  cod_cal,
  tipofru
FROM
  dbo.v_pkg_reem_entradas AS re
UNION
ALL
SELECT
  COD_TEM,
  tipo,
  FECHA_RPA AS fecha_proceso,
  CAJAS AS cantidad,
  COD_EXP,
  COD_ESP,
  NOM_ESP,
  COD_VAR,
  NOM_VAR AS nom_var_proceso,
  COD_PRO,
  NOM_PRO AS n_productor,
  (
    SELECT
      TOP (1) NOM_EXP
    FROM
      Erpfrusys.dbo.EXPORTADORES
    WHERE
      (re.COD_EXP = COD_EXP)
      AND (re.COD_TEM = COD_TEM)
  ) AS n_exportadora,
  TOTAL_KILOS AS peso_neto,
  LOTE AS folio,
  (
    SELECT
      TOP (1) PESO_NETO
    FROM
      Erpfrusys.dbo.ENVASEOPERACIONAL
    WHERE
      (RE.COD_TEM = COD_TEM)
      AND (RE.COD_ENVOP = COD_ENVOP)
  ) AS NETO_SDT,
  cod_cal,
  'E' AS tipofru
FROM
  dbo.v_pkg_reem_salidas AS RE
UNION
ALL
SELECT
  COD_TEM,
  tipo,
  FECHA_RPA AS fecha_proceso,
  CAJAS AS cantidad,
  COD_EXP,
  COD_ESP,
  NOM_ESP,
  COD_VAR,
  NOM_VAR AS nom_var_proceso,
  COD_PRO,
  NOM_PRO AS n_productor,
  (
    SELECT
      TOP (1) NOM_EXP
    FROM
      Erpfrusys.dbo.EXPORTADORES
    WHERE
      (re.COD_EXP = COD_EXP)
      AND (re.COD_TEM = COD_TEM)
  ) AS n_exportadora,
  TOTAL_KILOS AS peso_neto,
  LOTE AS folio,
  (
    SELECT
      TOP (1) PESO_NETO
    FROM
      Erpfrusys.dbo.ENVASEOPERACIONAL
    WHERE
      (RE.COD_TEM = COD_TEM)
      AND (RE.COD_ENVOP = COD_ENVOP)
  ) AS NETO_SDT,
  cod_cal,
  tipofru
FROM
  dbo.v_pkg_reem_salidasGR AS RE
UNION
ALL
SELECT
  COD_TEM,
  'Recepcion Fruta Embalada' + (
    CASE
      WHEN tip_mov = 'D' THEN ' (Devolucion Pto.)'
      ELSE ' (Recepcion)'
    END
  ) AS tipo,
  FECHA_RPA AS fecha_proceso,
  CAJAS AS cantidad,
  cod_exp,
  COD_ESP,
  NOM_ESP,
  COD_VAR,
  NOM_VAR AS nom_var_proceso,
  COD_PRO,
  NOM_PRO AS n_productor,
  (
    SELECT
      TOP (1) NOM_EXP
    FROM
      Erpfrusys.dbo.EXPORTADORES
    WHERE
      (re.cod_exp = COD_EXP)
      AND (re.COD_TEM = COD_TEM)
  ) AS n_exportadora,
  (
    SELECT
      TOP (1) PESO_NETO
    FROM
      Erpfrusys.dbo.ENVASEOPERACIONAL
    WHERE
      (re.COD_TEM = COD_TEM)
      AND (re.COD_ENVOP = COD_ENVOP)
  ) * CAJAS AS peso_neto,
  LOTE AS folio,
  (
    SELECT
      TOP (1) PESO_NETO
    FROM
      Erpfrusys.dbo.ENVASEOPERACIONAL
    WHERE
      (RE.COD_TEM = COD_TEM)
      AND (RE.COD_ENVOP = COD_ENVOP)
  ) AS NETO_SDT,
  cod_cal,
  'E' AS tipofru
FROM
  dbo.V_PKG_RECEPCIONES AS re
UNION
ALL
SELECT
  COD_TEM,
  'Interplanta (' + ZON_DEST + ')' AS tipo,
  FECHA_DESP AS fecha_proceso,
  CAJAS * -1 AS cantidad,
  (
    SELECT
      TOP (1) COD_EXP
    FROM
      Erpfrusys.dbo.PRODUCTOR_X_EXPORTADOR
    WHERE
      (t.COD_PRO = COD_PRO)
      AND (COD_TEM = t.COD_TEM)
  ) AS cod_exp,
  COD_ESP,
  NOM_ESP,
  COD_VAR,
  NOM_VAR AS nom_var_proceso,
  COD_PRO,
  NOM_PRO AS n_productor,
  (
    SELECT
      TOP (1) NOM_EXP
    FROM
      Erpfrusys.dbo.EXPORTADORES
    WHERE
      (
        COD_EXP = (
          SELECT
            TOP (1) COD_EXP
          FROM
            Erpfrusys.dbo.PRODUCTOR_X_EXPORTADOR AS PRODUCTOR_X_EXPORTADOR_1
          WHERE
            (t.COD_PRO = COD_PRO)
            AND (COD_TEM = t.COD_TEM)
        )
      )
  ) AS n_exportadora,
  (
    SELECT
      TOP (1) PESO_NETO
    FROM
      Erpfrusys.dbo.ENVASEOPERACIONAL
    WHERE
      (t.COD_TEM = COD_TEM)
      AND (t.COD_ENVOP = COD_ENVOP)
  ) * CAJAS * -1 AS peso_neto,
  LOTE AS folio,
  (
    SELECT
      TOP (1) PESO_NETO
    FROM
      Erpfrusys.dbo.ENVASEOPERACIONAL
    WHERE
      (T.COD_TEM = COD_TEM)
      AND (T.COD_ENVOP = COD_ENVOP)
  ) AS NETO_SDT,
  cod_cal,
  'E' AS tipofru
FROM
  Erpfrusys.dbo.UNE_TRASLADOS_MIXTOS AS t
UNION
ALL
SELECT
  VR.COD_TEM,
  CASE
    WHEN cod_tip_baj = 1 THEN 'Rebaja Comercial'
    WHEN cod_tip_baj = 2 THEN 'Mermas Frigorifico'
    WHEN cod_tip_baj = 3 THEN 'Rebaja Siniestro'
    WHEN cod_tip_baj = 4 THEN 'Mermas Exportadoras'
    WHEN cod_tip_baj = 5 THEN 'Muestras Fumigacion'
    WHEN cod_tip_baj = 6 THEN 'Muestras SAG'
    ELSE 'Rebaja no Definida'
  END AS tipo,
  VR.FECHA_PAC AS FECHA_PROCESO,
  VR.[Cajas Merma] * -1 AS CANTIDAD,
  PE.COD_EXP,
  VR.COD_ESP,
  E.NOM_ESP,
  VR.COD_VAR,
  V.NOM_VAR AS NOM_VAR_ROCESO,
  VR.COD_PRO,
  PRO.NOM_PRO AS N_PRODUCTOR,
  EX.NOM_EXP AS N_EXPORTADORA,
  ENVOP.PESO_NETO * VR.[Cajas Merma] * -1 AS PESO_NETO,
  VR.LOTE AS FOLIO,
  ENVOP.PESO_NETO AS NETO_STD,
  vr.[Codigo Calibre] AS cod_cal,
  'E' AS tipofru
FROM
  dbo.v_rebajas AS VR
  LEFT JOIN Erpfrusys.dbo.VARIEDAD AS V ON vr.COD_VAR = v.cod_var
  AND vr.cod_tem = v.cod_tem
  AND v.cod_emp = vr.cod_emp
  AND VR.COD_ESP = V.COD_ESP
  LEFT JOIN Erpfrusys.dbo.ENVASEOPERACIONAL AS ENVOP ON VR.COD_ENV = ENVOP.COD_ENV
  AND VR.COD_ESP = ENVOP.COD_ESP
  AND VR.COD_EMP = ENVOP.COD_EMP
  AND VR.COD_TEM = ENVOP.COD_TEM
  AND VR.COD_ENVOP = ENVOP.COD_ENVOP
  LEFT JOIN Erpfrusys.dbo.PRODUCTORES AS PRO ON VR.COD_EMP = PRO.COD_EMP
  AND VR.COD_TEM = PRO.COD_TEM
  AND PRO.COD_PRO = VR.COD_PRO
  AND V.COD_TEM = VR.COD_TEM
  AND V.COD_EMP = VR.COD_EMP
  AND V.COD_VAR = VR.COD_VAR
  LEFT JOIN Erpfrusys.dbo.EXPORTADORES AS EX
  RIGHT JOIN Erpfrusys.dbo.PRODUCTOR_X_EXPORTADOR AS PE ON EX.COD_EMP = PE.COD_EMP
  AND EX.COD_TEM = PE.COD_TEM
  AND EX.COD_EXP = PE.COD_EXP;