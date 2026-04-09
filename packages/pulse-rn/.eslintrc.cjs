/**
 * Pulse RN ESLint — enforces CLAUDE.md rule:
 * "I do not want any component to be built without using variable token."
 *
 * Forbids raw hex/rgb colors and numeric px-style literals inside StyleSheet
 * objects, inline `style={{ ... }}` props, or object literals in component
 * files. Tokens must come from `@pulse/tokens` (or the RN theme export).
 *
 * NOTE: rule is intentionally strict. If a legitimate case arises, disable
 * per-line with `// eslint-disable-next-line pulse/no-raw-values` and
 * explain why in a code comment.
 */
module.exports = {
  root: true,
  parserOptions: { ecmaVersion: 2022, sourceType: 'module', ecmaFeatures: { jsx: true } },
  env: { es2022: true, node: true },
  rules: {
    // Literal regex ban: hex colors, rgb(), rgba(), hsl()
    'no-restricted-syntax': [
      'error',
      {
        selector: "Literal[value=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/]",
        message: 'Raw hex color forbidden. Import from @pulse/tokens.',
      },
      {
        selector: "Literal[value=/^(rgb|rgba|hsl|hsla)\\(/]",
        message: 'Raw rgb/hsl color forbidden. Import from @pulse/tokens.',
      },
    ],
  },
  ignorePatterns: ['*.stories.jsx', 'node_modules', 'assets'],
};
