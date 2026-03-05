# Postman Light cURL files

Small, one-request files for quick API checks and lightweight tooling.

## How to use

1. Copy one file from this folder (for example `01-group-full.curl`).
2. Paste it into a cURL-capable client or shell.
3. Replace templated variables from `examples/yaak/.env.example`:
   - `BASE_URL`, `ACCESS_TOKEN`, `GROUP_ID`, etc.
4. Execute.

## File set

- `01-group-full.curl`
- `02-group-summary.curl`
- `03-group-unauthorized.curl`
- `04-group-not-found.curl`
- `05-patient-read.curl`
- `06-patient-unauthorized.curl`
- `07-patient-not-found.curl`
- `08-coverage-read.curl`
- `09-practitionerrole-read.curl`
- `10-practitioner-read.curl`
- `11-organization-provider-read.curl`
- `12-organization-payer-read.curl`
- `13-metadata-read.curl`
