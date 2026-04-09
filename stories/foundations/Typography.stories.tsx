import React from 'react';
import { T, guideline, colors as s, Section, fmt } from '../_lib';

export default { title: 'Foundations/Typography', parameters: { layout: 'fullscreen' } };

const ROLES: Array<keyof typeof T['typo']> = ['display','heading','title','body','label'] as any;
const SAMPLE = 'The quick brown fox jumps over the lazy dog';

function Tier({ role, tier, vals }: { role: string; tier: string; vals: any }) {
  const path = ['typo', role, tier];
  return (
    <div style={{ ...s.card, marginBottom: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <strong>{role}/{tier}</strong>
        <span style={s.mono}>
          {fmt(vals.size?.value)}px / {fmt(vals.lineHeight?.value)}px / {fmt(vals.weight?.value)}
        </span>
      </div>
      <div style={{
        fontSize: vals.size?.value, lineHeight: `${vals.lineHeight?.value}px`,
        fontWeight: vals.weight?.value, letterSpacing: vals.letterSpacing?.value,
      }}>{SAMPLE}</div>
      <div style={s.guideline}>{guideline([...path, 'size'])}</div>
    </div>
  );
}

export const Scale = () => (
  <div style={s.page}>
    <h1>Typography</h1>
    <p style={{ color: '#5d6a85', maxWidth: 640 }}>Mobile values shown — the same tokens scale up at tablet and desktop breakpoints.</p>
    {ROLES.map((role) => {
      const tiers = (T.typo as any)[role] || {};
      return (
        <Section key={role} title={role}>
          {Object.entries(tiers).map(([tier, vals]) => <Tier key={tier} role={role} tier={tier} vals={vals} />)}
        </Section>
      );
    })}
  </div>
);
