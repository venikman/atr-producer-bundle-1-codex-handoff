# Bundle 1: ATR producer server demo

This repository is a backend-only ATR-shaped producer demo.

It implements authenticated FHIR `read` for one ATR `Group` plus the resource types referenced by `Group.member`, and a minimal unauthenticated metadata endpoint.

## Implemented API surface

Base path: `/fhir`

- `GET /Group/:id` (requires `Authorization: Bearer demo-atr-token`)
- `GET /Group/:id?_summary=true` (same auth, omits `member`)
- `GET /Patient/:id` (auth required)
- `GET /Coverage/:id` (auth required)
- `GET /PractitionerRole/:id` (auth required)
- `GET /Practitioner/:id` (auth required)
- `GET /Organization/:id` (auth required)
- `GET /metadata` (no auth required)

Default local port is `3301`.
You can override with `PORT` or `API_PORT`.

## Main purpose

The main purpose is direct visibility into attribution member list shape and the references each member points to.

This project is an ATR-shaped educational demo, not a full ATR Producer implementation.

## Reading order

1. `docs/README.md`
2. `docs/CODEX_HANDOFF.md`
3. `docs/IMPLEMENTATION_BRIEF.md`
4. `docs/API_CONTRACT.md`
5. `docs/ARCHITECTURE.md`
6. `docs/TDD_PLAN.md`
7. `docs/ACCEPTANCE_CHECKLIST.md`
8. `implementation-contract.yaml`
9. `docs/references.md`

## Testing artifacts

- JSON fixtures: `examples/curl/`
- cURL request files: `examples/light/`
