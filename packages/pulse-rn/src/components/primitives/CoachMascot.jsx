import React from 'react';
import Svg, { Defs, RadialGradient, LinearGradient, Stop, Circle, Ellipse, Rect, Path, G } from 'react-native-svg';

/**
 * WeightEasy Coach Mascot — blue round character with sunglasses.
 * Used in CoachCard and the BottomNav center bubble.
 *
 * Rendered as a pure-SVG component so it scales crisply at any size
 * and doesn't depend on bundled image assets.
 */
export default function CoachMascot({ size = 48 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Defs>
        <RadialGradient id="face" cx="40%" cy="35%" r="70%">
          <Stop offset="0%" stopColor="#93C5FD" />
          <Stop offset="55%" stopColor="#3B82F6" />
          <Stop offset="100%" stopColor="#1D4ED8" />
        </RadialGradient>
        <LinearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
          <Stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </LinearGradient>
        <LinearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0%" stopColor="#0F172A" />
          <Stop offset="100%" stopColor="#1E293B" />
        </LinearGradient>
      </Defs>

      {/* Head */}
      <Circle cx="50" cy="50" r="46" fill="url(#face)" />

      {/* Top highlight */}
      <Ellipse cx="42" cy="26" rx="26" ry="14" fill="url(#shine)" />

      {/* Sunglasses frame bar */}
      <Rect x="18" y="44" width="64" height="4" rx="2" fill="#0F172A" />

      {/* Left lens */}
      <Rect x="20" y="40" width="26" height="18" rx="9" fill="url(#glass)" />
      {/* Right lens */}
      <Rect x="54" y="40" width="26" height="18" rx="9" fill="url(#glass)" />

      {/* Lens highlights */}
      <Ellipse cx="27" cy="46" rx="4" ry="2.5" fill="#FFFFFF" opacity="0.8" />
      <Ellipse cx="61" cy="46" rx="4" ry="2.5" fill="#FFFFFF" opacity="0.8" />

      {/* Smile */}
      <Path
        d="M 38 68 Q 50 78 62 68"
        stroke="#0F172A"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </Svg>
  );
}
