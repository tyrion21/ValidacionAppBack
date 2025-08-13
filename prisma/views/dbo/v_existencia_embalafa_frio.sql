SELECT
  E.COD_EMP AS Empresa,
  E.COD_TEM AS Temporada,
  E.ZON AS Zona,
  E.COD_FRI AS [Codigo Frio],
  FR.NOM_FRI AS [Nombre de Frio],
  E.ESTA_FUIN + ISNULL(
    '+' + (
      CASE
        E.ESTA_FUIN
        WHEN 'SF' THEN NULL
        ELSE FUM.ESTA_FUIN
      END
    ),
    N''
  ) AS [Codigo Estado Fitosanitario],
  (
    CASE
      E.ESTA_FUIN
      WHEN 'AN' THEN 'SIN CONDICION'
      ELSE TS.NOM_TSAG + ISNULL(
        '+' + (
          CASE
            E.ESTA_FUIN
            WHEN 'SF' THEN NULL
            ELSE TSF.NOM_TSAG
          END
        ),
        N''
      )
    END
  ) AS [Estado Fitosanitario],
  E.NRO_MIX AS [Numero de Mixtos],
  E.ALTURA AS [Altura del Pallet],
  E.TEMP_PAC AS Temperatura,
  E.PLANILLA AS [Planilla de Recepcion],
  SUBSTRING(
    '0' + CAST(DAY(E.FECHA_PAC) AS NVARCHAR(2))
    FROM
      len('0' + CAST(DAY(E.FECHA_PAC) AS NVARCHAR(2))) - 1 FOR 2
  ) + '-' + SUBSTRING(
    '0' + CAST(MONTH(E.FECHA_PAC) AS NVARCHAR(2))
    FROM
      len('0' + CAST(MONTH(E.FECHA_PAC) AS NVARCHAR(2))) - 1 FOR 2
  ) + '-' + CAST(year(E.FECHA_PAC) AS NVARCHAR(4)) AS [Fecha de Packing],
  E.FECHA_RPA AS [Fecha de Recepcion],
  E.GUIA AS [Guia SII],
  E.COD_ENV AS [Codigo de Envase],
  ENV.NOM_ENV AS [Nombre de Envase],
  E.COD_EMB AS [Codigo de Embalaje],
  E.COD_PRO AS [Codigo de Productor Real],
  P.NOM_PRO AS [Nombre de Productor Real],
  E.COD_ESP AS [Codigo de Especie],
  ESP.NOM_ESP AS [Nombre de Especie],
  E.COD_VAR AS [Codigo de Variedad Real],
  V.NOM_VAR AS [Nombre de Variedad Real],
  ISNULL(E.COD_VAR_ETI, N'') AS [Codigo de Variedad Etiquetada],
  ISNULL(VE.NOM_VAR, N'') AS [Nombre de Variedad Etiquetada],
  E.COD_CAL AS [Codigo de Calibre],
  E.COD_CAT AS [Codigo de Categoria],
  CAT.NOM_CAT AS [Nombre de Categoria],
  E.COD_PACK AS [Codigo de Packing],
  PK.NOM_PACK AS [Nombre de Packing],
  E.COD_ETI + ' ' + ETI.NOM_ETI AS Etiqueta,
  E.PLU AS [Indicador PLU],
  E.LOTE AS [Numero de Pallet],
  E.CAJAS AS [Cantidad de Cajas],
  E.CAJAS * EO.PESO_NETO / ISNULL(
    (
      SELECT
        TOP (1) PESO_NETO
      FROM
        erpfrusys.dbo.ENVASEOPERACIONAL AS OP
      WHERE
        (COD_EMP = E.COD_EMP)
        AND (COD_TEM = E.COD_TEM)
        AND (COD_ESP = E.COD_ESP)
        AND (ESP.COD_ENV = COD_ENVOP)
    ),
    1
  ) AS [Equivalente en Cajas Base],
  E.COD_ENVOP AS [Codigo de Envase Operacional],
  EO.DESCRIPCION AS [Nombre de Envase Operacional],
  EO.PESO_NETO AS [Peso Neto Envase Operacional],
  (
    SELECT
      TOP (1) COD_CAL_EQ
    FROM
      erpfrusys.dbo.CALIBRES_EQUIVALENTES AS CE
    WHERE
      (E.COD_EMP = COD_EMP)
      AND (E.COD_TEM = COD_TEM)
      AND (E.COD_ESP = COD_ESP)
      AND (E.COD_ENVOP = COD_ENVOP)
      AND (E.COD_CAL = COD_CAL)
  ) AS [Calibre Equivalente],
  BP.DESCRIPCION AS [Base Pallet],
  GRP.COD_GRP_PRO AS [Codigo Grupo de Productores],
  GRP.DESCRIPCION AS [Descripcion Grupo de Productores],
  E.COD_EXP AS [Codigo Grupo de Exportadores],
  EX.NOM_EXP AS [Descripcion Grupo de Exportadores],
  P.COD_PRO_PADRE AS [Codigo Productor Padre],
  P2.NOM_PRO AS [Nombre Productor Padre],
  (
    CASE
      ISNULL(RES.PLANILLA, 0)
      WHEN 0 THEN 'Pallet No Reservado'
      ELSE 'Pallet Reservado'
    END
  ) AS [Pallet Reservado],
  RES.GLOSA AS [Glosa Reserva Pallet],
  RES.COD_MER AS [Mercado Reserva Pallet],
  P.COD_PROVC + ' ' + erpfrusys.dbo.PROVINCIAS.DESCRIPCION AS Provincia,
  P.COD_COM + ' ' + erpfrusys.dbo.COMUNAS.DESCRIPCION AS Comuna,
  ISNULL(
    (
      SELECT
        (
          CASE
            CTRL.ESTADO
            WHEN 0 THEN 'Control de Calidad: Aprobado'
            ELSE 'Control de Calidad: Rechazado'
          END
        ) AS Expr1
      FROM
        erpfrusys.dbo.CTRL_TIT_DATOS AS CTRL
        JOIN erpfrusys.dbo.CTRL_NOTAS AS CTRN ON CTRL.COD_EMP = CTRN.COD_EMP
        AND CTRL.COD_TEM = CTRN.COD_TEM
        AND CTRL.ZON = CTRN.ZON
        AND CTRL.TIPO = CTRN.TIPO
        AND CTRL.LOTE = CTRN.LOTE
      WHERE
        (CTRN.COD_EMP = E.COD_EMP)
        AND (CTRN.COD_TEM = E.COD_TEM)
        AND (CTRN.ZON = E.ZON)
        AND (CTRN.LOTE = E.LOTE)
    ),
    N'Sin Control de Calidad'
  ) AS [Control de Calidad],
  ISNULL(
    (
      SELECT
        TOP (1) NOTA
      FROM
        erpfrusys.dbo.CTRL_NOTAS AS CTRN
      WHERE
        (COD_EMP = E.COD_EMP)
        AND (COD_TEM = E.COD_TEM)
        AND (ZON = E.ZON)
        AND (LOTE = E.LOTE)
    ),
    NULL
  ) AS [Nota Control de Calidad],
  ISNULL(TF.NOM_TIPO_FUM, N'NINGUNO') AS [Producto de Fumigacion],
  CAL.COD_GRP_CAL AS [Codigo Grupo Calibre],
  GC.DESCRIPCION AS [Descripcion Grupo de Calibre],
  CAT.COD_GRP_CAT AS [Codigo Grupo Categoria],
  GCAT.DESCRIPCION AS [Descripcion Grupo de Categoria],
  EO.COD_GRP_ENVOP AS [Codigo Grupo Env.Op.],
  GEO.DESCRIPCION AS [Descripcion Grupo de Env.Op.],
  (
    CASE
      WHEN E.ESTA_FUIN = 'O'
      OR E.ESTA_FUIN = 'U' THEN E.COD_MER
      ELSE ''
    END
  ) AS [Codigo de Mercado Inspeccion],
  isnull(
    (
      SELECT
        nom_mer
      FROM
        erpfrusys.dbo.mercado AS mer
      WHERE
        e.cod_emp = mer.cod_emp
        AND e.cod_tem = mer.COD_TEM
        AND mer.cod_mer = (
          CASE
            WHEN E.ESTA_FUIN = 'O'
            OR E.ESTA_FUIN = 'U' THEN E.COD_MER
            ELSE ''
          END
        )
    ),
    ''
  ) AS [Nombre Mercado Inspeccion],
  (
    CASE
      WHEN E.ESTA_FUIN = 'O'
      OR E.ESTA_FUIN = 'U' THEN E.COD_MER1
      ELSE ''
    END
  ) AS [Codigo de Mercado Inspeccion Alt 1],
  isnull(
    (
      SELECT
        nom_mer
      FROM
        erpfrusys.dbo.mercado AS mer
      WHERE
        e.cod_emp = mer.cod_emp
        AND e.cod_tem = mer.COD_TEM
        AND mer.cod_mer = (
          CASE
            WHEN E.ESTA_FUIN = 'O'
            OR E.ESTA_FUIN = 'U' THEN E.COD_MER1
            ELSE ''
          END
        )
    ),
    ''
  ) AS [Nombre Mercado Inspeccion Alt 1],
  (
    CASE
      WHEN E.ESTA_FUIN = 'O'
      OR E.ESTA_FUIN = 'U' THEN E.COD_MER2
      ELSE ''
    END
  ) AS [Codigo de Mercado Inspeccion Alt 2],
  E.FEC_FUM AS [Fecha Fumigacion],
  E.GUIA_FUM AS [Guia Fumigacion],
  E.CER_FUM AS [Certificado Fumigacion],
  E.TIPO_LOT AS [Tipo de Lote (P=Pallet S=Saldo)],
  E.GUIA_SAG AS [Guia Inspeccion SAG],
  ISNULL(
    E.COD_CAM + ' ' + erpfrusys.dbo.CAMARAS.DES_CAM,
    N'Ninguno'
  ) AS Camara,
  ISNULL(
    E.COD_BANDA + ' ' + erpfrusys.dbo.BANDAS.DES_BANDA,
    N'Ninguno'
  ) AS Banda,
  E.FILA AS [Fila Camara],
  E.PISO AS [Piso Camara],
  (
    CASE
      ISNULL(E.CER_SAG, '')
      WHEN '' THEN (
        SELECT
          TOP (1) I2.CER_SAG
        FROM
          erpfrusys.dbo.INSPECCION AS I2
        WHERE
          I2.COD_EMP = E.COD_EMP
          AND I2.COD_TEM = E.COD_TEM
          AND I2.ZON = E.ZON
          AND I2.LOTE = E.LOTE
          AND E.ESTA_FUIN = 'EI'
        ORDER BY
          I2.FEC_SAG DESC
      )
      ELSE E.CER_SAG
    END
  ) AS [En Inspecci? Para],
  'Pallet Sin Mixtos' AS [Mixto de Productores],
  E.COD_CUA AS [Codigo Cuartel],
  ISNULL(E.COD_PRE, '') + ' ' + ISNULL(erpfrusys.dbo.PREDIOS.DESCRIPCION, '') AS Predio,
  'Pallet Sin Mixtos' AS [Mixto de Calibres],
  1 AS [Factor a Pallet],
  (
    CASE
      E.TIPO_REPA
      WHEN 'P' THEN 'Packing'
      WHEN 'F' THEN 'Frio'
      ELSE 'Sin Tipo'
    END
  ) AS [Tipo Repaletizaje],
  E.COD_MER AS [Codigo Mercado 1],
  MER.NOM_MER AS Mercado,
  GETDATE() AS [Fecha de Emision],
  (
    CASE
      EO.SW_MER_INT
      WHEN 0 THEN 'Exportacion'
      ELSE 'Nacional'
    END
  ) AS [Tipo Envase],
  CASE
    WHEN (
      ISNULL(
        (
          SELECT
            DIAS
          FROM
            erpfrusys.dbo.VIGENCIA_PROD AS V
          WHERE
            V.COD_EMP = E.COD_EMP
            AND V.COD_TEM = E.COD_TEM
            AND V.COD_ESP = E.COD_ESP
            AND V.COD_VAR = E.COD_VAR
            AND V.COD_MER = E.COD_MER
        ),
        0
      ) + E.FECHA_PAC
    ) > GETDATE() THEN 'Disponible'
    ELSE 'No Disponible'
  END AS [Vigencia Produccion],
  CASE
    WHEN (
      ISNULL(
        (
          SELECT
            DIAS
          FROM
            erpfrusys.dbo.VIGENCIA_SAG AS S
          WHERE
            S.COD_EMP = E.COD_EMP
            AND S.COD_TEM = E.COD_TEM
            AND S.COD_ESP = E.COD_ESP
            AND S.COD_VAR = E.COD_VAR
            AND S.COD_MER = E.COD_MER
        ),
        0
      ) + E.FEC_SAG
    ) > GETDATE() THEN 'Disponible'
    ELSE 'No Disponible'
  END AS [Vigencia SAG],
  ISNULL(E.COD_TIPO_TRA, '') AS [Código Tipo Tratamiento],
  ISNULL(TT.DESCRIPCION, '') AS [Tipo Tratamiento],
  [Codigo Productor Etiquetado] = E.COD_PRO_ETIQUETADO,
  PROD.NOM_PRO AS [Nombre de Productor Etiquetado],
  isnull(e.PK_ORIGINAL, E.PLANILLA) AS Proceso,
  PRE.DESCRIPCION AS [Nombre de Predio Etiquetado],
  PROV.DESCRIPCION AS [Nombre de Provincia Etiquetado],
  COM.DESCRIPCION AS [Nombre de Comuna Etiquetado],
  (
    CASE
      WHEN (
        SELECT
          TOP (1) PLANILLA
        FROM
          erpfrusys.dbo.oem_lotes AS OL
        WHERE
          OL.COD_EMP = E.COD_EMP
          AND OL.COD_TEM = E.COD_TEM
          AND OL.LOTE = E.LOTE
      ) > 0 THEN 'SI'
      ELSE 'NO'
    END
  ) AS [OEM],
  (
    SELECT
      oem.tip_tra
    FROM
      erpfrusys.dbo.tit_oem AS oem
      JOIN erpfrusys.dbo.oem_lotes AS ol ON oem.cod_emp = ol.cod_emp
      AND oem.cod_tem = ol.cod_tem
      AND oem.planilla = ol.planilla
      AND oem.tip_tra = ol.tip_tra
    WHERE
      ol.cod_emp = e.cod_emp
      AND ol.cod_tem = e.cod_tem
      AND ol.lote = e.lote
  ) AS [Tipo Nave OEM],
  (
    SELECT
      oem.cod_sit
    FROM
      erpfrusys.dbo.tit_oem AS oem
      JOIN erpfrusys.dbo.oem_lotes AS ol ON oem.cod_emp = ol.cod_emp
      AND oem.cod_tem = ol.cod_tem
      AND oem.planilla = ol.planilla
      AND oem.tip_tra = ol.tip_tra
    WHERE
      ol.cod_emp = e.cod_emp
      AND ol.cod_tem = e.cod_tem
      AND ol.lote = e.lote
  ) AS [Codigo Nave OEM],
  (
    SELECT
      Nom_Mer
    FROM
      erpfrusys.dbo.Mercado
    WHERE
      Cod_Emp = E.Cod_Emp
      AND Cod_Tem = E.Cod_Tem
      AND Cod_Mer = E.Cod_Mer
  ) AS [Nom Mercado1],
  (
    SELECT
      Nom_Mer
    FROM
      erpfrusys.dbo.Mercado
    WHERE
      Cod_Emp = E.Cod_Emp
      AND Cod_Tem = E.Cod_Tem
      AND Cod_Mer = E.Cod_Mer1
  ) AS [Nom Mercado 2],
  (
    SELECT
      Nom_Mer
    FROM
      erpfrusys.dbo.Mercado
    WHERE
      Cod_Emp = E.Cod_Emp
      AND Cod_Tem = E.Cod_Tem
      AND Cod_Mer = E.Cod_Mer2
  ) AS [Nom Mercado 3],
  (
    SELECT
      Nom_Mer
    FROM
      erpfrusys.dbo.Mercado
    WHERE
      Cod_Emp = E.Cod_Emp
      AND Cod_Tem = E.Cod_Tem
      AND Cod_Mer = E.Cod_Mer3
  ) AS [Nom Mercado 4],
  [Origen Pallet] = erpfrusys.dbo.BUSCA_ORIGEN_LOTE(E.COD_EMP, E.COD_TEM, E.ZON, E.LOTE),
  PRE.COD_COM,
  E.COD_EXP AS [Cod Exportadora],
  EX.NOM_EXP AS [Nom Exportadora],
  [Fecha Cosecha] = ISNULL(
    ISNULL(
      E.FECHA_COSECHA,
      (
        SELECT
          TOP (1) FECHA_COSECHA
        FROM
          erpfrusys.dbo.RECEPCION
        WHERE
          COD_EMP = E.COD_EMP
          AND COD_TEM = E.COD_TEM
          AND ZON = E.ZON
          AND LOTE = E.LOTE
      )
    ),
    E.FECHA_PAC
  ),
  cuarteles.descripcion AS [Nombre Cuartel],
  [Cod Exportador Cliente] = pe.COD_EXP,
  [Exportadora Cliente] = expo.NOM_EXP,
  ISNULL(E.COD_PRE, '') AS CSG
