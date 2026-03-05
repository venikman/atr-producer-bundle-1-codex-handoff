# Data contract: ATR Group for the demo

## Required top-level Group shape

- `resourceType = Group`
- `id = demo-group-001`
- `meta.profile` includes ATR Group profile URL
- `extension` contains:
  - contract validity period
  - attribution list status
- `identifier` contains:
  - NPI
  - TIN
  - contract identifier
- `active = true`
- `type = person`
- `actual = true`
- `name`
- `quantity = 3`
- `managingEntity`

## Required member shape

Each `member[]` includes:

- `entity.reference` to `Patient/{id}`
- `period`
- `inactive`
- `extension` with:
  - `ext-changeType`
  - `ext-coverageReference`
  - `ext-attributedProvider`

## Intentional demo choices

### `changeType = new`

Use `new` for demo members.

### Three attributed-provider reference shapes

The demo intentionally includes all three:
1. `PractitionerRole`
2. `Practitioner`
3. `Organization`

### Group summary shape

`_summary=true` returns the same Group without `member`.

## Required reference-read follow-up support

The server supports direct read for references used by Group members:

- `Patient`
- `Coverage`
- `PractitionerRole`
- `Practitioner`
- `Organization`

## Example files

- Group full: `examples/curl/group.demo-group-001.full.json`
- Group summary: `examples/curl/group.demo-group-001.summary.json`
- Patient: `examples/curl/patient.demo-patient-001.json`
- Coverage: `examples/curl/coverage.demo-coverage-001.json`
- PractitionerRole: `examples/curl/practitionerrole.demo-pcp-001.json`
- Practitioner: `examples/curl/practitioner.demo-pcp-002.json`
- Organization: `examples/curl/organization.demo-provider-org-001.json`
