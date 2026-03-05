# Codex handoff

Implement and maintain exactly the current bundle scope described in this folder.

## Settled decisions

- Backend only. No frontend work.
- Stack remains: Hono, TypeScript, Biome, Rstest.
- Base path is `/fhir`.
- Default port is `3301`, overridable by `PORT` or `API_PORT`.
- Auth mode is static bearer token for protected routes only:
  - `Authorization: Bearer demo-atr-token`
- Persistence is in-memory fixtures only.
- Response content type is `application/fhir+json; charset=utf-8`.

## Implemented endpoints

- `GET /fhir/Group/:id` (protected)
- `GET /fhir/Group/:id?_summary=true` (protected)
- `GET /fhir/Patient/:id` (protected)
- `GET /fhir/Coverage/:id` (protected)
- `GET /fhir/PractitionerRole/:id` (protected)
- `GET /fhir/Practitioner/:id` (protected)
- `GET /fhir/Organization/:id` (protected)
- `GET /fhir/metadata` (unprotected)

Behavior expectations:
- `_summary=true` removes `member` from Group response
- missing/invalid token on protected endpoints returns `401 OperationOutcome`
- unknown id on implemented read endpoints returns `404 OperationOutcome`

## Delivery target

A minimal repo slice that:
1. runs locally
2. passes backend lint, typecheck, and tests
3. returns documented example payloads
4. keeps scope visibly narrow and honest

## Do not implement in this bundle

- Group discovery search
- SMART Backend Services token validation and scope enforcement
- `$davinci-data-export`
- reconciliation operations
- subscriptions
- database persistence
- async jobs or object storage
- full IG conformance validation pipeline
