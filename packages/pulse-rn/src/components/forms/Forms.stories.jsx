import React, { useState } from 'react';
import { View } from 'react-native';
import PulseInput    from './PulseInput';
import PulseSelect   from './PulseSelect';
import PulseCheckbox from './PulseCheckbox';
import PulseToggle   from './PulseToggle';
import PulseSlider   from './PulseSlider';
import { Spacing } from '../../theme';

export default { title: 'Forms/All', parameters: { layout: 'centered' } };

export const Showcase = () => {
  const [text, setText] = useState('');
  const [sel, setSel]   = useState();
  const [chk, setChk]   = useState(false);
  const [tog, setTog]   = useState(true);
  const [val, setVal]   = useState(40);
  return (
    <View style={{ width: 320, gap: Spacing.s16 }}>
      <PulseInput label="Email" value={text} onChangeText={setText} placeholder="you@example.com" />
      <PulseInput label="With error" value="" onChangeText={() => {}} placeholder="…" error="Required field" />
      <PulseSelect value={sel} onChange={setSel} options={[{label:'0.25mg',value:0.25},{label:'0.5mg',value:0.5},{label:'1mg',value:1}]} placeholder="Pick a dose" />
      <PulseCheckbox checked={chk} onChange={setChk} label="I accept terms" />
      <PulseToggle value={tog} onValueChange={setTog} />
      <PulseSlider value={val} onChange={setVal} label="Effort level" />
    </View>
  );
};
