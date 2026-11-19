function parseJwt(token) {
  const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(decodeURIComponent(atob(base64).split('')
    .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')));
}