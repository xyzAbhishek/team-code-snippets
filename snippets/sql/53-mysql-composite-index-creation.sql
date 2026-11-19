CREATE INDEX idx_snippets_lang_updated
ON snippets (language, updated_at DESC);