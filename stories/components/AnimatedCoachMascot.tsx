import React from 'react';

/**
 * Animated WeightEasy coach mascot — round blob with a prominent, static
 * teal→blue→violet gradient and two white pill eyes that blink and drift.
 * Mirrors `stories/assets/coach.gif` and the RN port at
 * `app/components/AnimatedCoachMascot.jsx` in WeightEasyHome.
 */

const CSS = `
@keyframes acm-blink {
  0%, 92%, 100% { transform: scaleY(1); }
  94%           { transform: scaleY(0.05); }
  96%           { transform: scaleY(1); }
}
.acm-root {
  position: relative;
  display: inline-block;
  border-radius: 9999px;
  overflow: hidden;
  isolation: isolate;
}
.acm-base, .acm-shine {
  position: absolute;
  inset: 0;
  border-radius: inherit;
}
.acm-base {
  background: linear-gradient(135deg, #06B6D4 0%, #2563EB 50%, #7C3AED 100%);
}
.acm-shine {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 65%);
  pointer-events: none;
}
.acm-eyes {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12%;
  padding-top: 4%;
  pointer-events: none;
}
.acm-eye {
  width: 11%;
  height: 22%;
  background: #FFFFFF;
  border-radius: 9999px;
  transform-origin: center;
  animation: acm-blink 2600ms ease-in-out infinite;
}
`;

export interface AnimatedCoachMascotProps {
  size?: number;
  style?: React.CSSProperties;
}

export function AnimatedCoachMascot({ size = 96, style }: AnimatedCoachMascotProps) {
  return (
    <>
      <style>{CSS}</style>
      <span
        className="acm-root"
        style={{ width: size, height: size, ...style }}
        aria-hidden
      >
        <span className="acm-base" />
        <span className="acm-shine" />
        <span className="acm-eyes">
          <span className="acm-eye" />
          <span className="acm-eye" />
        </span>
      </span>
    </>
  );
}
