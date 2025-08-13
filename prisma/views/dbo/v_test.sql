SELECT
  d.tipo,
  d.COD_EMP,
  d.COD_TEM,
  d.FECHA_RPA AS fecha_proceso,
  d.COD_JORNADA AS c_turno,
  d.COD_LINEA AS c_linea,
  l.NOM_LINEA AS n_linea,
  d.NRO_ORDEN,
  d.PLANILLA,
  d.T_PROCESO,
  d.KILOS,
  d.LOTE,
  d.COD_CALIDAD,
  cat.NOM_CAT AS n_categoria,
  d.CANTIDAD,
  d.cod_envop,
  d.COD_EXP,
  d.COD_CAL,
  d.COD_VAR,
  d.COD_ESP,
  d.NOM_VAR,
  d.NOM_VAR_PROCESO,
  d.NOM_ESP,
  d.COD_ENV,
  d.COD_PRO,
  prd.NOM_PRO AS n_productor,
  d.COD_PRE,
  Erpfrusys.dbo.PREDIOS.DESCRIPCION AS n_predio,
  d.TIPOFRU,
  d.neto_std,
  aj.KILOS AS kg_real_embalaje,
  CASE
    WHEN d.tipo = 'Salidas de Proceso' THEN d.CANTIDAD * ISNULL(aj.KILOS, d.KILOS)
    WHEN d.tipo = 'Ingreso a Proceso' THEN d.kilos * -1
    ELSE d.kilos
  END AS peso_neto_real,
  ex.NOM_EXP AS n_exportadora,
  cua.DESCRIPCION AS N_CUARTEL,
  d.COD_CUA,
  DATEPART(week, d.FECHA_RPA) AS n_semana,
  ISNULL(
    (
      SELECT
        TOP (1) COD_ETI
      FROM
        Erpfrusys.dbo.PROPACKMIX AS prm
      WHERE
        (LOTE = d.LOTE)
        AND (COD_TEM = d.COD_TEM)
        AND (COD_EMP = d.COD_EMP)
    ),
    (
      SELECT
        TOP (1) COD_ETI
      FROM
        Erpfrusys.dbo.PROPACKLOTE AS prl
      WHERE
        (LOTE = d.LOTE)
        AND (COD_TEM = d.COD_TEM)
        AND (COD_EMP = d.COD_EMP)
    )
  ) AS c_etiqueta,
  (
    SELECT
      TOP (1) NOM_ETI
    FROM
      Erpfrusys.dbo.ETIQUETA AS eti
    WHERE
      (COD_EMP = d.COD_EMP)
      AND (COD_TEM = d.COD_TEM)
      AND (
        COD_ETI = ISNULL(
          (
            SELECT
              TOP (1) COD_ETI
            FROM
              Erpfrusys.dbo.PROPACKMIX AS prm
            WHERE
              (LOTE = d.LOTE)
              AND (COD_TEM = d.COD_TEM)
              AND (COD_EMP = d.COD_EMP)
          ),
          (
            SELECT
              TOP (1) COD_ETI
            FROM
              Erpfrusys.dbo.PROPACKLOTE AS prl
            WHERE
              (LOTE = d.LOTE)
              AND (COD_TEM = d.COD_TEM)
              AND (COD_EMP = d.COD_EMP)
          )
        )
      )
  ) AS n_etiqueta,
  enop.DESCRIPCION AS n_embalaje,
  (
    SELECT
      TOP (1) TIPO_LOT
    FROM
      Erpfrusys.dbo.PROPACKLOTE AS prl
    WHERE
      (LOTE = d.LOTE)
      AND (COD_TEM = d.COD_TEM)
      AND (COD_EMP = d.COD_EMP)
  ) AS tipo_pallet,
  CASE
    WHEN d.tipo = 'Ingreso a Proceso' THEN (
      SELECT
        TOP (1) notaCalidad
      FROM
        erpfrusys.dbo.recepack
      WHERE
        lote = d.lote
        AND cod_tem = d.cod_tem
    )
    ELSE 'Por Definir'
  END AS Nota_Segregacion,
  tc.FECHA_HORA AS fecha_hora_cierre,
  rc.GUIA AS guia_recepcion,
  rc.FECHA_RPA AS fecha_recepcion,
  0 AS factor_exp
FROM
  dbo.v_produccion_detallado AS d
  LEFT JOIN Erpfrusys.dbo.TIPOLINEAPK AS l ON d.COD_EMP = l.COD_EMP
  AND d.COD_TEM = l.COD_TEM
  AND d.COD_LINEA = l.COD_LINEA
  LEFT JOIN Erpfrusys.dbo.PRODUCTORES AS prd ON d.COD_EMP = prd.COD_EMP
  AND d.COD_TEM = prd.COD_TEM
  AND d.COD_PRO = prd.COD_PRO
  AND d.COD_TEM = prd.COD_TEM
  LEFT JOIN Erpfrusys.dbo.PREDIOS ON d.COD_EMP = Erpfrusys.dbo.PREDIOS.COD_EMP
  AND d.COD_TEM = Erpfrusys.dbo.PREDIOS.COD_TEM
  AND d.COD_PRE = Erpfrusys.dbo.PREDIOS.COD_PRE
  AND d.COD_PRO = Erpfrusys.dbo.PREDIOS.COD_PRO
  LEFT JOIN Erpfrusys.dbo.CATEGORIA AS cat ON d.COD_EMP = cat.COD_EMP
  AND d.COD_TEM = cat.COD_TEM
  AND d.COD_ESP = cat.COD_ESP
  AND d.COD_CALIDAD = cat.COD_CAT
  LEFT JOIN Erpfrusys.dbo.EXPORTADORES AS ex ON d.COD_EMP = ex.COD_EMP
  AND d.COD_TEM = ex.COD_TEM
  AND d.COD_EXP = ex.COD_EXP
  LEFT JOIN Erpfrusys.dbo.CUARTELES AS cua ON d.COD_EMP = cua.COD_EMP
  AND d.COD_TEM = cua.COD_TEM
  AND d.COD_PRE = cua.COD_PRE
  AND d.COD_PRO = cua.COD_PRO
  AND d.COD_CUA = cua.COD_CUA
  AND d.COD_ESP = cua.COD_ESP
  LEFT JOIN Erpfrusys.dbo.AJUSTE AS aj ON d.COD_EMP = aj.COD_EMP
  AND d.COD_TEM = aj.COD_TEM
  AND d.PLANILLA = aj.PLANILLA
  AND d.cod_envop = aj.COD_ENVOP
  AND d.COD_ENV = aj.COD_ENV
  AND d.COD_ESP = aj.COD_ESP
  LEFT JOIN Erpfrusys.dbo.ENVASEOPERACIONAL AS enop ON d.cod_envop = enop.COD_ENVOP
  AND enop.COD_TEM = d.COD_TEM
  AND enop.COD_EMP = d.COD_EMP
  AND d.COD_ESP = enop.COD_ESP
  AND d.COD_ENV = enop.COD_ENV
  LEFT JOIN Erpfrusys.dbo.TIT_PROCEPACK_CIERRE AS tc ON tc.PLANILLA = d.PLANILLA
  AND d.COD_EMP = tc.COD_EMP
  AND tc.COD_TEM = d.COD_TEM
  LEFT JOIN Erpfrusys.dbo.RECEPACK AS rc ON rc.COD_EMP = d.COD_EMP
  AND rc.COD_TEM = d.COD_TEM
  AND d.LOTE = rc.LOTE
WHERE
  (d.COD_EMP = 'MER')
  AND (d.COD_TEM IN ('6', '7'));