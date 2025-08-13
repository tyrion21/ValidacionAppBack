SELECT
  TR.LOTE AS [Numero de Pallet],
  EM.NOM_EMP AS Empresa,
  TR.COD_FRI_DEST AS [Codigo Frio de Arribo],
  FRIOS2.NOM_FRI AS [Nombre Frio de Arribo],
  Erpfrusys.dbo.ESPECIE.NOM_ESP AS [Nombre Especie],
  TR.COD_VAR AS [Cod Variedad],
  Erpfrusys.dbo.VARIEDAD.NOM_VAR AS [Nombre Variedad],
  ISNULL(PK.COD_VAR, TR.COD_VAR) AS [Cod Variedad Packing],
  ISNULL(VR.NOM_VAR, Erpfrusys.dbo.VARIEDAD.NOM_VAR) AS [Nombre Variedad Packing],
  Erpfrusys.dbo.FRIOS.NOM_FRI AS [Nombre Frio],
  Erpfrusys.dbo.PRODUCTORES.NOM_PRO AS [Nombre Productor Real],
  CAST(
    Erpfrusys.dbo.PRODUCTORES.RUT_PRO AS NVARCHAR(10)
  ) + '-' + Erpfrusys.dbo.PRODUCTORES.DV AS [Rut Productor],
  TR.FEC_SAG AS [Fecha Inspeccion],
  PAC.NOM_PACK AS [Nombre Packing],
  ENV.NOM_ENV AS [Tipo Caja],
  TR.COD_TEM AS Temporada,
  TR.COD_EMP AS [Codigo Empresa ],
  TR.ESTA_FUIN AS [Condicion Fitosanitaria],
  TR.TIP_MOV AS [Tipo Movimiento],
  TR.COD_PACK AS [Cod Packing],
  TR.COD_PRO AS [Cod Productor Real],
  TR.COD_FRI AS [Cod Frio],
  TR.COD_ESP AS [Cod Especie],
  TR.TIPO_LOT AS [Tipo Pallet],
  TR.COD_ENV AS [Cod Envase],
  TR.COD_ETI AS [Cod Etiqueta],
  TR.COD_EMB AS [Cod Embalaje],
  EO.COD_ENVOP AS [Cod Envase Operacional],
  EO.DESCRIPCION AS [Nombre Envase Operacional],
  TR.PLU,
  TR.CAJAS,
  TR.COD_CAT AS [Cod Categoria],
  CAT.NOM_CAT AS [Nombre Categoria],
  TR.COD_CAL AS [Cod Calibre],
  TR.ZON AS Zona,
  TR.COD_MER AS [Cod Mercado del Despacho],
  MER1.NOM_MER AS [Nombre Mercado del Despacho],
  TR.TIP_SAG AS [Tipo SAG],
  TR.GUIA_DESP AS [Numero de Despacho],
  TR.FECHA_DESP AS [Fecha Despacho],
  CASE
    MONTH(TR.FECHA_DESP)
    WHEN 1 THEN 'Enero'
    WHEN 2 THEN 'Febrero'
    WHEN 3 THEN 'Marzo'
    WHEN 4 THEN 'Abril'
    WHEN 5 THEN 'Mayo'
    WHEN 6 THEN 'Junio'
    WHEN 7 THEN 'Julio'
    WHEN 8 THEN 'Agosto'
    WHEN 9 THEN 'Septiembre'
    WHEN 10 THEN 'Octubre'
    WHEN 11 THEN 'Noviembre'
    WHEN 12 THEN 'Diciembre'
  END AS [Mes Despacho],
  TR.TIPO_CAMION AS [Tipo Camion],
  TR.GUIA_DES AS [Guia Despachos],
  TR.COD_TRP AS [Cod Transportista],
  TR.COD_BP AS [Base de Pallet],
  TR.PATENTE,
  Erpfrusys.dbo.PRODUCTORES.COD_GRP_PRO AS [Grupo Productor],
  TR.FECHA_PAC AS [Fecha Packing],
  TR.FECHA_RPA AS [Fecha Recepcion],
  EO.PESO_NETO AS [Peso Neto Envase Operacional],
  EO.PESO_BRUTO AS [Kilos Brutos Envase Operacional],
  (
    SELECT
      TOP (1) NOM_TRP
    FROM
      Erpfrusys.dbo.TRANSPORTISTAS AS TP
    WHERE
      (TR.COD_EMP = COD_EMP)
      AND (TR.COD_TEM = COD_TEM)
      AND (TR.COD_TRP = COD_TRP)
  ) AS [Nombre Transportista],
  (
    SELECT
      TOP (1) COD_CAL_EQ
    FROM
      Erpfrusys.dbo.CALIBRES_EQUIVALENTES AS CE
    WHERE
      (TR.COD_EMP = COD_EMP)
      AND (TR.COD_TEM = COD_TEM)
      AND (TR.COD_ESP = COD_ESP)
      AND (TR.COD_ENVOP = COD_ENVOP)
      AND (TR.COD_CAL = COD_CAL)
  ) AS [Calibre Equivalente],
  Erpfrusys.dbo.PRODUCTORES.COD_PROVC AS [Codigo Provincia],
  PROV.DESCRIPCION AS [Nombre Provincia],
  Erpfrusys.dbo.PRODUCTORES.COD_COM AS [Codigo Comuna],
  COM.DESCRIPCION AS [Nombre Comuna],
  TR.CHOFER AS [Nombre Chofer],
  TR.RUT_CHOFER AS [Rut Chofer],
  GP.DESCRIPCION AS [Nombre Grupo Productor],
  TR.FOLIO_SAG AS [Folio SAG],
  ISNULL(TR.CER_FUM, N' ') AS [Certificado de Fumigación],
  CAL.COD_GRP_CAL AS [Cod Grupo Calibre],
  GRCAL.DESCRIPCION AS [Grupo Calibre],
  ISNULL(
    (
      SELECT
        TOP (1) EQUIVALENTE
      FROM
        Erpfrusys.dbo.CONVERSION_CALIBRE AS CA
      WHERE
        (COD_EMP = TR.COD_EMP)
        AND (COD_TEM = TR.COD_TEM)
        AND (COD_ESP = TR.COD_ESP)
        AND (COD_VAR = TR.COD_VAR)
        AND (COD_CAL = TR.COD_CAL)
        AND (PESO_NETO = EO.PESO_NETO)
        AND (EQUIVALENTE <> '')
        OR (COD_EMP = TR.COD_EMP)
        AND (COD_TEM = TR.COD_TEM)
        AND (COD_ESP = TR.COD_ESP)
        AND (COD_VAR = TR.COD_VAR)
        AND (COD_CAL = TR.COD_CAL)
        AND (PESO_NETO = EO.PESO_NETO)
        AND (MILIMETRAJE <> '')
        OR (COD_EMP = TR.COD_EMP)
        AND (COD_TEM = TR.COD_TEM)
        AND (COD_ESP = TR.COD_ESP)
        AND (COD_VAR = TR.COD_VAR)
        AND (COD_CAL = TR.COD_CAL)
        AND (PESO_NETO = EO.PESO_NETO)
        AND (GRAMOS <> '')
    ),
    NULL
  ) AS [Calibre equivalente Conversion],
  ISNULL(
    (
      SELECT
        TOP (1) MILIMETRAJE
      FROM
        Erpfrusys.dbo.CONVERSION_CALIBRE AS CA
      WHERE
        (COD_EMP = TR.COD_EMP)
        AND (COD_TEM = TR.COD_TEM)
        AND (COD_ESP = TR.COD_ESP)
        AND (COD_VAR = TR.COD_VAR)
        AND (COD_CAL = TR.COD_CAL)
        AND (PESO_NETO = EO.PESO_NETO)
        AND (EQUIVALENTE <> '')
        OR (COD_EMP = TR.COD_EMP)
        AND (COD_TEM = TR.COD_TEM)
        AND (COD_ESP = TR.COD_ESP)
        AND (COD_VAR = TR.COD_VAR)
        AND (COD_CAL = TR.COD_CAL)
        AND (PESO_NETO = EO.PESO_NETO)
        AND (MILIMETRAJE <> '')
        OR (COD_EMP = TR.COD_EMP)
        AND (COD_TEM = TR.COD_TEM)
        AND (COD_ESP = TR.COD_ESP)
        AND (COD_VAR = TR.COD_VAR)
        AND (COD_CAL = TR.COD_CAL)
        AND (PESO_NETO = EO.PESO_NETO)
        AND (GRAMOS <> '')
    ),
    NULL
  ) AS [Milimetraje Conversion],
  ISNULL(
    (
      SELECT
        TOP (1) GRAMOS
      FROM
        Erpfrusys.dbo.CONVERSION_CALIBRE AS CA
      WHERE
        (COD_EMP = TR.COD_EMP)
        AND (COD_TEM = TR.COD_TEM)
        AND (COD_ESP = TR.COD_ESP)
        AND (COD_VAR = TR.COD_VAR)
        AND (COD_CAL = TR.COD_CAL)
        AND (PESO_NETO = EO.PESO_NETO)
        AND (EQUIVALENTE <> '')
        OR (COD_EMP = TR.COD_EMP)
        AND (COD_TEM = TR.COD_TEM)
        AND (COD_ESP = TR.COD_ESP)
        AND (COD_VAR = TR.COD_VAR)
        AND (COD_CAL = TR.COD_CAL)
        AND (PESO_NETO = EO.PESO_NETO)
        AND (MILIMETRAJE <> '')
        OR (COD_EMP = TR.COD_EMP)
        AND (COD_TEM = TR.COD_TEM)
        AND (COD_ESP = TR.COD_ESP)
        AND (COD_VAR = TR.COD_VAR)
        AND (COD_CAL = TR.COD_CAL)
        AND (PESO_NETO = EO.PESO_NETO)
        AND (GRAMOS <> '')
    ),
    NULL
  ) AS [Gramo Conversion],
  ISNULL(TR.COD_TIPO_TRA, N'') AS [Cod Tipo Tratamiento],
  ISNULL(TT.DESCRIPCION, N'') AS [Tipo Tratamiento],
  TR.COD_PRO_ETIQUETADO AS [Cod Productor Etiquetado],
  PROD1.NOM_PRO AS [Nombre Productor Etiquetado],
  ISNULL(PRE.COD_PRE, N'') AS [Codigo Predio],
  ISNULL(PRE.DESCRIPCION, N'') AS [Nombre Predio],
  ETI.NOM_ETI AS [Nombre Etiqueta],
  PX.COD_EXP AS [Cod Exportadora],
  EX.NOM_EXP AS [Nom Exportadora],
  TR.COD_CUA,
  (
    SELECT
      TOP (1) COD_INSCRIPCION
    FROM
      Erpfrusys.dbo.PREDIOS_INSPECCION AS pi
    WHERE
      (TR.COD_CUA = COD_CUA)
      AND (TR.COD_PRE = COD_PRE)
  ) AS SDP,
  (
    SELECT
      MAX(PLANILLA_SAG) AS Expr1
    FROM
      Erpfrusys.dbo.INSPECCION AS I
    WHERE
      (LOTE = TR.LOTE)
      AND (TR.COD_EMP = COD_EMP)
      AND (TR.COD_TEM = COD_TEM)
  ) AS NRO_INSPECCION,
  (
    SELECT
      CONVERT(VARCHAR, MAX(FEC_SAG), 103) AS Expr1
    FROM
      Erpfrusys.dbo.INSPECCION AS I
    WHERE
      (LOTE = TR.LOTE)
      AND (TR.COD_EMP = COD_EMP)
      AND (TR.COD_TEM = COD_TEM)
  ) AS FECHA_INSPECCION,
  (
    SELECT
      TOP (1) NOM_MER
    FROM
      Erpfrusys.dbo.MERCADO AS MM
    WHERE
      (COD_TEM = '5')
      AND (COD_EMP = 'MER')
      AND (
        COD_MER = (
          SELECT
            TOP (1) COD_MER AS Expr1
          FROM
            Erpfrusys.dbo.INSPECCION AS I
          WHERE
            (LOTE = TR.LOTE)
            AND (TR.COD_EMP = COD_EMP)
            AND (TR.COD_TEM = COD_TEM)
        )
      )
  ) AS MERCADO_SAG,
  (
    SELECT
      TOP (1) PLANILLA
    FROM
      Erpfrusys.dbo.PROPACKLOTE AS pro
    WHERE
      (TR.LOTE = LOTE)
  ) AS proceso,
  TR.DESPACHADOR,
  TR.SELLOS,
  TR.UBICACION
