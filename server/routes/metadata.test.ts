import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import app from '../app.js';

const readFixture = (name: string) => {
  const fixturePath = join(process.cwd(), 'examples', 'fhir', name);
  return JSON.parse(readFileSync(fixturePath, 'utf8')) as Record<string, unknown>;
};

test('GET /fhir/metadata returns minimal CapabilityStatement', async () => {
  const response = await app.request('http://localhost/fhir/metadata', {
    headers: {
      accept: 'application/fhir+json',
    },
  });

  expect(response.status).toBe(200);
  expect(response.headers.get('content-type')).toContain('application/fhir+json');

  const body = (await response.json()) as Record<string, unknown>;
  expect(body).toEqual(readFixture('capabilitystatement.minimal.json'));
});

test('metadata advertises read for member reference resource types', async () => {
  const response = await app.request('http://localhost/fhir/metadata', {
    headers: {
      accept: 'application/fhir+json',
    },
  });

  const body = (await response.json()) as {
    rest?: Array<{
      resource?: Array<{
        type?: string;
        interaction?: Array<{ code?: string }>;
      }>;
    }>;
  };

  const resourceTypes =
    body.rest?.[0]?.resource
      ?.map((resource) => resource.type)
      .filter((value): value is string => !!value) ?? [];

  expect(resourceTypes).toEqual(
    expect.arrayContaining([
      'Group',
      'Patient',
      'Coverage',
      'PractitionerRole',
      'Practitioner',
      'Organization',
    ]),
  );

  for (const resource of body.rest?.[0]?.resource ?? []) {
    expect(resource.interaction?.map((interaction) => interaction.code)).toContain('read');
  }
});
