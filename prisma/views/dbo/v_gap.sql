SELECT
  Temporada,
  CodigoDeFrigorifico,
  NumeroMixtos,
  AlturaPallet,
  Planilla,
  [Fecha Proceso],
  Fecha,
  CodigoEnvase,
  CodigoEnvop,
  CodigoProductorReal,
  NombreProductorReal,
  CodProductorEtiquetado,
  NombreProductorEtiquetado,
  CodigoEspecie,
  CodigoVariedad AS [Codigo variedad Real],
  NombreVariedad AS [Variedad Real],
  [Variedad Packing] AS [Cod variedad etiquetada],
  [Nombre Variedad Packing] AS [Variedad etiquetada],
  Calibre,
  Categoria,
  CodigoPacking AS [Codigo Frio],
  Etiqueta,
  Plu,
  NumeroPallet,
  Cajas,
  NombreEspecie,
  NombrePacking,
  NombreFrio,
  NombreEnvase,
  Zona,
  NombreEnvop,
  NotaGeneralControlCalidad,
  [Peso Neto Envase Operacional],
  Origen AS [Origen Pallet],
  [Cod. Exportadora],
  Exportadora,
  [Tipo de Pallet],
  [Cod. Cuartel],
  Cuartel,
  Predio
FROM
  Erpfrusys.dbo.viewConsultaPackingMasFrioExcel
WHERE
  (Empresa = 'MER')
  AND (Temporada = '5')
  AND (
    [Fecha Proceso] BETWEEN '01/09/2021' AND '14/12/2022'
  )
  AND ([Cod. Exportadora] = '84');