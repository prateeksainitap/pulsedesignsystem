# Design Tokens Pipeline

Starter scaffold for the workflow described in
[Design Tokens Pipeline: Figma to Code in Storybook](https://yummy-design-sprint.notion.site/Design-Tokens-Pipeline-Figma-to-Code-in-Storybook-33062791470980dba47fde96d2633d8c).

## Layout

```
my-design-system/
├── tokens/
│   ├── tokens.json          ← synced from Figma (light)
│   ├── tokens.dark.json     ← synced from Figma (dark)
│   └── guidelines.json      ← Figma variable descriptions
├── build/                   ← Style Dictionary output (generated)
│   ├── css/tokens.css
│   ├── ts/tokens.js
│   └── json/tokens.json
├── stories/foundations/
│   ├── Colors.stories.tsx
│   ├── Spacing.stories.tsx
│   ├── Radius.stories.tsx
│   ├── Changelog.stories.tsx
│   └── GettingStarted.stories.mdx
├── .storybook/{main,preview}.js
├── build-tokens.js          ← Style Dictionary config
├── generate-changelog.js    ← snapshot diff
├── sync-from-figma.js       ← stub for Figma export → tokens.json
└── package.json
```

## First-time install

```sh
cd design-tokens-pipeline
npm install
npm run build:tokens
npm run storybook
```

## Daily loop

1. Edit a variable in Figma.
2. In Claude Desktop → Code tab: **"sync from Figma"**.
3. `npm run sync` (runs `sync-from-figma.js` → `build:tokens` → `changelog`).
4. Open Storybook to verify.
5. **"push to GitHub"** → Vercel/Netlify auto-deploy.

See `SETUP.md` for the full Path A / B / C setup walkthrough.
