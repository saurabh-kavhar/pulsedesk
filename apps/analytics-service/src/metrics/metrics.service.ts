import { Injectable } from '@nestjs/common';

@Injectable()
export class MetricsService {
  getMetrics() {
    return {
      uptime: '99.94%',
      requestsToday: 1842,
      errorRate: '0.6%',
      avgLatency: '132ms',
    };
  }
}
