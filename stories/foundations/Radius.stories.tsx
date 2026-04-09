import React from 'react';
import { T, flatten, guideline, colors as s, fmt } from '../_lib';

export default { title: 'Foundations/Radius', parameters: { layout: 'fullscreen' } };

const ORDER = ['none','xs','sm','md','lg','xl','2xl','3xl','4xl','full'];
const items = flatten(T)
  .filter((t) => t.path[0] === 'radius')
  .sort((a, b) => ORDER.indexOf(a.path[1]) - ORDER.indexOf(b.path[1]));

export const Boxes = () => (
  <div style={s.page}>
    <h1>Border Radius</h1>
    <p style={{ color: '#5d6a85', maxWidth: 640 }}>Default container radius is <code>radius/md</code> (8px).</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
      {items.map((t) => (
        <div key={t.path.join('.')} style={{ ...s.card, textAlign: 'center' }}>
          <div style={{
            width: 96, height: 96, margin: '8px auto 16px',
            background: '#3B82F6',
            borderRadius: t.path[1] === 'full' ? 999 : `${t.value}px`,
          }} />
          <div style={{ fontWeight: 600, fontSize: 13 }}>radius/{t.path[1]}</div>
          <div style={s.mono}>{fmt(t.value)}{t.path[1] === 'full' ? '' : 'px'}</div>
          <div style={{ ...s.guideline, textAlign: 'left' }}>{guideline(t.path)}</div>
        </div>
      ))}
    </div>
  </div>
);
