# Architecture

## Overview
The system is designed as a modular platform with three main layers:
- Frontend dashboard built with Next.js.
- Backend API built with Node.js and Express.
- AI classification service built with Python.

## Flow
1. Customer submits a support ticket.
2. Backend stores the ticket in MongoDB.
3. ML service classifies ticket category and urgency.
4. Backend assigns ticket to the correct queue or agent.
5. SLA engine calculates deadlines and breach risk.
6. Dashboard shows live analytics for agents and managers.

## Components
- Web app for customers and agents.
- REST API for business logic.
- ML classifier for routing.
- MongoDB for persistence.
- Analytics module for reporting.
