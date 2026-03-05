import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import app from '../app.js';

const readFixture = (name: string) => {
  const fixturePath = join(process.cwd(), 'examples', 'fhir', name);
  return JSON.parse(readFileSync(fixturePath, 'utf8')) as Record<string, unknown>;
};

test('authorized GET /fhir/Group/demo-group-001 returns full ATR Group payload', async () => {
  const response = await app.request('http://localhost/fhir/Group/demo-group-001', {
    headers: {
      accept: 'application/fhir+json',
      authorization: 'Bearer demo-atr-token',
    },
  });

  expect(response.status).toBe(200);
  expect(response.headers.get('content-type')).toContain('application/fhir+json');

  const body = (await response.json()) as Record<string, unknown>;
  expect(body).toEqual(readFixture('group.demo-group-001.full.json'));
});

test('authorized GET /fhir/Group/demo-group-001?_summary=true returns summary payload', async () => {
  const response = await app.request('http://localhost/fhir/Group/demo-group-001?_summary=true', {
    headers: {
      accept: 'application/fhir+json',
      authorization: 'Bearer demo-atr-token',
    },
  });

  expect(response.status).toBe(200);
  expect(response.headers.get('content-type')).toContain('application/fhir+json');

  const body = (await response.json()) as Record<string, unknown>;
  expect(body).toEqual(readFixture('group.demo-group-001.summary.json'));
  expect(body.member).toBeUndefined();
});

test('authorized GET /fhir/Group/does-not-exist returns 404 OperationOutcome', async () => {
  const response = await app.request('http://localhost/fhir/Group/does-not-exist', {
    headers: {
      accept: 'application/fhir+json',
      authorization: 'Bearer demo-atr-token',
    },
  });

  expect(response.status).toBe(404);
  expect(response.headers.get('content-type')).toContain('application/fhir+json');

  const body = (await response.json()) as Record<string, unknown>;
  expect(body).toEqual(readFixture('operationoutcome.404.json'));
});

test('missing bearer token returns 401 OperationOutcome', async () => {
  const response = await app.request('http://localhost/fhir/Group/demo-group-001', {
    headers: {
      accept: 'application/fhir+json',
    },
  });

  expect(response.status).toBe(401);
  expect(response.headers.get('content-type')).toContain('application/fhir+json');

  const body = (await response.json()) as Record<string, unknown>;
  expect(body).toEqual(readFixture('operationoutcome.401.json'));
});

test('invalid bearer token returns 401 OperationOutcome', async () => {
  const response = await app.request('http://localhost/fhir/Group/demo-group-001', {
    headers: {
      accept: 'application/fhir+json',
      authorization: 'Bearer wrong-token',
    },
  });

  expect(response.status).toBe(401);
  expect(response.headers.get('content-type')).toContain('application/fhir+json');

  const body = (await response.json()) as Record<string, unknown>;
  expect(body).toEqual(readFixture('operationoutcome.401.json'));
});
