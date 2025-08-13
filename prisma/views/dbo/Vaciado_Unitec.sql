SELECT
  l.LIN_Linea,
  v.IDLotto,
  v.Lotto,
  v.IDProcesso,
  tp.FECHA_RPA,
  v.DataLettura,
  v.DataSvuotamento,
  v.PesoNetto,
  v.NumeroCasseBin,
  v.IDLinea,
  p.PROC_Codice,
  p.PROC_Data,
  CONVERT(nvarchar(10), tp.FECHA_RPA, 103) AS fecha,
  p.PROC_Data_Inizio,
  p.PROC_Data_Fine,
  r.NotaCalidad,
  r.Velocidad,
  r.CANT_BIN,
  r.CANT_ENV_CONT,
  r.COD_PRE,
  r.COD_CUA,
  r.KILOS,
  r.CANTIDAD,
  r.TOTAL_KILOS,
  tp.COD_PRO,
  tp.COD_JORNADA,
  (
    SELECT
      NOM_PRO
    FROM
      Erpfrusys.dbo.PRODUCTORES
    WHERE
      (COD_TEM = '5')
      AND (COD_EMP = 'mer')
      AND (COD_PRO = tp.COD_PRO)
  ) AS Productor,
  tp.PLANILLA,
  r.KILOS / r.CANT_ENV_CONT AS kilo_tote,
  vc.Unita_Svuotate AS totes_vaciado,
  (
    SELECT
      TOP (1) NOM_VAR
    FROM
      Erpfrusys.dbo.VARIEDAD
    WHERE
      (tp.COD_VAR = COD_VAR)
      AND (COD_TEM = '5')
  ) AS n_Variedad,
  vc.Unita_Svuotate
FROM
  UNITEC.UNITEC_DB_SDT.dbo.VW_UnitaIn_Pianificate AS v
  JOIN UNITEC.UNITEC_DB_SDT.dbo.ANA_Linea AS l ON v.IDLinea = l.LIN_ID
  JOIN UNITEC.UNITEC_DB_SDT.dbo.VW_Processi_Esteso AS vc ON v.IDProcesso = vc.Id_Processo
  LEFT JOIN UNITEC.UNITEC_DB_SDT.dbo.PROD_Processo AS p ON v.IDProcesso = p.PROC_ID
  LEFT JOIN Erpfrusys.dbo.RECEPACK AS r ON v.Lotto = r.LOTE COLLATE SQL_Latin1_General_CP1_CI_AS
  AND r.COD_TEM = '5'
  LEFT JOIN Erpfrusys.dbo.TIT_PROCEPACK AS tp ON CONVERT(
    int,
    SUBSTRING(
      p.PROC_Codice
      FROM
        6 FOR 5
    )
  ) = tp.PLANILLA
  AND tp.COD_TEM = '5'
  AND r.COD_EMP = 'mer';