SELECT
  dm.COD_TEM AS Temporada,
  dm.NOM_PACK AS Packing,
  dm.COD_PACK,
  dm.NOM_PRO_ETIQUETADO AS Productor,
  dm.COD_PRE AS CSG,
  dm.PLANILLA AS Proceso,
  CONVERT(DATE, dm.FECHA_DESP, 101) AS [Fecha Despacho],
  CONVERT(VARCHAR(8), dm.HORA_PRE, 108) AS [Hora Despacho],
  dm.GUIA_DESP AS [Planilla Despacho],
  dm.GUIA_DES AS [Guia Despacho],
  dm.NOM_REC AS Recibidor,
  dm.NOM_NAVIERA AS Naviera,
  dm.NOM_SIT AS Nave,
  dm.NRO_CONT AS Contenedor,
  dm.LOTE AS Folio,
  dm.NOM_ESP,
  dm.VARIEDA_ETIQUETADA AS Variedad,
  dm.NombreCategoria AS Categoria,
  dm.COD_ETI,
  dm.COD_ENVOP AS Embalaje,
  dm.COD_CAL AS Calibre,
  dm.CAJAS AS Cajas,
  (dm.cajas * a.KILOS) AS Kilos,
  dm.Neto_Total,
  dm.Bruto_Total,
  e.PESO_NETO AS [Peso Neto],
  dm.OBSERVACION AS Observacion
FROM
  Erpfrusys.dbo.UNE_DESPACHOS_MIXTOS_NS AS dm
  LEFT JOIN Erpfrusys.dbo.PROPACKLOTE AS p ON dm.COD_EMP = p.COD_EMP
  AND dm.COD_TEM = p.COD_TEM
  AND dm.LOTE = p.LOTE
  LEFT JOIN Erpfrusys.dbo.AJUSTE AS a ON a.PLANILLA = p.PLANILLA
  AND a.COD_TEM = p.COD_TEM
  AND a.COD_ENVOP = p.COD_ENVOP
  LEFT JOIN Erpfrusys.dbo.ENVASEOPERACIONAL AS e ON dm.COD_TEM = e.COD_TEM
  AND dm.COD_EMP = e.COD_EMP
  AND dm.COD_ENVOP = e.COD_ENVOP
WHERE
  dm.COD_PRO LIKE 'HU%'
  AND dm.COD_TEM = 7
  AND dm.FECHA_DESP > '01/12/2023'
  AND dm.COD_ESP = '5'
  AND dm.NOM_NAVIERA <> 'MERCADO INTERNO'
  AND dm.NOM_NAVIERA <> 'REEMBALAJE';