import { render, screen } from '@testing-library/react';
import MetricCard from './MetricCard';

describe('MetricCard', () => {
  it('renders label and value', () => {
    render(<MetricCard label="Uptime" value="99.9%" />);
    expect(screen.getByText('Uptime')).toBeInTheDocument();
    expect(screen.getByText('99.9%')).toBeInTheDocument();
  });

  it('renders sub text when provided', () => {
    render(<MetricCard label="Latency" value="132ms" sub="Analytics Service" />);
    expect(screen.getByText('Latency')).toBeInTheDocument();
    expect(screen.getByText('132ms')).toBeInTheDocument();
    expect(screen.getByText('Analytics Service')).toBeInTheDocument();
  });

  it('does not render sub text when not provided', () => {
    render(<MetricCard label="Errors" value="0.6%" />);
    expect(screen.getByText('Errors')).toBeInTheDocument();
    expect(screen.getByText('0.6%')).toBeInTheDocument();

    // Confirm sub is not shown
    expect(screen.queryByText('Analytics Service')).not.toBeInTheDocument();
  });
});
