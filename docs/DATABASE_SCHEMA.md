# Database Schema

## Ticket
- subject
- description
- category
- priority
- status
- assignedTo
- customerId
- slaDueAt
- firstResponseAt
- resolvedAt
- sentimentScore
- aiConfidence

## User
- name
- email
- password
- role

## SLA
- ticketId
- firstResponseDueAt
- resolutionDueAt
- isBreached

## Feedback
- ticketId
- customerId
- rating
- comment
- createdAt
