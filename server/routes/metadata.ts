import { Hono } from 'hono';
import { buildCapabilityStatement } from '../fhir/capabilityStatement.js';
import { fhirJson } from '../fhir/response.js';

export const metadataRoutes = new Hono();

metadataRoutes.get('/metadata', (c) => {
  return fhirJson(c, buildCapabilityStatement(), 200);
});
