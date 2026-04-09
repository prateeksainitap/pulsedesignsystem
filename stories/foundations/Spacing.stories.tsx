import React from 'react';
import { T, flatten, guideline, colors as s, fmt } from '../_lib';

export default { title: 'Foundations/Spacing', parameters: { layout: 'fullscreen' } };

const items = flatten(T)
  .filter((t) => t.path[0] === 'space')
  .sort((a, b) => Number(a.path[1]) - Number(b.path[1]));

export const Scale = () => (
  <div style={s.page}>
    <h1>Spacing</h1>
    <p style={{ color: '#5d6a85', maxWidth: 640 }}>4-pt scale used for padding, margin, and gap. Default unit is <code>space/16</code>.</p>
    <div style={{ display: 'grid', gap: 12 }}>
      {items.map((t) => (
        <div key={t.path.join('.')} style={{ ...s.card, display: 'grid', gridTemplateColumns: '180px 1fr 80px', gap: 16, alignItems: 'center' }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: 13 }}>space/{t.path[1]}</div>
            <div style={s.mono}>{fmt(t.value)}px</div>
          </div>
          <div>
            <div style={{ background: '#3B82F6', height: 16, width: `${t.value}px`, borderRadius: 4 }} />
            <div style={s.guideline}>{guideline(t.path)}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
