SELECT
  dbo.Vista_prefrios.id_proceso,
  dbo.Vista_prefrios.id_tarja,
  dbo.Vista_prefrios.nombre_camara,
  dbo.Vista_prefrios.Inicio,
  dbo.Vista_prefrios.fin,
  dbo.v_existencia_embalada.Folio,
  dbo.v_existencia_embalada.PROCESO,
  dbo.v_existencia_embalada.Cajas,
  dbo.v_existencia_embalada.Numero_Proceso,
  dbo.v_existencia_embalada.n_exportadora,
  SUBSTRING(
    '0000000000'
    FROM
      1 FOR 10 - LEN(dbo.Vista_prefrios.id_tarja)
  ) + TRIM(dbo.Vista_prefrios.id_tarja) AS folio_p
FROM
  dbo.Vista_prefrios
  LEFT JOIN dbo.v_existencia_embalada ON SUBSTRING(
    '0000000000'
    FROM
      1 FOR 10 - LEN(dbo.Vista_prefrios.id_tarja)
  ) + dbo.Vista_prefrios.id_tarja = dbo.v_existencia_embalada.Folio COLLATE Modern_Spanish_CI_AI;