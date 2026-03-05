export const DEMO_GROUP_ID = 'demo-group-001';

const demoAtrGroup = {
  resourceType: 'Group',
  id: 'demo-group-001',
  meta: {
    profile: ['http://hl7.org/fhir/us/davinci-atr/StructureDefinition/atr-group'],
    versionId: '1',
    lastUpdated: '2026-03-04T09:00:00Z',
  },
  extension: [
    {
      url: 'http://hl7.org/fhir/us/davinci-atr/StructureDefinition/ext-contractValidityPeriod',
      valuePeriod: {
        start: '2026-01-01',
        end: '2026-12-31',
      },
    },
    {
      url: 'http://hl7.org/fhir/us/davinci-atr/StructureDefinition/ext-attributionListStatus',
      valueCode: 'final',
    },
  ],
  identifier: [
    {
      use: 'official',
      type: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
            code: 'NPI',
            display: 'National Provider Identifier',
          },
        ],
      },
      system: 'http://hl7.org/fhir/sid/us-npi',
      value: '1234567893',
    },
    {
      use: 'official',
      type: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
            code: 'TAX',
            display: 'Tax ID Number',
          },
        ],
      },
      system: 'urn:oid:2.16.840.1.113883.4.4',
      value: '987654321',
    },
    {
      system: 'https://example.org/atr/contracts',
      value: 'contract-aco-2026-01',
    },
  ],
  active: true,
  type: 'person',
  actual: true,
  name: 'Demo ATR List - Riverside ACO 2026',
  quantity: 3,
  managingEntity: {
    reference: 'Organization/demo-payer',
    display: 'Demo Payer Organization',
  },
  member: [
    {
      extension: [
        {
          url: 'http://hl7.org/fhir/us/davinci-atr/StructureDefinition/ext-changeType',
          valueCode: 'new',
        },
        {
          url: 'http://hl7.org/fhir/us/davinci-atr/StructureDefinition/ext-coverageReference',
          valueReference: {
            reference: 'Coverage/demo-coverage-001',
          },
        },
        {
          url: 'http://hl7.org/fhir/us/davinci-atr/StructureDefinition/ext-attributedProvider',
          valueReference: {
            reference: 'PractitionerRole/demo-pcp-001',
          },
        },
      ],
      entity: {
        reference: 'Patient/demo-patient-001',
      },
      period: {
        start: '2026-01-01',
        end: '2026-12-31',
      },
      inactive: false,
    },
    {
      extension: [
        {
          url: 'http://hl7.org/fhir/us/davinci-atr/StructureDefinition/ext-changeType',
          valueCode: 'new',
        },
        {
          url: 'http://hl7.org/fhir/us/davinci-atr/StructureDefinition/ext-coverageReference',
          valueReference: {
            reference: 'Coverage/demo-coverage-002',
          },
        },
        {
          url: 'http://hl7.org/fhir/us/davinci-atr/StructureDefinition/ext-attributedProvider',
          valueReference: {
            reference: 'Practitioner/demo-pcp-002',
          },
        },
      ],
      entity: {
        reference: 'Patient/demo-patient-002',
      },
      period: {
        start: '2026-01-01',
        end: '2026-12-31',
      },
      inactive: false,
    },
    {
      extension: [
        {
          url: 'http://hl7.org/fhir/us/davinci-atr/StructureDefinition/ext-changeType',
          valueCode: 'new',
        },
        {
          url: 'http://hl7.org/fhir/us/davinci-atr/StructureDefinition/ext-coverageReference',
          valueReference: {
            reference: 'Coverage/demo-coverage-003',
          },
        },
        {
          url: 'http://hl7.org/fhir/us/davinci-atr/StructureDefinition/ext-attributedProvider',
          valueReference: {
            reference: 'Organization/demo-provider-org-001',
          },
        },
      ],
      entity: {
        reference: 'Patient/demo-patient-003',
      },
      period: {
        start: '2026-01-01',
        end: '2026-12-31',
      },
      inactive: false,
    },
  ],
};

export const getAtrGroupById = (id: string) => {
  if (id === DEMO_GROUP_ID) {
    return demoAtrGroup;
  }

  return null;
};

export const buildAtrGroupSummary = (group: typeof demoAtrGroup) => {
  const { member, ...summary } = group;
  return summary;
};
