SELECT
  R.COD_EMP,
  RP.COD_TIPO_FRIO AS [TIPO FRIO],
  EM.NOM_EMP AS Empresa,
  TEM.DESCRIPCION AS Temporada,
  R.COD_PACK AS [Codigo Packing],
  RP.COD_TIPO_FRIO,
  EM.NOM_EMP,
  TEM.DESCRIPCION,
  R.COD_PACK,
  (
    SELECT
      NOM_PACK
    FROM
      Erpfrusys.dbo.PACKINGS AS P
    WHERE
      (COD_PACK = R.COD_PACK)
      AND (COD_TEM = R.COD_TEM)
      AND (COD_EMP = R.COD_EMP)
  ) AS Packing,
  R.COD_PRO AS [Codigo Productor],
  ISNULL(D.NOM_PRO, N'') AS Productor,
  ISNULL(D.GGN, N'') AS GGN,
  (
    SELECT
      GP.DESCRIPCION
    FROM
      Erpfrusys.dbo.PRODUCTORES AS DR
      JOIN Erpfrusys.dbo.GRUPOSPRODUCTORES AS GP ON DR.COD_EMP = GP.COD_EMP
      AND DR.COD_TEM = GP.COD_TEM
      AND DR.COD_GRP_PRO = GP.COD_GRP_PRO
    WHERE
      (DR.COD_EMP = R.COD_EMP)
      AND (DR.COD_TEM = R.COD_TEM)
      AND (DR.COD_PRO = R.COD_PRO)
  ) AS [Nombre Grupo Productores],
  (
    SELECT
      GP.COD_GRP_PRO
    FROM
      Erpfrusys.dbo.PRODUCTORES AS DF
      JOIN Erpfrusys.dbo.GRUPOSPRODUCTORES AS GP ON DF.COD_EMP = GP.COD_EMP
      AND DF.COD_TEM = GP.COD_TEM
      AND DF.COD_GRP_PRO = GP.COD_GRP_PRO
    WHERE
      (DF.COD_EMP = R.COD_EMP)
      AND (DF.COD_TEM = R.COD_TEM)
      AND (DF.COD_PRO = R.COD_PRO)
  ) AS [Codigo Grupo Productores],
  R.COD_FRI AS [Codigo Frigorifico],
  (
    SELECT
      NOM_FRI
    FROM
      Erpfrusys.dbo.FRIOS AS F
    WHERE
      (COD_FRI = R.COD_FRI)
      AND (COD_TEM = R.COD_TEM)
      AND (COD_EMP = R.COD_EMP)
  ) AS Frigorifico,
  R.COD_ESP AS [Codigo Especie],
  (
    SELECT
      NOM_ESP
    FROM
      Erpfrusys.dbo.ESPECIE AS E
    WHERE
      (COD_ESP = R.COD_ESP)
      AND (COD_TEM = R.COD_TEM)
      AND (COD_EMP = R.COD_EMP)
  ) AS Especie,
  R.COD_VAR AS [Codigo Variedad],
  (
    SELECT
      NOM_VAR
    FROM
      Erpfrusys.dbo.VARIEDAD AS V
    WHERE
      (COD_VAR = R.COD_VAR)
      AND (COD_ESP = R.COD_ESP)
      AND (COD_TEM = R.COD_TEM)
      AND (COD_EMP = R.COD_EMP)
  ) AS Variedad,
  R.COD_ENV AS [Codigo Envase],
  (
    SELECT
      NOM_ENV
    FROM
      Erpfrusys.dbo.ENVASE AS S
    WHERE
      (COD_ENV = R.COD_ENV)
      AND (COD_TEM = R.COD_TEM)
      AND (COD_EMP = R.COD_EMP)
  ) AS Envase,
  R.PLANILLA,
  ISNULL(T.GUIA, R.GUIA) AS Guia,
  R.FECHA_RPA AS Fecha,
  (
    CASE
      ISNULL(T.FECHA_COSECHA, '')
      WHEN '' THEN 'Sin fecha'
      ELSE CAST(T.FECHA_COSECHA AS NVARCHAR(12))
    END
  ) AS [Fecha Cosecha],
  R.LOTE,
  R.ZON,
  (
    SELECT
      NOM_ZON
    FROM
      Erpfrusys.dbo.ZONAS AS Z
    WHERE
      (COD_TEM = R.COD_TEM)
      AND (COD_EMP = R.COD_EMP)
      AND (ZON = R.ZON)
  ) AS Zona,
  R.CANTIDAD AS Cantidad,
  R.KILOS AS Kilos,
  R.TOTAL_KILOS AS [Total Kilos],
  (
    CASE
      R.TIPOFRU
      WHEN 'E' THEN (
        CASE
          WHEN SUBSTRING(
            r.cod_cal
            FROM
              1 FOR 1
          ) = '5' THEN 'EXPORTACION EN BINS'
          ELSE 'EXPORTACION'
        END
      )
      WHEN 'C' THEN 'COMERCIAL'
      WHEN 'P' THEN (
        CASE
          WHEN isnull(T.SW_PREPROCESO, 0) = 0 THEN 'PRE-CALIBRE'
          WHEN CP.NOM_CALIDAD = 'A  PRE-PROCESO' THEN 'PRE PROCESO'
          ELSE 'PRE PROCESO'
        END
      )
      WHEN 'D' THEN 'DESVERDIZADO'
      WHEN 'B' THEN 'BAJAS/DESECHO'
    END
  ) AS [Tipo Fruta],
  R.COD_CAL AS Calibre,
  RP.PLANILLA AS [Numero Recepcion],
  R.COD_PRE AS [Codigo Predio],
  PRE.DESCRIPCION AS [Descripcion Predio],
  R.COD_CUA AS [Codigo Cuartel],
  CU.DESCRIPCION AS [Descripcion Cuartel],
  ISNULL(CP.NOM_CALIDAD, N'Sin Calidad') AS [Calidad Packing],
  PRE.COD_GRP_PRE AS [Codigo Grupo Huerto],
  GH.DESCRIPCION AS [Nombre Grupo Huerto],
  (
    SELECT
      TOP (1) TIPO
    FROM
      (
        SELECT
          'Recepcion Packing Normal' AS TIPO
        FROM
          Erpfrusys.dbo.RECEPACK AS R2
        WHERE
          (COD_EMP = R.COD_EMP)
          AND (COD_TEM = R.COD_TEM)
          AND (ZON = R.ZON)
          AND (LOTE = R.LOTE)
        UNION
        SELECT
          'Recepcion Packing Masivo' AS TIPO
        FROM
          Erpfrusys.dbo.RECEPACK_DET AS R2
        WHERE
          (COD_EMP = R.COD_EMP)
          AND (COD_TEM = R.COD_TEM)
          AND (ZON = R.ZON)
          AND (LOTE = R.LOTE)
        UNION
        SELECT
          'Proceso de Packing' AS TIPO
        FROM
          Erpfrusys.dbo.PROCEPACK AS R2
        WHERE
          (COD_EMP = R.COD_EMP)
          AND (COD_TEM = R.COD_TEM)
          AND (ZON = R.ZON)
      ) AS R2_1
  ) AS [Origen Lote],
  (
    CASE
      CTR.CUMPLENORMA
      WHEN 0 THEN 'RECHAZADA'
      WHEN 1 THEN 'APROBADA'
      WHEN 2 THEN 'OBJETADA'
      ELSE 'SIN CONTROL DE CALIDAD'
    END
  ) AS [Control de Calidad],
  CTR.OBSERVACION AS [Control de Calidad - Observacion],
  R.COD_CAM AS Camara,
  R.COD_BANDA AS Banda,
  R.FILA AS Filo,
  R.PISO AS Piso,
  ISNULL(
    (
      SELECT
        MAX(COD_INSCRIPCION) AS Expr1
      FROM
        Erpfrusys.dbo.PREDIOS_INSPECCION AS PRINS
      WHERE
        (COD_EMP = R.COD_EMP)
        AND (COD_TEM = R.COD_TEM)
        AND (COD_PRO = P.COD_PRO)
        AND (COD_PRE = P.COD_PRE)
        AND (COD_CUA = P.COD_CUA)
    ),
    N''
  ) AS CODIGO_INSPECCION,
  R.COD_TIPO_TRA AS [Codigo Tipo Tratamiento],
  TT.DESCRIPCION AS [Tipo Tratamiento],
  P.PLANILLA AS [Planilla Proceso],
  (
    CASE
      T.TIPO_REC
      WHEN 'N' THEN (
        CASE
          WHEN T.EXEDENTE = 1 THEN 'Exedente'
          ELSE 'Normal'
        END
      )
      WHEN 'T' THEN 'Traslado'
      ELSE 'No Asignado'
    END
  ) AS [Tipo Recepcion],
  (
    CASE
      WHEN ISNULL(CTR.COD_PERIODO, '') = '' THEN 'NINGUNO'
      ELSE CTR.COD_PERIODO + ' ' + (
        SELECT
          TOP (1) NOM_PERIODO
        FROM
          ERPFRUSYS.dbo.TIPO_PERIODO
        WHERE
          COD_EMP = CTR.COD_EMP
          AND COD_TEM = CTR.COD_TEM
          AND COD_PERIODO = CTR.COD_PERIODO
      )
    END
  ) AS [Tipo Periodo],
  ISNULL(CTR.OBS_TOT_EXP, 0) AS [% QC],
  DATEDIFF(HOUR, R.FECHA_RPA, GETDATE()) AS [Antiguedad (Horas)],
  PX.COD_EXP AS [Cod Exportadora],
  EX.NOM_EXP AS [Nom Exportadora],
  ISNULL(RP.COD_GRADO_MADUREZ, N'') AS [Codigo Grado Madurez],
  ISNULL(MAD.DESCRIPCION, N'') AS [Grado Madurez],
  (
    CASE
      WHEN isnull(T.SW_PREPROCESO, 0) = 0 THEN 'NO'
      ELSE 'SI'
    END
  ) AS PreProceso,
  (
    SELECT
      TOP (1) COD_INSCRIPCION
    FROM
      Erpfrusys.dbo.PREDIOS_INSPECCION AS CSDP
    WHERE
      (R.COD_CUA = COD_CUA)
  ) AS [CODIGO SDP],
  (
    SELECT
      TOP (1) ISNULL(CONVERT(varchar, fec_ini, 113), ' ') AS Expr1
    FROM
      dbo.v_exis_verde
    WHERE
      (LOTE = R.LOTE)
  ) AS [Inicio Desverdizado],
  (
    SELECT
      TOP (1) ISNULL(CONVERT(varchar, fec_fin, 113), ' ') AS Expr1
    FROM
      dbo.v_exis_verde AS v_exis_verde_3
    WHERE
      (LOTE = R.LOTE)
  ) AS [Fin Desverdizado],
  (
    SELECT
      TOP (1) ISNULL(CONVERT(varchar, fec_fin, 113), ' ') AS Expr1
    FROM
      dbo.v_exis_verde AS v_exis_verde_2
    WHERE
      (LOTE = R.LOTE)
  ) AS [Inico Ventilado],
  (
    SELECT
      TOP (1) ISNULL(CONVERT(varchar, fec_ven, 113), ' ') AS Expr1
    FROM
      dbo.v_exis_verde AS v_exis_verde_1
    WHERE
      (LOTE = R.LOTE)
  ) AS [Fin Ventilado],
  CASE
    WHEN ev.fec_fin < ev.fec_ven THEN 'Disponible'
    WHEN ev.fec_ini > ev.fec_fin THEN 'No Disponible - En Desverdizado'
    WHEN ev.fec_ini < ev.fec_fin THEN 'No Disponible - Ventilando'
    WHEN isnull(T.SW_PREPROCESO, 0) = 1 THEN 'No Disponible - A Pre-Proceso'
    ELSE 'Disponible'
  END AS estado
