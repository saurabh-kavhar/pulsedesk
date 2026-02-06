import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { login } from '../auth/auth';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const success = login(email, password);
    if (success) navigate('/');
    else setError('Invalid credentials');
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
    >
      <div style={{ width: '100%', maxWidth: 380 }}>
        <Card title="Sign in to PulseDesk">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: 12,
                marginBottom: 12,
                marginTop: 12,
                borderRadius: 8,
              }}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: 12,
                marginBottom: 12,
                borderRadius: 8,
              }}
            />

            {error && (
              <div className="small" style={{ marginBottom: 10 }}>
                {error}
              </div>
            )}

            <button className="btn" style={{ width: '100%' }}>
              Login
            </button>
          </form>
        </Card>

        <div className="small" style={{ textAlign: 'center', marginTop: 12 }}>
          Demo mode · Any credentials work
        </div>
      </div>
    </div>
  );
}
