const patients = {
  'demo-patient-001': {
    resourceType: 'Patient',
    id: 'demo-patient-001',
    active: true,
    name: [
      {
        family: 'Rivera',
        given: ['Alice'],
      },
    ],
    gender: 'female',
    birthDate: '1980-01-15',
  },
  'demo-patient-002': {
    resourceType: 'Patient',
    id: 'demo-patient-002',
    active: true,
    name: [
      {
        family: 'Johnson',
        given: ['Marcus'],
      },
    ],
    gender: 'male',
    birthDate: '1975-08-20',
  },
  'demo-patient-003': {
    resourceType: 'Patient',
    id: 'demo-patient-003',
    active: true,
    name: [
      {
        family: 'Nguyen',
        given: ['Sophia'],
      },
    ],
    gender: 'female',
    birthDate: '1990-11-05',
  },
};

const coverages = {
  'demo-coverage-001': {
    resourceType: 'Coverage',
    id: 'demo-coverage-001',
    status: 'active',
    beneficiary: {
      reference: 'Patient/demo-patient-001',
    },
    payor: [
      {
        reference: 'Organization/demo-payer',
      },
    ],
    period: {
      start: '2026-01-01',
      end: '2026-12-31',
    },
  },
  'demo-coverage-002': {
    resourceType: 'Coverage',
    id: 'demo-coverage-002',
    status: 'active',
    beneficiary: {
      reference: 'Patient/demo-patient-002',
    },
    payor: [
      {
        reference: 'Organization/demo-payer',
      },
    ],
    period: {
      start: '2026-01-01',
      end: '2026-12-31',
    },
  },
  'demo-coverage-003': {
    resourceType: 'Coverage',
    id: 'demo-coverage-003',
    status: 'active',
    beneficiary: {
      reference: 'Patient/demo-patient-003',
    },
    payor: [
      {
        reference: 'Organization/demo-payer',
      },
    ],
    period: {
      start: '2026-01-01',
      end: '2026-12-31',
    },
  },
};

const practitionerRoles = {
  'demo-pcp-001': {
    resourceType: 'PractitionerRole',
    id: 'demo-pcp-001',
    active: true,
    practitioner: {
      reference: 'Practitioner/demo-pcp-001',
    },
    organization: {
      reference: 'Organization/demo-provider-org-001',
    },
    code: [
      {
        text: 'Primary Care Physician',
      },
    ],
  },
};

const practitioners = {
  'demo-pcp-001': {
    resourceType: 'Practitioner',
    id: 'demo-pcp-001',
    active: true,
    name: [
      {
        family: 'Campbell',
        given: ['Evan'],
      },
    ],
  },
  'demo-pcp-002': {
    resourceType: 'Practitioner',
    id: 'demo-pcp-002',
    active: true,
    name: [
      {
        family: 'Patel',
        given: ['Nina'],
      },
    ],
  },
};

const organizations = {
  'demo-provider-org-001': {
    resourceType: 'Organization',
    id: 'demo-provider-org-001',
    active: true,
    name: 'Demo Provider Organization',
  },
  'demo-payer': {
    resourceType: 'Organization',
    id: 'demo-payer',
    active: true,
    name: 'Demo Payer Organization',
  },
};

export const getPatientById = (id: string) => {
  return patients[id as keyof typeof patients] ?? null;
};

export const getCoverageById = (id: string) => {
  return coverages[id as keyof typeof coverages] ?? null;
};

export const getPractitionerRoleById = (id: string) => {
  return practitionerRoles[id as keyof typeof practitionerRoles] ?? null;
};

export const getPractitionerById = (id: string) => {
  return practitioners[id as keyof typeof practitioners] ?? null;
};

export const getOrganizationById = (id: string) => {
  return organizations[id as keyof typeof organizations] ?? null;
};
