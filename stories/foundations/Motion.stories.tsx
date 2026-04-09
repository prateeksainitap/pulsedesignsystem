import React, { useState } from 'react';
import { T, guideline, colors as s, Section, fmt } from '../_lib';

export default { title: 'Foundations/Motion', parameters: { layout: 'fullscreen' } };

function Row({ path, value, suffix }: { path: string[]; value: any; suffix?: string }) {
  return (
    <div style={{ ...s.card, display: 'grid', gridTemplateColumns: 'minmax(240px, max-content) 1fr max-content', gap: 24, alignItems: 'center' }}>
      <strong>{path.join('/')}</strong>
      <div style={s.guideline}>{guideline(path)}</div>
      <span style={s.mono}>{fmt(value)}{suffix ?? ''}</span>
    </div>
  );
}

function DurationDemo({ name, ms }: { name: string; ms: number }) {
  const [on, setOn] = useState(false);
  return (
    <div style={{ ...s.card }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <strong>motion/duration/{name}</strong>
        <span style={s.mono}>{fmt(ms)}ms</span>
      </div>
      <div onClick={() => setOn((v) => !v)} style={{ cursor: 'pointer', background: '#f7f8fa', height: 48, borderRadius: 8, position: 'relative' }}>
        <div style={{
          position: 'absolute', top: 8, left: on ? 'calc(100% - 40px)' : 8,
          width: 32, height: 32, borderRadius: 8, background: '#3B82F6',
          transition: `left ${ms}ms ease`,
        }} />
      </div>
      <div style={s.guideline}>{guideline(['motion', 'duration', name])}</div>
    </div>
  );
}

export const All = () => {
  const m: any = (T as any).motion ?? {};
  return (
    <div style={s.page}>
      <h1>Motion</h1>
      <p style={{ color: '#5d6a85', maxWidth: 640 }}>Click any tile to replay the animation at that duration.</p>
      {m.duration && (
        <Section title="duration">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
            {Object.entries(m.duration).map(([k, v]: any) => <DurationDemo key={k} name={k} ms={v.value} />)}
          </div>
        </Section>
      )}
      {['delay', 'scale', 'opacity'].map((cat) => m[cat] && (
        <Section key={cat} title={cat}>
          <div style={{ display: 'grid', gap: 8 }}>
            {Object.entries(m[cat]).map(([k, v]: any) => (
              <Row key={k} path={['motion', cat, k]} value={v.value} suffix={cat === 'delay' ? 'ms' : ''} />
            ))}
          </div>
        </Section>
      ))}
      {m.spring && (
        <Section title="spring">
          <div style={{ display: 'grid', gap: 8 }}>
            {Object.entries(m.spring).flatMap(([sub, group]: any) =>
              Object.entries(group).map(([variant, v]: any) => (
                <Row key={`${sub}.${variant}`} path={['motion', 'spring', sub, variant]} value={v.value} />
              ))
            )}
          </div>
        </Section>
      )}
    </div>
  );
};
