SELECT
  CASE
    p.IdEmpresa
    WHEN 'MCO' THEN 'Mercedario'
  END AS Empresa,
  du.cargo AS Rut,
  CASE
    WHEN du.cargo = '' THEN 'Inactivo'
    WHEN isnumeric(du.Cargo) = 0 THEN 'Inactivo'
    ELSE 'Activo'
  END AS validador,
  du.Nombre,
  g.MODULO AS Modulo,
  p.IdUsuario AS Usuario,
  m.Descripcion AS Descripcion,
  m.clave_p,
  g.tipo AS 'MENU',
  m.clave_p AS 'MENU PADRE',
  max(p.IdZona) AS IdZona,
  max(p.IdTemporada) AS IdTemporada
FROM
  [192.168.1.104].bpriv.dbo.Perfil AS p
  LEFT JOIN [192.168.1.104].bpriv.dbo.Menu AS m ON p.IdMenu = m.IdMenu
  AND p.IdAplicacion = m.IdAplicacion
  LEFT JOIN [192.168.1.104].erpfrusys.dbo.Datos_Usuarios AS du ON du.Usuario = p.IdUsuario
  LEFT JOIN consultas.dbo.gobernanza AS g ON p.IdMenu = g.IDMENU
  AND p.IdAplicacion = g.MODULO
WHERE
  p.IdEmpresa = 'MCO'
  AND p.IdUsuario <> '<Seleccione>'
  AND g.IDMENU IS NOT NULL
GROUP BY
  p.IdEmpresa,
  du.Cargo,
  du.Nombre,
  g.MODULO,
  p.IdUsuario,
  m.Descripcion,
  m.clave_p,
  g.tipo,
  m.clave_p;