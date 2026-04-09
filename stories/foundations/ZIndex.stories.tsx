import React from 'react';
import { T, guideline, colors as s, fmt } from '../_lib';

export default { title: 'Foundations/Z-Index', parameters: { layout: 'fullscreen' } };

export const Layers = () => {
  const z: any = (T as any).zIndex ?? (T as any)['z-index'] ?? (T as any).z ?? {};
  const items = Object.entries(z)
    .map(([k, v]: any) => ({ k, v: v.value }))
    .sort((a, b) => Number(a.v) - Number(b.v));
  return (
    <div style={s.page}>
      <h1>Z-Index</h1>
      <p style={{ color: '#5d6a85', maxWidth: 640 }}>Layer ordering for stacked surfaces. Lower numbers sit behind higher ones.</p>
      <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
        {items.map(({ k, v }) => (
          <div key={k} style={{ ...s.card, display: 'grid', gridTemplateColumns: '200px 1fr 80px', gap: 16, alignItems: 'center' }}>
            <strong>z/{k}</strong>
            <div style={s.guideline}>{guideline(['zIndex', k]) || guideline(['z-index', k]) || guideline(['z', k])}</div>
            <span style={s.mono}>{fmt(v)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
