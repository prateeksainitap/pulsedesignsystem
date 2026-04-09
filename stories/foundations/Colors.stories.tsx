import React from 'react';
import { T, flatten, guideline, colors as s, Section } from '../_lib';

export default { title: 'Foundations/Colors', parameters: { layout: 'fullscreen' } };

function Swatch({ path, value }: { path: string[]; value: string }) {
  const name = path.join('/');
  return (
    <div style={{ display: 'flex', gap: 12, padding: 12, ...s.card }}>
      <div style={{ ...s.swatch, background: value }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 13 }}>{name}</div>
        <div style={s.mono}>{value}</div>
        <div style={s.guideline}>{guideline(path)}</div>
      </div>
    </div>
  );
}

function Grid({ items }: { items: { path: string[]; value: any }[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
      {items.map((it) => <Swatch key={it.path.join('.')} path={it.path} value={String(it.value)} />)}
    </div>
  );
}

const all = flatten(T).filter((t) => t.type === 'color');

export const Primitives = () => {
  const families = ['neutral', 'brand', 'green', 'red', 'amber', 'teal', 'purple'];
  return (
    <div style={s.page}>
      <h1>Color Primitives</h1>
      <p style={{ color: '#5d6a85', maxWidth: 640 }}>
        Raw palette values. Don't use these directly in components — reference via the semantic tokens.
      </p>
      {families.map((fam) => (
        <Section key={fam} title={fam}>
          <Grid items={all.filter((t) => t.path[0] === 'color' && t.path[1] === fam)} />
        </Section>
      ))}
    </div>
  );
};

export const Semantic = () => {
  const groups = ['surface', 'primary', 'secondary', 'tertiary', 'content', 'icon', 'border', 'status', 'interaction', 'fixed'];
  return (
    <div style={s.page}>
      <h1>Semantic Colors</h1>
      <p style={{ color: '#5d6a85', maxWidth: 640 }}>
        Role-based tokens. Reach for these inside components — they automatically swap with theme.
      </p>
      {groups.map((g) => {
        const items = all.filter((t) => t.path[0] === g);
        if (!items.length) return null;
        return <Section key={g} title={g}><Grid items={items} /></Section>;
      })}
    </div>
  );
};

export const Gradients = () => {
  const items = all.filter((t) => t.path[0] === 'color' && t.path[1] === 'gradient');
  return (
    <div style={s.page}>
      <h1>Gradient stops</h1>
      <p style={{ color: '#5d6a85' }}>Composed inside the page-header gradient recipe.</p>
      <Grid items={items} />
    </div>
  );
};
