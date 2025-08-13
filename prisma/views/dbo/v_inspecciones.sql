SELECT
  TipoPallet,
  NumeroInspeccion,
  Zona,
  CodigoFrio,
  Mercado1,
  NombreMercado,
  Mercado2,
  Mercado3,
  TipoInspeccion,
  NumeroMixtos,
  [Fecha Inspeccion],
  FEC_FUM,
  CodigoEnvase,
  CodigoEmbalaje,
  CodigoProductorReal,
  CodigoEspecie,
  CodigoVariedad,
  CodigoCalibre,
  CodigoCategoria,
  CodigoPacking,
  Etiqueta,
  Plu,
  NumeroPallet,
  Cajas,
  NombreEspecie,
  NombreVariedad,
  NombreProductorReal,
  [Grupo de Productor],
  NombrePacking,
  NombreFrio,
  EnvaseOperacional,
  PesoNetoEnvase,
  Temporada,
  Empresa,
  CodigoProvincia,
  NombreProvincia,
  CodigoComuna,
  NombreComuna,
  Muestra_Sag,
  [Nombre Comuna Frio],
  [Nombre Provincia Frio],
  [Comuna Frio],
  [Provincia Frio],
  [Nombre Empresa],
  CodigoProductorEtiquetado,
  NombreProductorEtiquetado,
  HORA_INSPECCION,
  CSG,
  [Nom Mercado],
  [Nom Mercado 1],
  [Nom Mercado 2],
  [Nom Mercado 3],
  [Nom Mercado 4],
  [Cod Exportadora],
  [Nom Exportadora],
  [Tipo Fumigacion],
  [Numero Planilla]
