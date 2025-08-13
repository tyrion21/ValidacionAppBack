SELECT
  DISTINCT 'Salidas GR. Reem.' AS tipo,
  PK.COD_TEM,
  PK.COD_EMP,
  PK.PLANILLA,
  PK.FECHA_RPA,
  PK.COD_PRO,
  PK.COD_FRI,
  V.COD_ESP,
  PK.COD_VAR,
  PK.LOTE,
  PK.ZON,
  PK.CANTIDAD AS CAJAS,
  PK.TOTAL_KILOS,
  PK.KILOS,
  P.NOM_PRO,
  V.NOM_VAR,
  F.NOM_FRI,
  E.NOM_ESP,
  PK.COD_CAL,
  ISNULL(
    (
      SELECT
        DISTINCT COD_ENVOP
      FROM
        (
          SELECT
            COD_ENVOP
          FROM
            Erpfrusys.dbo.REEMBALAJE_MAS
          WHERE
            (LOTE = PK.LOTE)
            AND (NRO_MIX = 0)
          UNION
          ALL
          SELECT
            DISTINCT COD_ENVOP
          FROM
            Erpfrusys.dbo.MIXREEMBALAJE_MAS
          WHERE
            (LOTE = PK.LOTE)
            AND (COD_PRO = PK.COD_PRO)
            AND (COD_ESP = PK.COD_ESP)
            AND (COD_VAR = PK.COD_VAR)
            AND (COD_CAL = PK.COD_CAL)
            AND (COD_ENV = PK.COD_ENV)
            AND (CAJAS = PK.CANTIDAD)
            AND (COD_TIPO_TRA = PK.COD_TIPO_TRA)
        ) AS U
    ),
    PK.COD_ENV
  ) AS COD_ENVOP,
  ISNULL(
    (
      SELECT
        DISTINCT COD_ETI
      FROM
        (
          SELECT
            COD_ETI
          FROM
            Erpfrusys.dbo.REEMBALAJE_MAS AS REEMBALAJE_MAS_1
          WHERE
            (LOTE = PK.LOTE)
            AND (NRO_MIX = 0)
          UNION
          ALL
          SELECT
            DISTINCT COD_ETI
          FROM
            Erpfrusys.dbo.MIXREEMBALAJE_MAS AS MIXREEMBALAJE_MAS_1
          WHERE
            (LOTE = PK.LOTE)
            AND (COD_PRO = PK.COD_PRO)
            AND (COD_ESP = PK.COD_ESP)
            AND (COD_VAR = PK.COD_VAR)
            AND (COD_CAL = PK.COD_CAL)
            AND (COD_ENV = PK.COD_ENV)
            AND (CAJAS = PK.CANTIDAD)
            AND (COD_TIPO_TRA = PK.COD_TIPO_TRA)
        ) AS U_1
    ),
    N''
  ) AS COD_ETI,
  CASE
    WHEN PK.TIPOFRU = 'C' THEN 'Fruta Comercial'
    WHEN PK.TIPOFRU = 'B' THEN 'Desecho'
    ELSE 'Unknow'
  END AS Expr1,
  PK.COD_TIPO_TRA,
  TIPO.DESCRIPCION AS NOM_TIPO_TRA,
  PK.COD_PRE,
  PK.COD_EXP,
  PK.TIPOFRU
FROM
  Erpfrusys.dbo.PROCEPACK_MAS AS PK
  JOIN Erpfrusys.dbo.PRODUCTORES AS P ON PK.COD_PRO = P.COD_PRO
  AND PK.COD_TEM = P.COD_TEM
  AND PK.COD_EMP = P.COD_EMP
  JOIN Erpfrusys.dbo.ESPECIE AS E ON PK.COD_ESP = E.COD_ESP
  AND PK.COD_TEM = E.COD_TEM
  AND PK.COD_EMP = E.COD_EMP
  JOIN Erpfrusys.dbo.VARIEDAD AS V ON E.COD_ESP = V.COD_ESP
  AND PK.COD_VAR = V.COD_VAR
  AND PK.COD_TEM = V.COD_TEM
  AND PK.COD_EMP = V.COD_EMP
  JOIN Erpfrusys.dbo.FRIOS AS F ON PK.COD_FRI = F.COD_FRI
  AND PK.COD_TEM = F.COD_TEM
  AND PK.COD_EMP = F.COD_EMP
  LEFT JOIN Erpfrusys.dbo.TIPO_TRATAMIENTO AS TIPO ON TIPO.COD_EMP = PK.COD_EMP
  AND TIPO.COD_TEM = PK.COD_TEM
  AND TIPO.COD_TIPO_TRA = PK.COD_TIPO_TRA
  AND TIPO.COD_ESP = PK.COD_ESP
WHERE
  (PK.TIPOFRU_PK = 'C');