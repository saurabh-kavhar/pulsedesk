import axios from 'axios';
import { Injectable, ServiceUnavailableException } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  async getMetrics() {
    try {
      const baseUrl = process.env.ANALYTICS_URL || 'http://localhost:5000';
      const { data } = await axios.get(`${baseUrl}/metrics`, { timeout: 5000 });
      return data;
    } catch (err) {
      throw new ServiceUnavailableException('Analytics service is not reachable');
    }
  }
}
