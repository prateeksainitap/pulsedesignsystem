# @your-org/pulse-tokens

Downstream build + publish pipeline for the Pulse Design System tokens. The
**upstream source of truth** is
[`prateeksainitap/pulsedesignsystem`](https://github.com/prateeksainitap/pulsedesignsystem/tree/main/tokens),
which Zeroheight writes to directly. This repo never stores a local clone —
it fetches the raw JSON from the upstream repo over HTTPS every time it
builds, so every push in Zeroheight lands in consumer apps with zero manual
intervention.

## Flow

```
Zeroheight  ──commits──▶  prateeksainitap/pulsedesignsystem:/tokens/*.json
                                │
                                │ push → .github/workflows/notify-pulse-tokens.yml
                                │ fires repository_dispatch "tokens-updated"
                                ▼
         your-org/pulse-tokens  (this repo)
                                │
                                │ sync-and-publish.yml:
                                │   npm run sync   ← fetches raw JSON from upstream
                                │   npm run build  ← Style Dictionary transforms
                                │   git commit tokens/ + build/
                                │   npm version patch && npm publish (GitHub Packages)
                                ▼
                        @your-org/pulse-tokens on npm
                                │
                                ▼
                          pulse-rn, WeightEasyHome, …
```

Triggers on this repo:

| Trigger               | When it runs                                                      |
|-----------------------|-------------------------------------------------------------------|
| `repository_dispatch` | Upstream workflow fires it on every `/tokens` push (near-realtime) |
| `schedule`            | Every 30 min as a safety net if the dispatch is missed            |
| `workflow_dispatch`   | Manual run / manual release                                       |
| `push` on `main`      | When the sync script or Style Dictionary config changes           |

## Repo layout

```
scripts/
  fetch-tokens.mjs                   # pulls raw JSON from the upstream repo via GitHub API
tokens/                              # populated at build time — do not edit by hand
build/                               # generated; committed by CI
  js/tokens.js
  js/tokens.esm.js
  ts/tokens.d.ts
  json/tokens.flat.json
index.js                             # public entry: Colors, Typography, Spacing, Radius, BorderWidth
style-dictionary.config.mjs          # uses @tokens-studio/sd-transforms + js/rn transform group
.github/workflows/sync-and-publish.yml
docs/upstream-dispatcher.yml         # copy into the UPSTREAM repo to enable webhook
```

## Setup (one-time)

1. **Create this repo** on GitHub as `your-org/pulse-tokens` (or any name — update
   the workflow + `package.json` accordingly).

2. **Secrets on this repo:**
   - `GITHUB_TOKEN` (auto-provided) — used to push commits and publish to GitHub Packages.
   - `UPSTREAM_TOKEN` *(optional)* — only if `prateeksainitap/pulsedesignsystem` is
     private. A fine-grained PAT with read access to that repo's contents.

3. **Enable the webhook on the upstream repo:**
   - Create a PAT with `repo` scope that can dispatch events to this repo.
   - Add it as a secret named `DOWNSTREAM_DISPATCH_TOKEN` on
     `prateeksainitap/pulsedesignsystem`.
   - Copy `docs/upstream-dispatcher.yml` into that repo at
     `.github/workflows/notify-pulse-tokens.yml`. Replace `your-org/pulse-tokens`
     with the real path.
   - Commit. From now on, every Zeroheight-triggered push to `/tokens` will
     fire a `repository_dispatch` here and kick off `sync-and-publish.yml`.

4. **GitHub Packages registry** — consumers need this in their `.npmrc`:
   ```
   @your-org:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
   ```

## Local development

```bash
npm install --legacy-peer-deps
npm run sync        # fetches latest tokens/ from upstream (needs internet)
npm run build       # runs Style Dictionary → build/
node -e "import('./index.js').then(m => console.log(m.Colors.content.primary))"
```

To point at a different upstream (e.g. a feature branch or fork), export:

```bash
PULSE_UPSTREAM_OWNER=prateeksainitap \
PULSE_UPSTREAM_REPO=pulsedesignsystem \
PULSE_UPSTREAM_REF=main \
PULSE_UPSTREAM_PATH=tokens \
npm run sync
```

## Consuming

```js
import { Colors, Typography, Spacing, Radius, BorderWidth } from '@your-org/pulse-tokens';

<Text style={{ ...Typography.display.sm, color: Colors.content.primary }}>Hi</Text>
```

Or grab the raw nested object straight from Style Dictionary:

```js
import tokens from '@your-org/pulse-tokens/raw';
```

## Why not a git submodule?

A submodule pins a specific commit and requires a manual bump in this repo
whenever the upstream changes — which defeats the "auto-sync with Zeroheight"
goal. The HTTPS fetch + dispatch webhook gives real-time propagation with no
hand-edited SHAs.
