import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PulseModal       from './PulseModal';
import PulseToast       from './PulseToast';
import PulseBottomSheet from './PulseBottomSheet';
import PulseBanner      from './PulseBanner';
import PulseButton      from '../primitives/PulseButton';
import { Spacing, Colors, Typography } from '../../theme';

export default { title: 'Feedback/All', parameters: { layout: 'centered' } };

export const Banners = () => (
  <View style={{ gap: Spacing.s12, width: 360 }}>
    <PulseBanner tone="info"    title="Heads up"  message="Your next dose is due tomorrow."   />
    <PulseBanner tone="success" title="Logged"    message="Dose recorded for today."          />
    <PulseBanner tone="warning" title="Hydration" message="You're 2 cups behind your target." />
    <PulseBanner tone="error"   title="Sync"      message="Couldn't reach the server."        />
  </View>
);

export const Toasts = () => (
  <View style={{ gap: Spacing.s8, width: 320 }}>
    <PulseToast tone="success" message="Saved" />
    <PulseToast tone="error"   message="Something went wrong" />
    <PulseToast tone="info"    message="New tip available" />
  </View>
);

export const Modals = () => {
  const [open, setOpen] = useState(false);
  return (
    <View style={{ gap: Spacing.s16 }}>
      <PulseButton label="Open modal" onPress={() => setOpen(true)} />
      <PulseModal
        visible={open}
        onClose={() => setOpen(false)}
        title="Confirm dose"
        actions={<PulseButton label="Confirm" size="M" onPress={() => setOpen(false)} />}
      >
        <Text style={[Typography.body.md, { color: Colors.content.secondary }]}>
          Logging 0.5mg Ozempic for today.
        </Text>
      </PulseModal>
    </View>
  );
};

export const BottomSheet = () => {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <PulseButton label="Open sheet" onPress={() => setOpen(true)} />
      <PulseBottomSheet visible={open} onClose={() => setOpen(false)}>
        <Text style={[Typography.heading.sm, { color: Colors.content.primary }]}>Quick actions</Text>
      </PulseBottomSheet>
    </View>
  );
};
