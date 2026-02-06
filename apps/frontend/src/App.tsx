import { useEffect, useState } from "react";
import "./index.css";

type Summary = {
  kpis: { label: string; value: string | number }[];
  activity: { id: number; text: string; time: string }[];
};

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

export default function App() {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [health, setHealth] = useState<string>("checking...");
  const [error, setError] = useState<string>("");

  async function load() {
    setError("");
    try {
      const h = await fetch(`${API_BASE}/health`);
      const hjson = await h.json();
      setHealth(hjson?.status === "ok" ? "online" : "unknown");

      const s = await fetch(`${API_BASE}/api/summary`);
      const sjson = await s.json();
      setSummary(sjson);
    } catch (e: any) {
      setError(e?.message || "Failed to connect to backend");
      setHealth("offline");
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="container">
      <div className="nav">
        <div className="brand">
          <span className="dot" />
          PulseDesk
          <span className="badge">frontend</span>
          <span className="badge">backend: {health}</span>
        </div>
        <button className="btn" onClick={load}>Refresh</button>
      </div>

      <div className="hero">
        <h1 className="h1">Microservices starter, built to scale.</h1>
        <p className="p">
          Two services (React UI + NestJS API) running independently.
          Database will be plugged in later without changing the structure.
        </p>
        {error && <p className="p" style={{ marginTop: 10, color: "rgba(255,255,255,0.85)" }}>
          ⚠ {error}
        </p>}
      </div>

      <div className="grid">
        {(summary?.kpis || [
          { label: "Active Pipelines", value: "-" },
          { label: "Build Success Rate", value: "-" },
          { label: "Avg Response", value: "-" },
          { label: "Incidents", value: "-" },
        ]).map((k) => (
          <div key={k.label} className="card">
            <div className="cardTitle">{k.label}</div>
            <div className="cardValue">{k.value}</div>
          </div>
        ))}
      </div>

      <div className="split">
        <div className="card">
          <div className="cardTitle">Recent activity</div>
          <div style={{ marginTop: 10 }}>
            {(summary?.activity || []).map((a) => (
              <div key={a.id} className="listItem">
                <div>
                  <div style={{ fontWeight: 600 }}>{a.text}</div>
                  <div className="small">{a.time}</div>
                </div>
                <div className="badge">event</div>
              </div>
            ))}
            {!summary?.activity?.length && (
              <div className="small" style={{ marginTop: 10 }}>
                No activity yet. Backend not connected or data not loaded.
              </div>
            )}
          </div>
        </div>

        <div className="card">
          <div className="cardTitle">Next upgrades (future)</div>
          <div style={{ marginTop: 10 }}>
            <div className="listItem">
              <div>
                <div style={{ fontWeight: 600 }}>Add database</div>
                <div className="small">Postgres + migrations + repo pattern</div>
              </div>
              <div className="badge">phase 2</div>
            </div>
            <div className="listItem">
              <div>
                <div style={{ fontWeight: 600 }}>Auth</div>
                <div className="small">JWT + refresh tokens</div>
              </div>
              <div className="badge">phase 2</div>
            </div>
            <div className="listItem">
              <div>
                <div style={{ fontWeight: 600 }}>API gateway</div>
                <div className="small">Route multiple services cleanly</div>
              </div>
              <div className="badge">phase 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
