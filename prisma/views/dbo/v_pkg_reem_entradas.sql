SELECT
  'Entrada Reem.' AS tipo,
  PK.COD_TEM,
  PK.COD_EMP,
  PK.PLANILLA,
  PK.FECHA_RPA,
  PK.COD_PRO,
  PK.COD_FRI,
  PK.COD_ESP,
  PK.COD_VAR,
  PK.LOTE,
  PK.ZON,
  SUM(PK.CANTIDAD) AS CAJAS,
  SUM(PK.TOTAL_KILOS) AS TOTAL_KILOS,
  PK.KILOS,
  Erpfrusys.dbo.PRODUCTORES.NOM_PRO,
  Erpfrusys.dbo.VARIEDAD.NOM_VAR,
  Erpfrusys.dbo.FRIOS.NOM_FRI,
  Erpfrusys.dbo.ESPECIE.NOM_ESP,
  ISNULL(PK.COD_CAL, N'') AS COD_CAL,
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
    N''
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
            AND (CAJAS = SUM(PK.CANTIDAD))
            AND (COD_TIPO_TRA = PK.COD_TIPO_TRA)
        ) AS U_1
    ),
    N''
  ) AS COD_ETI,
  'Eliminado' AS Expr1,
  PK.COD_TIPO_TRA,
  TIPO.DESCRIPCION AS NOM_TIPO_TRA,
  PK.COD_PRE,
  PK.COD_EXP,
  PK.TIPOFRU
FROM
  Erpfrusys.dbo.PROCEPACK_MAS AS PK
  JOIN Erpfrusys.dbo.PRODUCTORES ON PK.COD_PRO = Erpfrusys.dbo.PRODUCTORES.COD_PRO
  AND PK.COD_TEM = Erpfrusys.dbo.PRODUCTORES.COD_TEM
  AND PK.COD_EMP = Erpfrusys.dbo.PRODUCTORES.COD_EMP
  JOIN Erpfrusys.dbo.ESPECIE ON PK.COD_ESP = Erpfrusys.dbo.ESPECIE.COD_ESP
  AND PK.COD_TEM = Erpfrusys.dbo.ESPECIE.COD_TEM
  AND PK.COD_EMP = Erpfrusys.dbo.ESPECIE.COD_EMP
  JOIN Erpfrusys.dbo.VARIEDAD ON Erpfrusys.dbo.ESPECIE.COD_ESP = Erpfrusys.dbo.VARIEDAD.COD_ESP
  AND PK.COD_VAR = Erpfrusys.dbo.VARIEDAD.COD_VAR
  AND PK.COD_TEM = Erpfrusys.dbo.VARIEDAD.COD_TEM
  AND PK.COD_EMP = Erpfrusys.dbo.VARIEDAD.COD_EMP
  JOIN Erpfrusys.dbo.FRIOS ON PK.COD_FRI = Erpfrusys.dbo.FRIOS.COD_FRI
  AND PK.COD_TEM = Erpfrusys.dbo.FRIOS.COD_TEM
  AND PK.COD_EMP = Erpfrusys.dbo.FRIOS.COD_EMP
  LEFT JOIN Erpfrusys.dbo.TIPO_TRATAMIENTO AS TIPO ON TIPO.COD_EMP = PK.COD_EMP
  AND TIPO.COD_TEM = PK.COD_TEM
  AND TIPO.COD_TIPO_TRA = PK.COD_TIPO_TRA
  AND TIPO.COD_ESP = PK.COD_ESP
WHERE
  (PK.TIPOFRU_PK = 'E')
GROUP BY
  PK.COD_TEM,
  PK.COD_EMP,
  PK.PLANILLA,
  PK.FECHA_RPA,
  PK.COD_PRO,
  PK.COD_FRI,
  PK.COD_ESP,
  PK.COD_VAR,
  PK.LOTE,
  PK.ZON,
  Erpfrusys.dbo.PRODUCTORES.NOM_PRO,
  Erpfrusys.dbo.VARIEDAD.NOM_VAR,
  Erpfrusys.dbo.FRIOS.NOM_FRI,
  Erpfrusys.dbo.ESPECIE.NOM_ESP,
  PK.COD_CAL,
  PK.COD_ENV,
  PK.COD_TIPO_TRA,
  TIPO.DESCRIPCION,
  PK.COD_PRE,
  PK.CANTIDAD,
  PK.COD_EXP,
  PK.KILOS,
  PK.TIPOFRU;