# Postman Light request files

If your Postman edition cannot easily work with large collections, import one file at a time from this folder.

## How to use

1. In Postman, choose **Import**.
2. Select one `*.postman_collection.json` file from this folder.
3. Open the imported request.
4. In collection variables, set:
   - `baseUrl` to your running server URL (for example `http://localhost:3301/fhir`)
   - `accessToken` to `demo-atr-token`
5. Send the request.

## File set

- `01-group-full.postman_collection.json`
- `02-group-summary.postman_collection.json`
- `03-group-unauthorized.postman_collection.json`
- `04-group-not-found.postman_collection.json`
- `05-patient-read.postman_collection.json`
- `06-patient-unauthorized.postman_collection.json`
- `07-patient-not-found.postman_collection.json`
- `08-coverage-read.postman_collection.json`
- `09-practitionerrole-read.postman_collection.json`
- `10-practitioner-read.postman_collection.json`
- `11-organization-provider-read.postman_collection.json`
- `12-organization-payer-read.postman_collection.json`
- `13-metadata-read.postman_collection.json`
