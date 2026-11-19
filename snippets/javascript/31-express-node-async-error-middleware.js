app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  console.error(`[ERROR] ${req.method} ${req.url}:`, err.message);
  res.status(status).json({ error: err.message || 'Internal Server Error' });
});