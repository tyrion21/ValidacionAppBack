SELECT
  R_1.COD_EMP AS Empresa,
  R_1.COD_TEM AS Temporada,
  R_1.ZON AS CodZona,
  (
    SELECT
      MAX(FCH_REPA) AS Expr1
    FROM
      Erpfrusys.dbo.APORTE AS A
    WHERE
      (COD_EMP = R_1.COD_EMP)
      AND (COD_TEM = R_1.COD_TEM)
      AND (ZON = R_1.ZON)
      AND (PLANILLA = R_1.GUIA_REPA)
  ) AS [Fecha Repaletizaje],
  R_1.GUIA_REPA AS NumeroRepaletizaje,
  R_1.PROD AS CodProductor,
  R_1.PRO_ET,
  R_1.COD_PRE,
  PROD.NOM_PRO AS NombreProductor,
  R_1.ESP AS CodEspecie,
  ESP.NOM_ESP AS NombreEspecie,
  R_1.VARI AS CodVariedad,
  VARI.NOM_VAR AS NombreVariedad,
  R_1.CAT AS Categoria,
  R_1.CAL AS Calibre,
  R_1.ETI AS Etiqueta,
  R_1.ENV AS Envase,
  ENV.NOM_ENV AS NombreEnvase,
  R_1.EMB AS Embalaje,
  EMB.NOM_EMB AS NombreEmbalaje,
  R_1.OP AS EnvOp,
  SUM(R_1.CREA) AS CajasCreadas,
  SUM(R_1.ELI) AS CajasEliminadas,
  SUM(R_1.CREA) - SUM(R_1.ELI) AS Diferencia,
  (
    CASE
      SUM(CREA) - SUM(ELI)
      WHEN 0 THEN 'CUADRADO'
      ELSE 'DESCUADRADO'
    END
  ) AS Estado,
  R_1.COD_FRI + ' ' + Erpfrusys.dbo.FRIOS.NOM_FRI AS Frigorifico,
  (
    CASE
      WHEN AP_C.PLANILLA IS NULL THEN 'ABIERTO'
      ELSE 'CERRADO'
    END
  ) AS [Estado Cierre],
  (
    CASE
      AP_C.TIPO_CARGO
      WHEN 0 THEN 'CARGO EXPORTADORA'
      WHEN 1 THEN 'CARGO FRIGORIFICO'
    END
  ) AS [Tipo Cargo],
  PROD.COD_GRP_PRO AS GrupoProductor,
  (
    SELECT
      TOP (1) (
        CASE
          ISNULL(RC.CIERRE, 0)
          WHEN 0 THEN 'Planilla Repaletizaje'
          ELSE 'Cierre Pallet'
        END
      ) AS Expr1
    FROM
      Erpfrusys.dbo.REPALETIZADOS AS RC
    WHERE
      (GUIA_REPA = R_1.GUIA_REPA)
      AND (COD_TEM = R_1.COD_TEM)
      AND (COD_EMP = R_1.COD_EMP)
      AND (ZON = R_1.ZON)
  ) AS Origen,
  EXPO.COD_EXP AS [Cod Exportador],
  EX.NOM_EXP AS Exportador,
  R_1.folio,
  R_1.FECHA_PAC,
  R_1.COD_CUA