FROM
  (
    SELECT
      CASE
        erpfrusys.dbo.INSPECCION.TIPO_LOT
        WHEN 'P' THEN 'Pallet'
        WHEN 'S' THEN 'Pallet'
      END AS TipoPallet,
      Erpfrusys.dbo.INSPECCION.GUIA_SAG AS NumeroInspeccion,
      Erpfrusys.dbo.INSPECCION.ZON AS Zona,
      Erpfrusys.dbo.INSPECCION.COD_FRI AS CodigoFrio,
      Erpfrusys.dbo.INSPECCION.COD_MER AS Mercado1,
      ISNULL(MERCADO_7.NOM_MER, N'') AS NombreMercado,
      Erpfrusys.dbo.INSPECCION.COD_MER1 AS Mercado2,
      Erpfrusys.dbo.INSPECCION.COD_MER2 AS Mercado3,
      Erpfrusys.dbo.INSPECCION.ESTA_FUIN AS TipoInspeccion,
      Erpfrusys.dbo.INSPECCION.NRO_MIX AS NumeroMixtos,
      (
        CASE
          erpfrusys.dbo.INSPECCION.CER_SAG
          WHEN 'SF' THEN ISNULL(
            erpfrusys.dbo.INSPECCION.FEC_FUM,
            erpfrusys.dbo.INSPECCION.FEC_SAG
          )
          ELSE erpfrusys.dbo.INSPECCION.FEC_SAG
        END
      ) AS [Fecha Inspeccion],
      Erpfrusys.dbo.INSPECCION.COD_ENV AS CodigoEnvase,
      Erpfrusys.dbo.INSPECCION.COD_EMB AS CodigoEmbalaje,
      Erpfrusys.dbo.INSPECCION.COD_PRO AS CodigoProductorReal,
      Erpfrusys.dbo.INSPECCION.COD_ESP AS CodigoEspecie,
      Erpfrusys.dbo.INSPECCION.COD_VAR AS CodigoVariedad,
      Erpfrusys.dbo.INSPECCION.COD_CAL AS CodigoCalibre,
      Erpfrusys.dbo.INSPECCION.COD_CAT AS CodigoCategoria,
      Erpfrusys.dbo.INSPECCION.COD_PACK AS CodigoPacking,
      Erpfrusys.dbo.INSPECCION.COD_ETI AS Etiqueta,
      Erpfrusys.dbo.INSPECCION.PLU AS Plu,
      Erpfrusys.dbo.INSPECCION.LOTE AS NumeroPallet,
      Erpfrusys.dbo.INSPECCION.CAJAS AS Cajas,
      Erpfrusys.dbo.ESPECIE.NOM_ESP AS NombreEspecie,
      Erpfrusys.dbo.VARIEDAD.NOM_VAR AS NombreVariedad,
      Erpfrusys.dbo.PRODUCTORES.NOM_PRO AS NombreProductorReal,
      Erpfrusys.dbo.GRUPOSPRODUCTORES.COD_GRP_PRO + ' ' + Erpfrusys.dbo.GRUPOSPRODUCTORES.DESCRIPCION AS [Grupo de Productor],
      Erpfrusys.dbo.PACKINGS.NOM_PACK AS NombrePacking,
      Erpfrusys.dbo.FRIOS.NOM_FRI AS NombreFrio,
      Erpfrusys.dbo.INSPECCION.COD_ENVOP AS EnvaseOperacional,
      Erpfrusys.dbo.ENVASEOPERACIONAL.PESO_NETO AS PesoNetoEnvase,
      Erpfrusys.dbo.INSPECCION.COD_TEM AS Temporada,
      Erpfrusys.dbo.INSPECCION.COD_EMP AS Empresa,
      Erpfrusys.dbo.PRODUCTORES.COD_PROVC AS CodigoProvincia,
      Erpfrusys.dbo.PROVINCIAS.DESCRIPCION AS NombreProvincia,
      Erpfrusys.dbo.PRODUCTORES.COD_COM AS CodigoComuna,
      Erpfrusys.dbo.COMUNAS.DESCRIPCION AS NombreComuna,
      (
        CASE
          erpfrusys.dbo.INSPECCION.MUESTRA_SAG
          WHEN 0 THEN 'NO'
          ELSE 'SI'
        END
      ) AS Muestra_Sag,
      COMUNADOS.DESCRIPCION AS [Nombre Comuna Frio],
      PROVDOS.DESCRIPCION AS [Nombre Provincia Frio],
      Erpfrusys.dbo.FRIOS.COD_COM AS [Comuna Frio],
      Erpfrusys.dbo.FRIOS.COD_PROVC AS [Provincia Frio],
      Erpfrusys.dbo.EMPRESAS.NOM_EMP AS [Nombre Empresa],
      Erpfrusys.dbo.INSPECCION.COD_PRO_ETIQUETADO AS CodigoProductorEtiquetado,
      PROD1.NOM_PRO AS NombreProductorEtiquetado,
      Erpfrusys.dbo.INSPECCION.HORA_INSPECCION,
      Erpfrusys.dbo.INSPECCION.COD_PRE AS CSG,
      (
        SELECT
          NOM_MER
        FROM
          Erpfrusys.dbo.MERCADO
        WHERE
          (COD_EMP = Erpfrusys.dbo.INSPECCION.COD_EMP)
          AND (COD_TEM = Erpfrusys.dbo.INSPECCION.COD_TEM)
          AND (COD_MER = Erpfrusys.dbo.INSPECCION.COD_MER)
      ) AS [Nom Mercado],
      (
        SELECT
          NOM_MER
        FROM
          Erpfrusys.dbo.MERCADO AS MERCADO_11
        WHERE
          (COD_EMP = Erpfrusys.dbo.INSPECCION.COD_EMP)
          AND (COD_TEM = Erpfrusys.dbo.INSPECCION.COD_TEM)
          AND (COD_MER = Erpfrusys.dbo.INSPECCION.COD_MER1)
      ) AS [Nom Mercado 1],
      (
        SELECT
          NOM_MER
        FROM
          Erpfrusys.dbo.MERCADO AS MERCADO_10
        WHERE
          (COD_EMP = Erpfrusys.dbo.INSPECCION.COD_EMP)
          AND (COD_TEM = Erpfrusys.dbo.INSPECCION.COD_TEM)
          AND (COD_MER = Erpfrusys.dbo.INSPECCION.COD_MER2)
      ) AS [Nom Mercado 2],
      (
        SELECT
          NOM_MER
        FROM
          Erpfrusys.dbo.MERCADO AS MERCADO_9
        WHERE
          (COD_EMP = Erpfrusys.dbo.INSPECCION.COD_EMP)
          AND (COD_TEM = Erpfrusys.dbo.INSPECCION.COD_TEM)
          AND (COD_MER = Erpfrusys.dbo.INSPECCION.COD_MER3)
      ) AS [Nom Mercado 3],
      (
        SELECT
          NOM_MER
        FROM
          Erpfrusys.dbo.MERCADO AS MERCADO_8
        WHERE
          (COD_EMP = Erpfrusys.dbo.INSPECCION.COD_EMP)
          AND (COD_TEM = Erpfrusys.dbo.INSPECCION.COD_TEM)
          AND (COD_MER = Erpfrusys.dbo.INSPECCION.COD_MER4)
      ) AS [Nom Mercado 4],
      PX.COD_EXP AS [Cod Exportadora],
      EX.NOM_EXP AS [Nom Exportadora],
      (
        CASE
          erpfrusys.dbo.INSPECCION.SW_PRECAL
          WHEN 1 THEN 'Fruta Pecalentada - '
          ELSE 'Fruta Natural - '
        END
      ) + ISNULL(TF.NOM_TIPO_FUM, N'') AS [Tipo Fumigacion],
      Erpfrusys.dbo.INSPECCION.PLANILLA_SAG AS [Numero Planilla],
      Erpfrusys.dbo.INSPECCION.FEC_FUM
    FROM
      Erpfrusys.dbo.INSPECCION
      JOIN Erpfrusys.dbo.PRODUCTORES ON Erpfrusys.dbo.PRODUCTORES.COD_PRO = Erpfrusys.dbo.INSPECCION.COD_PRO
      AND Erpfrusys.dbo.PRODUCTORES.COD_TEM = Erpfrusys.dbo.INSPECCION.COD_TEM
      AND Erpfrusys.dbo.PRODUCTORES.COD_EMP = Erpfrusys.dbo.INSPECCION.COD_EMP
      JOIN Erpfrusys.dbo.PACKINGS ON Erpfrusys.dbo.INSPECCION.COD_PACK = Erpfrusys.dbo.PACKINGS.COD_PACK
      AND Erpfrusys.dbo.INSPECCION.COD_TEM = Erpfrusys.dbo.PACKINGS.COD_TEM
      AND Erpfrusys.dbo.INSPECCION.COD_EMP = Erpfrusys.dbo.PACKINGS.COD_EMP
      JOIN Erpfrusys.dbo.FRIOS ON Erpfrusys.dbo.INSPECCION.COD_FRI = Erpfrusys.dbo.FRIOS.COD_FRI
      AND Erpfrusys.dbo.INSPECCION.COD_TEM = Erpfrusys.dbo.FRIOS.COD_TEM
      AND Erpfrusys.dbo.INSPECCION.COD_EMP = Erpfrusys.dbo.FRIOS.COD_EMP
      JOIN Erpfrusys.dbo.ENVASE ON Erpfrusys.dbo.INSPECCION.COD_ENV = Erpfrusys.dbo.ENVASE.COD_ENV
      AND Erpfrusys.dbo.INSPECCION.COD_TEM = Erpfrusys.dbo.ENVASE.COD_TEM
      AND Erpfrusys.dbo.INSPECCION.COD_EMP = Erpfrusys.dbo.ENVASE.COD_EMP
      JOIN Erpfrusys.dbo.ESPECIE ON Erpfrusys.dbo.INSPECCION.COD_EMP = Erpfrusys.dbo.ESPECIE.COD_EMP
      AND Erpfrusys.dbo.INSPECCION.COD_TEM = Erpfrusys.dbo.ESPECIE.COD_TEM
      AND Erpfrusys.dbo.INSPECCION.COD_ESP = Erpfrusys.dbo.ESPECIE.COD_ESP
      JOIN Erpfrusys.dbo.VARIEDAD ON Erpfrusys.dbo.INSPECCION.COD_EMP = Erpfrusys.dbo.VARIEDAD.COD_EMP
      AND Erpfrusys.dbo.INSPECCION.COD_TEM = Erpfrusys.dbo.VARIEDAD.COD_TEM
      AND Erpfrusys.dbo.INSPECCION.COD_ESP = Erpfrusys.dbo.VARIEDAD.COD_ESP
      AND Erpfrusys.dbo.INSPECCION.COD_VAR = Erpfrusys.dbo.VARIEDAD.COD_VAR
      JOIN Erpfrusys.dbo.ENVASEOPERACIONAL ON Erpfrusys.dbo.INSPECCION.COD_ESP = Erpfrusys.dbo.ENVASEOPERACIONAL.COD_ESP
      AND Erpfrusys.dbo.INSPECCION.COD_ENV = Erpfrusys.dbo.ENVASEOPERACIONAL.COD_ENV
      AND Erpfrusys.dbo.INSPECCION.COD_EMB = Erpfrusys.dbo.ENVASEOPERACIONAL.COD_EMB
      AND Erpfrusys.dbo.INSPECCION.COD_TEM = Erpfrusys.dbo.ENVASEOPERACIONAL.COD_TEM
      AND Erpfrusys.dbo.INSPECCION.COD_EMP = Erpfrusys.dbo.ENVASEOPERACIONAL.COD_EMP
      LEFT JOIN Erpfrusys.dbo.PRODUCTORES AS PROD1 ON PROD1.COD_PRO = Erpfrusys.dbo.INSPECCION.COD_PRO_ETIQUETADO
      AND PROD1.COD_TEM = Erpfrusys.dbo.INSPECCION.COD_TEM
      AND PROD1.COD_EMP = Erpfrusys.dbo.INSPECCION.COD_EMP
      LEFT JOIN Erpfrusys.dbo.GRUPOSPRODUCTORES ON Erpfrusys.dbo.PRODUCTORES.COD_GRP_PRO = Erpfrusys.dbo.GRUPOSPRODUCTORES.COD_GRP_PRO
      AND Erpfrusys.dbo.PRODUCTORES.COD_EMP = Erpfrusys.dbo.GRUPOSPRODUCTORES.COD_EMP
      AND Erpfrusys.dbo.PRODUCTORES.COD_TEM = Erpfrusys.dbo.GRUPOSPRODUCTORES.COD_TEM
      LEFT JOIN Erpfrusys.dbo.PROVINCIAS ON Erpfrusys.dbo.PRODUCTORES.COD_EMP = Erpfrusys.dbo.PROVINCIAS.COD_EMP
      AND Erpfrusys.dbo.PRODUCTORES.COD_TEM = Erpfrusys.dbo.PROVINCIAS.COD_TEM
      AND Erpfrusys.dbo.PRODUCTORES.COD_PROVC = Erpfrusys.dbo.PROVINCIAS.COD_PROVC
      LEFT JOIN Erpfrusys.dbo.COMUNAS ON Erpfrusys.dbo.PRODUCTORES.COD_EMP = Erpfrusys.dbo.COMUNAS.COD_EMP
      AND Erpfrusys.dbo.PRODUCTORES.COD_TEM = Erpfrusys.dbo.COMUNAS.COD_TEM
      AND Erpfrusys.dbo.PRODUCTORES.COD_COM = Erpfrusys.dbo.COMUNAS.COD_COM
      LEFT JOIN Erpfrusys.dbo.PROVINCIAS AS PROVDOS ON PROVDOS.COD_EMP = Erpfrusys.dbo.FRIOS.COD_EMP
      AND PROVDOS.COD_TEM = Erpfrusys.dbo.FRIOS.COD_TEM
      AND PROVDOS.COD_PROVC = Erpfrusys.dbo.FRIOS.COD_PROVC
      LEFT JOIN Erpfrusys.dbo.COMUNAS AS COMUNADOS ON COMUNADOS.COD_EMP = Erpfrusys.dbo.FRIOS.COD_EMP
      AND COMUNADOS.COD_TEM = Erpfrusys.dbo.FRIOS.COD_TEM
      AND COMUNADOS.COD_COM = Erpfrusys.dbo.FRIOS.COD_COM
      LEFT JOIN Erpfrusys.dbo.EMPRESAS ON Erpfrusys.dbo.EMPRESAS.COD_EMP = Erpfrusys.dbo.INSPECCION.COD_EMP
      LEFT JOIN Erpfrusys.dbo.MERCADO AS MERCADO_7 ON Erpfrusys.dbo.INSPECCION.COD_EMP = MERCADO_7.COD_EMP
      AND Erpfrusys.dbo.INSPECCION.COD_TEM = MERCADO_7.COD_TEM
      AND Erpfrusys.dbo.INSPECCION.COD_MER = MERCADO_7.COD_MER
      LEFT JOIN Erpfrusys.dbo.PRODUCTOR_X_EXPORTADOR AS PX ON PX.COD_EMP = Erpfrusys.dbo.PRODUCTORES.COD_EMP
      AND PX.COD_TEM = Erpfrusys.dbo.PRODUCTORES.COD_TEM
      AND PX.COD_PRO = Erpfrusys.dbo.PRODUCTORES.COD_PRO
      LEFT JOIN Erpfrusys.dbo.EXPORTADORES AS EX ON EX.COD_EMP = PX.COD_EMP
      AND EX.COD_TEM = PX.COD_TEM
      AND EX.COD_EXP = PX.COD_EXP
      LEFT JOIN Erpfrusys.dbo.TIPO_FUMIGACION AS TF ON TF.COD_EMP = Erpfrusys.dbo.INSPECCION.COD_EMP
      AND TF.COD_TEM = Erpfrusys.dbo.INSPECCION.COD_TEM
      AND TF.COD_TIPO_FUM = Erpfrusys.dbo.INSPECCION.COD_TIPO_FUM
    WHERE
      (Erpfrusys.dbo.INSPECCION.NRO_MIX = 0)
    UNION
    ALL
    SELECT
      CASE
        erpfrusys.dbo.MIXINSPECCION.TIPO_LOT
        WHEN 'P' THEN 'Pallet'
        WHEN 'S' THEN 'Pallet'
      END AS TipoPallet,
      Erpfrusys.dbo.MIXINSPECCION.GUIA_SAG AS NumeroInspeccion,
      Erpfrusys.dbo.MIXINSPECCION.ZON AS Zona,
      Erpfrusys.dbo.MIXINSPECCION.COD_FRI AS CodigoFrio,
      Erpfrusys.dbo.MIXINSPECCION.COD_MER AS Mercado1,
      ISNULL(MERCADO_1.NOM_MER, N'') AS NombreMercado,
      Erpfrusys.dbo.MIXINSPECCION.COD_MER1 AS Mercado2,
      Erpfrusys.dbo.MIXINSPECCION.COD_MER2 AS Mercado3,
      Erpfrusys.dbo.MIXINSPECCION.ESTA_FUIN AS TipoInspeccion,
      Erpfrusys.dbo.MIXINSPECCION.NRO_MIX AS NumeroMixtos,
      (
        CASE
          erpfrusys.dbo.MIXINSPECCION.CER_SAG
          WHEN 'SF' THEN ISNULL(
            erpfrusys.dbo.MIXINSPECCION.FEC_FUM,
            erpfrusys.dbo.MIXINSPECCION.FEC_SAG
          )
          ELSE erpfrusys.dbo.MIXINSPECCION.FEC_SAG
        END
      ) AS [Fecha Inspeccion],
      Erpfrusys.dbo.MIXINSPECCION.COD_ENV AS CodigoEnvase,
      Erpfrusys.dbo.MIXINSPECCION.COD_EMB AS CodigoEmbalaje,
      Erpfrusys.dbo.MIXINSPECCION.COD_PRO AS CodigoProductorReal,
      Erpfrusys.dbo.MIXINSPECCION.COD_ESP AS CodigoEspecie,
      Erpfrusys.dbo.MIXINSPECCION.COD_VAR AS CodigoVariedad,
      Erpfrusys.dbo.MIXINSPECCION.COD_CAL AS CodigoCalibre,
      Erpfrusys.dbo.MIXINSPECCION.COD_CAT AS CodigoCategoria,
      Erpfrusys.dbo.MIXINSPECCION.COD_PACK AS CodigoPacking,
      Erpfrusys.dbo.MIXINSPECCION.COD_ETI AS Etiqueta,
      Erpfrusys.dbo.MIXINSPECCION.PLU AS Plu,
      Erpfrusys.dbo.MIXINSPECCION.LOTE AS NumeroPallet,
      Erpfrusys.dbo.MIXINSPECCION.CAJAS AS Cajas,
      ESPECIE_1.NOM_ESP AS NombreEspecie,
      VARIEDAD_1.NOM_VAR AS NombreVariedad,
      PRODUCTORES_1.NOM_PRO AS NombreProductorReal,
      GRUPOSPRODUCTORES_1.COD_GRP_PRO + ' ' + GRUPOSPRODUCTORES_1.DESCRIPCION AS [Grupo de Productor],
      PACKINGS_1.NOM_PACK AS NombrePacking,
      FRIOS_1.NOM_FRI AS NombreFrio,
      Erpfrusys.dbo.MIXINSPECCION.COD_ENVOP AS EnvaseOperacional,
      ENVASEOPERACIONAL_1.PESO_NETO AS PesoNetoEnvase,
      Erpfrusys.dbo.MIXINSPECCION.COD_TEM AS Temporada,
      Erpfrusys.dbo.MIXINSPECCION.COD_EMP AS Empresa,
      PRODUCTORES_1.COD_PROVC AS CodigoProvincia,
      PROVINCIAS_1.DESCRIPCION AS NombreProvincia,
      PRODUCTORES_1.COD_COM AS CodigoComuna,
      COMUNAS_1.DESCRIPCION AS NombreComuna,
      (
        CASE
          erpfrusys.dbo.MIXINSPECCION.MUESTRA_SAG
          WHEN 0 THEN 'NO'
          ELSE 'SI'
        END
      ) AS Muestra_Sag,
      COMUNADOS.DESCRIPCION AS [Nombre Comuna Frio],
      PROVDOS.DESCRIPCION AS [Nombre Provincia Frio],
      FRIOS_1.COD_COM AS [Comuna Frio],
      FRIOS_1.COD_PROVC AS [Provincia Frio],
      EMPRESAS_1.NOM_EMP AS [Nombre Empresa],
      Erpfrusys.dbo.MIXINSPECCION.COD_PRO_ETIQUETADO AS CodigoProductorEtiquetado,
      PROD1.NOM_PRO AS NombreProductorEtiquetado,
      0 AS HORA_INSPECCION,
      Erpfrusys.dbo.MIXINSPECCION.COD_PRE AS CSG,
      (
        SELECT
          NOM_MER
        FROM
          Erpfrusys.dbo.MERCADO AS MERCADO_6
        WHERE
          (COD_EMP = Erpfrusys.dbo.MIXINSPECCION.COD_EMP)
          AND (COD_TEM = Erpfrusys.dbo.MIXINSPECCION.COD_TEM)
          AND (COD_MER = Erpfrusys.dbo.MIXINSPECCION.COD_MER)
      ) AS [Nom Mercado],
      (
        SELECT
          NOM_MER
        FROM
          Erpfrusys.dbo.MERCADO AS MERCADO_5
        WHERE
          (COD_EMP = Erpfrusys.dbo.MIXINSPECCION.COD_EMP)
          AND (COD_TEM = Erpfrusys.dbo.MIXINSPECCION.COD_TEM)
          AND (COD_MER = Erpfrusys.dbo.MIXINSPECCION.COD_MER1)
      ) AS [Nom Mercado 1],
      (
        SELECT
          NOM_MER
        FROM
          Erpfrusys.dbo.MERCADO AS MERCADO_4
        WHERE
          (COD_EMP = Erpfrusys.dbo.MIXINSPECCION.COD_EMP)
          AND (COD_TEM = Erpfrusys.dbo.MIXINSPECCION.COD_TEM)
          AND (COD_MER = Erpfrusys.dbo.MIXINSPECCION.COD_MER2)
      ) AS [Nom Mercado 2],
      (
        SELECT
          NOM_MER
        FROM
          Erpfrusys.dbo.MERCADO AS MERCADO_3
        WHERE
          (COD_EMP = Erpfrusys.dbo.MIXINSPECCION.COD_EMP)
          AND (COD_TEM = Erpfrusys.dbo.MIXINSPECCION.COD_TEM)
          AND (COD_MER = Erpfrusys.dbo.MIXINSPECCION.COD_MER3)
      ) AS [Nom Mercado 3],
      (
        SELECT
          NOM_MER
        FROM
          Erpfrusys.dbo.MERCADO AS MERCADO_2
        WHERE
          (COD_EMP = Erpfrusys.dbo.MIXINSPECCION.COD_EMP)
          AND (COD_TEM = Erpfrusys.dbo.MIXINSPECCION.COD_TEM)
          AND (COD_MER = Erpfrusys.dbo.MIXINSPECCION.COD_MER4)
      ) AS [Nom Mercado 4],
      PX.COD_EXP AS [Cod Exportadora],
      EX.NOM_EXP AS [Nom Exportadora],
      (
        CASE
          erpfrusys.dbo.MIXINSPECCION.SW_PRECAL
          WHEN 1 THEN 'Fruta Pecalentada - '
          ELSE 'Fruta Natural - '
        END
      ) + ISNULL(TF.NOM_TIPO_FUM, N'') AS [Tipo Fumigacion],
      Erpfrusys.dbo.MIXINSPECCION.PLANILLA_SAG AS [Numero Planilla],
      Erpfrusys.dbo.MIXINSPECCION.FEC_FUM
    FROM
      Erpfrusys.dbo.MIXINSPECCION
      JOIN Erpfrusys.dbo.PRODUCTORES AS PRODUCTORES_1 ON PRODUCTORES_1.COD_PRO = Erpfrusys.dbo.MIXINSPECCION.COD_PRO
      AND PRODUCTORES_1.COD_TEM = Erpfrusys.dbo.MIXINSPECCION.COD_TEM
      AND PRODUCTORES_1.COD_EMP = Erpfrusys.dbo.MIXINSPECCION.COD_EMP
      JOIN Erpfrusys.dbo.PACKINGS AS PACKINGS_1 ON Erpfrusys.dbo.MIXINSPECCION.COD_PACK = PACKINGS_1.COD_PACK
      AND Erpfrusys.dbo.MIXINSPECCION.COD_TEM = PACKINGS_1.COD_TEM
      AND Erpfrusys.dbo.MIXINSPECCION.COD_EMP = PACKINGS_1.COD_EMP
      JOIN Erpfrusys.dbo.FRIOS AS FRIOS_1 ON Erpfrusys.dbo.MIXINSPECCION.COD_FRI = FRIOS_1.COD_FRI
      AND Erpfrusys.dbo.MIXINSPECCION.COD_TEM = FRIOS_1.COD_TEM
      AND Erpfrusys.dbo.MIXINSPECCION.COD_EMP = FRIOS_1.COD_EMP
      JOIN Erpfrusys.dbo.ENVASE AS ENVASE_1 ON Erpfrusys.dbo.MIXINSPECCION.COD_ENV = ENVASE_1.COD_ENV
      AND Erpfrusys.dbo.MIXINSPECCION.COD_TEM = ENVASE_1.COD_TEM
      AND Erpfrusys.dbo.MIXINSPECCION.COD_EMP = ENVASE_1.COD_EMP
      JOIN Erpfrusys.dbo.ESPECIE AS ESPECIE_1 ON Erpfrusys.dbo.MIXINSPECCION.COD_EMP = ESPECIE_1.COD_EMP
      AND Erpfrusys.dbo.MIXINSPECCION.COD_TEM = ESPECIE_1.COD_TEM
      AND Erpfrusys.dbo.MIXINSPECCION.COD_ESP = ESPECIE_1.COD_ESP
      JOIN Erpfrusys.dbo.VARIEDAD AS VARIEDAD_1 ON Erpfrusys.dbo.MIXINSPECCION.COD_EMP = VARIEDAD_1.COD_EMP
      AND Erpfrusys.dbo.MIXINSPECCION.COD_TEM = VARIEDAD_1.COD_TEM
      AND Erpfrusys.dbo.MIXINSPECCION.COD_ESP = VARIEDAD_1.COD_ESP
      AND Erpfrusys.dbo.MIXINSPECCION.COD_VAR = VARIEDAD_1.COD_VAR
      JOIN Erpfrusys.dbo.ENVASEOPERACIONAL AS ENVASEOPERACIONAL_1 ON Erpfrusys.dbo.MIXINSPECCION.COD_ESP = ENVASEOPERACIONAL_1.COD_ESP
      AND Erpfrusys.dbo.MIXINSPECCION.COD_ENV = ENVASEOPERACIONAL_1.COD_ENV
      AND Erpfrusys.dbo.MIXINSPECCION.COD_EMB = ENVASEOPERACIONAL_1.COD_EMB
      AND Erpfrusys.dbo.MIXINSPECCION.COD_TEM = ENVASEOPERACIONAL_1.COD_TEM
      AND Erpfrusys.dbo.MIXINSPECCION.COD_EMP = ENVASEOPERACIONAL_1.COD_EMP
      LEFT JOIN Erpfrusys.dbo.PRODUCTORES AS PROD1 ON PROD1.COD_PRO = Erpfrusys.dbo.MIXINSPECCION.COD_PRO_ETIQUETADO
      AND PROD1.COD_TEM = Erpfrusys.dbo.MIXINSPECCION.COD_TEM
      AND PROD1.COD_EMP = Erpfrusys.dbo.MIXINSPECCION.COD_EMP
      LEFT JOIN Erpfrusys.dbo.GRUPOSPRODUCTORES AS GRUPOSPRODUCTORES_1 ON PRODUCTORES_1.COD_GRP_PRO = GRUPOSPRODUCTORES_1.COD_GRP_PRO
      AND PRODUCTORES_1.COD_EMP = GRUPOSPRODUCTORES_1.COD_EMP
      AND PRODUCTORES_1.COD_TEM = GRUPOSPRODUCTORES_1.COD_TEM
      LEFT JOIN Erpfrusys.dbo.PROVINCIAS AS PROVINCIAS_1 ON PRODUCTORES_1.COD_EMP = PROVINCIAS_1.COD_EMP
      AND PRODUCTORES_1.COD_TEM = PROVINCIAS_1.COD_TEM
      AND PRODUCTORES_1.COD_PROVC = PROVINCIAS_1.COD_PROVC
      LEFT JOIN Erpfrusys.dbo.COMUNAS AS COMUNAS_1 ON PRODUCTORES_1.COD_EMP = COMUNAS_1.COD_EMP
      AND PRODUCTORES_1.COD_TEM = COMUNAS_1.COD_TEM
      AND PRODUCTORES_1.COD_COM = COMUNAS_1.COD_COM
      LEFT JOIN Erpfrusys.dbo.PROVINCIAS AS PROVDOS ON PROVDOS.COD_EMP = FRIOS_1.COD_EMP
      AND PROVDOS.COD_TEM = FRIOS_1.COD_TEM
      AND PROVDOS.COD_PROVC = FRIOS_1.COD_PROVC
      LEFT JOIN Erpfrusys.dbo.COMUNAS AS COMUNADOS ON COMUNADOS.COD_EMP = FRIOS_1.COD_EMP
      AND COMUNADOS.COD_TEM = FRIOS_1.COD_TEM
      AND COMUNADOS.COD_COM = FRIOS_1.COD_COM
      LEFT JOIN Erpfrusys.dbo.EMPRESAS AS EMPRESAS_1 ON EMPRESAS_1.COD_EMP = Erpfrusys.dbo.MIXINSPECCION.COD_EMP
      LEFT JOIN Erpfrusys.dbo.MERCADO AS MERCADO_1 ON Erpfrusys.dbo.MIXINSPECCION.COD_EMP = MERCADO_1.COD_EMP
      AND Erpfrusys.dbo.MIXINSPECCION.COD_TEM = MERCADO_1.COD_TEM
      AND Erpfrusys.dbo.MIXINSPECCION.COD_MER = MERCADO_1.COD_MER
      LEFT JOIN Erpfrusys.dbo.PRODUCTOR_X_EXPORTADOR AS PX ON PX.COD_EMP = PRODUCTORES_1.COD_EMP
      AND PX.COD_TEM = PRODUCTORES_1.COD_TEM
      AND PX.COD_PRO = PRODUCTORES_1.COD_PRO
      LEFT JOIN Erpfrusys.dbo.EXPORTADORES AS EX ON EX.COD_EMP = PX.COD_EMP
      AND EX.COD_TEM = PX.COD_TEM
      AND EX.COD_EXP = PX.COD_EXP
      LEFT JOIN Erpfrusys.dbo.TIPO_FUMIGACION AS TF ON TF.COD_EMP = Erpfrusys.dbo.MIXINSPECCION.COD_EMP
      AND TF.COD_TEM = Erpfrusys.dbo.MIXINSPECCION.COD_TEM
      AND TF.COD_TIPO_FUM = Erpfrusys.dbo.MIXINSPECCION.COD_TIPO_FUM
  ) AS U;