import React from 'react';

/**
 * Task Card — from WeightEasy Figma "Task Card" (9527:98408).
 * Variants: isCompleted false | true.
 *
 * Layout: 328×88, padding 20/16, gap 8, row.
 *   [48×48 icon frame (contains 34×34 circular icon w/ green stroke, 18×18 glyph)]
 *   [text stack: title row (task 16 Medium + optional tag pill) + description 14 Regular #3d4966]
 *   [48×48 circular right icon button: blue (#2563eb) when not completed, muted when done]
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, sans-serif)";

export interface TaskCardProps {
  icon?: React.ReactNode;
  iconBgColor?: string;
  iconRingColor?: string;
  task?: string;
  description?: string;
  isCompleted?: boolean;
  showTag?: boolean;
  tagLabel?: string;
  tagEmoji?: string;
  tagBg?: string;
  tagColor?: string;
  showRightIcon?: boolean;
  rightIcon?: React.ReactNode;
  onAction?: () => void;
}

const PlusIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden>
    <line x1="12" y1="5" x2="12" y2="19" stroke="#fdfdfd" strokeWidth={1.5} strokeLinecap="round" />
    <line x1="5" y1="12" x2="19" y2="12" stroke="#fdfdfd" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

const PlainPlus = ({ color = '#818ba0' }: { color?: string }) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden>
    <line x1="12" y1="5" x2="12" y2="19" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    <line x1="5" y1="12" x2="19" y2="12" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

const CheckGlyph = () => (
  <svg width={18} height={18} viewBox="0 0 18 18" fill="none" aria-hidden>
    <path d="M4 9.5l3.5 3.5L14 6" stroke="#15803d" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DefaultGlyph = () => (
  <svg width={18} height={18} viewBox="0 0 18 18" fill="none" aria-hidden>
    <rect x="3" y="2" width="12" height="14" rx="2" stroke="#3d4966" strokeWidth={1.5} />
    <line x1="6" y1="6" x2="12" y2="6" stroke="#3d4966" strokeWidth={1.5} strokeLinecap="round" />
    <line x1="6" y1="10" x2="12" y2="10" stroke="#3d4966" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

export function TaskCard({
  icon,
  iconBgColor,
  iconRingColor,
  task = 'Task',
  description = 'Description',
  isCompleted = false,
  showTag = false,
  tagLabel = 'Overdue',
  tagEmoji,
  tagBg = '#fff8eb',
  tagColor = '#78350f',
  showRightIcon = true,
  rightIcon,
  onAction,
}: TaskCardProps) {
  return (
    <div
      style={{
        width: 328,
        height: 88,
        boxSizing: 'border-box',
        padding: '20px 16px',
        background: '#fdfdfd',
        border: '1px solid var(--border-default, #dce1e8)',
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: FONT,
      }}
    >
      {/* 48×48 icon wrapper with 34×34 ring inside */}
      <div
        style={{
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 9999,
            border: `1px solid ${iconRingColor ?? (isCompleted ? '#bbf7d0' : '#dcfce7')}`,
            background: iconBgColor ?? (isCompleted ? '#dcfce7' : '#fdfdfd'),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon ?? (isCompleted ? <CheckGlyph /> : <DefaultGlyph />)}
        </div>
      </div>

      {/* Text content */}
      <div
        style={{
          flex: 1,
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span
            style={{
              fontSize: 16,
              lineHeight: '24px',
              fontWeight: 500,
              color: 'var(--content-primary, #181f3a)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {task}
          </span>
          {showTag && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '4px 8px',
                borderRadius: 9999,
                background: tagBg,
                color: tagColor,
                fontSize: 12,
                fontWeight: 500,
                lineHeight: '16px',
              }}
            >
              {tagEmoji && <span aria-hidden>{tagEmoji}</span>}
              <span>{tagLabel}</span>
            </span>
          )}
        </div>
        <div
          style={{
            fontSize: 14,
            lineHeight: '20px',
            fontWeight: 400,
            color: 'var(--content-secondary, #3d4966)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {description}
        </div>
      </div>

      {/* Right action — blue filled circle with white + when default;
          plain gray + icon (no button bg) when completed. */}
      {showRightIcon && (
        isCompleted ? (
          <div
            aria-label="completed"
            style={{
              width: 48,
              height: 48,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {rightIcon ?? <PlainPlus />}
          </div>
        ) : (
          <button
            type="button"
            onClick={onAction}
            aria-label="Complete task"
            style={{
              width: 48,
              height: 48,
              borderRadius: 9999,
              border: 0,
              background: 'var(--border-focus, #2563eb)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              padding: 0,
            }}
          >
            {rightIcon ?? <PlusIcon />}
          </button>
        )
      )}
    </div>
  );
}
