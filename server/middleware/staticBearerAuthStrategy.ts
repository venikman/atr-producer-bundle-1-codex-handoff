import type { AuthResult, AuthStrategy } from './authStrategy.js';

export class StaticBearerAuthStrategy implements AuthStrategy {
  constructor(private readonly expectedToken: string) {}

  authenticate(authorizationHeader: string | undefined): AuthResult {
    if (!authorizationHeader) {
      return {
        ok: false,
        diagnostics: 'Missing or invalid bearer token. Use Authorization: Bearer demo-atr-token.',
      };
    }

    const [scheme, token] = authorizationHeader.split(' ');
    if (scheme !== 'Bearer' || token !== this.expectedToken) {
      return {
        ok: false,
        diagnostics: 'Missing or invalid bearer token. Use Authorization: Bearer demo-atr-token.',
      };
    }

    return { ok: true };
  }
}
