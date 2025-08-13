SELECT
  c.DES_CAM AS Camara,
  es.NOM_ESP AS Especie,
  CONVERT(date, e.FECHA_PAC) AS Fecha_packing,
  CONVERT(VARCHAR(8), e.HORA_REC, 108) AS [Hora Packing],
  e.COD_PACK AS Packing,
  e.LOTE AS Folio,
  e.COD_PRO_ETIQUETADO AS Productor,
  e.COD_PRE AS CSG,
  e.COD_ETI AS Marca,
  e.COD_ENVOP AS Embalaje,
  tp.COD_LINEA AS Linea,
  exp.NOM_EXP AS Exportadora,
  j.DESCRIPCION AS Jornada,
  (
    SELECT
      TOP (1) NOM_VAR
    FROM
      Erpfrusys.dbo.VARIEDAD AS f_var
    WHERE
      (e.COD_EMP = COD_EMP)
      AND (e.COD_TEM = COD_TEM)
      AND (COD_VAR = e.COD_VAR_ETI)
  ) AS Variedad,
  e.COD_CAL AS Calibre,
  (
    SELECT
      NOM_CAT
    FROM
      Erpfrusys.dbo.CATEGORIA AS cat
    WHERE
      (e.COD_EMP = COD_EMP)
      AND (e.COD_TEM = COD_TEM)
      AND (e.COD_ESP = COD_ESP)
      AND (e.COD_CAT = COD_CAT)
  ) AS Categoria,
  e.CAJAS AS Cajas,
  e.PLANILLA AS Proceso,
  v.Estado
FROM
  Erpfrusys.dbo.EXISTENCIA AS e
  LEFT JOIN Erpfrusys.dbo.CAMARAS AS c ON e.COD_EMP = c.COD_EMP
  AND e.COD_TEM = c.COD_TEM
  AND e.COD_FRI = c.COD_FRI
  AND e.COD_CAM = c.COD_CAM
  LEFT JOIN Erpfrusys.dbo.TIT_PROCEPACK AS tp ON e.COD_EMP = tp.COD_EMP
  AND e.COD_TEM = tp.COD_TEM
  AND e.ZON = tp.ZON
  AND e.PLANILLA = tp.PLANILLA
  LEFT JOIN Erpfrusys.dbo.EXPORTADORES AS exp ON e.COD_EXP = exp.COD_EXP
  AND e.COD_TEM = exp.COD_TEM
  AND e.COD_EMP = exp.COD_EMP
  AND e.COD_EXP = exp.COD_EXP
  LEFT JOIN Erpfrusys.dbo.JORNADAPACK AS j ON e.COD_EMP = j.COD_EMP
  AND e.COD_TEM = j.COD_TEM
  AND tp.COD_JORNADA = j.COD_JORNADA
  LEFT JOIN Erpfrusys.dbo.ESPECIE AS es ON e.COD_EMP = e.COD_EMP
  AND e.COD_TEM = es.COD_TEM
  AND e.COD_ESP = es.COD_ESP
  LEFT JOIN Merquen_app.dbo.Validacion AS v ON v.Folio = e.LOTE
WHERE
  (e.COD_EMP = 'MER')
  AND (e.COD_TEM = '7')
  AND e.COD_ESP NOT IN (5, 70)
  AND e.FECHA_RPA > '18-06-2024';