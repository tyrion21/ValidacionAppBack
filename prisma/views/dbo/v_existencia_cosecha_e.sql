SELECT
  [Codigo de Envase Operacional],
  [Codigo de Categoria],
  [Codigo de Calibre],
  [Nombre de Frio],
  [Nombre de Especie],
  [Estado Fitosanitario],
  Temporada,
  Zona,
  [Codigo Frio],
  [Codigo Estado Fitosanitario],
  [Numero de Mixtos],
  [Altura del Pallet],
  Temperatura,
  [Planilla de Recepcion],
  [Fecha de Packing],
  [Fecha de Recepcion],
  [Guia SII],
  [Codigo de Envase],
  [Nombre de Envase],
  [Codigo de Embalaje],
  [Codigo de Productor Real],
  [Nombre de Productor Real],
  [Codigo de Especie],
  [Nombre de Especie] AS Expr1,
  [Codigo de Variedad Real],
  [Nombre de Variedad Real],
  [Codigo de Calibre] AS Expr2,
  [Codigo de Categoria] AS Expr3,
  [Nombre de Categoria],
  [Codigo de Packing],
  [Nombre de Packing],
  Etiqueta,
  [Indicador PLU],
  [Numero de Pallet],
  [Cantidad de Cajas],
  [Equivalente en Cajas Base],
  [Nombre de Envase Operacional],
  [Peso Neto Envase Operacional],
  [Calibre Equivalente],
  [Base Pallet],
  [Codigo Grupo de Productores],
  [Descripcion Grupo de Productores],
  [Codigo Grupo de Exportadores],
  [Descripcion Grupo de Exportadores],
  [Codigo Productor Padre],
  [Nombre Productor Padre],
  [Pallet Reservado],
  [Glosa Reserva Pallet],
  [Mercado Reserva Pallet],
  Provincia,
  Comuna,
  [Control de Calidad],
  [Nota Control de Calidad],
  [Producto de Fumigacion],
  [Codigo Grupo Calibre],
  [Descripcion Grupo de Calibre],
  [Codigo Grupo Categoria],
  [Descripcion Grupo de Categoria],
  [Codigo Grupo Env.Op.],
  [Descripcion Grupo de Env.Op.],
  [Codigo de Mercado Inspeccion],
  [Codigo de Mercado Inspeccion Alt 1],
  [Fecha Fumigacion],
  [Guia Fumigacion],
  [Certificado Fumigacion],
  [Tipo de Lote (P=Pallet S=Saldo)],
  [Guia Inspeccion SAG],
  Camara,
  Banda,
  [Fila Camara],
  [Piso Camara],
  [Vigencia Produccion],
  [Vigencia SAG],
  [Código Tipo Tratamiento],
  [Tipo Tratamiento],
  [Codigo Productor Etiquetado],
  [Nombre de Productor Etiquetado],
  [Codigo de Variedad Etiquetada],
  [Nombre de Variedad Etiquetada],
  Predio,
  Proceso,
  [Nombre Mercado Inspeccion],
  [Nombre Mercado Inspeccion Alt 1],
  [Nombre de Predio Etiquetado],
  [Nombre de Provincia Etiquetado],
  [Nombre de Comuna Etiquetado],
  OEM,
  [Tipo Nave OEM],
  [Codigo Nave OEM],
  [Nom Mercado1],
  [Nom Mercado 2],
  [Nom Mercado 3],
  [Nom Mercado 4],
  [Origen Pallet],
  [Cod Exportadora],
  [Nom Exportadora],
  [Fecha Cosecha],
  [Codigo Cuartel],
  [Nombre Cuartel],
  [Cod Exportador Cliente],
  [Exportadora Cliente],
  Empresa,
  (
    SELECT
      MIN(FECHA_COSECHA) AS Expr1
    FROM
      Erpfrusys.dbo.TIT_RECEPACK AS t
    WHERE
      (
        PLANILLA = (
          SELECT
            PLANILLA
          FROM
            Erpfrusys.dbo.RECEPACK AS rc
          WHERE
            (
              LOTE = (
                SELECT
                  MIN(LOTE) AS Expr1
                FROM
                  Erpfrusys.dbo.PROCEPACK AS r
                WHERE
                  (ex.Proceso = PLANILLA)
                  AND (COD_EMP = ex.Empresa)
                  AND (COD_TEM = ex.Temporada)
                  AND (TIPOFRU = 'E')
              )
            )
            AND (COD_TEM = ex.Temporada)
            AND (ex.Empresa = COD_EMP)
        )
      )
  ) AS f_cosecha,
  (
    SELECT
      MIN(LOTE) AS Expr1
    FROM
      Erpfrusys.dbo.PROCEPACK AS r
    WHERE
      (ex.Proceso = PLANILLA)
      AND (COD_EMP = ex.Empresa)
      AND (COD_TEM = ex.Temporada)
      AND (TIPOFRU = 'E')
  ) AS lote_ap
FROM
  Erpfrusys.dbo.viewReportesDeExistencia AS ex;