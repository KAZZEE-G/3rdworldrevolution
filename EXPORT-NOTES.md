# 3rd World Revolution source export

Latest saved Site version: 1
Source commit: 74591d1b0577c2189384a977682d7f2765c6c4a4

All 121 tracked files are preserved byte for byte, including original README, code, public assets, package manifests, pnpm lockfile, configuration, database schema/migrations, and vendored source/licenses. No repository history, credentials, runtime secret values, installed node_modules, or production database records are included.

## Local setup

Use Node.js >=22.13.0 and pnpm 11.25.0 (the packageManager version in package.json).

    pnpm install --frozen-lockfile
    pnpm dev
    pnpm build
    pnpm start

The package manifest and lockfile declare required third-party dependencies. Installation requires access to the package registry. This export was checked for archive integrity and exact source correspondence. Dependencies were not installed and a fresh build was not run.

## GitHub migration

Extract this directory and upload its contents, including dotfiles, to your GitHub repository. Keep the existing lockfile. Read the original README.md for framework and local database details. The original framework is Vinext/React/TypeScript and targets Cloudflare Workers.

The ledger needs a Cloudflare D1 binding named DB. Apply the included SQL migration(s) to your own database before using the ledger. The export includes database structure, not live transaction records. Set OWNER_USER_ID privately in your deployment environment if enabling ledger writes. No existing runtime values were fetched or exported.

The original authentication expects trusted identity headers and sign-in routes provided by Sites. Those facilities do not automatically transfer to independent hosting. Configure a trusted authentication layer and adapt app/chatgpt-auth.ts before enabling owner write access outside Sites. Do not trust visitor-supplied identity headers.

.openai/hosting.json is retained as original configuration and identifies the existing Site. For independent Cloudflare deployment, configure your own Worker and D1 bindings. Do not point automated publication workflows at the existing Site. The existing Site was not edited, pushed, saved, or redeployed during export.
