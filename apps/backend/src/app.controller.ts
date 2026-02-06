import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/health')
  health() {
    return { status: 'ok', service: 'backend', timestamp: new Date().toISOString() };
  }

  @Get('/api/summary')
  summary() {
    return {
      kpis: [
        { label: 'Active Pipelines', value: 7 },
        { label: 'Build Success Rate', value: '96%' },
        { label: 'Avg Response', value: '148ms' },
        { label: 'Incidents', value: 1 },
      ],
      activity: [
        { id: 1, text: 'Frontend deployed to staging', time: '2h ago' },
        { id: 2, text: 'Backend health checks passing', time: '5h ago' },
        { id: 3, text: 'Security scan completed', time: 'Yesterday' },
      ],
    };
  }
}
