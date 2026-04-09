import React from 'react';
import { AnimatedCoachMascot } from '../AnimatedCoachMascot';

/**
 * BottomNav / GLP — from WeightEasy Figma "BottomNav/GLP" (8624:83068).
 * 360×82, white outer, inner surface fill with 2 drop shadows, padding 8/8/16/8, gap 16.
 * 5 tabs: Home, Dose, Coach (center — 44×44 avatar bot image), Track (with red dot), Learn.
 * Each tab: vertical, 24×24 icon + 12 Medium label. Active = content-primary (#252e49),
 * inactive = content-tertiary (#818ba0).
 */

const FONT = "var(--font-family, 'Google Sans', 'Noto Sans', -apple-system, sans-serif)";
const ACTIVE = 'var(--content-primary)';
const INACTIVE = 'var(--content-tertiary)';

export type NavTab = 'Home' | 'Dose' | 'Coach' | 'Track' | 'Learn';

export interface BottomNavGLPProps {
  active?: NavTab;
  onSelect?: (tab: NavTab) => void;
  indicatorOnTrack?: boolean;
}

// Icons
const HomeIcon = ({ color }: { color: string; filled?: boolean }) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M5 18.5V13.1272C5 12.4005 5.26375 11.6986 5.74227 11.1517L9.74227 6.58026C10.9375 5.21428 13.0625 5.21428 14.2577 6.58026L18.2577 11.1517C18.7362 11.6986 19 12.4005 19 13.1272V18.5C19 19.3284 18.3284 20 17.5 20H15.5C14.6716 20 14 19.3284 14 18.5V16.5C14 15.6716 13.3284 15 12.5 15H11.5C10.6716 15 10 15.6716 10 16.5V18.5C10 19.3284 9.32843 20 8.5 20H6.5C5.67157 20 5 19.3284 5 18.5Z" stroke={color} strokeWidth={1.5}/>
  </svg>
);

const SyringeIcon = ({ color }: { color: string }) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M21.7071 6.29297L17.7071 2.29297L16.2929 3.70718L17.5858 5.00012L16.0001 6.58588L11.7072 2.293L10.293 3.70721L11.5859 5.0001L5.41428 11.1717C3.85218 12.7338 3.85218 15.2664 5.41428 16.8285L5.57119 16.9854L3.29297 19.2637L4.70718 20.6779L6.98541 18.3997L7.17164 18.5859C8.73373 20.148 11.2664 20.148 12.8285 18.5859L14.5001 16.9143L11.2929 13.7072L12.7071 12.293L15.9143 15.5001L16.5001 14.9143L13.2929 11.7072L14.7071 10.293L17.9143 13.5001L19.0001 12.4143L20.293 13.7072L21.7072 12.293L17.4143 8.00009L19 6.41434L20.2929 7.70718L21.7071 6.29297Z" fill={color} />
  </svg>
);

const FlagIcon = ({ color }: { color: string }) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M6 21V6.5C6 5.67157 6.67157 5 7.5 5H10.5458C10.842 5 11.1315 5.08766 11.3779 5.25192L13.6221 6.74808C13.8685 6.91234 14.158 7 14.4542 7H17.5C18.3284 7 19 7.67157 19 8.5V13.5C19 14.3284 18.3284 15 17.5 15H14.4542C14.158 15 13.8685 14.9123 13.6221 14.7481L11.3779 13.2519C11.1315 13.0877 10.842 13 10.5458 13H6" stroke={color} strokeWidth={1.5}/>
  </svg>
);

const BookIcon = ({ color }: { color: string }) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M18 20H7.5C6.67157 20 6 19.3284 6 18.5V17.5C6 16.6716 6.67157 16 7.5 16H12" stroke={color} strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="round"/>
    <path d="M9 8H15" stroke={color} strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="round"/>
    <path d="M9 12H12" stroke={color} strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="round"/>
    <path d="M6 5.5C6 4.67157 6.67157 4 7.5 4H16.5C17.3284 4 18 4.67157 18 5.5V14.5C18 15.3284 17.3284 16 16.5 16H7.5C6.67157 16 6 15.3284 6 14.5V5.5Z" stroke={color} strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="round"/>
    <path d="M16.5 16V20" stroke={color} strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="round"/>
    <path d="M6 18V15" stroke={color} strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="round"/>
  </svg>
);

