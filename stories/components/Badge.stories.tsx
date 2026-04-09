import React from 'react';
import { Badge } from './Badge';

export default { title: 'Components/Badge', parameters: { layout: 'centered' } };

export const Variants = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <Badge type="Dot" />
    <Badge type="Count-SM" />
    <Badge type="Count-LG" />
    <Badge type="Count-Max" />
  </div>
);

export const ByCount = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <Badge count={1} />
    <Badge count={9} />
    <Badge count={12} />
    <Badge count={250} />
  </div>
);

export const OnIcon = () => (
  <div style={{ position: 'relative', display: 'inline-block' }}>
    <span style={{ fontSize: 24 }}>🔔</span>
    <span style={{ position: 'absolute', top: -4, right: -6 }}>
      <Badge count={12} />
    </span>
  </div>
);
