# Migration status (2026-11-09)

TypeScript React vinext, D1 database and platform-specific authentication dependencies. Public homepage works. Must adapt and stage-test before changing deployment. Source has been committed on the migration/source branch.

Source of truth: original website source archive supplied by owner. **Source is available on `migration/source`. An independent production deployment has not yet been verified.**

Recommended workflow: review verified source on `migration/source`, run checks, open a PR, deploy preview, smoke-test, then merge and release. Keep old commits and tags for rollback. Preserve all MX, SPF, DKIM and domain verification DNS records. Do not claim absolute DDoS or SQL injection immunity.
