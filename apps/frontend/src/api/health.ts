const API_BASE = import.meta.env.VITE_API_BASE || '';

export async function fetchBackendHealth() {
  const res = await fetch(`${API_BASE}/health`);
  if (!res.ok) throw new Error('Backend health failed');
  return res.json();
}

export async function fetchAnalyticsHealth() {
  const res = await fetch(`${API_BASE}/api/analytics/metrics`);
  if (!res.ok) throw new Error('Analytics health failed');
  return true;
}
