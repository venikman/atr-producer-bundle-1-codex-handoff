# API contract

Base path: `/fhir`

Protected routes require:

```http
Authorization: Bearer demo-atr-token
Accept: application/fhir+json
```

Unprotected route:
- `GET /fhir/metadata`

All responses use `application/fhir+json; charset=utf-8`.

## 1. Group read

### Request

```http
GET /fhir/Group/:id
```

Supported id:
- `demo-group-001`

Query:
- `_summary=true` removes `member`

### Responses

- `200` Group
- `401` OperationOutcome (missing/invalid token)
- `404` OperationOutcome (unknown id)

## 2. Reference reads

### Patient

```http
GET /fhir/Patient/:id
```

Supported ids:
- `demo-patient-001`
- `demo-patient-002`
- `demo-patient-003`

Responses: `200`, `401`, `404`

### Coverage

```http
GET /fhir/Coverage/:id
```

Supported ids:
- `demo-coverage-001`
- `demo-coverage-002`
- `demo-coverage-003`

Responses: `200`, `401`, `404`

### PractitionerRole

```http
GET /fhir/PractitionerRole/:id
```

Supported ids:
- `demo-pcp-001`

Responses: `200`, `401`, `404`

### Practitioner

```http
GET /fhir/Practitioner/:id
```

Supported ids:
- `demo-pcp-001`
- `demo-pcp-002`

Responses: `200`, `401`, `404`

### Organization

```http
GET /fhir/Organization/:id
```

Supported ids:
- `demo-provider-org-001`
- `demo-payer`

Responses: `200`, `401`, `404`

## 3. Metadata

### Request

```http
GET /fhir/metadata
Accept: application/fhir+json
```

### Response

- `200` CapabilityStatement

## Example fixtures

- `examples/curl/group.demo-group-001.full.json`
- `examples/curl/group.demo-group-001.summary.json`
- `examples/curl/patient.demo-patient-001.json`
- `examples/curl/coverage.demo-coverage-001.json`
- `examples/curl/practitionerrole.demo-pcp-001.json`
- `examples/curl/practitioner.demo-pcp-002.json`
- `examples/curl/organization.demo-provider-org-001.json`
- `examples/curl/capabilitystatement.minimal.json`
- `examples/curl/operationoutcome.401.json`
- `examples/curl/operationoutcome.404.json`
- `examples/curl/operationoutcome.404.patient.json`
- `examples/curl/operationoutcome.404.coverage.json`
- `examples/curl/operationoutcome.404.practitionerrole.json`
- `examples/curl/operationoutcome.404.practitioner.json`
- `examples/curl/operationoutcome.404.organization.json`
