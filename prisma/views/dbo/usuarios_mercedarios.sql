SELECT
  IdMenu,
  IdAplicacion,
  IdUsuario,
  IdEmpresa,
  max(IdZona) AS IdZona,
  max(IdTemporada) AS IdTemporada
FROM
  [192.168.1.104].bpriv.dbo.Perfil
WHERE
  IdEmpresa = 'MCO'
GROUP BY
  IdMenu,
  IdAplicacion,
  IdUsuario,
  IdEmpresa;