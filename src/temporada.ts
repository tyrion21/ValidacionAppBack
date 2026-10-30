// Temporada vigente. La decide el backend, no la APK (la APK envía la suya, pero se ignora).
// Al cambiar de temporada: TEMPORADA en el .env del servidor y la vista dbo.v_temporada_actual
// de la base Validacion (192.168.7.25). Ver docs/CAMBIO-TEMPORADA.md.
export const TEMPORADA = process.env.TEMPORADA || '10';
