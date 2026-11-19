SELECT id, title, updated_at
FROM snippets
WHERE id < :last_seen_id
ORDER BY id DESC
LIMIT 20;