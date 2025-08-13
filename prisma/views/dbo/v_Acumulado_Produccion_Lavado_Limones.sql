SELECT
  TOP (100) PERCENT p.Empresa,
  p.Temporada,
  p.NroProceso,
  p.[Fecha Recepcion],
  p.Zona,
  p.[Tipo Proceso],
  p.Jornada,
  p.[Codigo Packing],
  p.[Observacion Proceso],
  p.[Linea de Proceso],
  p.[Numero de Personas],
  p.[Hora Inicio Proceso],
  p.[Hora Termino Proceso],
  p.[Horas Inactividad],
  p.[Motivo Inactividad],
  p.[Tiempo Real del Proceso],
  p.[kilos hora/ persona],
  p.[Codigo Productor],
  p.[Codigo Frio],
  p.[Codigo Especie],
  p.[Codigo Variedad],
  p.Calibre,
  p.[Numero Lote],
  p.[Codigo Envase],
  p.Cantidad,
  p.[Kilos Promedio],
  p.[Total Kilos],
  p.[Nombre Productor],
  p.[Nombre Frio],
  p.[Nombre Packing],
  p.[Nombre Especie],
  p.[Nombre Variedad],
  p.[Nombre Jornada],
  p.[Nombre Zona],
  p.[Guia de Recepcion],
  p.[Fecha Proceso],
  p.[Tipo Fruta],
  p.Cuartel,
  p.Predio,
  p.PLU,
  p.[Rendimiento del proceso],
  p.[Cod Exportadora],
  p.[Nom Exportadora],
  d.folio,
  c.fec_ini,
  c.fec_fin,
  c.fec_ven
FROM
  dbo.pk_desver_cab AS c
  JOIN dbo.pk_desver_det AS d ON c.id = d.id_cab
  JOIN Erpfrusys.dbo.viewConsultaProcesoPackingExcel AS p ON p.[Numero Lote] = d.folio
  AND p.[Tipo Proceso] = 'PreProceso'
WHERE
  (p.[Nombre Especie] = 'Limones')
ORDER BY
  p.[Numero Lote];