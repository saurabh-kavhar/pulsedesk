import { useEffect, useState } from 'react';
import { fetchBackendHealth, fetchAnalyticsHealth } from '../api/health';

export function useServiceStatus() {
  const [backend, setBackend] = useState<'online' | 'offline'>('offline');
  const [analytics, setAnalytics] = useState<'online' | 'offline'>('offline');

  useEffect(() => {
    fetchBackendHealth()
      .then(() => setBackend('online'))
      .catch(() => setBackend('offline'));

    fetchAnalyticsHealth()
      .then(() => setAnalytics('online'))
      .catch(() => setAnalytics('offline'));
  }, []);

  return { backend, analytics };
}
