# Acceptance checklist

## Runtime

- [ ] app starts as backend-only service
- [ ] base path is `/fhir`
- [ ] default port is `3301`
- [ ] `PORT` or `API_PORT` can override port

## Group read

- [ ] `GET /fhir/Group/demo-group-001` returns `200`
- [ ] content type contains `application/fhir+json`
- [ ] body is Group with ATR profile
- [ ] `type = person`, `actual = true`, `quantity = 3`
- [ ] `member.length = 3`
- [ ] each member has `changeType = new`

## Group summary

- [ ] `GET /fhir/Group/demo-group-001?_summary=true` returns `200`
- [ ] summary body does not include `member`
- [ ] summary still includes identifiers and quantity

## Reference reads

- [ ] `GET /fhir/Patient/demo-patient-001` returns `200 Patient`
- [ ] `GET /fhir/Coverage/demo-coverage-001` returns `200 Coverage`
- [ ] `GET /fhir/PractitionerRole/demo-pcp-001` returns `200 PractitionerRole`
- [ ] `GET /fhir/Practitioner/demo-pcp-002` returns `200 Practitioner`
- [ ] `GET /fhir/Organization/demo-provider-org-001` returns `200 Organization`
- [ ] `GET /fhir/Organization/demo-payer` returns `200 Organization`

## Errors

- [ ] missing token on protected routes returns `401 OperationOutcome`
- [ ] invalid token on protected routes returns `401 OperationOutcome`
- [ ] unknown id on protected read routes returns `404 OperationOutcome`

## Metadata

- [ ] `GET /fhir/metadata` returns `200 CapabilityStatement`
- [ ] metadata advertises read for Group and reference resource types

## Repo hygiene

- [ ] backend linting retained
- [ ] backend typecheck retained
- [ ] backend tests retained
- [ ] `npm run check` passes

## Testing artifacts

- [ ] examples under `examples/curl/` match current server behavior
- [ ] cURL request examples in `examples/light/` match implemented endpoints and error cases
