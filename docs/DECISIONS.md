# Decision log

| Question | Decision | Why |
|---|---|---|
| What is the first useful slice? | Group read plus member-reference read endpoints | Group shows attribution list shape and references let consumers follow it end-to-end. |
| Which resource represents the attribution list? | `Group` | ATR uses Group as the member attribution list. |
| What stack do we keep from `poke`? | Hono + TypeScript + Biome + Rstest | Keeps backend shape familiar and fast. |
| Do we keep frontend code? | No | Scope is backend-only learning slice. |
| Do we add a database? | No | In-memory fixtures are enough for this slice. |
| What auth do we use first? | Static bearer token `demo-atr-token` via auth strategy abstraction | Protected behavior now, clean swap path for SMART JWT later. |
| Which Group behaviors are required? | Full read and `_summary=true` | Full teaches member details; summary matches lightweight retrieval pattern. |
| Which errors are required now? | `401` and `404` as FHIR `OperationOutcome` | Consistent FHIR-native failures for client testing. |
| Do we expose metadata now? | Yes | Minimal FHIR server identity and advertised read support. |
| Do we support reference reads now? | Yes: Patient, Coverage, PractitionerRole, Practitioner, Organization | ATR Group members reference these types and clients need direct read follow-up. |
| What change type code is used in demo members? | `new` | Aligns with ATR change type code system. |
| Do we integrate `smart-on-fhir/client-js` in this package now? | No | Deferred to a later client-harness phase; server bundle remains producer-only. |
| How do we describe conformance? | ATR-shaped demo, not full producer conformance | Honest scope control. |
