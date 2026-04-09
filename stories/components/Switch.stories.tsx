import React, { useState } from 'react';
import { Switch } from './Switch';

export default { title: 'Components/Switch', component: Switch, parameters: { layout: 'centered' } };

export const Playground = () => {
  const [on, setOn] = useState(true);
  return <Switch checked={on} onChange={setOn} aria-label="Notifications" />;
};

export const Matrix = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: 24, alignItems: 'center', fontFamily: 'system-ui' }}>
    <span>Off / Default</span>  <Switch defaultChecked={false} />
    <span>On / Default</span>   <Switch defaultChecked={true} />
    <span>Off / Disabled</span> <Switch defaultChecked={false} disabled />
    <span>On / Disabled</span>  <Switch defaultChecked={true} disabled />
  </div>
);
