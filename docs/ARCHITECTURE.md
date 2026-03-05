# Architecture

## Context

This service is a compact producer-side FHIR server for one teaching path:
1. authenticate caller on protected read routes
2. return one ATR Group and resources referenced by Group members
3. expose minimal FHIR metadata

## Request flows

### Group

```text
examples/light cURL files
  -> GET /fhir/Group/:id
  -> bearer auth middleware
  -> group route
  -> in-memory ATR fixture lookup
  -> full Group or summary Group
  -> application/fhir+json response
```

### References

```text
examples/light cURL files
  -> GET /fhir/{Patient|Coverage|PractitionerRole|Practitioner|Organization}/:id
  -> bearer auth middleware
  -> reference route handler
  -> in-memory reference fixture lookup
  -> resource or OperationOutcome
```

### Metadata

```text
examples/light cURL files
  -> GET /fhir/metadata
  -> capability statement builder
  -> application/fhir+json response
```

## Component responsibilities

- `server/main.ts`
  - starts HTTP server
  - uses default port `3301` with env override
  - prints `EADDRINUSE` guidance
- `server/app.ts`
  - mounts routes under `/fhir`
- `server/middleware/authStrategy.ts`
  - auth contract (`AuthStrategy`) for future strategy swaps
- `server/middleware/staticBearerAuthStrategy.ts`
  - static token validation for bundle 1
- `server/middleware/bearerAuth.ts`
  - shared auth middleware for protected routes
- `server/routes/group.ts`
  - Group read + summary behavior + Group 404 handling
- `server/routes/references.ts`
  - read handlers for Patient/Coverage/PractitionerRole/Practitioner/Organization
- `server/routes/metadata.ts`
  - CapabilityStatement endpoint
- `server/data/atrGroup.ts`
  - Group fixture and summary builder
- `server/data/references.ts`
  - reference fixtures and lookup helpers
- `server/fhir/operationOutcome.ts`
  - standard OperationOutcome builder
- `server/fhir/capabilityStatement.ts`
  - metadata builder listing supported read interactions
- tests in `server/routes/*.test.ts`
  - regression coverage for Group, references, metadata

## Why in-memory first

The primary teaching objective is resource shape and routing behavior, not infrastructure.
In-memory fixtures keep feedback fast while preserving clear FHIR examples.

## Intentionally not present

- SMART well-known config/token exchange
- Group discovery/search endpoints
- ATR export/reconciliation operations
- database persistence and async orchestration
