# Cambio de temporada

Los folios (LOTE) se reinician cada temporada, así que validaciones y rechazos se separan por
`Temporada`. Desde T10 (29-oct-2026) la temporada la decide el backend; la que envía la APK se
ignora.

## Qué cambiar al pasar a la temporada siguiente

| Dónde | Qué |
|---|---|
| Servidor 192.168.7.26, `~/backends/ValidacionAppBack/.env` | `TEMPORADA=11` y reiniciar el contenedor (`docker-compose up -d`) |
| 192.168.7.25 / Validacion, vista `dbo.v_temporada_actual` | `'10'` → `'11'` (la usan `v_cajas_validadas`, `v_cajas_rechazadas` y `v_informe_diario`) |
| 192.168.7.25 / Validacion, vista `dbo.v_existencias_con_estado` | las 3 listas `COD_TEM IN ('9', '10')` → `('10', '11')` (es de reporte: trae dos temporadas y se filtra con `WHERE Temporada = ...`) |
| 192.168.1.3 / consultas, vistas `existencias_cajas` y `existenciamix_cajas` | `COD_TEM = '11'` (y la fecha de corte de `existencias_cajas`) |
| `src/temporada.ts` | el valor por defecto, por si el `.env` no trae `TEMPORADA` |
| APK, `constants/constantes.js` | opcional: solo se muestra, no hace falta recompilar |

Los maestros `FRIOS` y `CAMARAS` de Erpfrusys deben existir para la temporada nueva
(frigorífico `3102213`).

## Comprobar

```bash
curl -k https://192.168.7.26:4000/frios
curl -k https://192.168.7.26:4000/camaras/3102213
curl -k https://192.168.7.26:4000/validacion/verificar-validacion/<folio de la temporada nueva>
```

Un folio nuevo debe salir `validado: false` aunque el mismo número se haya validado la temporada
anterior.

## Historial

- T8 → T9 (16-oct-2025): se recrearon las tablas vacías.
- T9 → T10 (29-oct-2026): restricción única `(Folio, Temporada)` y filtros por temporada.
  Scripts en `docs/sql/2026-10-29-temporada-10*.sql`.
