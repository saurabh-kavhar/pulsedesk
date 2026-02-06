import { AnalyticsService } from './analytics.service';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('AnalyticsService', () => {
  let service: AnalyticsService;

  beforeEach(() => {
    service = new AnalyticsService();
  });

  it('should return metrics from analytics service', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: { uptime: '99.9%' },
    } as any);

    const result = await service.getMetrics();
    expect(result.uptime).toBe('99.9%');
  });

  it('should throw if analytics is down', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network error'));

    await expect(service.getMetrics()).rejects.toThrow();
  });
});