FROM
  erpfrusys.dbo.EXISTENCIA AS E
  JOIN erpfrusys.dbo.PRODUCTORES AS P ON P.COD_PRO = E.COD_PRO
  AND P.COD_EMP = E.COD_EMP
  AND P.COD_TEM = E.COD_TEM
  JOIN erpfrusys.dbo.PACKINGS AS PK ON E.COD_PACK = PK.COD_PACK
  AND E.COD_TEM = PK.COD_TEM
  AND E.COD_EMP = PK.COD_EMP
  JOIN erpfrusys.dbo.FRIOS AS FR ON E.COD_FRI = FR.COD_FRI
  AND E.COD_TEM = FR.COD_TEM
  AND E.COD_EMP = FR.COD_EMP
  JOIN erpfrusys.dbo.ENVASE AS ENV ON E.COD_ENV = ENV.COD_ENV
  AND E.COD_TEM = ENV.COD_TEM
  AND E.COD_EMP = ENV.COD_EMP
  JOIN erpfrusys.dbo.VARIEDAD AS V ON V.COD_VAR = E.COD_VAR
  AND V.COD_ESP = E.COD_ESP
  AND V.COD_TEM = E.COD_TEM
  AND V.COD_EMP = E.COD_EMP
  JOIN erpfrusys.dbo.ESPECIE AS ESP ON E.COD_ESP = ESP.COD_ESP
  AND E.COD_TEM = ESP.COD_TEM
  AND E.COD_EMP = ESP.COD_EMP
  JOIN erpfrusys.dbo.VARIEDAD AS VR ON VR.COD_EMP = E.COD_EMP
  AND VR.COD_TEM = E.COD_TEM
  AND VR.COD_ESP = E.COD_ESP
  AND VR.COD_VAR = E.COD_VAR
  LEFT JOIN erpfrusys.dbo.VARIEDAD AS VE ON VE.COD_EMP = E.COD_EMP
  AND VE.COD_TEM = E.COD_TEM
  AND VE.COD_ESP = E.COD_ESP
  AND VE.COD_VAR = E.COD_VAR_eti
  JOIN erpfrusys.dbo.ENVASEOPERACIONAL AS EO ON E.COD_TEM = EO.COD_TEM
  AND E.COD_EMP = EO.COD_EMP
  AND E.COD_ESP = EO.COD_ESP
  AND E.COD_ENV = EO.COD_ENV
  AND E.COD_EMB = EO.COD_EMB
  JOIN erpfrusys.dbo.CALIBRES AS CAL ON E.COD_ESP = CAL.COD_ESP
  AND E.COD_CAL = CAL.COD_CAL
  AND E.COD_TEM = CAL.COD_TEM
  AND E.COD_EMP = CAL.COD_EMP
  JOIN erpfrusys.dbo.CATEGORIA AS CAT ON E.COD_ESP = CAT.COD_ESP
  AND E.COD_CAT = CAT.COD_CAT
  AND E.COD_TEM = CAT.COD_TEM
  AND E.COD_EMP = CAT.COD_EMP
  LEFT JOIN erpfrusys.dbo.BASE_PLT AS BP ON E.COD_BP = BP.COD_BP
  AND E.COD_TEM = BP.COD_TEM
  AND E.COD_EMP = BP.COD_EMP
  LEFT JOIN erpfrusys.dbo.PROPACKLOTE AS PKL ON E.COD_EMP = PKL.COD_EMP
  AND E.COD_TEM = PKL.COD_TEM
  AND E.ZON = PKL.ZON
  AND E.LOTE = PKL.LOTE
  LEFT JOIN erpfrusys.dbo.GRUPOSPRODUCTORES AS GRP ON GRP.COD_EMP = P.COD_EMP
  AND GRP.COD_TEM = P.COD_TEM
  AND GRP.COD_GRP_PRO = P.COD_GRP_PRO
  LEFT JOIN erpfrusys.dbo.EXPORTADORES AS EX ON E.COD_EMP = EX.COD_EMP
  AND E.COD_TEM = EX.COD_TEM
  AND E.COD_EXP = EX.COD_EXP
  LEFT JOIN erpfrusys.dbo.ETIQUETA AS ETI ON E.COD_EMP = ETI.COD_EMP
  AND E.COD_TEM = ETI.COD_TEM
  AND E.COD_ETI = ETI.COD_ETI
  LEFT JOIN erpfrusys.dbo.PRODUCTORES AS P2 ON P2.COD_EMP = P.COD_EMP
  AND P2.COD_TEM = P.COD_TEM
  AND P2.COD_PRO = P.COD_PRO_PADRE
  LEFT JOIN erpfrusys.dbo.CAMARAS ON E.COD_EMP = erpfrusys.dbo.CAMARAS.COD_EMP
  AND E.COD_TEM = erpfrusys.dbo.CAMARAS.COD_TEM
  AND E.COD_FRI = erpfrusys.dbo.CAMARAS.COD_FRI
  AND E.COD_CAM = erpfrusys.dbo.CAMARAS.COD_CAM
  LEFT JOIN erpfrusys.dbo.BANDAS ON E.COD_EMP = erpfrusys.dbo.BANDAS.COD_EMP
  AND E.COD_TEM = erpfrusys.dbo.BANDAS.COD_TEM
  AND E.COD_FRI = erpfrusys.dbo.BANDAS.COD_FRI
  AND E.COD_CAM = erpfrusys.dbo.BANDAS.COD_CAM
  AND E.COD_BANDA = erpfrusys.dbo.BANDAS.COD_BANDA
  LEFT JOIN erpfrusys.dbo.RESERVADOS AS RES ON E.COD_EMP = RES.COD_EMP
  AND E.COD_TEM = RES.COD_TEM
  AND E.ZON = RES.ZON
  AND E.LOTE = RES.LOTE
  AND RES.PLANILLA = (
    SELECT
      MAX(PLANILLA)
    FROM
      erpfrusys.dbo.RESERVADOS
    WHERE
      RES.COD_EMP = COD_EMP
      AND RES.COD_TEM = COD_TEM
      AND RES.ZON = ZON
      AND RES.LOTE = LOTE
  )
  LEFT JOIN erpfrusys.dbo.TIPOINSPECCIONSAG AS TS ON E.ESTA_FUIN = TS.ESTA_FUIN
  AND E.COD_TEM = TS.COD_TEM
  AND E.COD_EMP = TS.COD_EMP
  LEFT JOIN erpfrusys.dbo.INSPECCION AS FUM ON FUM.ESTA_FUIN = 'SF'
  AND E.GUIA_FUM = FUM.GUIA_SAG
  AND E.LOTE = FUM.LOTE
  AND E.ZON = FUM.ZON
  AND E.COD_TEM = FUM.COD_TEM
  AND E.COD_EMP = FUM.COD_EMP
  LEFT JOIN erpfrusys.dbo.TIPOINSPECCIONSAG AS TSF ON FUM.ESTA_FUIN = TSF.ESTA_FUIN
  AND FUM.COD_TEM = TSF.COD_TEM
  AND FUM.COD_EMP = TSF.COD_EMP
  LEFT JOIN erpfrusys.dbo.TIPO_FUMIGACION AS TF ON E.COD_TIPO_FUM = TF.COD_TIPO_FUM
  AND E.COD_TEM = TF.COD_TEM
  AND E.COD_EMP = TF.COD_EMP
  LEFT JOIN erpfrusys.dbo.GRUPOSCALIBRES AS GC ON CAL.COD_GRP_CAL = GC.COD_GRP_CAL
  AND CAL.COD_TEM = GC.COD_TEM
  AND CAL.COD_EMP = GC.COD_EMP
  LEFT JOIN erpfrusys.dbo.GRUPOSCATEGORIA AS GCAT ON CAT.COD_GRP_CAT = GCAT.COD_GRP_CAT
  AND CAT.COD_TEM = GCAT.COD_TEM
  AND CAT.COD_EMP = GCAT.COD_EMP
  LEFT JOIN erpfrusys.dbo.GRUPOSENVASEOPERACIONAL AS GEO ON EO.COD_GRP_ENVOP = GEO.COD_GRP_ENVOP
  AND EO.COD_TEM = GEO.COD_TEM
  AND EO.COD_EMP = GEO.COD_EMP
  LEFT JOIN erpfrusys.dbo.PREDIOS ON erpfrusys.dbo.PREDIOS.COD_EMP = E.COD_EMP
  AND erpfrusys.dbo.PREDIOS.COD_TEM = E.COD_TEM
  AND erpfrusys.dbo.PREDIOS.COD_PRO = E.COD_PRO
  AND erpfrusys.dbo.PREDIOS.COD_PRE = E.COD_PRE
  LEFT JOIN erpfrusys.dbo.CUARTELES ON erpfrusys.dbo.CUARTELES.COD_EMP = E.COD_EMP
  AND erpfrusys.dbo.CUARTELES.COD_TEM = E.COD_TEM
  AND erpfrusys.dbo.CUARTELES.COD_PRO = E.COD_PRO
  AND erpfrusys.dbo.CUARTELES.COD_PRE = E.COD_PRE
  AND erpfrusys.dbo.CUARTELES.COD_CUA = E.COD_CUA
  LEFT JOIN erpfrusys.dbo.MERCADO AS MER ON E.COD_MER = MER.COD_MER
  AND E.COD_TEM = MER.COD_TEM
  AND E.COD_EMP = MER.COD_EMP
  LEFT JOIN erpfrusys.dbo.TIPO_TRATAMIENTO AS TT ON TT.COD_EMP = E.COD_EMP
  AND TT.COD_TEM = E.COD_TEM
  AND TT.COD_ESP = E.COD_ESP
  AND TT.COD_TIPO_TRA = E.COD_TIPO_TRA
  LEFT JOIN erpfrusys.dbo.PROVINCIAS ON P.COD_EMP = erpfrusys.dbo.PROVINCIAS.COD_EMP
  AND P.COD_TEM = erpfrusys.dbo.PROVINCIAS.COD_TEM
  AND P.COD_PROVC = erpfrusys.dbo.PROVINCIAS.COD_PROVC
  LEFT JOIN erpfrusys.dbo.COMUNAS ON P.COD_EMP = erpfrusys.dbo.COMUNAS.COD_EMP
  AND P.COD_TEM = erpfrusys.dbo.COMUNAS.COD_TEM
  AND P.COD_COM = erpfrusys.dbo.COMUNAS.COD_COM
  LEFT JOIN erpfrusys.dbo.PRODUCTORES AS PROD ON PROD.COD_PRO = E.COD_PRO_ETIQUETADO
  AND PROD.COD_EMP = E.COD_EMP
  AND PROD.COD_TEM = E.COD_TEM
  LEFT JOIN erpfrusys.dbo.PREDIOS AS PRE ON PRE.COD_EMP = E.COD_EMP
  AND PRE.COD_TEM = E.COD_TEM
  AND PRE.COD_PRO = PROD.COD_PRO
  AND PRE.COD_PRE = E.COD_PRE
  LEFT JOIN erpfrusys.dbo.PROVINCIAS AS PROV ON PRE.COD_EMP = PROV.COD_EMP
  AND PRE.COD_TEM = PROV.COD_TEM
  AND PRE.COD_PROVC = PROV.COD_PROVC
  LEFT JOIN erpfrusys.dbo.COMUNAS AS COM ON PRE.COD_EMP = COM.COD_EMP
  AND PRE.COD_TEM = COM.COD_TEM
  AND PRE.COD_COM = COM.COD_COM
  LEFT JOIN erpfrusys.dbo.PRODUCTOR_X_EXPORTADOR AS PE ON PE.COD_EMP = E.COD_EMP
  AND PE.COD_TEM = E.COD_TEM
  AND PE.COD_PRO = E.COD_PRO
  LEFT JOIN erpfrusys.dbo.EXPORTADORES AS EXPO ON EXPO.COD_EMP = PE.COD_EMP
  AND EXPO.COD_TEM = PE.COD_TEM
  AND EXPO.COD_EXP = PE.COD_EXP
