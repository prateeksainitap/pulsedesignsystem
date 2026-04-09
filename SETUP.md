# Setup — Figma → Storybook design tokens pipeline

Condensed reference of the Notion guide, with exact prompts and commands.

## 0. Before you start

- A Figma file with variables (colors, spacing, radius, etc.).
- **Write descriptions on every variable in Figma now** — they become your
  Storybook usage guidelines automatically. Retrofitting later is painful.
- Optional but recommended: publish your design system file as a Figma library
  (Figma menu → Libraries → Publish). Indexing makes Claude faster.

## Pick a path

| Path | Best for | Requirements |
|------|----------|--------------|
| **A. Claude Desktop** | Full pipeline, no terminal | Claude Desktop, Pro/Max/Team |
| **B. Claude.ai browser** | Reading + light edits | Browser, Figma Desktop + plugin |
| **C. Terminal** | All 92+ tools, CI-style control | Node.js 18+, terminal comfort |

---

## Path A — Claude Desktop (recommended)

1. Download Claude Desktop from `claude.ai/download`, install, log in.
2. Sidebar → **Code** → new session → **+** → **Connectors** → **Figma** →
   **Allow Access** in the browser tab that opens.
3. Verify: ask *"What Figma files can you see?"*
4. (Optional) Add the community Figma Console MCP for 92+ design-system tools:
   *"Add the Figma Console MCP server using NPX."*

From here every step below is a plain-English prompt in the Code tab.

## Path B — Claude.ai browser

1. `figma.com/settings` → Personal access tokens → **Generate new token**
   - Name: `Claude MCP`
   - Scopes: File content **Read**, Variables **Read**, Comments **Read/Write**
   - Copy the `figd_…` token immediately.
2. `claude.ai` → profile → **Settings → Connectors → Add Custom Connector**
   - Name: `Figma Console`
   - URL: `https://figma-console-mcp.southleft.com/mcp`
   - Paste the token when prompted.
3. Install Figma Desktop. In your file: **Plugins → Development → Import
   plugin from manifest…** → `~/.figma-console-mcp/plugin/manifest.json`.
4. Run **Plugins → Development → Figma Desktop Bridge** → wait for "MCP ready".
5. In Claude.ai: *"Connect to my Figma plugin"* → it returns a 6-char code →
   in the plugin toggle **Cloud Mode**, paste code, **Connect**.

> Cloud mode is fine for reading/light edits. Switch to Path A or work with a
> developer for the Storybook parts.

## Path C — Terminal

```sh
# Node 18+
npx figma-console-mcp@latest
```

Follow prompts to authenticate, then register with Claude Code:

```sh
claude mcp add --transport http figma https://mcp.figma.com/mcp
# inside Claude Code:
/mcp     # → select figma → Authenticate
```

---

## Steps 5–14 (the same prompts work in any path)

| # | Prompt to Claude |
|---|------------------|
| 5  | *"Create a new design token pipeline project. Set it up with npm."* |
| 6  | *"Install Style Dictionary version 4."* |
| 7  | *"Read my Figma variables and create a tokens.json file with all my color, spacing and radius tokens. Also extract variable descriptions into guidelines.json."* |
| 8  | *"Create separate token files for light and dark mode."* |
| 9  | *"Create a Style Dictionary configuration that outputs CSS custom properties, JavaScript ES6 exports, and flat JSON."* |
| 10 | *"Build the tokens."* |
| 11 | *"Install Storybook with React and Vite. Pin to version 8 to avoid conflicts."* |
| 12 | *"Create Storybook stories that display my tokens visually: Colors as a swatch grid, Spacing as bars, Radius as boxes, including the usage guidelines from my Figma descriptions."* |
| 13 | *"Start Storybook."* |
| 14 | *"Create a changelog system: snapshot, diff, human-readable output, and a Storybook Changelog page with color swatches."* |

### Manual fallback commands

```sh
npm init -y
npm pkg set type=module
npm install style-dictionary@^4
npm install -D storybook@8 @storybook/react@8 @storybook/react-vite@8 \
                @storybook/addon-essentials@8 react react-dom vite
npm run build:tokens
npm run storybook
```

`package.json` must include:

```json
{ "type": "module",
  "scripts": { "build:tokens": "node build-tokens.js" } }
```

---

## Daily workflow

1. Edit variable in Figma.
2. In Code tab: *"sync from Figma"*.
3. *"push to GitHub"* → Vercel/Netlify auto-deploys Storybook.
4. Devs run `npm update @your-client/design-tokens`.

## Troubleshooting cheatsheet

- **Stale Figma data** → *"Fetch my Figma variables again with refreshCache set
  to true"* or use `figma.variables.getVariableByIdAsync` via the Plugin API.
- **Storybook blank pages** → check `build/json/tokens.json`. Style Dictionary
  flattens `color/primary/500` to `ColorPrimary500`. Filter on `'Color'`, not
  `'color-'`.
- **Storybook version conflict** → install every `@storybook/*` package with
  the same `@8` (or whichever) suffix.
- **`npm run build:tokens` fails** → add `"type": "module"` to `package.json`.
- **MCP tools missing in Claude Code** → re-run `claude mcp add …`,
  `/mcp → Authenticate`, restart.
- **Cloud pairing code expired** → ask Claude for a new code; keep the
  Desktop Bridge plugin running in Figma.
- **Read works, write doesn't** → official MCP needs a paid Figma seat (free
  = 6 calls/month); Console MCP cloud needs the Desktop Bridge plugin running.

## Lessons learned (from the article)

- Pin Storybook to a major version.
- Figma MCP caches — use `refreshCache: true` when in doubt.
- Style Dictionary outputs camelCase keys.
- Write Figma descriptions from day one.
- Build incrementally: tokens → SD → CSS → Storybook → changelog → theme.
- A visual changelog in Storybook beats `CHANGELOG.md`.
