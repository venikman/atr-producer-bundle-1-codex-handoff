# Yaak Testing Files

## Option 1: Import OpenAPI (recommended)
1. In Yaak, choose **Import** -> **OpenAPI**.
2. Select `yaak/atr-group-read.openapi.yaml`.
3. Set server port to your running API port (default `3301`; if using random dev port, use the port printed by `npm run dev`).

## Option 2: Import cURL requests
1. Copy any file from `yaak/curl/*.curl`.
2. In Yaak, create/import a cURL request and paste it.
3. Replace variables from `yaak/.env.example`.

## cURL request coverage
- Group: full read, summary read, unauthorized, not found
- References: Patient, Coverage, PractitionerRole, Practitioner, Organization (provider + payer), plus unauthorized and not found example
- Metadata: CapabilityStatement read

## Variables
- `BASE_URL`
- `ACCESS_TOKEN`
- `GROUP_ID`
- `PATIENT_ID`
- `COVERAGE_ID`
- `PRACTITIONER_ROLE_ID`
- `PRACTITIONER_ID`
- `PROVIDER_ORG_ID`
- `PAYER_ORG_ID`
- `MISSING_ID`