FROM
  (
    SELECT
      GUIA_DESP,
      COD_TEM,
      COD_EMP,
      ESTA_FUIN,
      TIP_MOV,
      FECHA_PAC,
      FECHA_RPA,
      GUIA,
      COD_PACK,
      COD_PRO,
      COD_FRI,
      COD_FRI_DEST,
      COD_ESP,
      COD_VAR,
      HORA_REC,
      CONDICION,
      TIP_LOT,
      ALTURA,
      TIPO_LOT,
      LOTE,
      COD_ENV,
      COD_ETI,
      COD_EMB,
      COD_ENVOP,
      PLU,
      CAJAS,
      CAJ_BAS,
      COD_CAT,
      COD_CAL,
      TEMP_PAC,
      TEMP_DES,
      NRO_MIX,
      COD_MER,
      ZON,
      ZON_DEST,
      FECHA_DESP,
      TIPO_CAMION,
      ESTADO_FRU,
      GUIA_DES,
      TIPO_TRANSP,
      COD_TRP,
      PATENTE,
      HORA_PRE,
      RUT_CHOFER,
      CHOFER,
      COD_BP,
      COD_MOV_DES,
      OBSERVACION,
      DESPACHADOR,
      COD_PRO_ETIQUETADO,
      FEC_SAG,
      CER_FUM,
      COD_TIPO_TRA,
      COD_PRE,
      FOLIO_SAG,
      TIP_SAG,
      COD_CUA,
      SELLOS,
      UBICACION
    FROM
      Erpfrusys.dbo.TRASLADOS
    WHERE
      (NRO_MIX = 0)
    UNION
    ALL
    SELECT
      GUIA_DESP,
      COD_TEM,
      COD_EMP,
      ESTA_FUIN,
      TIP_MOV,
      FECHA_PAC,
      FECHA_RPA,
      GUIA,
      COD_PACK,
      COD_PRO,
      COD_FRI,
      COD_FRI_DEST,
      COD_ESP,
      COD_VAR,
      HORA_REC,
      CONDICION,
      TIP_LOT,
      ALTURA,
      TIPO_LOT,
      LOTE,
      COD_ENV,
      COD_ETI,
      COD_EMB,
      COD_ENVOP,
      PLU,
      SUM(CAJAS) AS CAJAS,
      CAJ_BAS,
      COD_CAT,
      COD_CAL,
      TEMP_PAC,
      TEMP_DES,
      NRO_MIX,
      COD_MER,
      ZON,
      ZON_DEST,
      FECHA_DESP,
      TIPO_CAMION,
      ESTADO_FRU,
      GUIA_DES,
      TIPO_TRANSP,
      COD_TRP,
      PATENTE,
      HORA_PRE,
      RUT_CHOFER,
      CHOFER,
      COD_BP,
      COD_MOV_DES,
      OBSERVACION,
      DESPACHADOR,
      COD_PRO_ETIQUETADO,
      FEC_SAG,
      CER_FUM,
      COD_TIPO_TRA,
      COD_PRE,
      FOLIO_SAG,
      TIP_SAG,
      COD_CUA,
      SELLOS,
      UBICACION
    FROM
      Erpfrusys.dbo.MIXTRASLADOS
    GROUP BY
      GUIA_DESP,
      COD_TEM,
      COD_EMP,
      ESTA_FUIN,
      TIP_MOV,
      FECHA_PAC,
      FECHA_RPA,
      GUIA,
      COD_PACK,
      COD_PRO,
      COD_FRI,
      COD_FRI_DEST,
      COD_ESP,
      COD_VAR,
      HORA_REC,
      CONDICION,
      TIP_LOT,
      ALTURA,
      TIPO_LOT,
      LOTE,
      COD_ENV,
      COD_ETI,
      COD_EMB,
      COD_ENVOP,
      PLU,
      CAJ_BAS,
      COD_CAT,
      COD_CAL,
      TEMP_PAC,
      TEMP_DES,
      NRO_MIX,
      COD_MER,
      ZON,
      ZON_DEST,
      FECHA_DESP,
      TIPO_CAMION,
      ESTADO_FRU,
      GUIA_DES,
      TIPO_TRANSP,
      COD_TRP,
      PATENTE,
      HORA_PRE,
      RUT_CHOFER,
      CHOFER,
      COD_BP,
      COD_MOV_DES,
      OBSERVACION,
      DESPACHADOR,
      COD_PRO_ETIQUETADO,
      FEC_SAG,
      CER_FUM,
      COD_TIPO_TRA,
      COD_PRE,
      FOLIO_SAG,
      TIP_SAG,
      COD_CUA,
      SELLOS,
      UBICACION
  ) AS TR
  JOIN Erpfrusys.dbo.ZONAS ON TR.ZON = Erpfrusys.dbo.ZONAS.ZON
  AND TR.COD_TEM = Erpfrusys.dbo.ZONAS.COD_TEM
  AND TR.COD_EMP = Erpfrusys.dbo.ZONAS.COD_EMP
  JOIN Erpfrusys.dbo.ZONAS AS ZONAS2 ON TR.ZON_DEST = ZONAS2.ZON
  AND TR.COD_TEM = ZONAS2.COD_TEM
  AND TR.COD_EMP = ZONAS2.COD_EMP
  LEFT JOIN Erpfrusys.dbo.ENVASEOPERACIONAL AS ENVOP ON TR.COD_TEM = ENVOP.COD_TEM
  AND TR.COD_EMP = ENVOP.COD_EMP
  AND TR.COD_ESP = ENVOP.COD_ESP
  AND TR.COD_ENV = ENVOP.COD_ENV
  AND TR.COD_EMB = ENVOP.COD_EMB
  JOIN Erpfrusys.dbo.FRIOS ON TR.COD_FRI = Erpfrusys.dbo.FRIOS.COD_FRI
  AND TR.COD_TEM = Erpfrusys.dbo.FRIOS.COD_TEM
  AND TR.COD_EMP = Erpfrusys.dbo.FRIOS.COD_EMP
  JOIN Erpfrusys.dbo.FRIOS AS FRIOS2 ON TR.COD_FRI_DEST = FRIOS2.COD_FRI
  AND TR.COD_TEM = FRIOS2.COD_TEM
  AND TR.COD_EMP = FRIOS2.COD_EMP
  JOIN Erpfrusys.dbo.PRODUCTORES ON TR.COD_PRO = Erpfrusys.dbo.PRODUCTORES.COD_PRO
  AND TR.COD_TEM = Erpfrusys.dbo.PRODUCTORES.COD_TEM
  AND TR.COD_EMP = Erpfrusys.dbo.PRODUCTORES.COD_EMP
  JOIN Erpfrusys.dbo.ESPECIE ON TR.COD_ESP = Erpfrusys.dbo.ESPECIE.COD_ESP
  AND TR.COD_TEM = Erpfrusys.dbo.ESPECIE.COD_TEM
  AND TR.COD_EMP = Erpfrusys.dbo.ESPECIE.COD_EMP
  JOIN Erpfrusys.dbo.ENVASE ON TR.COD_ENV = Erpfrusys.dbo.ENVASE.COD_ENV
  AND TR.COD_TEM = Erpfrusys.dbo.ENVASE.COD_TEM
  AND TR.COD_EMP = Erpfrusys.dbo.ENVASE.COD_EMP
  JOIN Erpfrusys.dbo.VARIEDAD ON Erpfrusys.dbo.VARIEDAD.COD_VAR = TR.COD_VAR
  AND Erpfrusys.dbo.VARIEDAD.COD_ESP = TR.COD_ESP
  AND Erpfrusys.dbo.VARIEDAD.COD_TEM = TR.COD_TEM
  AND Erpfrusys.dbo.VARIEDAD.COD_EMP = TR.COD_EMP
  JOIN Erpfrusys.dbo.PACKINGS ON TR.COD_PACK = Erpfrusys.dbo.PACKINGS.COD_PACK
  AND TR.COD_TEM = Erpfrusys.dbo.PACKINGS.COD_TEM
  AND TR.COD_EMP = Erpfrusys.dbo.PACKINGS.COD_EMP
  LEFT JOIN Erpfrusys.dbo.PREDIOS ON TR.COD_EMP = Erpfrusys.dbo.PREDIOS.COD_EMP
  AND TR.COD_TEM = Erpfrusys.dbo.PREDIOS.COD_TEM
  AND ISNULL(TR.COD_PRO_ETIQUETADO, TR.COD_PRO) = Erpfrusys.dbo.PREDIOS.COD_PRO
  AND TR.COD_PRE = Erpfrusys.dbo.PREDIOS.COD_PRE
  LEFT JOIN Erpfrusys.dbo.PRODUCTORES AS PROD1 ON Erpfrusys.dbo.PREDIOS.COD_PRO = PROD1.COD_PRO
  AND Erpfrusys.dbo.PREDIOS.COD_TEM = PROD1.COD_TEM
  AND Erpfrusys.dbo.PREDIOS.COD_EMP = PROD1.COD_EMP
  AND TR.COD_PRO_ETIQUETADO = PROD1.COD_PRO
  AND TR.COD_TEM = PROD1.COD_TEM
  AND TR.COD_EMP = PROD1.COD_EMP
  LEFT JOIN Erpfrusys.dbo.PROPACKLOTE AS PK ON TR.COD_EMP = PK.COD_EMP
  AND TR.COD_TEM = PK.COD_TEM
  AND TR.ZON = PK.ZON
  AND TR.LOTE = PK.LOTE
  LEFT JOIN Erpfrusys.dbo.VARIEDAD AS VR ON VR.COD_EMP = PK.COD_EMP
  AND VR.COD_TEM = PK.COD_TEM
  AND VR.COD_ESP = PK.COD_ESP
  AND VR.COD_VAR = PK.COD_VAR
  LEFT JOIN Erpfrusys.dbo.PACKINGS AS PAC ON TR.COD_PACK = PAC.COD_PACK
  AND TR.COD_TEM = PAC.COD_TEM
  AND TR.COD_EMP = PAC.COD_EMP
  LEFT JOIN Erpfrusys.dbo.ENVASE AS ENV ON TR.COD_EMP = ENV.COD_EMP
  AND TR.COD_TEM = ENV.COD_TEM
  AND TR.COD_ENV = ENV.COD_ENV
  LEFT JOIN Erpfrusys.dbo.ENVASEOPERACIONAL AS EO ON TR.COD_EMP = EO.COD_EMP
  AND TR.COD_TEM = EO.COD_TEM
  AND TR.COD_ESP = EO.COD_ESP
  AND TR.COD_ENV = EO.COD_ENV
  AND TR.COD_EMB = EO.COD_EMB
  LEFT JOIN Erpfrusys.dbo.CATEGORIA AS CAT ON CAT.COD_EMP = TR.COD_EMP
  AND CAT.COD_TEM = TR.COD_TEM
  AND CAT.COD_CAT = TR.COD_CAT
  AND CAT.COD_ESP = TR.COD_ESP
  LEFT JOIN Erpfrusys.dbo.MERCADO AS MER1 ON TR.COD_MER = MER1.COD_MER
  AND TR.COD_TEM = MER1.COD_TEM
  AND TR.COD_EMP = MER1.COD_EMP
  LEFT JOIN Erpfrusys.dbo.PROVINCIAS AS PROV ON Erpfrusys.dbo.PRODUCTORES.COD_EMP = PROV.COD_EMP
  AND Erpfrusys.dbo.PRODUCTORES.COD_TEM = PROV.COD_TEM
  AND Erpfrusys.dbo.PRODUCTORES.COD_PROVC = PROV.COD_PROVC
  LEFT JOIN Erpfrusys.dbo.COMUNAS AS COM ON Erpfrusys.dbo.PRODUCTORES.COD_EMP = COM.COD_EMP
  AND Erpfrusys.dbo.PRODUCTORES.COD_TEM = COM.COD_TEM
  AND Erpfrusys.dbo.PRODUCTORES.COD_COM = COM.COD_COM
  LEFT JOIN Erpfrusys.dbo.GRUPOSPRODUCTORES AS GP ON GP.COD_EMP = Erpfrusys.dbo.PRODUCTORES.COD_EMP
  AND GP.COD_TEM = Erpfrusys.dbo.PRODUCTORES.COD_TEM
  AND GP.COD_GRP_PRO = Erpfrusys.dbo.PRODUCTORES.COD_GRP_PRO
  JOIN Erpfrusys.dbo.CALIBRES AS CAL ON CAL.COD_EMP = TR.COD_EMP
  AND CAL.COD_TEM = TR.COD_TEM
  AND CAL.COD_ESP = TR.COD_ESP
  AND CAL.COD_CAL = TR.COD_CAL
  LEFT JOIN Erpfrusys.dbo.GRUPOSCALIBRES AS GRCAL ON GRCAL.COD_EMP = CAL.COD_EMP
  AND GRCAL.COD_TEM = CAL.COD_TEM
  AND GRCAL.COD_GRP_CAL = CAL.COD_GRP_CAL
  LEFT JOIN Erpfrusys.dbo.TIPO_TRATAMIENTO AS TT ON TR.COD_TEM = TT.COD_TEM
  AND TR.COD_EMP = TT.COD_EMP
  AND TR.COD_ESP = TT.COD_ESP
  AND TR.COD_TIPO_TRA = TT.COD_TIPO_TRA
  LEFT JOIN Erpfrusys.dbo.PREDIOS AS PRE ON PRE.COD_EMP = TR.COD_EMP
  AND PRE.COD_TEM = TR.COD_TEM
  AND PRE.COD_PRO = PROD1.COD_PRO
  AND PRE.COD_PRE = TR.COD_PRE
  LEFT JOIN Erpfrusys.dbo.ETIQUETA AS ETI ON TR.COD_EMP = ETI.COD_EMP
  AND TR.COD_TEM = ETI.COD_TEM
  AND TR.COD_ETI = ETI.COD_ETI
  LEFT JOIN Erpfrusys.dbo.EMPRESAS AS EM ON TR.COD_EMP = EM.COD_EMP
  LEFT JOIN Erpfrusys.dbo.PRODUCTOR_X_EXPORTADOR AS PX ON PX.COD_EMP = Erpfrusys.dbo.PRODUCTORES.COD_EMP
  AND PX.COD_TEM = Erpfrusys.dbo.PRODUCTORES.COD_TEM
  AND PX.COD_PRO = Erpfrusys.dbo.PRODUCTORES.COD_PRO
  LEFT JOIN Erpfrusys.dbo.EXPORTADORES AS EX ON EX.COD_EMP = PX.COD_EMP
  AND EX.COD_TEM = PX.COD_TEM
  AND EX.COD_EXP = PX.COD_EXP;