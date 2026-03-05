export type AuthResult =
  | {
      ok: true;
    }
  | {
      ok: false;
      diagnostics: string;
    };

export interface AuthStrategy {
  authenticate(authorizationHeader: string | undefined): AuthResult;
}
