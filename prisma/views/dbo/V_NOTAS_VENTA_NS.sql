SELECT
  NV.COD_TEM,
  NV.PLANILLA AS NOTA_VENTA,
  NV.ZON AS Zona,
  NV.COD_REC AS [Cod. Recibidor],
  R.NOM_REC AS [Nombre Recibidor],
  NV.TIP_TRA AS [Tipo Transporte],
  NV.COD_ESP AS [Cod. Especie],
  E.NOM_ESP AS [Nombre Especie],
  ISNULL(NV.COD_VAR, N'Todas') AS [Cod. Variedad],
  ISNULL(V.NOM_VAR, N'Todas') AS [Nombre Variedad],
  NV.COD_CAT AS Categoria,
  NV.COD_CAL1 AS [Desde Calibre],
  NV.COD_CAL2 AS [Hasta Calibre],
  NV.SERIE1 AS [Desde Serie],
  NV.SERIE2 AS [Hasta Seria],
  NV.COD_ENV,
  NV.COD_EMB AS [Codigo de Embalaje],
  NV.COD_ENVOP AS [Cod. Operacional],
  EO.DESCRIPCION AS [Des. Operacional],
  NV.PRECIO,
  NV.N_PALLETS AS [Nro. Pallets],
  NV.COD_ETI AS [Cod. ETiqueta],
  NV.CAJAS,
  NV.PLANILLA_ORDEN_COMPRA AS [Orden de Compra Fruta],
  (
    SELECT
      TOP (1) NOM_ETI
    FROM
      Erpfrusys.dbo.ETIQUETA AS eti
    WHERE
      (COD_ETI = NV.COD_ETI)
  ) AS [Descripcion Etiqueta],
  TNV.COD_MER AS Mercado,
  mer.NOM_MER AS [Nombre Mercado],
  TNV.COD_PUE AS [Puerto Destino],
  pue.DESCRIPCION AS [Nombre Puerto Des],
  SZ.SEMANA,
  NV.COD_VAR,
  (
    SELECT
      MAX(PLANILLA) AS Expr1
    FROM
      Erpfrusys.dbo.OEM AS o
    WHERE
      (NOTAVENTA = NV.PLANILLA)
      AND (COD_EMP = NV.COD_EMP)
      AND (COD_TEM = NV.COD_TEM)
  ) AS orden_embarque
FROM
  Erpfrusys.dbo.NOTAVENTA AS NV
  JOIN Erpfrusys.dbo.ESPECIE AS E ON NV.COD_EMP = E.COD_EMP
  AND NV.COD_TEM = E.COD_TEM
  AND NV.COD_ESP = E.COD_ESP
  JOIN Erpfrusys.dbo.VARIEDAD AS V ON NV.COD_EMP = V.COD_EMP
  AND NV.COD_TEM = V.COD_TEM
  AND NV.COD_ESP = V.COD_ESP
  AND NV.COD_VAR = V.COD_VAR
  JOIN Erpfrusys.dbo.ENVASEOPERACIONAL AS EO ON NV.COD_EMP = EO.COD_EMP
  AND NV.COD_TEM = EO.COD_TEM
  AND NV.COD_ESP = EO.COD_ESP
  AND NV.COD_ENV = EO.COD_ENV
  AND NV.COD_EMB = EO.COD_EMB
  AND NV.COD_ENVOP = EO.COD_ENVOP
  JOIN Erpfrusys.dbo.RECIBIDORES AS R ON NV.COD_EMP = R.COD_EMP
  AND NV.COD_TEM = R.COD_TEM
  AND NV.COD_REC = R.COD_REC
  JOIN Erpfrusys.dbo.TIT_NOTAVENTA AS TNV ON NV.PLANILLA = TNV.PLANILLA
  AND NV.COD_EMP = TNV.COD_EMP
  AND NV.COD_TEM = TNV.COD_TEM
  JOIN Erpfrusys.dbo.MERCADO AS mer ON mer.COD_MER = TNV.COD_MER
  AND mer.COD_EMP = TNV.COD_EMP
  AND mer.COD_TEM = TNV.COD_TEM
  JOIN Erpfrusys.dbo.DESTINOS AS pue ON pue.COD_DES = TNV.COD_PUE
  AND pue.COD_EMP = TNV.COD_EMP
  AND pue.COD_TEM = TNV.COD_TEM
  JOIN Erpfrusys.dbo.SEMANAS AS SZ ON SZ.COD_EMP = TNV.COD_EMP
  AND SZ.COD_TEM = TNV.COD_TEM
  AND TNV.FECHA BETWEEN SZ.INICIO AND SZ.TERMINO
WHERE
  (NV.COD_EMP = 'QUE')
  AND (NV.COD_TEM = '4')
  OR (NV.COD_EMP = 'QUE')
  AND (NV.COD_TEM = '5');