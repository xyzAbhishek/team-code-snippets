function connectWs(url, onMessage, delay = 1000) {
  const ws = new WebSocket(url);
  ws.onmessage = (e) => onMessage(JSON.parse(e.data));
  ws.onclose = () => setTimeout(() => connectWs(url, onMessage, Math.min(delay * 2, 30000)), delay);
  return ws;
}