import type { Context } from 'hono';
import { FHIR_JSON_CONTENT_TYPE } from './constants.js';

type FhirResponseStatus = 200 | 401 | 404;

export const fhirJson = (c: Context, body: unknown, status: FhirResponseStatus = 200): Response => {
  return c.body(JSON.stringify(body), status, {
    'content-type': FHIR_JSON_CONTENT_TYPE,
  });
};
