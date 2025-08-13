SELECT
  Empresa,
  Temporada,
  [Fecha Recepcion] AS FechaRecepcion,
  Zona,
  [Codigo Packing] AS CodigoPacking,
  [Observacion Proceso] AS Observaciones,
  [Codigo Productor] AS CodigoProductor,
  [Codigo Frio] AS CodigoFrio,
  [Codigo Especie] AS CodigoEspecie,
  [Codigo Variedad] AS CodigoVariedad,
  [Numero Lote] AS NumeroLote,
  [Codigo Envase] AS CodigoEnvase,
  Cantidad,
  [Kilos Promedio] AS KilosPromedio,
  [Total Kilos] AS TotalKilos,
  [Nombre Productor] AS NombreProductor,
  [Nombre Frio] AS NombreFrio,
  [Nombre Packing] AS NombrePacking,
  [Nombre Especie] AS NombreEspecie,
  [Nombre Variedad] AS NombreVariedad,
  [Nombre Zona] AS NombreZona,
  [Guia de Recepcion] AS [Nº Guia de Recepcion],
  [Tipo Fruta] AS TipoFruta,
  Cuartel AS [Nombre Cuartel],
  Predio AS [Nombre Predio],
  [Cod Exportadora],
  [Nom Exportadora],
  fec_ini AS [Inicio Desverdizado],
  fec_fin AS [Inicio Ventilado],
  fec_ven AS [Fin Ventilado],
  datediff(MINUTE, fec_ini, fec_fin) / 60 AS hr_desv,
  calibre,
  0 AS id
FROM
  dbo.v_Acumulado_Produccion_Lavado_Limones
WHERE
  Temporada = 7
UNION
ALL
SELECT
  Empresa,
  Temporada,
  FechaRecepcion,
  Zona,
  CodigoPacking,
  Observaciones,
  CodigoProductor,
  CodigoFrio,
  CodigoEspecie,
  CodigoVariedad,
  NumeroLote,
  CodigoEnvase,
  Cantidad,
  KilosPromedio,
  TotalKilos,
  NombreProductor,
  NombreFrio,
  NombrePacking,
  NombreEspecie,
  NombreVariedad,
  NombreZona,
  [Nº Guia de Recepcion],
  TipoFruta,
  [Nombre Cuartel],
  [Nombre Predio],
  [Cod Exportadora],
  [Nom Exportadora],
  [Inicio Desverdizado],
  [Inicio Ventilado],
  [Fin Ventilado],
  datediff(
    MINUTE,
    [Inicio Desverdizado],
    [Inicio Ventilado]
  ) / 60 AS hr_desv,
  calibre,
  id
FROM
  dbo.v_Acumulado_Recepcion_FG_Desverdizado
WHERE
  NombreEspecie IN (
    'Clementines',
    'Mandarins',
    'Limones',
    'NARANJAS'
  )
  AND Temporada = 7;