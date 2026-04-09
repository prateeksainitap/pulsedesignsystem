import React from 'react';
import Svg, { Defs, LinearGradient, RadialGradient, Stop, Path, Rect, Ellipse } from 'react-native-svg';

/**
 * 3D-style thumbs-up illustration (Apple Memoji vibe) used in the StayHealthy banner.
 * Drawn as SVG so it renders identically across platforms and doesn't need a bundled asset.
 */
export default function ThumbsUp({ size = 140 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 220">
      <Defs>
        <LinearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0%" stopColor="#FDE68A" />
          <Stop offset="40%" stopColor="#FBBF24" />
          <Stop offset="100%" stopColor="#B45309" />
        </LinearGradient>
        <LinearGradient id="cuff" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0%" stopColor="#E5E7EB" />
          <Stop offset="100%" stopColor="#9CA3AF" />
        </LinearGradient>
        <RadialGradient id="highlight" cx="30%" cy="25%" r="55%">
          <Stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
          <Stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </RadialGradient>
      </Defs>

      {/* Shirt cuff */}
      <Rect x="55" y="170" width="90" height="40" rx="12" fill="url(#cuff)" />
      <Rect x="55" y="168" width="90" height="8" rx="4" fill="#F3F4F6" />

      {/* Fist */}
      <Path
        d="M 60 120
           Q 55 100 68 90
           Q 80 82 110 85
           L 130 72
           Q 140 66 146 74
           Q 152 82 144 94
           L 128 118
           Q 138 122 142 132
           Q 146 144 136 152
           L 140 160
           Q 142 172 132 178
           L 72 178
           Q 58 178 56 160
           Z"
        fill="url(#skin)"
        stroke="#92400E"
        strokeWidth="2"
      />

      {/* Knuckle lines */}
      <Path d="M 78 140 Q 100 135 130 140" stroke="#92400E" strokeWidth="1.5" fill="none" opacity="0.5" />
      <Path d="M 80 155 Q 100 150 128 155" stroke="#92400E" strokeWidth="1.5" fill="none" opacity="0.5" />

      {/* Thumb extension */}
      <Path
        d="M 125 80
           Q 130 55 118 40
           Q 108 28 96 38
           Q 86 48 92 72
           Q 96 85 110 86 Z"
        fill="url(#skin)"
        stroke="#92400E"
        strokeWidth="2"
      />

      {/* Highlight overlay */}
      <Ellipse cx="90" cy="110" rx="30" ry="20" fill="url(#highlight)" />
    </Svg>
  );
}
