import React from 'react';
import tokens from '../tokens/tokens.json';
import guidelines from '../tokens/guidelines.json';

type AnyObj = Record<string, any>;

export function flatten(obj: AnyObj, prefix: string[] = []): { path: string[]; value: any; type?: string }[] {
  const out: { path: string[]; value: any; type?: string }[] = [];
  for (const [k, v] of Object.entries(obj)) {
    if (v && typeof v === 'object' && 'value' in v) out.push({ path: [...prefix, k], value: v.value, type: (v as any).type });
    else if (v && typeof v === 'object') out.push(...flatten(v, [...prefix, k]));
  }
  return out;
}

export function fmt(v: any): string {
  if (typeof v === 'number') return Number.isInteger(v) ? String(v) : (Math.round(v * 100) / 100).toString();
  if (typeof v === 'string') {
    const n = Number(v);
    if (!Number.isNaN(n) && /^-?\d*\.?\d+$/.test(v)) return fmt(n);
    return v.replace(/-?\d+\.\d+/g, (m) => fmt(Number(m)));
  }
  return String(v);
}

export function guideline(path: string[]) {
  return (guidelines as Record<string, string>)[path.join('.')] ?? '';
}

export const T = tokens as AnyObj;

export const colors = {
  swatch: { width: 56, height: 56, borderRadius: 8, border: '1px solid rgba(0,0,0,0.08)' } as const,
  page: { padding: 32, fontFamily: 'system-ui, -apple-system, sans-serif', color: '#0c0c0d' } as const,
  card: { background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: 16 } as const,
  mono: { fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 12 } as const,
  guideline: { fontSize: 12, color: '#5d6a85', marginTop: 6, lineHeight: 1.5 } as const,
};

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#5d6a85', margin: '0 0 16px' }}>{title}</h2>
      {children}
    </section>
  );
}
