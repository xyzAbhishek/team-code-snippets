SELECT id, title, MATCH(title, description, tags) AGAINST (:q IN NATURAL LANGUAGE MODE) AS score
FROM snippets
WHERE MATCH(title, description, tags) AGAINST (:q IN NATURAL LANGUAGE MODE)
ORDER BY score DESC LIMIT 25;