# AI-Based Customer Support Ticketing System

A smart support platform that uses AI to classify, route, and track customer support tickets while providing SLA monitoring, agent performance dashboards, and customer satisfaction analytics.

## Features

- AI-powered ticket classification.
- Automated ticket routing to the correct department or agent.
- SLA tracking and breach alerts.
- Agent performance dashboards.
- Customer satisfaction analytics.
- Ticket lifecycle management.
- Role-based access for admins, agents, and supervisors.
- Real-time operational reporting.
- Scalable architecture using Next.js, Node.js, Python ML, and MongoDB.

## Tech Stack

- Frontend: Next.js
- Backend: Node.js + Express
- ML Service: Python
- Database: MongoDB
- Authentication: JWT
- Charts: Recharts or Chart.js
- Styling: Tailwind CSS or CSS Modules

## Core Modules

### 1. Ticket Management
- Create ticket.
- Update ticket.
- Assign ticket.
- Close ticket.
- Search and filter tickets.
- View ticket history.

### 2. AI Routing
- Classify ticket category.
- Predict urgency.
- Assign department.
- Suggest best agent.
- Detect sentiment if needed.

### 3. SLA Tracking
- Track first response time.
- Track resolution time.
- Flag breach risk.
- Notify agents and supervisors.

### 4. Analytics Dashboard
- Tickets by status.
- Ticket volume trends.
- SLA compliance rate.
- Agent productivity.
- Satisfaction score trends.

## Folder Overview

- `client/` contains the Next.js dashboard UI.
- `server/` contains API, business logic, and database operations.
- `ml/` contains Python model training and inference code.
- `docs/` contains system design and technical documentation.

## Setup Instructions

### Prerequisites
- Node.js
- Python 3.10+
- MongoDB
- npm or yarn

### Install Frontend
```bash
cd client
npm install
npm run dev
```

### Install Backend
```bash
cd server
npm install
npm run dev
```

### Install ML Dependencies
```bash
cd ml
pip install -r requirements.txt
python train.py
```

## Environment Variables

Create `.env` files using the provided examples in `client/.env.local.example` and `server/.env.example`.

## API Overview

- `POST /api/auth/login`
- `POST /api/tickets`
- `GET /api/tickets`
- `GET /api/tickets/:id`
- `PATCH /api/tickets/:id`
- `GET /api/analytics/dashboard`
- `GET /api/sla/status`

## Deployment

- Frontend can be deployed on Vercel.
- Backend can be deployed on Render, Railway, or AWS.
- ML service can be deployed separately on FastAPI/Flask or as a background service.
- MongoDB can be hosted on MongoDB Atlas.

## My Project Structure

ai-customer-support-ticketing-system/
├─ README.md
├─ .gitignore
├─ .env.example
├─ docker-compose.yml
├─ package.json
├─ LICENSE
├─ docs/
│  ├─ ARCHITECTURE.md
│  ├─ API.md
│  ├─ DATABASE_SCHEMA.md
│  ├─ SLA_POLICY.md
│  ├─ DASHBOARD_METRICS.md
│  └─ DEPLOYMENT.md
├─ client/
│  ├─ package.json
│  ├─ next.config.js
│  ├─ .env.local.example
│  ├─ src/
│  │  ├─ app/
│  │  │  ├─ layout.tsx
│  │  │  ├─ page.tsx
│  │  │  ├─ dashboard/
│  │  │  │  └─ page.tsx
│  │  │  ├─ tickets/
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ [id]/
│  │  │  │     └─ page.tsx
│  │  │  ├─ analytics/
│  │  │  │  └─ page.tsx
│  │  │  └─ settings/
│  │  │     └─ page.tsx
│  │  ├─ components/
│  │  │  ├─ Navbar.tsx
│  │  │  ├─ Sidebar.tsx
│  │  │  ├─ TicketCard.tsx
│  │  │  ├─ TicketTable.tsx
│  │  │  ├─ MetricCard.tsx
│  │  │  ├─ SLAStatus.tsx
│  │  │  ├─ SatisfactionChart.tsx
│  │  │  └─ AgentPerformanceChart.tsx
│  │  ├─ lib/
│  │  │  ├─ api.ts
│  │  │  ├─ auth.ts
│  │  │  └─ format.ts
│  │  └─ styles/
│  │     └─ globals.css
├─ server/
│  ├─ package.json
│  ├─ .env.example
│  ├─ src/
│  │  ├─ app.js
│  │  ├─ config/
│  │  │  ├─ db.js
│  │  │  └─ env.js
│  │  ├─ models/
│  │  │  ├─ Ticket.js
│  │  │  ├─ User.js
│  │  │  ├─ SLA.js
│  │  │  └─ Feedback.js
│  │  ├─ routes/
│  │  │  ├─ ticketRoutes.js
│  │  │  ├─ analyticsRoutes.js
│  │  │  ├─ authRoutes.js
│  │  │  └─ slaRoutes.js
│  │  ├─ controllers/
│  │  │  ├─ ticketController.js
│  │  │  ├─ analyticsController.js
│  │  │  ├─ authController.js
│  │  │  └─ slaController.js
│  │  ├─ services/
│  │  │  ├─ ticketRoutingService.js
│  │  │  ├─ slaService.js
│  │  │  └─ analyticsService.js
│  │  ├─ middleware/
│  │  │  ├─ authMiddleware.js
│  │  │  ├─ errorMiddleware.js
│  │  │  └─ validateRequest.js
│  │  └─ utils/
│  │     ├─ logger.js
│  │     └─ constants.js
│  └─ tests/
│     ├─ ticket.test.js
│     └─ sla.test.js
├─ ml/
│  ├─ requirements.txt
│  ├─ train.py
│  ├─ predict.py
│  ├─ evaluate.py
│  ├─ model/
│  │  └─ ticket_classifier.pkl
│  ├─ artifacts/
│  │  ├─ vectorizer.pkl
│  │  └─ label_encoder.pkl
│  └─ utils/
│     ├─ preprocessing.py
│     ├─ features.py
│     └─ metrics.py
└─ scripts/
   ├─ seed.js
   └─ migrate.js


   ## Contact-
      Email: sankalpverma2111@gmail.com
