function throttle(fn, limitMs = 150) {
  let waiting = false;
  return (...args) => {
    if (waiting) return;
    fn(...args); waiting = true;
    setTimeout(() => { waiting = false; }, limitMs);
  };
}