const CoachAvatar = ({ badge = true }: { badge?: boolean }) => (
  <div
    style={{
      width: 44,
      height: 44,
      position: 'relative',
      flexShrink: 0,
    }}
  >
    <AnimatedCoachMascot size={44} style={{ pointerEvents: 'none' }} />
    {badge && (
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 10,
          height: 10,
          borderRadius: 9999,
          background: 'var(--content-negative, #dc2626)',
          border: '2px solid var(--surface-container)',
          boxSizing: 'content-box',
        }}
      />
    )}
  </div>
);

function Tab({
  label,
  icon,
  isActive,
  onClick,
  dot,
}: {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
  dot?: boolean;
}) {
  const color = isActive ? ACTIVE : INACTIVE;
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        flex: 1,
        minWidth: 0,
        padding: 'var(--space-8) var(--space-8)',
        background: 'transparent',
        border: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-2)',
        cursor: 'pointer',
        fontFamily: FONT,
        position: 'relative',
      }}
      aria-current={isActive || undefined}
    >
      {icon}
      <span style={{
        fontSize: 'var(--typo-label-md-size)',
        lineHeight: 'var(--typo-label-md-line-height)',
        fontWeight: 'var(--typo-label-md-weight)' as unknown as number,
        letterSpacing: 'var(--typo-label-md-letter-spacing)',
        color,
      }}>{label}</span>
      {dot && (
        <span
          aria-hidden
          style={{
            position: 'absolute',
            top: 8,
            right: 14,
            width: 6,
            height: 6,
            borderRadius: 9999,
            background: 'var(--content-negative, #dc2626)',
          }}
        />
      )}
    </button>
  );
}

// indicatorOnTrack fallback – kept for backwards compat

export function BottomNavGLP({
  active = 'Home',
  onSelect,
  indicatorOnTrack = true,
}: BottomNavGLPProps) {
  const color = (tab: NavTab) => (active === tab ? ACTIVE : INACTIVE);
  return (
    <div
      style={{
        width: 360,
        background: 'var(--surface-container)',
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          background: 'var(--surface-container)',
          padding: 'var(--space-8) var(--space-8) var(--space-16) var(--space-8)',
          boxShadow: '0 -1px 2px 0 rgba(8,21,37,0.04), 0 -2px 8px 0 rgba(8,21,37,0.06)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-16)', height: 58 }}>
          <Tab
            label="Home"
            icon={<HomeIcon color={color('Home')} filled={active === 'Home'} />}
            isActive={active === 'Home'}
            onClick={() => onSelect?.('Home')}
          />
          <Tab
            label="Dose"
            icon={<SyringeIcon color={color('Dose')} />}
            isActive={active === 'Dose'}
            onClick={() => onSelect?.('Dose')}
          />
          {/* Coach tab — special center avatar */}
          <button
            type="button"
            onClick={() => onSelect?.('Coach')}
            aria-current={active === 'Coach' || undefined}
            style={{
              flex: 1,
              background: 'transparent',
              border: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--space-2)',
              cursor: 'pointer',
              fontFamily: FONT,
            }}
          >
            <CoachAvatar />
            <span style={{
              fontSize: 'var(--typo-label-md-size)',
              lineHeight: 'var(--typo-label-md-line-height)',
              fontWeight: 'var(--typo-label-md-weight)' as unknown as number,
              letterSpacing: 'var(--typo-label-md-letter-spacing)',
              color: color('Coach'),
            }}>Coach</span>
          </button>
          <Tab
            label="Track"
            icon={<FlagIcon color={color('Track')} />}
            isActive={active === 'Track'}
            onClick={() => onSelect?.('Track')}
            dot={indicatorOnTrack}
          />
          <Tab
            label="Learn"
            icon={<BookIcon color={color('Learn')} />}
            isActive={active === 'Learn'}
            onClick={() => onSelect?.('Learn')}
          />
        </div>
      </div>
    </div>
  );
}
