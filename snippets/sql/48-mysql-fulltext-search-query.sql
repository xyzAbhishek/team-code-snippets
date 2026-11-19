// This is a change from github
SELECT id, title, MATCH(title, description, tags) AGAINST (:q IN NATURAL LANGUAGE MODE) AS score
FROM snippets
//this is a change from the website
WHERE MATCH(title, description, tags) AGAINST (:q IN NATURAL LANGUAGE MODE)
ORDER BY score DESC LIMIT 25;
