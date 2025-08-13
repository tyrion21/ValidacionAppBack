SELECT
  pc.COD_TEM,
  pc.COD_EMP,
  pc.PLANILLA,
  tp.FECHA_RPA AS fecha_proceso,
  trc.FECHA_RECEPCION,
  pc.LOTE,
  pc.COD_ESP,
  pc.TOTAL_KILOS,
  ISNULL(
    DATEDIFF(DAY, trc.FECHA_RECEPCION, tp.FECHA_RPA),
    0
  ) AS dias_espera,
  dc.[Inicio Desverdizado],
  dc.[Inicio Ventilado],
  ISNULL(
    DATEDIFF(
      HOUR,
      dc.[Inicio Desverdizado],
      dc.[Inicio Ventilado]
    ),
    0
  ) AS dias_dv
FROM
  Erpfrusys.dbo.PROCEPACK AS pc
  LEFT JOIN Erpfrusys.dbo.TIT_PROCEPACK AS tp ON tp.PLANILLA = pc.PLANILLA
  AND tp.COD_TEM = pc.COD_TEM
  AND tp.COD_EMP = pc.COD_EMP
  LEFT JOIN Erpfrusys.dbo.RECEPACK AS rc ON rc.LOTE = pc.LOTE
  AND rc.COD_TEM = pc.COD_TEM
  AND rc.COD_EMP = pc.COD_EMP
  LEFT JOIN Erpfrusys.dbo.TIT_RECEPACK AS trc ON rc.PLANILLA = trc.PLANILLA
  AND rc.COD_TEM = trc.COD_TEM
  AND rc.COD_EMP = trc.COD_EMP
  LEFT JOIN dbo.v_Desverdizado_Completo AS dc ON dc.NumeroLote = pc.LOTE
  AND dc.Temporada = pc.COD_TEM
  AND dc.Empresa = pc.COD_EMP
WHERE
  (pc.TIPOFRU = 'e')
  AND (pc.COD_CAL NOT IN ('6', '5a', '5b', '5'));