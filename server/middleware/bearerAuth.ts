import type { MiddlewareHandler } from 'hono';
import { buildOperationOutcome } from '../fhir/operationOutcome.js';
import { fhirJson } from '../fhir/response.js';
import type { AuthStrategy } from './authStrategy.js';

export const createBearerAuthMiddleware = (strategy: AuthStrategy): MiddlewareHandler => {
  return async (c, next) => {
    const result = strategy.authenticate(c.req.header('authorization'));

    if (!result.ok) {
      return fhirJson(c, buildOperationOutcome('login', result.diagnostics), 401);
    }

    await next();
  };
};