WHERE
  (E.NRO_MIX = 0)
UNION
ALL
SELECT
  E.COD_EMP AS Empresa,
  E.COD_TEM AS Temporada,
  E.ZON AS Zona,
  E.COD_FRI AS [Codigo Frio],
  FR.NOM_FRI AS [Nombre de Frio],
  E.ESTA_FUIN + ISNULL(
    '+' + (
      CASE
        E.ESTA_FUIN
        WHEN 'SF' THEN NULL
        ELSE FUM.ESTA_FUIN
      END
    ),
    N''
  ) AS [Codigo Estado Fitosanitario],
  (
    CASE
      E.ESTA_FUIN
      WHEN 'AN' THEN 'SIN CONDICION'
      ELSE TS.NOM_TSAG + ISNULL(
        '+' + (
          CASE
            E.ESTA_FUIN
            WHEN 'SF' THEN NULL
            ELSE TSF.NOM_TSAG
          END
        ),
        N''
      )
    END
  ) AS [Estado Fitosanitario],
  E.NRO_MIX AS [Numero de Mixtos],
  E.ALTURA AS [Altura del Pallet],
  E.TEMP_PAC AS Temperatura,
  E.PLANILLA AS [Planilla de Recepcion],
  SUBSTRING(
    '0' + CAST(DAY(E.FECHA_PAC) AS NVARCHAR(2))
    FROM
      len('0' + CAST(DAY(E.FECHA_PAC) AS NVARCHAR(2))) - 1 FOR 2
  ) + '-' + SUBSTRING(
    '0' + CAST(MONTH(E.FECHA_PAC) AS NVARCHAR(2))
    FROM
      len('0' + CAST(MONTH(E.FECHA_PAC) AS NVARCHAR(2))) - 1 FOR 2
  ) + '-' + CAST(year(E.FECHA_PAC) AS NVARCHAR(4)) AS [Fecha de Packing],
  E.FECHA_RPA AS [Fecha de Recepcion],
  E.GUIA AS [Guia SII],
  E.COD_ENV AS [Codigo de Envase],
  ENV.NOM_ENV AS [Nombre de Envase],
  E.COD_EMB AS [Codigo de Embalaje],
  E.COD_PRO AS [Codigo de Productor Real],
  P.NOM_PRO AS [Nombre de Productor Real],
  E.COD_ESP AS [Codigo de Especie],
  ESP.NOM_ESP AS [Nombre de Especie],
  E.COD_VAR AS [Codigo de Variedad Real],
  V.NOM_VAR AS [Nombre de Variedad Real],
  ISNULL(E.COD_VAR_ETI, N'') AS [Codigo de Variedad Etiquetada],
  ISNULL(VE.NOM_VAR, N'') AS [Nombre de Variedad Etiquetada],
  E.COD_CAL AS [Codigo de Calibre],
  E.COD_CAT AS [Codigo de Categoria],
  CAT.NOM_CAT AS [Nombre de Categoria],
  E.COD_PACK AS [Codigo de Packing],
  PK.NOM_PACK AS [Nombre de Packing],
  E.COD_ETI + ' ' + ETI.NOM_ETI AS Etiqueta,
  E.PLU AS [Indicador PLU],
  E.LOTE AS [Numero de Pallet],
  E.CAJAS AS [Cantidad de Cajas],
  E.CAJAS * EO.PESO_NETO / ISNULL(
    (
      SELECT
        TOP (1) PESO_NETO
      FROM
        erpfrusys.dbo.ENVASEOPERACIONAL AS OP
      WHERE
        (COD_EMP = E.COD_EMP)
        AND (COD_TEM = E.COD_TEM)
        AND (COD_ESP = E.COD_ESP)
        AND (ESP.COD_ENV = COD_ENVOP)
    ),
    1
  ) AS [Equivalente en Cajas Base],
  E.COD_ENVOP AS [Codigo de Envase Operacional],
  EO.DESCRIPCION AS [Nombre de Envase Operacional],
  EO.PESO_NETO AS [Peso Neto Envase Operacional],
  (
    SELECT
      TOP (1) COD_CAL_EQ
    FROM
      erpfrusys.dbo.CALIBRES_EQUIVALENTES AS CE
    WHERE
      (E.COD_EMP = COD_EMP)
      AND (E.COD_TEM = COD_TEM)
      AND (E.COD_ESP = COD_ESP)
      AND (E.COD_ENVOP = COD_ENVOP)
      AND (E.COD_CAL = COD_CAL)
  ) AS [Calibre Equivalente],
  BP.DESCRIPCION AS [Base Pallet],
  GRP.COD_GRP_PRO AS [Codigo Grupo de Productores],
  GRP.DESCRIPCION AS [Descripcion Grupo de Productores],
  E.COD_EXP AS [Codigo Grupo de Exportadores],
  EX.NOM_EXP AS [Descripcion Grupo de Exportadores],
  P.COD_PRO_PADRE AS [Codigo Productor Padre],
  P2.NOM_PRO AS [Nombre Productor Padre],
  (
    CASE
      ISNULL(RES.PLANILLA, 0)
      WHEN 0 THEN 'Pallet No Reservado'
      ELSE 'Pallet Reservado'
    END
  ) AS [Pallet Reservado],
  RES.GLOSA AS [Glosa Reserva Pallet],
  RES.COD_MER AS [Mercado Reserva Pallet],
  P.COD_PROVC + ' ' + erpfrusys.dbo.PROVINCIAS.DESCRIPCION AS Provincia,
  P.COD_COM + ' ' + erpfrusys.dbo.COMUNAS.DESCRIPCION AS Comuna,
  ISNULL(
    (
      SELECT
        (
          CASE
            CTRL.ESTADO
            WHEN 0 THEN 'Control de Calidad: Aprobado'
            ELSE 'Control de Calidad: Rechazado'
          END
        ) AS Expr1
      FROM
        erpfrusys.dbo.CTRL_TIT_DATOS AS CTRL
        JOIN erpfrusys.dbo.CTRL_NOTAS AS CTRN ON CTRL.COD_EMP = CTRN.COD_EMP
        AND CTRL.COD_TEM = CTRN.COD_TEM
        AND CTRL.ZON = CTRN.ZON
        AND CTRL.TIPO = CTRN.TIPO
        AND CTRL.LOTE = CTRN.LOTE
      WHERE
        (CTRN.COD_EMP = E.COD_EMP)
        AND (CTRN.COD_TEM = E.COD_TEM)
        AND (CTRN.ZON = E.ZON)
        AND (CTRN.LOTE = E.LOTE)
    ),
    N'Sin Control de Calidad'
  ) AS [Control de Calidad],
  ISNULL(
    (
      SELECT
        TOP (1) NOTA
      FROM
        erpfrusys.dbo.CTRL_NOTAS AS CTRN
      WHERE
        (COD_EMP = E.COD_EMP)
        AND (COD_TEM = E.COD_TEM)
        AND (ZON = E.ZON)
        AND (LOTE = E.LOTE)
    ),
    NULL
  ) AS [Nota Control de Calidad],
  ISNULL(TF.NOM_TIPO_FUM, N'NINGUNO') AS [Producto de Fumigacion],
  CAL.COD_GRP_CAL AS [Codigo Grupo Calibre],
  GC.DESCRIPCION AS [Descripcion Grupo de Calibre],
  CAT.COD_GRP_CAT AS [Codigo Grupo Categoria],
  GCAT.DESCRIPCION AS [Descripcion Grupo de Categoria],
  EO.COD_GRP_ENVOP AS [Codigo Grupo Env.Op.],
  GEO.DESCRIPCION AS [Descripcion Grupo de Env.Op.],
  (
    CASE
      WHEN E.ESTA_FUIN = 'O'
      OR E.ESTA_FUIN = 'U' THEN E.COD_MER
      ELSE ''
    END
  ) AS [Codigo de Mercado Inspeccion],
  isnull(
    (
      SELECT
        nom_mer
      FROM
        erpfrusys.dbo.mercado AS mer
      WHERE
        e.cod_emp = mer.cod_emp
        AND e.cod_tem = mer.COD_TEM
        AND mer.cod_mer = (
          CASE
            WHEN E.ESTA_FUIN = 'O'
            OR E.ESTA_FUIN = 'U' THEN E.COD_MER
            ELSE ''
          END
        )
    ),
    ''
  ) AS [Nombre Mercado Inspeccion],
  (
    CASE
      WHEN E.ESTA_FUIN = 'O'
      OR E.ESTA_FUIN = 'U' THEN E.COD_MER1
      ELSE ''
    END
  ) AS [Codigo de Mercado Inspeccion Alt 1],
  isnull(
    (
      SELECT
        nom_mer
      FROM
        erpfrusys.dbo.mercado AS mer
      WHERE
        e.cod_emp = mer.cod_emp
        AND e.cod_tem = mer.COD_TEM
        AND mer.cod_mer = (
          CASE
            WHEN E.ESTA_FUIN = 'O'
            OR E.ESTA_FUIN = 'U' THEN E.COD_MER1
            ELSE ''
          END
        )
    ),
    ''
  ) AS [Nombre Mercado Inspeccion Alt 1],
  (
    CASE
      WHEN E.ESTA_FUIN = 'O'
      OR E.ESTA_FUIN = 'U' THEN E.COD_MER2
      ELSE ''
    END
  ) AS [Codigo de Mercado Inspeccion Alt 2],
  E.FEC_FUM AS [Fecha Fumigacion],
  E.GUIA_FUM AS [Guia Fumigacion],
  E.CER_FUM AS [Certificado Fumigacion],
  E.TIPO_LOT AS [Tipo de Lote (P=Pallet S=Saldo)],
  E.GUIA_SAG AS [Guia Inspeccion SAG],
  ISNULL(
    E.COD_CAM + ' ' + erpfrusys.dbo.CAMARAS.DES_CAM,
    N'Ninguno'
  ) AS Camara,
  ISNULL(
    E.COD_BANDA + ' ' + erpfrusys.dbo.BANDAS.DES_BANDA,
    N'Ninguno'
  ) AS Banda,
  E.FILA AS [Fila Camara],
  E.PISO AS [Piso Camara],
  (
    CASE
      ISNULL(E.CER_SAG, '')
      WHEN '' THEN (
        SELECT
          TOP (1) I2.CER_SAG
        FROM
          erpfrusys.dbo.INSPECCION AS I2
        WHERE
          I2.COD_EMP = E.COD_EMP
          AND I2.COD_TEM = E.COD_TEM
          AND I2.ZON = E.ZON
          AND I2.LOTE = E.LOTE
          AND E.ESTA_FUIN = 'EI'
        ORDER BY
          I2.FEC_SAG DESC
      )
      ELSE E.CER_SAG
    END
  ) AS [En Inspecci? Para],
  (
    CASE
      WHEN EXISTS (
        SELECT
          1
        FROM
          erpfrusys.dbo.MIXEXISTENCIA AS E2
        WHERE
          E2.COD_EMP = E.COD_EMP
          AND E2.COD_TEM = E.COD_TEM
          AND E2.ZON = E.ZON
          AND E2.LOTE = E.LOTE
          AND E2.COD_PRO <> E.COD_PRO
      ) THEN 'Mixto de Productores'
      ELSE 'Mixto Normal'
    END
  ) AS [Mixto de Productores],
  E.COD_CUA AS [Codigo Cuartel],
  ISNULL(E.COD_PRE, '') + ' ' + ISNULL(erpfrusys.dbo.PREDIOS.DESCRIPCION, '') AS Predio,
  (
    CASE
      WHEN EXISTS (
        SELECT
          1
        FROM
          erpfrusys.dbo.MIXEXISTENCIA AS E2
        WHERE
          E2.COD_EMP = E.COD_EMP
          AND E2.COD_TEM = E.COD_TEM
          AND E2.ZON = E.ZON
          AND E2.LOTE = E.LOTE
          AND E2.COD_CAL <> E.COD_CAL
      ) THEN 'Mixto de Calibre'
      ELSE 'Pallet Puro'
    END
  ) AS [Mixto de Calibres],
  E.CAJAS / CAST(
    (
      SELECT
        TOP (1) CAJAS
      FROM
        erpfrusys.dbo.EXISTENCIA AS E2
      WHERE
        (COD_EMP = E.COD_EMP)
        AND (COD_TEM = E.COD_TEM)
        AND (ZON = E.ZON)
        AND (LOTE = E.LOTE)
    ) AS DECIMAL(9, 4)
  ) AS [Factor a Pallet],
  (
    CASE
      E.TIPO_REPA
      WHEN 'P' THEN 'Packing'
      WHEN 'F' THEN 'Frio'
      ELSE 'Sin Tipo'
    END
  ) AS [Tipo Repaletizaje],
  E.COD_MER AS [Codigo Mercado 1],
  MER.NOM_MER AS Mercado,
  GETDATE() AS [Fecha de Emision],
  (
    CASE
      EO.SW_MER_INT
      WHEN 0 THEN 'Exportacion'
      ELSE 'Nacional'
    END
  ) AS [Tipo Envase],
  CASE
    WHEN (
      ISNULL(
        (
          SELECT
            DIAS
          FROM
            erpfrusys.dbo.VIGENCIA_PROD AS V
          WHERE
            V.COD_EMP = E.COD_EMP
            AND V.COD_TEM = E.COD_TEM
            AND V.COD_ESP = E.COD_ESP
            AND V.COD_VAR = E.COD_VAR
            AND V.COD_MER = E.COD_MER
        ),
        0
      ) + E.FECHA_PAC
    ) > GETDATE() THEN 'Disponible'
    ELSE 'No Disponible'
  END AS [Vigencia Produccion],
  CASE
    WHEN (
      ISNULL(
        (
          SELECT
            DIAS
          FROM
            erpfrusys.dbo.VIGENCIA_SAG AS S
          WHERE
            S.COD_EMP = E.COD_EMP
            AND S.COD_TEM = E.COD_TEM
            AND S.COD_ESP = E.COD_ESP
            AND S.COD_VAR = E.COD_VAR
            AND S.COD_MER = E.COD_MER
        ),
        0
      ) + E.FEC_SAG
    ) > GETDATE() THEN 'Disponible'
    ELSE 'No Disponible'
  END AS [Vigencia SAG],
  ISNULL(E.COD_TIPO_TRA, '') AS [Código Tipo Tratamiento],
  ISNULL(TT.DESCRIPCION, '') AS [Tipo Tratamiento],
  [Codigo Productor Etiquetado] = E.COD_PRO_ETIQUETADO,
  PROD.NOM_PRO AS [Nombre de Productor Etiquetado],
  isnull(e.PK_ORIGINAL, E.PLANILLA) AS Proceso,
  PRE.DESCRIPCION AS [Nombre de Predio Etiquetado],
  PROV.DESCRIPCION AS [Nombre de Provincia Etiquetado],
  COM.DESCRIPCION AS [Nombre de Comuna Etiquetado],
  (
    CASE
      WHEN (
        SELECT
          TOP (1) PLANILLA
        FROM
          erpfrusys.dbo.oem_lotes AS OL
        WHERE
          OL.COD_EMP = E.COD_EMP
          AND OL.COD_TEM = E.COD_TEM
          AND OL.LOTE = E.LOTE
      ) > 0 THEN 'SI'
      ELSE 'NO'
    END
  ) AS [OEM],
  (
    SELECT
      oem.tip_tra
    FROM
      erpfrusys.dbo.tit_oem AS oem
      JOIN erpfrusys.dbo.oem_lotes AS ol ON oem.cod_emp = ol.cod_emp
      AND oem.cod_tem = ol.cod_tem
      AND oem.planilla = ol.planilla
      AND oem.tip_tra = ol.tip_tra
    WHERE
      ol.cod_emp = e.cod_emp
      AND ol.cod_tem = e.cod_tem
      AND ol.lote = e.lote
  ) AS [Tipo Nave OEM],
  (
    SELECT
      oem.cod_sit
    FROM
      erpfrusys.dbo.tit_oem AS oem
      JOIN erpfrusys.dbo.oem_lotes AS ol ON oem.cod_emp = ol.cod_emp
      AND oem.cod_tem = ol.cod_tem
      AND oem.planilla = ol.planilla
      AND oem.tip_tra = ol.tip_tra
    WHERE
      ol.cod_emp = e.cod_emp
      AND ol.cod_tem = e.cod_tem
      AND ol.lote = e.lote
  ) AS [Codigo Nave OEM],
  (
    SELECT
      Nom_Mer
    FROM
      erpfrusys.dbo.Mercado
    WHERE
      Cod_Emp = E.Cod_Emp
      AND Cod_Tem = E.Cod_Tem
      AND Cod_Mer = E.Cod_Mer
  ) AS [Nom Mercado1],
  (
    SELECT
      Nom_Mer
    FROM
      erpfrusys.dbo.Mercado
    WHERE
      Cod_Emp = E.Cod_Emp
      AND Cod_Tem = E.Cod_Tem
      AND Cod_Mer = E.Cod_Mer1
  ) AS [Nom Mercado 2],
  (
    SELECT
      Nom_Mer
    FROM
      erpfrusys.dbo.Mercado
    WHERE
      Cod_Emp = E.Cod_Emp
      AND Cod_Tem = E.Cod_Tem
      AND Cod_Mer = E.Cod_Mer2
  ) AS [Nom Mercado 3],
  (
    SELECT
      Nom_Mer
    FROM
      erpfrusys.dbo.Mercado
    WHERE
      Cod_Emp = E.Cod_Emp
      AND Cod_Tem = E.Cod_Tem
      AND Cod_Mer = E.Cod_Mer3
  ) AS [Nom Mercado 4],
  [Origen Pallet] = erpfrusys.dbo.BUSCA_ORIGEN_LOTE(E.COD_EMP, E.COD_TEM, E.ZON, E.LOTE),
  PRE.COD_COM,
  E.COD_EXP AS [Cod Exportadora],
  EX.NOM_EXP AS [Nom Exportadora],
  [Fecha Cosecha] = ISNULL(
    ISNULL(
      E.FECHA_COSECHA,
      (
        SELECT
          TOP (1) FECHA_COSECHA
        FROM
          erpfrusys.dbo.RECEPCION
        WHERE
          COD_EMP = E.COD_EMP
          AND COD_TEM = E.COD_TEM
          AND ZON = E.ZON
          AND LOTE = E.LOTE
      )
    ),
    E.FECHA_PAC
  ),
  cuarteles.descripcion AS [Nombre Cuartel],
  [Cod Exportador Cliente] = pe.COD_EXP,
  [Exportadora Cliente] = expo.NOM_EXP,
  ISNULL(E.COD_PRE, '') AS CSG
