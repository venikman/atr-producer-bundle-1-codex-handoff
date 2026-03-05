# Target file tree

Current backend-focused repo shape for bundle 1:

```text
<repo-root>/
  package.json
  tsconfig.json
  biome.json
  rstest.config.ts
  .gitignore
  README.md
  implementation-contract.yaml

  docs/
    README.md
    CODEX_HANDOFF.md
    IMPLEMENTATION_BRIEF.md
    API_CONTRACT.md
    ARCHITECTURE.md
    DECISIONS.md
    TDD_PLAN.md
    ACCEPTANCE_CHECKLIST.md
    DATA_CONTRACT_ATR_GROUP.md
    OUT_OF_SCOPE.md
    TARGET_FILE_TREE.md
    references.md

  examples/
    curl/
      *.json

    light/
      *.curl
      README.md
      .env.example

  server/
    app.ts
    main.ts

    data/
      atrGroup.ts
      references.ts

    fhir/
      capabilityStatement.ts
      constants.ts
      operationOutcome.ts
      response.ts

    middleware/
      authStrategy.ts
      bearerAuth.ts
      staticBearerAuthStrategy.ts

    routes/
      group.ts
      metadata.ts
      references.ts
      group.test.ts
      metadata.test.ts
      references.test.ts
```
