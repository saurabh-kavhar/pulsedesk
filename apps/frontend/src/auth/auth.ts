const TOKEN_KEY = 'pulsedesk_token';

export function login(email: string, password: string) {
  // fake auth for now
  if (email && password) {
    localStorage.setItem(TOKEN_KEY, 'fake-jwt-token');
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function isAuthenticated() {
  return Boolean(localStorage.getItem(TOKEN_KEY));
}
