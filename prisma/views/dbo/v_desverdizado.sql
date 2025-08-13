SELECT
  dbo.pk_desver_cab.pro_nro,
  dbo.pk_desver_cab.fec_ini,
  dbo.pk_desver_cab.fec_fin,
  dbo.pk_desver_cab.cod_esp,
  d.folio,
  d.cod_var,
  d.peso_neto,
  d.cod_cal,
  dbo.pk_desver_cab.fec_ven,
  (
    SELECT
      TOP (1) NOM_VAR
    FROM
      Erpfrusys.dbo.VARIEDAD AS v
    WHERE
      (COD_VAR = d.cod_var)
  ) AS n_Variedad,
  (
    SELECT
      TOP (1) NOM_ESP
    FROM
      Erpfrusys.dbo.ESPECIE AS e
    WHERE
      (COD_ESP = d.cod_esp)
  ) AS n_Especie
FROM
  dbo.pk_desver_cab
  LEFT JOIN dbo.pk_desver_det AS d ON dbo.pk_desver_cab.id = d.id_cab;