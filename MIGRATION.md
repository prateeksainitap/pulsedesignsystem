# Pulse Design System — Monorepo Migration

## Status: Phase 1 scaffold complete

This repo was converted from a single-package "design-tokens-pipeline" into a
pnpm monorepo that is the single source of truth for:

- `@pulse/tokens` — design tokens synced from Figma Pulse
  (`1frpO4Dn5KQyNVU7NqM3lm`), compiled with Style Dictionary.
- `@pulse/rn` — React Native components. Consumed by the WeightEasy app.
- `@pulse/storybook` — Storybook-for-React-Native-Web. Renders the **same**
  `@pulse/rn` components, so Storybook and the app can never drift.

WeightEasy lives in a **separate** repo and installs `@pulse/tokens` +
`@pulse/rn` from this repo via GitHub subpath install.

## Figma sources of truth

1. **Pulse** (`1frpO4Dn5KQyNVU7NqM3lm`) — canonical tokens (424 vars across 13
   collections) and primitive/molecule components (95 component sets).
2. **🏋🏻WeightEasy - Paid** (`Q6Iu7O7iwIrEOZXQVselCn`) — local components:
   - **Promote to `@pulse/rn`**: Dose Card, Stat Card, Graph, Coach Insight,
     Card/AI Coach
   - **Keep in WeightEasy app repo** (GLP-1-specific): Side effect Severity,
     Side effect remedy, Injection Site Selector

## What exists vs what still needs work

### `packages/pulse-tokens` — ✅ scaffolded
- Tokens, Style Dictionary config, Figma sync script, changelog generator
  moved here intact.
- Added a new RN platform that outputs `build/rn/theme.js` + `.d.ts`
  (numbers stay numeric, colors as hex — safe for React Native).
- **TODO**: user to run `pnpm install && pnpm -r build`; then verify that
  the compiled `build/rn/theme.js` values match sampled Figma Pulse
  variables (triple-check per CLAUDE.md).

### `packages/pulse-rn` — ⚠ seeded but NOT verified
- Source copied from `Code-Build/pulse-rn/src/` (the deduped RN set).
  Structure: primitives / forms / feedback / composites.
- Added ESLint rule `no-restricted-syntax` banning raw hex/rgb colors.
- **TODO (Phase 2, per-component)**: for every component, open its master
  frame in Figma (Pulse or WeightEasy - Paid), fetch the rendered image +
  exact token values via the Figma MCP, then rewrite the component to use
  only `@pulse/tokens`. Do NOT trust the seeded code — it predates the
  token pipeline and almost certainly contains hardcoded values. The
  ESLint rule will surface most of them.

### `packages/storybook` — ✅ scaffolded
- Storybook 8 + `@storybook/react-native-web-vite`.
- Config points at both `packages/storybook/stories/**` and
  `packages/pulse-rn/src/**/*.stories.jsx` so stories live next to the
  components they describe.
- **TODO**: user to run `pnpm --filter @pulse/storybook dev` once
  dependencies are installed.

### Legacy (kept until Phase 5 cleanup)
- Root `stories/` folder — old web React Storybook components. **Not used**
  by the new Storybook. Kept as reference for Phase 2 rebuilds so nothing
  is lost. Delete in Phase 5 after every component has been rebuilt in
  `packages/pulse-rn` and verified against Figma.
- Root `storybook-static/` — old build artifact, can be deleted anytime.
- Root `.storybook/`, `SETUP.md`, `README.md` — legacy. Review in Phase 5.

### Outside this repo (to clean up in Phase 5)
- `Code-Build/pulse-rn/` and `Code-Build/packages/pulse-rn/` — byte-identical
  duplicates; the `packages/` one was our seed source.
- `Code-Build/pulse-tokens/` — hand-rolled, schema-incompatible with Figma.
  **Do not use.**
- `Code-Build/WeightEasyHome/pulsedesignsystem/` — vendored copy + node_modules
  leftover. Replace with `@pulse/tokens` + `@pulse/rn` installed from GitHub.
- `Code-Build/*.tgz` — old tarball installs. Delete after WeightEasy consumes
  the new packages successfully.

## Next steps for the user

1. `cd /path/to/pulsedesignsystem && pnpm install`
2. `pnpm -r build` — builds `@pulse/tokens`
3. `pnpm --filter @pulse/storybook dev` — should launch Storybook on :6006
4. Push to `github.com/prateeksainitap/pulsedesignsystem` (branch `main`)
5. Tell me the build and storybook work, then we start Phase 2
   (component-by-component rebuild against Figma).

## Phase plan recap

- **Phase 0**: inventory + reconciliation ✅
- **Phase 1**: monorepo scaffold ✅ (this commit)
- **Phase 2**: rebuild/verify each `@pulse/rn` component against Figma; one
  at a time; never from text specs; always from the rendered master frame.
- **Phase 3**: wire WeightEasy to consume `@pulse/tokens` + `@pulse/rn` from
  GitHub. Remove the vendored `pulsedesignsystem/` folder there.
- **Phase 4**: end-to-end smoke test of WeightEasy on the new packages.
- **Phase 5**: delete all legacy folders listed above.
