# Out of scope for bundle 1

These are intentionally deferred.

## ATR interactions

- Group discovery search by identifier or name
- `$davinci-data-export`
- file polling and file retrieval
- `member-add`
- `member-remove`
- retrieve attribution status
- confirm attribution list
- subscriptions

## Security

- SMART Backend Services token exchange and scope enforcement
- `/.well-known/smart-configuration`
- client registration
- JWT assertion verification

## Infrastructure

- database persistence
- async jobs
- object storage
- caching
- observability stack
- deployment manifests

## Advanced behavior

- large-group paging
- version history
- `vread`
- `history-instance`
- full profile validation tooling
- production-grade error catalog
- rate limiting
- audit logging

## Why deferred

Each deferred item is valid ATR surface area, but bundle 1 is focused on a small, testable, readable producer slice.
