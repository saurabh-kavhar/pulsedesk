const API_BASE = import.meta.env.VITE_API_BASE || '';

export async function fetchMetrics() {
  const res = await fetch(`${API_BASE}/api/analytics/metrics`);
  if (!res.ok) throw new Error('Failed to load metrics');
  return res.json();
}