FROM
  (
    SELECT
      R.LOTE AS folio,
      R.COD_EMP,
      R.COD_TEM,
      R.ZON,
      R.GUIA_REPA,
      R.COD_PRO AS PROD,
      R.COD_PRO_ETIQUETADO AS PRO_ET,
      R.COD_PRE,
      R.COD_ESP AS ESP,
      R.COD_VAR AS VARI,
      R.COD_CAT AS CAT,
      R.COD_CAL AS CAL,
      R.COD_ETI AS ETI,
      R.COD_ENV AS ENV,
      R.COD_EMB AS EMB,
      R.COD_ENVOP AS OP,
      R.COD_FRI,
      (
        CASE
          R.CIERRE
          WHEN 0 THEN (
            CASE
              TIPO_ING
              WHEN 'M' THEN AP.SALDOCAJAS - R.CAJAS
              ELSE 0
            END
          )
          ELSE (
            CASE
              TIPO_ING
              WHEN 'M' THEN AP.SALDOCAJAS
              ELSE 0
            END
          )
        END
      ) AS ELI,
      (
        CASE
          R.CIERRE
          WHEN 0 THEN (
            CASE
              TIPO_ING
              WHEN 'C' THEN R.CAJAS
              WHEN 'M' THEN R.CAJAS - (
                CASE
                  WHEN AP.TIPO = 'M' THEN AP.CAJAS
                  ELSE 0
                END
              )
              ELSE 0
            END
          )
          ELSE (
            CASE
              TIPO_ING
              WHEN 'C' THEN R.CAJAS
              WHEN 'M' THEN (
                CASE
                  R.CIERRE
                  WHEN 0 THEN R.CAJAS
                  ELSE (AP.SALDOCAJAS - AP.CAJAS)
                END
              )
              ELSE 0
            END
          )
        END
      ) AS CREA,
      R.FECHA_PAC,
      R.COD_CUA
    FROM
      Erpfrusys.dbo.REPALETIZADOS AS R
      JOIN Erpfrusys.dbo.APORTE AS AP ON AP.PLANILLA = R.GUIA_REPA
      AND AP.LOTE = R.LOTE
      AND AP.ZON = R.ZON
      AND AP.COD_TEM = R.COD_TEM
      AND AP.COD_EMP = R.COD_EMP
      AND AP.TIPO = R.TIPO_ING
    WHERE
      (R.NRO_MIX = 0)
    UNION
    ALL
    SELECT
      R.LOTE AS folio,
      R.COD_EMP,
      R.COD_TEM,
      R.ZON,
      R.GUIA_REPA,
      R.COD_PRO AS PROD,
      R.COD_PRO_ETIQUETADO AS PRO_ET,
      R.COD_PRE,
      R.COD_ESP AS ESP,
      R.COD_VAR AS VARI,
      R.COD_CAT AS CAT,
      R.COD_CAL AS CAL,
      R.COD_ETI AS ETI,
      R.COD_ENV AS ENV,
      R.COD_EMB AS EMB,
      R.COD_ENVOP AS OP,
      R.COD_FRI,
      (
        CASE
          E.CIERRE
          WHEN 0 THEN (
            CASE
              E.TIPO_ING
              WHEN 'M' THEN R.SALDOCAJAS
              ELSE 0
            END
          )
          ELSE (
            CASE
              R.TIPO_ING
              WHEN 'M' THEN R.SALDOCAJAS
              ELSE (R.SALDOCAJAS - R.CAJAS)
            END
          )
        END
      ) AS ELI,
      (
        CASE
          E.CIERRE
          WHEN 0 THEN (
            CASE
              E.TIPO_ING
              WHEN 'C' THEN R.CAJAS
              WHEN 'M' THEN R.CAJAS
              ELSE 0
            END
          )
          ELSE (
            CASE
              R.TIPO_ING
              WHEN 'C' THEN R.CAJAS
              WHEN 'M' THEN (
                CASE
                  E.CIERRE
                  WHEN 0 THEN R.CAJAS
                  ELSE (
                    CASE
                      WHEN ISNULL(
                        (
                          SELECT
                            MAX(CANT)
                          FROM
                            (
                              SELECT
                                COUNT(LOTE) AS CANT
                              FROM
                                Erpfrusys.dbo.REPALETIZADOS
                              WHERE
                                COD_EMP = R.COD_EMP
                                AND COD_TEM = R.COD_TEM
                                AND ZON = R.ZON
                                AND GUIA_REPA = R.GUIA_REPA
                                AND CIERRE = 1
                              GROUP BY
                                LOTE
                            ) AS U
                        ),
                        0
                      ) > 1 THEN R.SALDOCAJAS
                      ELSE (R.SALDOCAJAS - R.CAJAS)
                    END
                  )
                END
              )
              ELSE 0
            END
          )
        END
      ) AS CREA,
      R.FECHA_PAC,
      R.COD_CUA
    FROM
      Erpfrusys.dbo.REPALETIZADOMIX AS R
      JOIN Erpfrusys.dbo.REPALETIZADOS AS E ON E.COD_TEM = R.COD_TEM
      AND E.COD_EMP = R.COD_EMP
      AND E.ZON = R.ZON
      AND E.GUIA_REPA = R.GUIA_REPA
      AND E.LOTE = R.LOTE
      AND E.TIPO_ING = R.TIPO_ING
      JOIN Erpfrusys.dbo.APORTE AS AP ON AP.PLANILLA = R.GUIA_REPA
      AND AP.LOTE = R.LOTE
      AND AP.ZON = R.ZON
      AND AP.COD_TEM = R.COD_TEM
      AND AP.COD_EMP = R.COD_EMP
      AND AP.TIPO = R.TIPO_ING
  ) AS R_1
  JOIN Erpfrusys.dbo.PRODUCTORES AS PROD ON R_1.PROD = PROD.COD_PRO
  AND PROD.COD_EMP = R_1.COD_EMP
  AND PROD.COD_TEM = R_1.COD_TEM
  JOIN Erpfrusys.dbo.ESPECIE AS ESP ON R_1.ESP = ESP.COD_ESP
  AND ESP.COD_EMP = R_1.COD_EMP
  AND ESP.COD_TEM = R_1.COD_TEM
  JOIN Erpfrusys.dbo.VARIEDAD AS VARI ON R_1.VARI = VARI.COD_VAR
  AND R_1.ESP = VARI.COD_ESP
  AND VARI.COD_EMP = R_1.COD_EMP
  AND VARI.COD_TEM = R_1.COD_TEM
  JOIN Erpfrusys.dbo.ENVASE AS ENV ON R_1.ENV = ENV.COD_ENV
  AND ENV.COD_EMP = R_1.COD_EMP
  AND ENV.COD_TEM = R_1.COD_TEM
  JOIN Erpfrusys.dbo.EMBALAJE AS EMB ON R_1.EMB = EMB.COD_EMB
  AND EMB.COD_EMP = R_1.COD_EMP
  AND EMB.COD_TEM = R_1.COD_TEM
  LEFT JOIN Erpfrusys.dbo.FRIOS ON R_1.COD_FRI = Erpfrusys.dbo.FRIOS.COD_FRI
  AND R_1.COD_TEM = Erpfrusys.dbo.FRIOS.COD_TEM
  AND R_1.COD_EMP = Erpfrusys.dbo.FRIOS.COD_EMP
  LEFT JOIN Erpfrusys.dbo.APORTE_CIERRE AS AP_C ON AP_C.COD_EMP = R_1.COD_EMP
  AND AP_C.COD_TEM = R_1.COD_TEM
  AND AP_C.ZON = R_1.ZON
  AND AP_C.PLANILLA = R_1.GUIA_REPA
  LEFT JOIN Erpfrusys.dbo.PRODUCTOR_X_EXPORTADOR AS EXPO ON R_1.COD_EMP = EXPO.COD_EMP
  AND R_1.COD_TEM = EXPO.COD_TEM
  AND R_1.PROD = EXPO.COD_PRO
  LEFT JOIN Erpfrusys.dbo.EXPORTADORES AS EX ON EXPO.COD_EMP = EX.COD_EMP
  AND EXPO.COD_TEM = EX.COD_TEM
  AND EX.COD_EXP = EXPO.COD_EXP
GROUP BY
  R_1.COD_EMP,
  R_1.COD_TEM,
  R_1.ZON,
  R_1.GUIA_REPA,
  R_1.PROD,
  R_1.PRO_ET,
  R_1.COD_PRE,
  PROD.NOM_PRO,
  R_1.ESP,
  R_1.VARI,
  R_1.CAT,
  R_1.CAL,
  R_1.ETI,
  R_1.ENV,
  R_1.EMB,
  R_1.OP,
  ESP.NOM_ESP,
  VARI.NOM_VAR,
  ENV.NOM_ENV,
  EMB.NOM_EMB,
  R_1.COD_FRI,
  Erpfrusys.dbo.FRIOS.NOM_FRI,
  AP_C.PLANILLA,
  AP_C.TIPO_CARGO,
  PROD.COD_GRP_PRO,
  EXPO.COD_EXP,
  EX.NOM_EXP,
  R_1.folio,
  R_1.FECHA_PAC,
  R_1.COD_CUA;