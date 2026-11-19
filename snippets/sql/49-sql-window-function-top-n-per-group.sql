WITH ranked AS (
  SELECT id, title, language, copy_count,
         ROW_NUMBER() OVER (PARTITION BY language ORDER BY copy_count DESC) AS rn
  FROM snippets
)
SELECT * FROM ranked WHERE rn <= 3;