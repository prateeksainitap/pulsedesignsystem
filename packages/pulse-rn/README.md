# @your-org/pulse-rn

WeightEasy / Pulse React Native component library. Every component pulls
colors, typography, spacing, radius and border tokens from
[`@your-org/pulse-tokens`](../pulse-tokens) — no hex values are hard-coded.

## Layout

```
src/
  index.js                       # public barrel — `import { PulseButton, Colors } from '@your-org/pulse-rn'`
  theme.js                       # re-exports tokens + defines Shadows / Sizing helpers
  components/
    primitives/                  # PulseButton, PulseCard, PulseBottomNav, PulseAvatar, PulseBadge, …
    composites/                  # HeaderSection, CoachCard, ProgressCard
    forms/                       # PulseInput, PulseSelect, PulseCheckbox, PulseToggle, PulseSlider
    feedback/                    # PulseModal, PulseToast, PulseBottomSheet, PulseBanner
.storybook/                      # Storybook React + Vite (react-native-web alias)
.github/workflows/storybook.yml  # builds and deploys to GitHub Pages on every push to main
```

Each component has a sibling `*.stories.jsx` file. Storybook discovers them automatically.

## Develop

```bash
npm install
npm run storybook        # opens http://localhost:6006 (web preview via react-native-web)
npm run storybook:build  # static site → ./storybook-static
```

For on-device preview inside Expo, set up `@storybook/react-native` separately
and point `metro.storybook.config.js` at `src/**/*.stories.jsx`. (Web flow above
is the primary review surface; on-device is for interactive QA.)

## Consume from an app

In any React Native / Expo app:

```bash
npm install @your-org/pulse-rn @your-org/pulse-tokens
```

```jsx
import { PulseButton, HeaderSection, Colors, Spacing } from '@your-org/pulse-rn';

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: Colors.surface.default, padding: Spacing.s24 }}>
      <HeaderSection />
      <PulseButton label="Log dose" type="primary" onPress={() => {}} />
    </View>
  );
}
```

The app no longer maintains its own `theme.js`. To pick up new tokens from
Zeroheight, just bump `@your-org/pulse-tokens` (CI in the tokens repo handles
the rebuild and version bump).

## Token flow

```
Zeroheight  →  pulse-tokens repo (DTCG JSON)  →  Style Dictionary  →  npm package
                                                                          ↓
                                                              pulse-rn imports it
                                                                          ↓
                                                              app imports pulse-rn
```

A change in Zeroheight propagates to every consumer screen via two version
bumps and zero hand-edits.
