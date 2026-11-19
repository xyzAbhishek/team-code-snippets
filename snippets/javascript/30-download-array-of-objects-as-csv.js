function exportCsv(rows, filename = 'export.csv') {
  const keys = Object.keys(rows[0] || {});
  const csv = [keys.join(','), ...rows.map(r => keys.map(k => JSON.stringify(r[k] ?? '')).join(','))].join('\n');
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(new Blob([csv])), download: filename });
  a.click();
}