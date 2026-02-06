# PulseDesk

PulseDesk is a clean, production-ready microservices starter project demonstrating scalable frontend and backend architecture with testing, CI, and service-to-service communication.

---

## Architecture

```
Frontend (React)
↓
Backend API (NestJS)
↓
Analytics Service (NestJS)
```

- Frontend communicates only with the Backend
- Backend acts as a lightweight API gateway
- Analytics service is isolated and independently scalable
- Database is intentionally not included yet (DB-ready structure)

---

## Services

### Frontend (`apps/frontend`)
- React + TypeScript + Vite
- Dashboard UI
- Login and protected routes (UI-only authentication)
- Service health indicators
- Reusable components and hooks
- Unit testing with Vitest
- Coverage thresholds enforced

### Backend (`apps/backend`)
- NestJS REST API
- Proxies requests to the analytics service
- Central point for future authentication and database integration
- Unit testing with Jest
- Coverage thresholds enforced

### Analytics Service (`apps/analytics-service`)
- Independent NestJS microservice
- Provides metrics and health data
- Unit testing enabled

---

## Testing & Quality

- Unit tests for frontend and backend
- Coverage thresholds enforced in CI

| Layer    | Lines | Functions | Branches |
|---------|-------|-----------|----------|
| Frontend | 80% | 70% | 70% |
| Backend  | 80% | 70% | 70% |

CI fails if coverage drops below these thresholds.

---

## Security & Dependency Scanning

- `npm audit`
- GitHub Dependabot enabled
- Weekly dependency update checks

---

## Continuous Integration (CI)

GitHub Actions pipeline runs on every push and pull request:

- Install dependencies
- Run unit tests
- Enforce coverage thresholds

---

## Running the Project

### Docker (Recommended)

```bash
docker compose up --build
```

| Service   | URL                                                            |
| --------- | -------------------------------------------------------------- |
| Frontend  | [http://localhost:5173](http://localhost:5173)                 |
| Backend   | [http://localhost:4000/health](http://localhost:4000/health)   |
| Analytics | [http://localhost:5000/metrics](http://localhost:5000/metrics) |

---

### Local Development (Without Docker)

#### Backend

```bash
cd apps/backend
npm install
npm run start:dev
```

#### Analytics Service

```bash
cd apps/analytics-service
npm install
npm run start:dev
```

#### Frontend

```bash
cd apps/frontend
npm install
npm run dev
```

---

## Project Structure

```
pulsedesk/
├─ apps/
│  ├─ frontend/
│  ├─ backend/
│  └─ analytics-service/
├─ .github/
│  ├─ workflows/
│  └─ dependabot.yml
├─ docker-compose.yml
└─ README.md
```

---

## Notes

* Authentication is currently UI-only (demo mode)
* Backend JWT authentication and database integration can be added without frontend changes
* Designed as a reference-quality microservices starter project

---

## License

MIT
