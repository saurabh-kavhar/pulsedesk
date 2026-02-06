type Props = {
    label: string;
    value: string | number;
    sub?: string;
  };
  
  export default function MetricCard({ label, value, sub }: Props) {
    return (
      <div className="card">
        <div className="cardTitle">{label}</div>
        <div className="cardValue">{value}</div>
        {sub && <div className="small">{sub}</div>}
      </div>
    );
  }
  