FROM
  erpfrusys.dbo.MIXEXISTENCIA AS E
  JOIN erpfrusys.dbo.PRODUCTORES AS P ON P.COD_PRO = E.COD_PRO
  AND P.COD_EMP = E.COD_EMP
  AND P.COD_TEM = E.COD_TEM
  JOIN erpfrusys.dbo.PACKINGS AS PK ON E.COD_PACK = PK.COD_PACK
  AND E.COD_TEM = PK.COD_TEM
  AND E.COD_EMP = PK.COD_EMP
  JOIN erpfrusys.dbo.FRIOS AS FR ON E.COD_FRI = FR.COD_FRI
  AND E.COD_TEM = FR.COD_TEM
  AND E.COD_EMP = FR.COD_EMP
  JOIN erpfrusys.dbo.ENVASE AS ENV ON E.COD_ENV = ENV.COD_ENV
  AND E.COD_TEM = ENV.COD_TEM
  AND E.COD_EMP = ENV.COD_EMP
  JOIN erpfrusys.dbo.VARIEDAD AS V ON V.COD_VAR = E.COD_VAR
  AND V.COD_ESP = E.COD_ESP
  AND V.COD_TEM = E.COD_TEM
  AND V.COD_EMP = E.COD_EMP
  LEFT JOIN erpfrusys.dbo.VARIEDAD AS VE ON VE.COD_EMP = E.COD_EMP
  AND VE.COD_TEM = E.COD_TEM
  AND VE.COD_ESP = E.COD_ESP
  AND VE.COD_VAR = E.COD_VAR_ETI
  JOIN erpfrusys.dbo.ESPECIE AS ESP ON E.COD_ESP = ESP.COD_ESP
  AND E.COD_TEM = ESP.COD_TEM
  AND E.COD_EMP = ESP.COD_EMP
  JOIN erpfrusys.dbo.VARIEDAD AS VR ON VR.COD_EMP = E.COD_EMP
  AND VR.COD_TEM = E.COD_TEM
  AND VR.COD_ESP = E.COD_ESP
  AND VR.COD_VAR = E.COD_VAR
  JOIN erpfrusys.dbo.ENVASEOPERACIONAL AS EO ON E.COD_TEM = EO.COD_TEM
  AND E.COD_EMP = EO.COD_EMP
  AND E.COD_ESP = EO.COD_ESP
  AND E.COD_ENV = EO.COD_ENV
  AND E.COD_EMB = EO.COD_EMB
  JOIN erpfrusys.dbo.CALIBRES AS CAL ON E.COD_ESP = CAL.COD_ESP
  AND E.COD_CAL = CAL.COD_CAL
  AND E.COD_TEM = CAL.COD_TEM
  AND E.COD_EMP = CAL.COD_EMP
  JOIN erpfrusys.dbo.CATEGORIA AS CAT ON E.COD_ESP = CAT.COD_ESP
  AND E.COD_CAT = CAT.COD_CAT
  AND E.COD_TEM = CAT.COD_TEM
  AND E.COD_EMP = CAT.COD_EMP
  LEFT JOIN erpfrusys.dbo.BASE_PLT AS BP ON E.COD_BP = BP.COD_BP
  AND E.COD_TEM = BP.COD_TEM
  AND E.COD_EMP = BP.COD_EMP
  LEFT JOIN erpfrusys.dbo.PROPACKLOTE AS PKL ON E.COD_EMP = PKL.COD_EMP
  AND E.COD_TEM = PKL.COD_TEM
  AND E.ZON = PKL.ZON
  AND E.LOTE = PKL.LOTE
  LEFT JOIN erpfrusys.dbo.GRUPOSPRODUCTORES AS GRP ON GRP.COD_EMP = P.COD_EMP
  AND GRP.COD_TEM = P.COD_TEM
  AND GRP.COD_GRP_PRO = P.COD_GRP_PRO
  LEFT JOIN erpfrusys.dbo.EXPORTADORES AS EX ON E.COD_EMP = EX.COD_EMP
  AND E.COD_TEM = EX.COD_TEM
  AND E.COD_EXP = EX.COD_EXP
  LEFT JOIN erpfrusys.dbo.ETIQUETA AS ETI ON E.COD_EMP = ETI.COD_EMP
  AND E.COD_TEM = ETI.COD_TEM
  AND E.COD_ETI = ETI.COD_ETI
  LEFT JOIN erpfrusys.dbo.PRODUCTORES AS P2 ON P2.COD_EMP = P.COD_EMP
  AND P2.COD_TEM = P.COD_TEM
  AND P2.COD_PRO = P.COD_PRO_PADRE
  LEFT JOIN erpfrusys.dbo.CAMARAS ON E.COD_EMP = erpfrusys.dbo.CAMARAS.COD_EMP
  AND E.COD_TEM = erpfrusys.dbo.CAMARAS.COD_TEM
  AND E.COD_FRI = erpfrusys.dbo.CAMARAS.COD_FRI
  AND E.COD_CAM = erpfrusys.dbo.CAMARAS.COD_CAM
  LEFT JOIN erpfrusys.dbo.BANDAS ON E.COD_EMP = erpfrusys.dbo.BANDAS.COD_EMP
  AND E.COD_TEM = erpfrusys.dbo.BANDAS.COD_TEM
  AND E.COD_FRI = erpfrusys.dbo.BANDAS.COD_FRI
  AND E.COD_CAM = erpfrusys.dbo.BANDAS.COD_CAM
  AND E.COD_BANDA = erpfrusys.dbo.BANDAS.COD_BANDA
  LEFT JOIN erpfrusys.dbo.RESERVADOS AS RES ON E.COD_EMP = RES.COD_EMP
  AND E.COD_TEM = RES.COD_TEM
  AND E.ZON = RES.ZON
  AND E.LOTE = RES.LOTE
  AND RES.PLANILLA = (
    SELECT
      MAX(PLANILLA)
    FROM
      erpfrusys.dbo.RESERVADOS
    WHERE
      RES.COD_EMP = COD_EMP
      AND RES.COD_TEM = COD_TEM
      AND RES.ZON = ZON
      AND RES.LOTE = LOTE
  )
  LEFT JOIN erpfrusys.dbo.TIPOINSPECCIONSAG AS TS ON E.ESTA_FUIN = TS.ESTA_FUIN
  AND E.COD_TEM = TS.COD_TEM
  AND E.COD_EMP = TS.COD_EMP
  LEFT JOIN erpfrusys.dbo.INSPECCION AS FUM ON FUM.ESTA_FUIN = 'SF'
  AND FUM.GUIA_SAG = E.GUIA_FUM
  AND E.LOTE = FUM.LOTE
  AND E.ZON = FUM.ZON
  AND E.COD_TEM = FUM.COD_TEM
  AND E.COD_EMP = FUM.COD_EMP
  LEFT JOIN erpfrusys.dbo.TIPOINSPECCIONSAG AS TSF ON FUM.ESTA_FUIN = TSF.ESTA_FUIN
  AND FUM.COD_TEM = TSF.COD_TEM
  AND FUM.COD_EMP = TSF.COD_EMP
  LEFT JOIN erpfrusys.dbo.TIPO_FUMIGACION AS TF ON E.COD_TIPO_FUM = TF.COD_TIPO_FUM
  AND E.COD_TEM = TF.COD_TEM
  AND E.COD_EMP = TF.COD_EMP
  LEFT JOIN erpfrusys.dbo.GRUPOSCALIBRES AS GC ON CAL.COD_GRP_CAL = GC.COD_GRP_CAL
  AND CAL.COD_TEM = GC.COD_TEM
  AND CAL.COD_EMP = GC.COD_EMP
  LEFT JOIN erpfrusys.dbo.GRUPOSCATEGORIA AS GCAT ON CAT.COD_GRP_CAT = GCAT.COD_GRP_CAT
  AND CAT.COD_TEM = GCAT.COD_TEM
  AND CAT.COD_EMP = GCAT.COD_EMP
  LEFT JOIN erpfrusys.dbo.GRUPOSENVASEOPERACIONAL AS GEO ON EO.COD_GRP_ENVOP = GEO.COD_GRP_ENVOP
  AND EO.COD_TEM = GEO.COD_TEM
  AND EO.COD_EMP = GEO.COD_EMP
  LEFT JOIN erpfrusys.dbo.MERCADO AS MER ON E.COD_MER = MER.COD_MER
  AND E.COD_TEM = MER.COD_TEM
  AND E.COD_EMP = MER.COD_EMP
  LEFT JOIN erpfrusys.dbo.TIPO_TRATAMIENTO AS TT ON TT.COD_EMP = E.COD_EMP
  AND TT.COD_TEM = E.COD_TEM
  AND TT.COD_ESP = E.COD_ESP
  AND TT.COD_TIPO_TRA = E.COD_TIPO_TRA
  LEFT JOIN erpfrusys.dbo.PREDIOS ON erpfrusys.dbo.PREDIOS.COD_EMP = E.COD_EMP
  AND erpfrusys.dbo.PREDIOS.COD_TEM = E.COD_TEM
  AND erpfrusys.dbo.PREDIOS.COD_PRO = ISNULL(E.COD_PRO_ETIQUETADO, E.COD_PRO)
  AND erpfrusys.dbo.PREDIOS.COD_PRE = E.COD_PRE
  LEFT JOIN erpfrusys.dbo.CUARTELES ON erpfrusys.dbo.CUARTELES.COD_EMP = E.COD_EMP
  AND erpfrusys.dbo.CUARTELES.COD_TEM = E.COD_TEM
  AND erpfrusys.dbo.CUARTELES.COD_PRO = E.COD_PRO
  AND erpfrusys.dbo.CUARTELES.COD_PRE = E.COD_PRE
  AND erpfrusys.dbo.CUARTELES.COD_CUA = E.COD_CUA
  LEFT JOIN erpfrusys.dbo.PROVINCIAS ON P.COD_EMP = erpfrusys.dbo.PROVINCIAS.COD_EMP
  AND P.COD_TEM = erpfrusys.dbo.PROVINCIAS.COD_TEM
  AND P.COD_PROVC = erpfrusys.dbo.PROVINCIAS.COD_PROVC
  LEFT JOIN erpfrusys.dbo.COMUNAS ON P.COD_EMP = erpfrusys.dbo.COMUNAS.COD_EMP
  AND P.COD_TEM = erpfrusys.dbo.COMUNAS.COD_TEM
  AND P.COD_COM = erpfrusys.dbo.COMUNAS.COD_COM
  LEFT JOIN erpfrusys.dbo.PRODUCTORES AS PROD ON PROD.COD_PRO = E.COD_PRO_ETIQUETADO
  AND PROD.COD_EMP = E.COD_EMP
  AND PROD.COD_TEM = E.COD_TEM
  LEFT JOIN erpfrusys.dbo.PREDIOS AS PRE ON PRE.COD_EMP = E.COD_EMP
  AND PRE.COD_TEM = E.COD_TEM
  AND PRE.COD_PRO = PROD.COD_PRO
  AND PRE.COD_PRE = E.COD_PRE
  LEFT JOIN erpfrusys.dbo.PROVINCIAS AS PROV ON PRE.COD_EMP = PROV.COD_EMP
  AND PRE.COD_TEM = PROV.COD_TEM
  AND PRE.COD_PROVC = PROV.COD_PROVC
  LEFT JOIN erpfrusys.dbo.COMUNAS AS COM ON PRE.COD_EMP = COM.COD_EMP
  AND PRE.COD_TEM = COM.COD_TEM
  AND PRE.COD_COM = COM.COD_COM
  LEFT JOIN erpfrusys.dbo.PRODUCTOR_X_EXPORTADOR AS PE ON PE.COD_EMP = E.COD_EMP
  AND PE.COD_TEM = E.COD_TEM
  AND PE.COD_PRO = E.COD_PRO
  LEFT JOIN erpfrusys.dbo.EXPORTADORES AS EXPO ON EXPO.COD_EMP = PE.COD_EMP
  AND EXPO.COD_TEM = PE.COD_TEM
  AND EXPO.COD_EXP = PE.COD_EXP;