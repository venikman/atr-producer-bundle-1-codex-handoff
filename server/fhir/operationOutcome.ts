export type OperationOutcomeCode = 'login' | 'not-found';

export const buildOperationOutcome = (code: OperationOutcomeCode, diagnostics: string) => {
  return {
    resourceType: 'OperationOutcome',
    issue: [
      {
        severity: 'error',
        code,
        diagnostics,
      },
    ],
  };
};
