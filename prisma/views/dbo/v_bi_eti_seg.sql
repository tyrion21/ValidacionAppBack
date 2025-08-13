SELECT
  FOLIO AS 'FOLIO',
  [CP],
  [LP],
  [SP],
  [MP]
FROM
  (
    SELECT
      FOLIO,
      SEGREGACION
    FROM
      v_etiqueta_segregacion
    GROUP BY
      FOLIO,
      SEGREGACION
  ) AS Temp;