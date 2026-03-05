import { Hono } from 'hono';
import { buildAtrGroupSummary, getAtrGroupById } from '../data/atrGroup.js';
import { buildOperationOutcome } from '../fhir/operationOutcome.js';
import { fhirJson } from '../fhir/response.js';
import { createBearerAuthMiddleware } from '../middleware/bearerAuth.js';
import { StaticBearerAuthStrategy } from '../middleware/staticBearerAuthStrategy.js';

const TOKEN = 'demo-atr-token';

export const groupRoutes = new Hono();

groupRoutes.use('/Group/*', createBearerAuthMiddleware(new StaticBearerAuthStrategy(TOKEN)));

groupRoutes.get('/Group/:id', (c) => {
  const id = c.req.param('id');
  const group = getAtrGroupById(id);
  const isSummary = c.req.query('_summary') === 'true';

  if (!group) {
    return fhirJson(c, buildOperationOutcome('not-found', `Group/${id} was not found.`), 404);
  }

  if (isSummary) {
    return fhirJson(c, buildAtrGroupSummary(group), 200);
  }

  return fhirJson(c, group, 200);
});
