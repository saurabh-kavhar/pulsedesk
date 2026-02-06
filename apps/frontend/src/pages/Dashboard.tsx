import { useAnalytics } from '../hooks/useAnalytics';
import MetricCard from '../components/MetricCard';
import Card from '../components/Card';
import ActivityList from '../components/ActivityList';
import Loader from '../components/Loader';
import { logout } from '../auth/auth';
import { useServiceStatus } from '../hooks/useServiceStatus';
import ServiceStatus from '../components/ServiceStatus';


export default function Dashboard() {
  const { data, loading, error } = useAnalytics();
  const { backend, analytics } = useServiceStatus();


  if (loading) return <Loader />;
  if (error) return <Card>{error}</Card>;

  return (
    <div className="container">
      {/* Header */}
      <div className="nav">
        <div className="brand">
          <span className="dot" />
          PulseDesk
          <span className="badge">dashboard</span>
          <ServiceStatus label="Backend" status={backend} />
          <ServiceStatus label="Analytics" status={analytics} />
        </div>

        <button
          className="btn"
          onClick={() => {
            logout();
            window.location.href = '/login';
          }}
        >
          Logout
        </button>
      </div>

      {/* Metrics */}
      <div className="grid">
        <MetricCard label="Uptime" value={data.uptime} />
        <MetricCard label="Requests Today" value={data.requestsToday} />
        <MetricCard label="Error Rate" value={data.errorRate} />
        <MetricCard label="Avg Latency" value={data.avgLatency} />
      </div>

      {/* Bottom section */}
      <div className="split">
        <Card title="Recent Activity">
          <ActivityList />
        </Card>

        <Card title="System Info">
          <div className="small">
            Frontend → Backend → Analytics Service
          </div>
        </Card>
      </div>
    </div>
  );
}
