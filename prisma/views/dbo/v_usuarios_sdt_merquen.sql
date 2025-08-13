SELECT
  CASE
    p.IdEmpresa
    WHEN 'MER' THEN 'Merquen'
  END AS Empresa,
  du.Cargo AS Rut,
  CASE
    WHEN du.cargo = '' THEN 'Inactivo'
    WHEN isnumeric(du.Cargo) = 0 THEN 'Inactivo'
    ELSE 'Activo'
  END AS validador,
  du.Nombre,
  p.IdAplicacion AS Modulo,
  p.IdUsuario AS Usuario,
  m.Descripcion,
  m.IdMenu,
  g.tipo AS 'MENU',
  m.clave_p AS 'MENU PADRE'
FROM
  bpriv.dbo.Perfil AS p
  LEFT JOIN bpriv.dbo.Menu AS m ON p.IdMenu = m.IdMenu
  AND p.IdAplicacion = m.IdAplicacion
  LEFT JOIN Erpfrusys.dbo.Datos_Usuarios AS du ON du.Usuario = p.IdUsuario
  LEFT JOIN dbo.gobernanza AS g ON p.IdMenu = g.IDMENU
  AND p.IdAplicacion = g.MODULO
WHERE
  (p.IdTemporada = 7);