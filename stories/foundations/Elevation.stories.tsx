import React from 'react';
import { T, guideline, colors as s } from '../_lib';

export default { title: 'Foundations/Elevation', parameters: { layout: 'fullscreen' } };

const LEVELS = ['none','xs','sm','md','lg','xl'];

function recipe(level: string) {
  const e = (T.elevation as any)[level];
  if (!e || typeof e.offsetY === 'undefined') return 'none';
  const y = e.offsetY?.value ?? 0;
  const blur = e.blur?.value ?? 0;
  const spread = e.spreadRadius?.value ?? 0;
  const opacity = e.shadowOpacity?.value ?? 0;
  return `0 ${y}px ${blur}px ${spread}px rgba(12,12,13,${opacity})`;
}

export const Recipes = () => (
  <div style={s.page}>
    <h1>Elevation</h1>
    <p style={{ color: '#5d6a85', maxWidth: 640 }}>Each level composes 5 tokens (offsetY, blur, spreadRadius, shadowOpacity, android dp).</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 24, marginTop: 24 }}>
      {LEVELS.map((lvl) => (
        <div key={lvl} style={{ background: '#f7f8fa', padding: 24, borderRadius: 12 }}>
          <div style={{ background: '#fff', height: 96, borderRadius: 12, boxShadow: recipe(lvl) }} />
          <div style={{ marginTop: 12, fontWeight: 600 }}>elevation/{lvl}</div>
          <div style={s.guideline}>{guideline(['elevation', lvl, 'offsetY'])}</div>
        </div>
      ))}
    </div>
  </div>
);
