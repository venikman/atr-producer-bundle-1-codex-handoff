# TDD plan

Rule: add one failing test, implement the minimum, run the whole suite, keep all previous tests green.

## Phase A: Group + metadata baseline

1. Failing test: authorized Group read returns `200 Group`
2. Failing test: Group includes ATR identity fields
3. Failing test: Group includes extensions/identifiers/quantity
4. Failing test: Group includes 3 members with required extensions and `changeType = new`
5. Failing test: `_summary=true` omits `member`
6. Failing test: unknown Group id returns `404 OperationOutcome`
7. Failing test: missing/invalid bearer token returns `401 OperationOutcome`
8. Failing test: `/fhir/metadata` returns `200 CapabilityStatement` with Group read

## Phase B: member-reference read support

9. Failing test: authorized `GET /fhir/Patient/demo-patient-001` returns `200 Patient`
10. Failing test: authorized `GET /fhir/Coverage/demo-coverage-001` returns `200 Coverage`
11. Failing test: authorized `GET /fhir/PractitionerRole/demo-pcp-001` returns `200 PractitionerRole`
12. Failing test: authorized `GET /fhir/Practitioner/demo-pcp-002` returns `200 Practitioner`
13. Failing test: authorized `GET /fhir/Organization/demo-provider-org-001` returns `200 Organization`
14. Failing test: missing token on reference route returns `401 OperationOutcome`
15. Failing test: unknown reference id returns `404 OperationOutcome`
16. Failing test: metadata advertises read for all supported reference resource types

## Final gate

- run `npm run check`
- ensure all examples/Postman/Yaak artifacts reflect implemented behavior
