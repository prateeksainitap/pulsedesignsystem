import React from 'react';
import Svg, {
  Defs,
  RadialGradient,
  LinearGradient,
  Stop,
  Circle,
  Ellipse,
  Rect,
  Path,
  G,
} from 'react-native-svg';

/**
 * SVG meal illustrations — higher-fidelity than emoji, no external assets.
 * Each illustration is drawn on a soft background that matches Figma's food photography vibe.
 */

function Plate({ children, bgColor = '#FEF3C7' }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 200 200">
      <Defs>
        <RadialGradient id="bg" cx="50%" cy="45%" r="70%">
          <Stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <Stop offset="100%" stopColor={bgColor} stopOpacity="1" />
        </RadialGradient>
        <RadialGradient id="plateGrad" cx="50%" cy="40%" r="60%">
          <Stop offset="0%" stopColor="#FFFFFF" />
          <Stop offset="70%" stopColor="#F1F5F9" />
          <Stop offset="100%" stopColor="#CBD5E1" />
        </RadialGradient>
      </Defs>
      <Rect width="200" height="200" fill="url(#bg)" />
      {/* Plate */}
      <Circle cx="100" cy="110" r="78" fill="url(#plateGrad)" />
      <Circle cx="100" cy="110" r="68" fill="#FFFFFF" opacity="0.5" />
      {children}
    </Svg>
  );
}

export function BreakfastIllustration() {
  // Greek yogurt bowl with berries
  return (
    <Plate bgColor="#FEF3C7">
      <Defs>
        <RadialGradient id="bowl" cx="50%" cy="40%" r="60%">
          <Stop offset="0%" stopColor="#E0F2FE" />
          <Stop offset="100%" stopColor="#7DD3FC" />
        </RadialGradient>
      </Defs>
      {/* Bowl */}
      <Ellipse cx="100" cy="118" rx="56" ry="40" fill="url(#bowl)" />
      <Ellipse cx="100" cy="108" rx="48" ry="28" fill="#FFFFFF" />
      {/* Yogurt */}
      <Ellipse cx="100" cy="108" rx="44" ry="24" fill="#FFFBEB" />
      {/* Berries */}
      <Circle cx="82" cy="100" r="6" fill="#991B1B" />
      <Circle cx="96" cy="96" r="5" fill="#7F1D1D" />
      <Circle cx="108" cy="102" rx="6" ry="6" fill="#4C1D95" />
      <Circle cx="118" cy="98" r="5" fill="#1E3A8A" />
      <Circle cx="90" cy="110" r="4" fill="#B91C1C" />
      <Circle cx="112" cy="112" r="4" fill="#3730A3" />
      {/* Seeds */}
      <Circle cx="76" cy="106" r="1.5" fill="#78350F" />
      <Circle cx="122" cy="108" r="1.5" fill="#78350F" />
      <Circle cx="100" cy="118" r="1.5" fill="#78350F" />
    </Plate>
  );
}

export function LunchIllustration() {
  // Avocado toast with egg
  return (
    <Plate bgColor="#D1FAE5">
      <Defs>
        <LinearGradient id="toast" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0%" stopColor="#FCD34D" />
          <Stop offset="100%" stopColor="#B45309" />
        </LinearGradient>
        <RadialGradient id="avo" cx="50%" cy="40%" r="60%">
          <Stop offset="0%" stopColor="#BBF7D0" />
          <Stop offset="100%" stopColor="#16A34A" />
        </RadialGradient>
      </Defs>
      {/* Bread slice */}
      <Path
        d="M 50 120 Q 46 78 100 72 Q 154 78 150 120 Q 148 140 100 144 Q 52 140 50 120 Z"
        fill="url(#toast)"
        stroke="#92400E"
        strokeWidth="2"
      />
      {/* Avocado mash */}
      <Ellipse cx="100" cy="104" rx="42" ry="22" fill="url(#avo)" />
      <Ellipse cx="90" cy="100" rx="10" ry="6" fill="#22C55E" opacity="0.6" />
      <Ellipse cx="112" cy="106" rx="8" ry="5" fill="#22C55E" opacity="0.6" />
      {/* Poached egg */}
      <Circle cx="100" cy="102" r="14" fill="#FFFFFF" />
      <Circle cx="100" cy="102" r="7" fill="#FBBF24" />
      <Circle cx="98" cy="100" r="2" fill="#FEF3C7" />
      {/* Seeds/pepper */}
      <Circle cx="78" cy="96" r="1" fill="#1F2937" />
      <Circle cx="122" cy="112" r="1" fill="#1F2937" />
      <Circle cx="84" cy="114" r="1" fill="#1F2937" />
    </Plate>
  );
}

export function DinnerIllustration() {
  // Butternut squash soup
  return (
    <Plate bgColor="#FED7AA">
      <Defs>
        <RadialGradient id="soup" cx="50%" cy="40%" r="60%">
          <Stop offset="0%" stopColor="#FED7AA" />
          <Stop offset="100%" stopColor="#C2410C" />
        </RadialGradient>
      </Defs>
      {/* Soup inside plate */}
      <Ellipse cx="100" cy="108" rx="58" ry="30" fill="url(#soup)" />
      {/* Cream swirl */}
      <Path
        d="M 72 104 Q 100 92 128 108 Q 110 116 90 110 Q 76 114 72 104 Z"
        fill="#FFFBEB"
        opacity="0.85"
      />
      {/* Herbs */}
      <Circle cx="94" cy="102" r="2" fill="#065F46" />
      <Circle cx="108" cy="108" r="2" fill="#065F46" />
      <Circle cx="100" cy="114" r="1.5" fill="#065F46" />
      {/* Pumpkin seeds */}
      <Ellipse cx="84" cy="100" rx="2.5" ry="1.5" fill="#D97706" transform="rotate(-20 84 100)" />
      <Ellipse cx="118" cy="104" rx="2.5" ry="1.5" fill="#D97706" transform="rotate(30 118 104)" />
    </Plate>
  );
}
