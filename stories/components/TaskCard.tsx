import React from 'react';
import { IconButton } from './IconButton';

/**
 * Pulse TaskCard — 1:1 mirror of Figma componentSet 3696:2893 ("Task Card").
 *
 * Spec (from Figma bound variables):
 *   - Background: surface/container, border 1px border-subtle
 *   - Padding: 20 (y) × 16 (x), itemSpacing 8
 *   - Left: 48×48 icon slot (circular 2px border, inner icon 24)
 *   - Middle: Title row (Noto Sans Medium 16/24, content/primary) + optional Tag
 *     + Description (Noto Sans Regular 14/20, content/secondary)
 *   - Right: 48×48 IconButton (Pulse IconButton M) for action, OR completed check
 *
 * Used on the Home page rows (Weight / Food / Water / Steps / Sleep).
 */

export type TaskCardTone = 'success' | 'info' | 'warning' | 'danger' | 'neutral';

const TONE: Record<TaskCardTone, { border: string; surface: string }> = {
  success: { border: 'var(--status-success-on-container)', surface: 'var(--status-success-container)' },
  info:    { border: 'var(--primary-default)',             surface: 'var(--primary-container)' },
  warning: { border: 'var(--status-warning-on-container)', surface: 'var(--status-warning-container)' },
  danger:  { border: 'var(--status-danger-on-container)',  surface: 'var(--status-danger-container)' },
  neutral: { border: 'var(--border-strong)',               surface: 'var(--surface-default)' },
};

const TAG_TONE: Record<TaskCardTone, { bg: string; fg: string }> = {
  success: { bg: 'var(--status-success-container)', fg: 'var(--status-success-on-container)' },
  info:    { bg: 'var(--primary-container)',        fg: 'var(--primary-default)' },
  warning: { bg: 'var(--status-warning-container)', fg: 'var(--status-warning-on-container)' },
  danger:  { bg: 'var(--status-danger-container)',  fg: 'var(--status-danger-on-container)' },
  neutral: { bg: 'var(--surface-container)',        fg: 'var(--content-secondary)' },
};

export interface TaskCardProps {
  /** Icon node rendered centered inside the 48×48 circle. Usually 24×24 Pulse icon. */
  icon: React.ReactNode;
  /** Tone drives the icon circle border + default tag color. */
  tone?: TaskCardTone;
  title: React.ReactNode;
  description?: React.ReactNode;
  tag?: { label: string; tone?: TaskCardTone };
  /** If set, replaces the right-hand IconButton entirely (e.g. a refresh button). */
  action?: React.ReactNode;
  /** Theme forwarded to the default action IconButton (Add / plus). */
  actionTheme?: 'tapHealth' | 'weightEasy';
  onAction?: () => void;
  /** Completed state: swaps the right slot to a check mark and fades content. */
  isCompleted?: boolean;
  /** When embedded inside a grouped list, drops the border/background/radius so the parent owns the chrome. */
  embedded?: boolean;
  /** If true, the caller provides a fully-rendered 48×48 icon slot (e.g. progress ring). */
  rawIcon?: boolean;
  style?: React.CSSProperties;
}

function PlusIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function CheckIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export function TaskCard({
  icon,
  tone = 'neutral',
  title,
  description,
  tag,
  action,
  actionTheme = 'weightEasy',
  onAction,
  isCompleted = false,
  embedded = false,
  rawIcon = false,
  style,
}: TaskCardProps) {
  const t = TONE[tone];
  const tagTone = TAG_TONE[(tag?.tone ?? 'warning')];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: embedded ? '16px 0' : '20px 16px',
        background: embedded ? 'transparent' : 'var(--surface-container)',
        border: embedded ? '0' : '1px solid var(--border-subtle)',
        borderRadius: embedded ? 0 : 16,
        boxSizing: 'border-box',
        fontFamily: "var(--font-family, 'Noto Sans', system-ui, sans-serif)",
        ...style,
      }}
    >
      {/* Icon slot — 48×48; caller can provide a raw slot (e.g. progress ring). */}
      {rawIcon ? (
        <div style={{ width: 48, height: 48, flex: '0 0 auto' }}>{icon}</div>
      ) : (
        <div
          style={{
            width: 48,
            height: 48,
            flex: '0 0 auto',
            borderRadius: 9999,
            border: `2px solid ${t.border}`,
            background: isCompleted ? t.surface : 'transparent',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--content-secondary)',
          }}
        >
          {icon}
        </div>
      )}

      {/* Text content — flexes to fill */}
      <div style={{ flex: '1 1 auto', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span
            style={{
              fontSize: 16,
              lineHeight: '24px',
              fontWeight: 500,
              color: 'var(--content-primary)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              textDecoration: isCompleted ? 'line-through' : undefined,
              opacity: isCompleted ? 0.6 : 1,
            }}
          >
            {title}
          </span>
          {tag && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '4px 8px',
                borderRadius: 9999,
                background: tagTone.bg,
                color: tagTone.fg,
                fontSize: 12,
                lineHeight: '16px',
                fontWeight: 500,
                flex: '0 0 auto',
              }}
            >
              {tag.label}
            </span>
          )}
        </div>
        {description && (
          <div
            style={{
              fontSize: 14,
              lineHeight: '20px',
              letterSpacing: 0.15,
              color: 'var(--content-secondary)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              opacity: isCompleted ? 0.6 : 1,
            }}
          >
            {description}
          </div>
        )}
      </div>

      {/* Right slot — IconButton or custom action, or completed check */}
      <div style={{ flex: '0 0 auto' }}>
        {isCompleted ? (
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 9999,
              background: 'var(--status-success-container)',
              color: 'var(--status-success-on-container)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CheckIcon />
          </div>
        ) : action ? (
          action
        ) : (
          <IconButton
            theme={actionTheme}
            variant="primary"
            size="M"
            aria-label="Add"
            onClick={onAction}
            icon={<PlusIcon size={20} />}
          />
        )}
      </div>
    </div>
  );
}
