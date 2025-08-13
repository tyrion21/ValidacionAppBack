SELECT
  e.COD_EMP,
  e.COD_TEM,
  e.ZON,
  e.LOTE AS Folio,
  e.PLANILLA,
  e.ESTA_FUIN,
  e.TIP_MOV,
  CONVERT(varchar, ISNULL(m.FECHA_PAC, e.FECHA_PAC), 105) AS Fecha_Packing,
  e.FECHA_RPA,
  e.GUIA,
  e.COD_PACK,
  e.COD_PRO,
  e.COD_FRI,
  e.COD_ESP,
  (
    SELECT
      NOM_ESP
    FROM
      Erpfrusys.dbo.ESPECIE AS f_esp
    WHERE
      (COD_EMP = e.COD_EMP)
      AND (COD_TEM = e.COD_TEM)
      AND (COD_ESP = e.COD_ESP)
  ) AS n_Especie,
  e.COD_VAR,
  (
    SELECT
      TOP (1) NOM_VAR
    FROM
      Erpfrusys.dbo.VARIEDAD AS f_var
    WHERE
      (e.COD_EMP = COD_EMP)
      AND (e.COD_TEM = COD_TEM)
      AND (COD_VAR = e.COD_VAR)
  ) AS n_variedad_real,
  e.HORA_REC,
  e.CONDICION,
  e.TIP_LOT,
  ISNULL(m.ALTURA, e.ALTURA) AS N_altura,
  e.TIPO_LOT,
  e.COD_ENV,
  ISNULL(m.COD_ETI, e.COD_ETI) AS c_etiqueta,
  (
    SELECT
      TOP (1) NOM_ETI
    FROM
      Erpfrusys.dbo.ETIQUETA AS et
    WHERE
      (COD_EMP = e.COD_EMP)
      AND (COD_TEM = e.COD_TEM)
      AND (ISNULL(m.COD_ETI, e.COD_ETI) = COD_ETI)
  ) AS n_etiqueta,
  e.COD_EMB,
  ISNULL(m.COD_ENVOP, e.COD_ENVOP) AS c_embalaje,
  (
    SELECT
      TOP (1) PESO_NETO
    FROM
      Erpfrusys.dbo.ENVASEOPERACIONAL AS eo
    WHERE
      (ISNULL(m.COD_ENVOP, e.COD_ENVOP) = COD_ENVOP)
      AND (COD_EMP = e.COD_EMP)
      AND (COD_TEM = e.COD_TEM)
  ) AS peso_std,
  ISNULL(m.PLU, e.PLU) AS c_plu,
  (
    SELECT
      TOP (1) NOM_PLU
    FROM
      Erpfrusys.dbo.PLU AS plu
    WHERE
      (e.COD_EMP = COD_EMP)
      AND (e.COD_TEM = COD_TEM)
      AND (ISNULL(m.PLU, e.PLU) = COD_PLU)
  ) AS n_plu,
  ISNULL(m.CAJAS, e.CAJAS) AS Cajas,
  e.CAJ_BAS,
  ISNULL(m.COD_CAT, e.COD_CAT) AS c_categoria,
  (
    SELECT
      NOM_CAT
    FROM
      Erpfrusys.dbo.CATEGORIA AS cat
    WHERE
      (e.COD_EMP = COD_EMP)
      AND (e.COD_TEM = COD_TEM)
      AND (e.COD_ESP = COD_ESP)
      AND (ISNULL(m.COD_CAT, e.COD_CAT) = COD_CAT)
  ) AS n_categoria,
  ISNULL(m.COD_CAL, e.COD_CAL) AS c_calibre,
  e.TEMP_PAC,
  e.TEMP_DES,
  e.NRO_MIX,
  e.FEC_SAG,
  e.GUIA_SAG,
  e.CER_SAG,
  e.SOL_SAG,
  e.TIP_SAG,
  e.COD_MER,
  e.COD_MER1,
  e.COD_MER2,
  e.COD_MER3,
  e.COD_MER4,
  e.FEC_FUM,
  e.GUIA_FUM,
  e.CER_FUM,
  e.SEMANA,
  e.PFRIO,
  e.COD_BP,
  e.COD_CAM,
  e.COD_BANDA,
  e.COD_TIPO_FUM,
  e.FILA,
  e.PISO,
  ISNULL(m.COD_PRE, e.COD_PRE) AS CSG,
  ISNULL(m.COD_CUA, e.COD_CUA) AS Cod_cua,
  (
    SELECT
      TOP (1) COD_INSCRIPCION
    FROM
      Erpfrusys.dbo.PREDIOS_INSPECCION AS pi
    WHERE
      (COD_EMP = e.COD_EMP)
      AND (COD_TEM = e.COD_TEM)
      AND (ISNULL(m.COD_PRE, e.COD_PRE) = COD_PRE)
      AND (ISNULL(m.COD_CUA, e.COD_CUA) = COD_CUA)
  ) AS SDP,
  (
    SELECT
      TOP (1) COD_PRO
    FROM
      Erpfrusys.dbo.PREDIOS_INSPECCION AS pi
    WHERE
      (COD_EMP = e.COD_EMP)
      AND (COD_TEM = e.COD_TEM)
      AND (ISNULL(m.COD_PRE, e.COD_PRE) = COD_PRE)
      AND (ISNULL(m.COD_CUA, e.COD_CUA) = COD_CUA)
  ) AS cod_pro_SDP,
  e.PROCESO,
  e.TIPO_REPA,
  e.CONDICIONFRIO,
  e.COD_TIPO_TRA,
  ISNULL(m.COD_VAR_ETI, e.COD_VAR) AS Expr1,
  (
    SELECT
      TOP (1) NOM_VAR
    FROM
      Erpfrusys.dbo.VARIEDAD AS f_var
    WHERE
      (e.COD_EMP = COD_EMP)
      AND (e.COD_TEM = COD_TEM)
      AND (COD_VAR = ISNULL(m.COD_VAR_ETI, e.COD_VAR_ETI))
  ) AS n_variedad_Rotulada,
  e.COD_PRO_ETIQUETADO,
  e.FECHA_COSECHA,
  e.COD_LINEA,
  ISNULL(m.COD_EXP, e.COD_EXP) AS c_exportadora,
  (
    SELECT
      NOM_EXP
    FROM
      Erpfrusys.dbo.EXPORTADORES AS ex
    WHERE
      (COD_EMP = e.COD_EMP)
      AND (COD_TEM = e.COD_TEM)
      AND (COD_EXP = e.COD_EXP)
  ) AS n_exportadora,
  ISNULL(m.PROCESO, e.PK_ORIGINAL) AS Numero_Proceso,
  e.PESO_ORIGINAL,
  'Exportacion' AS t_Categoria,
  CASE
    WHEN (
      SELECT
        TOP (1) COD_PRO
      FROM
        Erpfrusys.dbo.PREDIOS_INSPECCION AS pi
      WHERE
        (COD_EMP = e.COD_EMP)
        AND (COD_TEM = e.COD_TEM)
        AND (ISNULL(m.COD_PRE, e.COD_PRE) = COD_PRE)
        AND (ISNULL(m.COD_CUA, e.COD_CUA) = COD_CUA)
    ) = isnull(m.COD_PRO_ETIQUETADO, e.COD_PRO_ETIQUETADO) THEN 'OK'
    ELSE 'Error'
  END AS prod_sdp_eti,
  ISNULL(m.PROCESO, ISNULL(m.PLANILLA, e.PLANILLA)) AS Expr2
FROM
  Erpfrusys.dbo.EXISTENCIA AS e
  LEFT JOIN Erpfrusys.dbo.MIXEXISTENCIA AS m ON e.LOTE = m.LOTE
  AND e.COD_EMP = m.COD_EMP
  AND e.COD_TEM = m.COD_TEM
WHERE
  (e.COD_EMP = 'MER')
  AND (e.COD_TEM = '7');