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

- `examples/fhir/group.demo-group-001.full.json`
- `examples/fhir/group.demo-group-001.summary.json`
- `examples/fhir/patient.demo-patient-001.json`
- `examples/fhir/coverage.demo-coverage-001.json`
- `examples/fhir/practitionerrole.demo-pcp-001.json`
- `examples/fhir/practitioner.demo-pcp-002.json`
- `examples/fhir/organization.demo-provider-org-001.json`
- `examples/fhir/capabilitystatement.minimal.json`
- `examples/fhir/operationoutcome.401.json`
- `examples/fhir/operationoutcome.404.json`
- `examples/fhir/operationoutcome.404.patient.json`
- `examples/fhir/operationoutcome.404.coverage.json`
- `examples/fhir/operationoutcome.404.practitionerrole.json`
- `examples/fhir/operationoutcome.404.practitioner.json`
- `examples/fhir/operationoutcome.404.organization.json`
