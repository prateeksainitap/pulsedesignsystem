import React from 'react';
import { T, guideline, colors as s, Section, fmt } from '../_lib';

export default { title: 'Foundations/Sizing', parameters: { layout: 'fullscreen' } };

function row(category: string, key: string, value: number) {
  const path = ['size', category, key];
  return (
    <div key={path.join('.')} style={{ ...s.card, display: 'grid', gridTemplateColumns: '120px 1fr 80px', alignItems: 'center', gap: 16 }}>
      <strong>{category}/{key}</strong>
      <div>
        <div style={{
          background: '#3B82F6',
          width: value, height: value,
          borderRadius: category === 'avatar' ? 999 : 6,
        }} />
        <div style={s.guideline}>{guideline(path)}</div>
      </div>
      <span style={s.mono}>{fmt(value)}px</span>
    </div>
  );
}

export const All = () => (
  <div style={s.page}>
    <h1>Sizing</h1>
    {Object.entries((T as any).size).map(([cat, kids]: any) => (
      <Section key={cat} title={cat}>
        <div style={{ display: 'grid', gap: 12 }}>
          {typeof kids?.value !== 'undefined'
            ? row('size', cat, kids.value)
            : Object.entries(kids).map(([k, v]: any) => row(cat, k, v.value))}
        </div>
      </Section>
    ))}
  </div>
);
