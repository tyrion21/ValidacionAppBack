SELECT
  Folio,
  COD_EMP,
  COD_TEM,
  c_calibre,
  n_variedad_real,
  n_Especie,
  SUM(Cajas) AS cajas,
  n_categoria,
  COD_TIPO_TRA,
  c_embalaje,
  c_exportadora,
  n_exportadora,
  COD_PRO,
  COD_ESP,
  COD_VAR,
  c_etiqueta,
  ISNULL(
    (
      SELECT
        '1' AS Expr1
      FROM
        dbo.env_x_sellar
      WHERE
        (dbo.v_existencia_embalada.c_embalaje = cod_envop)
        AND (dbo.v_existencia_embalada.COD_ESP = cod_esp)
        AND (
          dbo.v_existencia_embalada.c_exportadora = cod_exp
        )
    ),
    '0'
  ) AS por_sellar,
  Fecha_Packing
FROM
  dbo.v_existencia_embalada
GROUP BY
  Folio,
  COD_EMP,
  COD_TEM,
  c_calibre,
  n_variedad_real,
  n_Especie,
  n_categoria,
  COD_TIPO_TRA,
  c_embalaje,
  Cajas,
  c_exportadora,
  n_exportadora,
  COD_PRO,
  COD_ESP,
  COD_VAR,
  c_etiqueta,
  Fecha_Packing;