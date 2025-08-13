SELECT
  c.DES_CAM AS Camara,
  CONVERT(varchar, ISNULL(m.FECHA_PAC, e.FECHA_PAC), 105) AS [Fecha Packing],
  CONVERT(VARCHAR(8), e.HORA_REC, 108) AS [Hora Packing],
  e.COD_PACK AS Packing,
  e.LOTE AS Folio,
  e.COD_PRO_ETIQUETADO AS Productor,
  ISNULL(m.COD_PRE, e.COD_PRE) AS CSG,
  ISNULL(m.COD_CUA, e.COD_CUA) AS Cuartel,
  (
    SELECT
      TOP (1) NOM_VAR
    FROM
      Erpfrusys.dbo.VARIEDAD AS f_var
    WHERE
      (e.COD_EMP = COD_EMP)
      AND (e.COD_TEM = COD_TEM)
      AND (COD_VAR = ISNULL(m.COD_VAR_ETI, e.COD_VAR_ETI))
  ) AS Variedad,
  ISNULL(m.COD_ENVOP, e.COD_ENVOP) AS Embalaje,
  (
    SELECT
      NOM_ETI
    FROM
      Erpfrusys.dbo.Etiqueta AS f_eti
    WHERE
      (e.COD_EMP = COD_EMP)
      AND (e.COD_TEM = COD_TEM)
      AND (COD_ETI = ISNULL(m.COD_ETI, e.COD_ETI))
  ) AS Etiqueta,
  ISNULL(m.COD_CAL, e.COD_CAL) AS Calibre,
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
  ) AS Categoria,
  ISNULL(m.CAJAS, e.CAJAS) AS Cajas,
  ISNULL(m.PROCESO, ISNULL(m.PLANILLA, e.PLANILLA)) AS Proceso
FROM
  Erpfrusys.dbo.EXISTENCIA AS e
  LEFT JOIN Erpfrusys.dbo.MIXEXISTENCIA AS m ON e.LOTE = m.LOTE
  AND e.COD_EMP = m.COD_EMP
  AND e.COD_TEM = m.COD_TEM
  LEFT JOIN Erpfrusys.dbo.CAMARAS AS c ON e.COD_EMP = c.COD_EMP
  AND e.COD_TEM = c.COD_TEM
  AND e.COD_FRI = c.COD_FRI
  AND e.COD_CAM = c.COD_CAM
WHERE
  (e.COD_EMP = 'MER')
  AND (e.COD_TEM = '7')
  AND e.COD_ESP <> 5;