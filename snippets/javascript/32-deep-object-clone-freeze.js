function deepFreeze(obj) {
  const copy = structuredClone(obj);
  Object.values(copy).forEach(v => { if (v && typeof v === 'object') deepFreeze(v); });
  return Object.freeze(copy);
}