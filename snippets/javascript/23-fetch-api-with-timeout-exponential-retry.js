async function fetchWithRetry(url, opts = {}, retries = 3, timeoutMs = 5000) {
  for (let i = 0; i <= retries; i++) {
    const ctrl = new AbortController();
    const id = setTimeout(() => ctrl.abort(), timeoutMs);
    try {
      const res = await fetch(url, { ...opts, signal: ctrl.signal });
      clearTimeout(id);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      clearTimeout(id);
      if (i === retries) throw err;
      await new Promise(r => setTimeout(r, 300 * (2 ** i)));
    }
  }
}