FROM
  Erpfrusys.dbo.EXISPACK AS R
  JOIN Erpfrusys.dbo.EMPRESAS AS EM ON EM.COD_EMP = R.COD_EMP
  JOIN Erpfrusys.dbo.TEMPORADAS AS TEM ON TEM.COD_EMP = R.COD_EMP
  AND TEM.COD_TEM = R.COD_TEM
  LEFT JOIN Erpfrusys.dbo.RECEPACK AS RP ON RP.ZON = R.ZON
  AND RP.LOTE = R.LOTE
  AND RP.COD_TEM = R.COD_TEM
  AND RP.COD_EMP = R.COD_EMP
  LEFT JOIN Erpfrusys.dbo.TIT_RECEPACK AS T ON RP.COD_EMP = T.COD_EMP
  AND RP.COD_TEM = T.COD_TEM
  AND RP.ZON = T.ZON
  AND RP.PLANILLA = T.PLANILLA
  LEFT JOIN Erpfrusys.dbo.PROCEPACK AS P ON P.COD_EMP = R.COD_EMP
  AND P.COD_TEM = R.COD_TEM
  AND P.ZON = R.ZON
  AND P.LOTE = R.LOTE
  AND P.PLANILLA = (
    SELECT
      MAX(PLANILLA) AS Expr1
    FROM
      Erpfrusys.dbo.PROCEPACK AS P
    WHERE
      (COD_EMP = R.COD_EMP)
      AND (COD_TEM = R.COD_TEM)
      AND (ZON = R.ZON)
      AND (LOTE = R.LOTE)
  )
  LEFT JOIN Erpfrusys.dbo.CUARTELES AS CU ON CU.COD_PRO = R.COD_PRO
  AND CU.COD_CUA = R.COD_CUA
  AND CU.COD_PRE = R.COD_PRE
  AND CU.COD_TEM = R.COD_TEM
  AND CU.COD_EMP = R.COD_EMP
  LEFT JOIN Erpfrusys.dbo.PREDIOS AS PRE ON PRE.COD_PRO = R.COD_PRO
  AND PRE.COD_PRE = R.COD_PRE
  AND PRE.COD_TEM = R.COD_TEM
  AND PRE.COD_EMP = R.COD_EMP
  LEFT JOIN Erpfrusys.dbo.GRUPOSPREDIOS AS GH ON PRE.COD_EMP = GH.COD_EMP
  AND PRE.COD_TEM = GH.COD_TEM
  AND PRE.COD_GRP_PRE = GH.COD_GRP_PRE
  LEFT JOIN Erpfrusys.dbo.CALIDADPACKING AS CP ON R.COD_EMP = CP.COD_EMP
  AND R.COD_TEM = CP.COD_TEM
  AND R.COD_ESP = CP.COD_ESP
  AND R.COD_CALIDAD = CP.COD_CALIDAD
  LEFT JOIN Erpfrusys.dbo.CTRL_TIT_DATOS AS CTR ON CTR.COD_EMP = R.COD_EMP
  AND CTR.COD_TEM = R.COD_TEM
  AND CTR.ZON = R.ZON
  AND CTR.LOTE = R.LOTE
  LEFT JOIN Erpfrusys.dbo.TIPO_TRATAMIENTO AS TT ON R.COD_EMP = TT.COD_EMP
  AND R.COD_TEM = TT.COD_TEM
  AND R.COD_ESP = TT.COD_ESP
  AND R.COD_TIPO_TRA = TT.COD_TIPO_TRA
  LEFT JOIN Erpfrusys.dbo.PRODUCTORES AS D ON D.COD_EMP = R.COD_EMP
  AND D.COD_TEM = R.COD_TEM
  AND D.COD_PRO = R.COD_PRO
  LEFT JOIN Erpfrusys.dbo.PRODUCTOR_X_EXPORTADOR AS PX ON PX.COD_EMP = D.COD_EMP
  AND PX.COD_TEM = D.COD_TEM
  AND PX.COD_PRO = D.COD_PRO
  LEFT JOIN Erpfrusys.dbo.EXPORTADORES AS EX ON EX.COD_EMP = PX.COD_EMP
  AND EX.COD_TEM = PX.COD_TEM
  AND EX.COD_EXP = PX.COD_EXP
  LEFT JOIN Erpfrusys.dbo.GRADO_MADUREZ AS MAD ON RP.COD_EMP = MAD.COD_EMP
  AND RP.COD_TEM = MAD.COD_TEM
  AND RP.COD_GRADO_MADUREZ = MAD.COD_GRADO_MADUREZ
  LEFT JOIN dbo.v_exis_verde AS ev ON ev.LOTE = R.LOTE;