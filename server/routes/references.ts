import { Hono } from 'hono';
import {
  getCoverageById,
  getOrganizationById,
  getPatientById,
  getPractitionerById,
  getPractitionerRoleById,
} from '../data/references.js';
import { buildOperationOutcome } from '../fhir/operationOutcome.js';
import { fhirJson } from '../fhir/response.js';
import { createBearerAuthMiddleware } from '../middleware/bearerAuth.js';
import { StaticBearerAuthStrategy } from '../middleware/staticBearerAuthStrategy.js';

const TOKEN = 'demo-atr-token';

export const referenceRoutes = new Hono();

referenceRoutes.use('*', createBearerAuthMiddleware(new StaticBearerAuthStrategy(TOKEN)));

referenceRoutes.get('/Patient/:id', (c) => {
  const id = c.req.param('id');
  const patient = getPatientById(id);

  if (!patient) {
    return fhirJson(c, buildOperationOutcome('not-found', `Patient/${id} was not found.`), 404);
  }

  return fhirJson(c, patient, 200);
});

referenceRoutes.get('/Coverage/:id', (c) => {
  const id = c.req.param('id');
  const coverage = getCoverageById(id);

  if (!coverage) {
    return fhirJson(c, buildOperationOutcome('not-found', `Coverage/${id} was not found.`), 404);
  }

  return fhirJson(c, coverage, 200);
});

referenceRoutes.get('/PractitionerRole/:id', (c) => {
  const id = c.req.param('id');
  const practitionerRole = getPractitionerRoleById(id);

  if (!practitionerRole) {
    return fhirJson(
      c,
      buildOperationOutcome('not-found', `PractitionerRole/${id} was not found.`),
      404,
    );
  }

  return fhirJson(c, practitionerRole, 200);
});

referenceRoutes.get('/Practitioner/:id', (c) => {
  const id = c.req.param('id');
  const practitioner = getPractitionerById(id);

  if (!practitioner) {
    return fhirJson(
      c,
      buildOperationOutcome('not-found', `Practitioner/${id} was not found.`),
      404,
    );
  }

  return fhirJson(c, practitioner, 200);
});

referenceRoutes.get('/Organization/:id', (c) => {
  const id = c.req.param('id');
  const organization = getOrganizationById(id);

  if (!organization) {
    return fhirJson(
      c,
      buildOperationOutcome('not-found', `Organization/${id} was not found.`),
      404,
    );
  }

  return fhirJson(c, organization, 200);
});
