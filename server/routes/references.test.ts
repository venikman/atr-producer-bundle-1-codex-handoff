import app from '../app.js';

const authHeaders = {
  accept: 'application/fhir+json',
  authorization: 'Bearer demo-atr-token',
};

const referenceCases = [
  { path: 'Patient/demo-patient-001', resourceType: 'Patient', id: 'demo-patient-001' },
  { path: 'Patient/demo-patient-002', resourceType: 'Patient', id: 'demo-patient-002' },
  { path: 'Patient/demo-patient-003', resourceType: 'Patient', id: 'demo-patient-003' },
  { path: 'Coverage/demo-coverage-001', resourceType: 'Coverage', id: 'demo-coverage-001' },
  { path: 'Coverage/demo-coverage-002', resourceType: 'Coverage', id: 'demo-coverage-002' },
  { path: 'Coverage/demo-coverage-003', resourceType: 'Coverage', id: 'demo-coverage-003' },
  {
    path: 'PractitionerRole/demo-pcp-001',
    resourceType: 'PractitionerRole',
    id: 'demo-pcp-001',
  },
  { path: 'Practitioner/demo-pcp-002', resourceType: 'Practitioner', id: 'demo-pcp-002' },
  {
    path: 'Organization/demo-provider-org-001',
    resourceType: 'Organization',
    id: 'demo-provider-org-001',
  },
  { path: 'Organization/demo-payer', resourceType: 'Organization', id: 'demo-payer' },
] as const;

for (const referenceCase of referenceCases) {
  test(`authorized GET /fhir/${referenceCase.path} returns ${referenceCase.resourceType}`, async () => {
    const response = await app.request(`http://localhost/fhir/${referenceCase.path}`, {
      headers: authHeaders,
    });

    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('application/fhir+json');

    const body = (await response.json()) as Record<string, unknown>;
    expect(body.resourceType).toBe(referenceCase.resourceType);
    expect(body.id).toBe(referenceCase.id);
  });
}

test('missing bearer token on reference read returns 401 OperationOutcome', async () => {
  const response = await app.request('http://localhost/fhir/Patient/demo-patient-001', {
    headers: {
      accept: 'application/fhir+json',
    },
  });

  expect(response.status).toBe(401);
  const body = (await response.json()) as {
    resourceType?: string;
    issue?: Array<{ code?: string; diagnostics?: string }>;
  };

  expect(body.resourceType).toBe('OperationOutcome');
  expect(body.issue?.[0]?.code).toBe('login');
});

test('unknown reference id returns 404 OperationOutcome', async () => {
  const response = await app.request('http://localhost/fhir/Patient/does-not-exist', {
    headers: authHeaders,
  });

  expect(response.status).toBe(404);
  const body = (await response.json()) as {
    resourceType?: string;
    issue?: Array<{ code?: string; diagnostics?: string }>;
  };

  expect(body.resourceType).toBe('OperationOutcome');
  expect(body.issue?.[0]?.code).toBe('not-found');
  expect(body.issue?.[0]?.diagnostics).toBe('Patient/does-not-exist was not found.');
});
