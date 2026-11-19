async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try { await navigator.clipboard.writeText(text); return true; } catch {}
  }
  const ta = Object.assign(document.createElement('textarea'), { value: text });
  ta.style.position = 'fixed'; ta.style.left = '-9999px';
  document.body.appendChild(ta); ta.select();
  const ok = document.execCommand('copy'); ta.remove(); return ok;
}