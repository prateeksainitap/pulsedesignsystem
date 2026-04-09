import React from 'react';

export default { title: 'Foundations/Getting Started' };

export const Overview = () => (
  <article style={{ padding: 32, maxWidth: 720, fontFamily: 'system-ui', lineHeight: 1.6 }}>
    <h1>Pulse Design Tokens</h1>
    <p>
      Single source of truth lives in Figma. Run <code>npm run sync</code> to pull the latest
      values, rebuild Style Dictionary outputs, and regenerate the changelog.
    </p>
    <ul>
      <li><strong>Colors / Spacing / Radius</strong> — visual catalogues sourced from <code>build/json/tokens.json</code>.</li>
      <li><strong>Changelog</strong> — every sync diffs against the previous snapshot.</li>
      <li><strong>Usage guidelines</strong> — pulled from Figma variable descriptions into <code>tokens/guidelines.json</code>.</li>
    </ul>
    <h2>Install</h2>
    <pre style={{ background: '#0c0c0d', color: '#fff', padding: 16, borderRadius: 8 }}>
{`npm install @pulse/design-tokens

@import '@pulse/design-tokens/css';

.button {
  background: var(--primary-default);
  padding: var(--space-12) var(--space-20);
  border-radius: var(--radius-md);
}`}
    </pre>
  </article>
);
