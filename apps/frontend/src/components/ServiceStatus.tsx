type Props = {
  label: string;
  status: 'online' | 'offline';
};

export default function ServiceStatus({ label, status }: Props) {
  return (
    <span
      className="badge"
      style={{
        borderColor:
          status === 'online'
            ? 'rgba(0,255,150,0.6)'
            : 'rgba(255,80,80,0.6)',
        color:
          status === 'online'
            ? 'rgba(0,255,150,0.9)'
            : 'rgba(255,80,80,0.9)',
      }}
    >
      ● {label}: {status}
    </span>
  );
}
