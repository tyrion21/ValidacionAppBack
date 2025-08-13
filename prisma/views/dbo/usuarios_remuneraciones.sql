SELECT
  IdMenu,
  IdAplicacion,
  IdUsuario,
  IdEmpresa,
  max(IdZona) AS IdZona,
  max(IdTemporada) AS IdTemporada
FROM
  bpriv.dbo.Perfil
WHERE
  IdEmpresa = '1'
GROUP BY
  IdMenu,
  IdAplicacion,
  IdUsuario,
  IdEmpresa;