import { useEffect, useState } from 'react';
import { fetchMetrics } from '../api/analytics';

export function useAnalytics() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMetrics()
      .then(setData)
      .catch(() => setError('Analytics unavailable'))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
