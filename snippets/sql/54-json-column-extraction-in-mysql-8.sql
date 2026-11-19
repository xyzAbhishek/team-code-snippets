SELECT id, JSON_UNQUOTE(JSON_EXTRACT(metadata, '$.framework')) AS framework
FROM project_configs
WHERE metadata->'$.active' = true;