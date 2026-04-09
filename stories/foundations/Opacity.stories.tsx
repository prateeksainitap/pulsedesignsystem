import React from 'react';
import { T, guideline, colors as s, fmt } from '../_lib';

export default { title: 'Foundations/Opacity', parameters: { layout: 'fullscreen' } };

export const Scale = () => {
  const o: any = (T as any).opacity ?? {};
  const items = Object.entries(o).map(([k, v]: any) => ({ k, v: v.value }));
  return (
    <div style={s.page}>
      <h1>Opacity</h1>
      <p style={{ color: '#5d6a85', maxWidth: 640 }}>Use opacity to express disabled, hover, and overlay states. Values are between 0 and 1.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16, marginTop: 16 }}>
        {items.map(({ k, v }) => (
          <div key={k} style={{ ...s.card }}>
            <div style={{ position: 'relative', height: 96, borderRadius: 8, background: 'repeating-conic-gradient(#e5e7eb 0 25%, #fff 0 50%) 50% / 16px 16px' }}>
              <div style={{ position: 'absolute', inset: 0, background: '#0c0c0d', opacity: v, borderRadius: 8 }} />
            </div>
            <div style={{ marginTop: 8, fontWeight: 600 }}>opacity/{k}</div>
            <div style={s.mono}>{fmt(v)}</div>
            <div style={s.guideline}>{guideline(['opacity', k])}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
