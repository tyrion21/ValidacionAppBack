SELECT
  id_proceso,
  id_tarja,
  nombre_especie,
  nombre_camara,
  Inicio,
  CASE
    WHEN fin = '01-01-2005' THEN getdate()
    ELSE fin
  END AS fin,
  CASE
    WHEN SUBSTRING(
      nombre_camara
      FROM
        1 FOR 1
    ) = 'T' THEN REPLACE(nombre_camara, 'Tunel', 'T')
    WHEN SUBSTRING(
      nombre_camara
      FROM
        1 FOR 1
    ) = 'C' THEN REPLACE(nombre_camara, 'Camara', 'C')
  END AS camara,
  CASE
    WHEN fin < inicio THEN 'En Proceso'
    ELSE ' Finalizado'
  END AS estado,
  UPPER(id_tarja) AS folio
FROM
  OPENQUERY(
    prefrio,
    'SELECT        id_proceso, id_tarja, nombre_especie, nombre_camara, Inicio, fin FROM            prefrio.dbo.consulta_tunel'
  ) AS derivedtbl_1;