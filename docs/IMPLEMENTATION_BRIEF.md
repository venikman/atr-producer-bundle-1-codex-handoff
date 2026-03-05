# Implementation brief

## Goal

Implement a producer-side educational ATR slice where a consumer can:
1. read one ATR-shaped Group
2. follow member references through read endpoints
3. inspect server metadata

## Exact deliverable

Backend-only service with:

- `GET /fhir/Group/:id`
- `GET /fhir/metadata`
- `GET /fhir/Patient/:id`
- `GET /fhir/Coverage/:id`
- `GET /fhir/PractitionerRole/:id`
- `GET /fhir/Practitioner/:id`
- `GET /fhir/Organization/:id`

Behavior:

- full Group read returns ATR-shaped Group with 3 members
- `_summary=true` omits `member`
- protected routes require static bearer token
- missing/invalid token returns `401 OperationOutcome`
- unknown id returns `404 OperationOutcome`
- metadata returns minimal `CapabilityStatement` advertising read support

## Design constraints

- in-memory fixtures only
- no database
- no SMART runtime yet
- keep tests and linting fully green
- keep one-test-at-a-time TDD discipline

## Demo request examples

```http
GET http://localhost:3301/fhir/Group/demo-group-001
Accept: application/fhir+json
Authorization: Bearer demo-atr-token
```

```http
GET http://localhost:3301/fhir/Patient/demo-patient-001
Accept: application/fhir+json
Authorization: Bearer demo-atr-token
```

```http
GET http://localhost:3301/fhir/metadata
Accept: application/fhir+json
```

## Honest label

ATR-shaped producer demo for Group and member-reference reads, not a full ATR Producer.
