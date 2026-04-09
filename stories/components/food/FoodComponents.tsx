import React from 'react';

/* Tokens (WeightEasy) */
const INK = '#050914';
const INK2 = '#1f2937';
const MUTED = '#6b7280';
const BG = '#eff6ff';
const CARD = '#ffffff';
const BORDER = 'rgba(15,23,42,0.08)';
const BLUE = '#2563eb';
const BLUE_SOFT = '#e0ecff';
const PURPLE = '#8b5cf6';
const PURPLE_SOFT = '#efe7ff';
const GREEN = '#15803d';
const GREEN_SOFT = '#dcfce7';
const RED = '#ef4444';
const DARK = '#050914';
const NAVY_GRAD = 'linear-gradient(180deg,#0b1220 0%,#12213a 100%)';

const shell: React.CSSProperties = {
  width: 360,
  fontFamily: "'Noto Sans',-apple-system,sans-serif",
  color: INK,
};

/* ------------ shared tiny icons ------------ */
const Mic = ({ c = BLUE, s = 22 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <rect x="9" y="3" width="6" height="12" rx="3" fill={c} />
    <path d="M5 11a7 7 0 0 0 14 0" stroke={c} strokeWidth="2" strokeLinecap="round" />
    <path d="M12 18v3" stroke={c} strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const Pencil = ({ c = BLUE, s = 22 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <path d="M4 20h4L20 8l-4-4L4 16v4Z" fill={c} />
  </svg>
);
const Camera = ({ c = PURPLE, s = 26 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="6" width="18" height="13" rx="3" fill={c} />
    <circle cx="12" cy="12.5" r="3.5" fill="#fff" />
    <rect x="9" y="4" width="6" height="3" rx="1" fill={c} />
  </svg>
);
const Chevron = ({ dir = 'down', c = INK }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    style={{ transform: dir === 'up' ? 'rotate(180deg)' : 'none' }}>
    <path d="M6 9l6 6 6-6" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ArrowLeft = ({ c = '#fff' }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M19 12H5M12 19l-7-7 7-7" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ArrowRight = ({ c = '#fff' }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M12 5l7 7-7 7" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Check = ({ c = INK, s = 18 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <path d="M5 12l5 5L20 7" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Plus = ({ c = INK2 }: { c?: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M12 5v14M5 12h14" stroke={c} strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);
const Heart = ({ c = INK, s = 18 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M12 21s-8-5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-8 11-8 11h-2Z" />
  </svg>
);
const Clock = ({ c = INK, s = 18 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="2" />
    <path d="M12 7v5l3 2" stroke={c} strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const ThumbUp = ({ c = '#fff', s = 18 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M7 22h2V10H7v12Zm14-12.6c0-.9-.7-1.6-1.6-1.6H14l.8-3.6.02-.27a1.2 1.2 0 0 0-.36-.85L13.6 2 7.6 8A2 2 0 0 0 7 9.4V19.4a1.6 1.6 0 0 0 1.6 1.6h7.2c.66 0 1.24-.4 1.48-1l2.6-6.08c.08-.2.12-.4.12-.62V9.4Z" />
  </svg>
);
const ThumbDown = ({ c = '#fff', s = 18 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c} style={{ transform: 'rotate(180deg)' }}>
    <path d="M7 22h2V10H7v12Zm14-12.6c0-.9-.7-1.6-1.6-1.6H14l.8-3.6.02-.27a1.2 1.2 0 0 0-.36-.85L13.6 2 7.6 8A2 2 0 0 0 7 9.4V19.4a1.6 1.6 0 0 0 1.6 1.6h7.2c.66 0 1.24-.4 1.48-1l2.6-6.08c.08-.2.12-.4.12-.62V9.4Z" />
  </svg>
);
const Warning = ({ c = '#f59e0b', s = 16 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <path d="M12 3l10 18H2L12 3Z" fill={c} />
    <path d="M12 10v5M12 17.5v.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/* === StatusBar === */
const StatusBar = ({ dark = false }: { dark?: boolean }) => (
  <div style={{
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '10px 20px 6px', color: dark ? '#fff' : INK, fontSize: 13, fontWeight: 500,
  }}>
    <span>9:30</span>
    <span style={{ display: 'flex', gap: 4, alignItems: 'center', fontSize: 11 }}>
      <span>▲ ▸ ▮</span>
    </span>
  </div>
);

/* ============================================================
   LOG FOOD / SEARCH FLOW
   ============================================================ */

/** Dark navy header with back arrow, title, meal chip dropdown */
export const LogMealHeader = ({
  title = 'Log meal', meal = 'Evening Snack',
}: { title?: string; meal?: string }) => (
  <div style={{
    background: NAVY_GRAD, color: '#fff', padding: '0 0 22px',
    borderRadius: '0 0 0 0',
  }}>
    <StatusBar dark />
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <ArrowLeft />
        <span style={{ fontSize: 18, fontWeight: 600 }}>{title}</span>
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '8px 14px', borderRadius: 999,
        background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)',
        fontSize: 13, fontWeight: 500,
      }}>
        {meal} <Chevron c="#fff" />
      </div>
    </div>
    <div style={{ padding: '18px 20px 0', fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>
      How do you want to log<br />your meal?
    </div>
  </div>
);

/** Two big white method cards (type/speak + photo) */
export const LogMethodCards = () => (
  <div style={{ display: 'flex', gap: 14, padding: '18px 16px 0', background: NAVY_GRAD }}>
    <MethodCard
      icons={<><IconBubble bg={BLUE_SOFT}><Mic /></IconBubble><IconBubble bg={BLUE_SOFT}><Pencil /></IconBubble></>}
      label={"Type or speak\nyour meal"}
    />
    <MethodCard
      icons={<IconBubble bg={PURPLE_SOFT}><Camera /></IconBubble>}
      label={"Snap or\nupload a photo"}
    />
  </div>
);
const MethodCard = ({ icons, label }: { icons: React.ReactNode; label: string }) => (
  <div style={{
    flex: 1, background: CARD, borderRadius: 22, padding: '22px 16px 20px',
    minHeight: 190, display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ display: 'flex', gap: 6, marginBottom: 28 }}>{icons}</div>
    <div style={{ fontSize: 16, fontWeight: 700, color: INK, marginTop: 'auto', whiteSpace: 'pre-line' }}>
      {label}
    </div>
  </div>
);
const IconBubble = ({ bg, children }: { bg: string; children: React.ReactNode }) => (
  <div style={{
    width: 44, height: 44, borderRadius: 999, background: bg,
    display: 'grid', placeItems: 'center',
  }}>{children}</div>
);

/** Favourites / Recently logged collapsed rows */
export const FavoritesCollapsedList = () => (
  <div style={{
    margin: '16px', background: CARD, borderRadius: 18,
    border: `1px solid ${BORDER}`, overflow: 'hidden',
  }}>
    <CollapseRow icon={<Heart c={INK} />} label="Favourites (3)" thumbs={['🥣', '🍲']} />
    <div style={{ height: 1, background: BORDER }} />
    <CollapseRow icon={<Clock />} label="Recently logged (7)" thumbs={['🥗', '🍛']} plus="+4" />
  </div>
);
const CollapseRow = ({ icon, label, thumbs, plus }: { icon: React.ReactNode; label: string; thumbs: string[]; plus?: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', padding: '14px 16px', gap: 12 }}>
    {icon}
    <div style={{ flex: 1, fontWeight: 600, color: INK }}>{label}</div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {thumbs.map((t, i) => (
        <div key={i} style={{
          width: 26, height: 26, borderRadius: 999, background: '#f1f5f9',
          border: '2px solid #fff', marginLeft: i ? -8 : 0, display: 'grid', placeItems: 'center',
          fontSize: 14,
        }}>{t}</div>
      ))}
      {plus && <div style={{
        width: 26, height: 26, borderRadius: 999, background: '#e5e7eb',
        border: '2px solid #fff', marginLeft: -8, display: 'grid', placeItems: 'center',
        fontSize: 10, fontWeight: 600, color: MUTED,
      }}>{plus}</div>}
    </div>
    <Chevron c={MUTED} />
  </div>
);

/** Favourites expanded with selectable food rows */
export const FavoritesExpandedList = () => (
  <div style={{
    margin: '16px', background: CARD, borderRadius: 18,
    border: `1px solid ${BORDER}`, overflow: 'hidden',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', padding: '14px 16px', gap: 12 }}>
      <Heart c={INK} />
      <div style={{ flex: 1, fontWeight: 600 }}>Favourites (3)</div>
      <Chevron dir="up" c={MUTED} />
    </div>
    <FoodRow emoji="🍞" label="Avocado toast" selected />
    <FoodRow emoji="🍳" label="Eggs" />
    <FoodRow emoji="🥕" label="Carrot" />
    <div style={{ height: 1, background: BORDER }} />
    <CollapseRow icon={<Clock />} label="Recently logged (7)" thumbs={['🥗', '🍛']} plus="+4" />
  </div>
);
const FoodRow = ({ emoji, label, selected }: { emoji: string; label: string; selected?: boolean }) => (
  <div style={{ display: 'flex', alignItems: 'center', padding: '12px 16px', gap: 12, borderTop: `1px solid ${BORDER}` }}>
    <div style={{
      width: 38, height: 38, borderRadius: 999, background: '#f1f5f9',
      display: 'grid', placeItems: 'center', fontSize: 20,
    }}>{emoji}</div>
    <div style={{ flex: 1, fontWeight: 500, color: INK }}>{label}</div>
    {selected ? <Check /> : (
      <div style={{
        width: 28, height: 28, borderRadius: 999, border: `1.5px solid ${BORDER}`,
        display: 'grid', placeItems: 'center',
      }}><Plus /></div>
    )}
  </div>
);

/**
 * Recommended Meals section — 1:1 Figma spec (node 9104:146110 "Meals").
 * Frame: 328w, padding 0, gap 16 between header and content.
 * Header: "Recommended Meals" 24/32 weight 700 color #050914.
 * Cards row: gap 16, center card 208×260, side cards 184×208, radius 24,
 * padding 24/16, gap 12, background #fdfdfd.
 * Image: circular. Center 136, sides 96.
 * NonVegMarker: 16×16 at top-right (green for veg, red for non-veg).
 * MealType: weight 500 color #d97706; 14/20 on active, 12/16 on siblings.
 * Items: weight 400 color #050914; 14/20 on active, 12/16 on siblings.
 * Pagination: 3 dots 8px, gap 8, padding 4/8, active #2563eb, inactive #dcdfe8.
 */
export const RecommendedMealCard = () => {
  const ORANGE = '#d97706';
  const GREEN = '#15803d';
  const RED = '#b91c1c';
  const DOT_ACTIVE = '#2563eb';
  const DOT_INACTIVE = '#dcdfe8';
  const CARD_BG = '#fdfdfd';

  const Marker = ({ nonVeg }: { nonVeg: boolean }) => (
    <div style={{
      position: 'absolute', top: 0, right: 0,
      width: 16, height: 16, borderRadius: 4,
      border: `1.5px solid ${nonVeg ? RED : GREEN}`,
      background: '#fff',
      display: 'grid', placeItems: 'center',
    }}>
      <div style={{
        width: 6, height: 6, borderRadius: nonVeg ? 1 : 999,
        background: nonVeg ? RED : GREEN,
      }} />
    </div>
  );

  const Card = ({
    active, image, mealType, items, nonVeg,
  }: {
    active?: boolean;
    image: { bg: string; emoji: string };
    mealType: string;
    items: string;
    nonVeg?: boolean;
  }) => {
    const W = active ? 208 : 184;
    const H = active ? 260 : 208;
    const IMG = active ? 136 : 96;
    const FS = active ? 14 : 12;
    const LH = active ? 20 : 16;
    return (
      <div style={{
        flex: '0 0 auto',
        width: W, height: H,
        background: CARD_BG, borderRadius: 24,
        padding: '24px 16px',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 12,
        boxShadow: active ? '0 8px 24px rgba(15,23,42,0.08)' : '0 4px 12px rgba(15,23,42,0.05)',
        boxSizing: 'border-box',
      }}>
        <div style={{ position: 'relative', width: IMG, height: IMG }}>
          <div style={{
            width: IMG, height: IMG, borderRadius: 9999,
            background: `radial-gradient(circle at 50% 48%, ${image.bg} 0%, #ffffff 78%)`,
            display: 'grid', placeItems: 'center',
            fontSize: Math.round(IMG * 0.7),
            lineHeight: 1,
          }}>{image.emoji}</div>
          <Marker nonVeg={!!nonVeg} />
        </div>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: 4, width: '100%',
        }}>
          <div style={{
            fontSize: FS, lineHeight: `${LH}px`, fontWeight: 500, color: ORANGE,
          }}>{mealType}</div>
          <div style={{
            fontSize: FS, lineHeight: `${LH}px`, fontWeight: 400, color: INK,
            textAlign: 'center',
          }}>{items}</div>
        </div>
      </div>
    );
  };

  return (
    <div style={{
      width: 360, padding: '0 16px', boxSizing: 'border-box',
      fontFamily: "'Noto Sans', -apple-system, system-ui, sans-serif",
      fontFeatureSettings: "'tnum'",
    }}>
      {/* Section header */}
      <div style={{
        height: 32, display: 'flex', alignItems: 'center',
        fontSize: 24, lineHeight: '32px', fontWeight: 700, color: '#050914',
      }}>
        Recommended Meals
      </div>
      {/* Content: meal cards + pagination, gap 16 from header */}
      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{
          display: 'flex', gap: 16, alignItems: 'flex-start',
          justifyContent: 'center',
          overflow: 'visible',
        }}>
          <Card
            image={{ bg: '#fff4d6', emoji: '🥣' }}
            mealType="Breakfast"
            items={'Overnight oats\nwith Yoghurt and\nChia seeds'}
            nonVeg={false}
          />
          <Card
            active
            image={{ bg: '#f1f5e9', emoji: '🥑' }}
            mealType="Lunch"
            items={'Eggs, Sourdough bread\nand Avocado'}
            nonVeg
          />
          <Card
            image={{ bg: '#fff1d6', emoji: '🍲' }}
            mealType="Dinner"
            items={'Butternut squash\nand lentil soup'}
            nonVeg={false}
          />
        </div>
        {/* Pagination dots */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: 8, padding: '4px 8px',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 9999, background: DOT_INACTIVE }} />
          <span style={{ width: 8, height: 8, borderRadius: 9999, background: DOT_ACTIVE }} />
          <span style={{ width: 8, height: 8, borderRadius: 9999, background: DOT_INACTIVE }} />
        </div>
      </div>
    </div>
  );
};

/** Type / speak input card (focused state) */
export const TypeInputCard = ({ title = 'What did you have for breakfast?' }: { title?: string }) => (
  <div style={{ background: NAVY_GRAD, padding: '0 0 30px', minHeight: 360, color: '#fff' }}>
    <StatusBar dark />
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 16px' }}>
      <ArrowLeft />
      <span style={{ fontSize: 17, fontWeight: 600 }}>Log Breakfast</span>
    </div>
    <div style={{ padding: '14px 20px 0', fontSize: 24, fontWeight: 700, lineHeight: 1.25 }}>{title}</div>
    <div style={{ padding: '18px 20px 0' }}>
      <div style={{
        background: 'rgba(255,255,255,0.04)', border: `1.5px solid ${BLUE}`,
        borderRadius: 18, padding: '16px 18px', minHeight: 130, color: 'rgba(255,255,255,0.45)',
      }}>Type what you ate...</div>
    </div>
    <div style={{ display: 'grid', placeItems: 'center', marginTop: 16 }}>
      <button style={{
        width: 72, height: 40, borderRadius: 999, background: '#fff',
        border: 'none', display: 'grid', placeItems: 'center',
      }}><Mic c={INK} s={20} /></button>
    </div>
  </div>
);

/** Photo captured + description input + CTA */
export const PhotoDescribedCard = ({
  desc = 'Eggs on a toast',
}: { desc?: string }) => (
  <div style={{ background: NAVY_GRAD, padding: '0 0 22px', color: '#fff' }}>
    <StatusBar dark />
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 16px 12px' }}>
      <ArrowLeft />
      <span style={{ fontSize: 17, fontWeight: 600 }}>Log Breakfast</span>
    </div>
    <div style={{
      margin: '0 20px', height: 260, borderRadius: 18, overflow: 'hidden',
      background: 'linear-gradient(135deg,#3d4434,#5a5038,#2a2a28)',
      display: 'grid', placeItems: 'center', fontSize: 72,
    }}>🍳</div>
    <div style={{ padding: '18px 20px 0' }}>
      <div style={{
        background: 'rgba(255,255,255,0.06)', border: `1px solid rgba(255,255,255,0.08)`,
        borderRadius: 18, padding: '14px 18px', minHeight: 70, color: '#fff',
      }}>{desc}</div>
    </div>
    <div style={{ padding: '16px 20px 0' }}>
      <button style={{
        width: '100%', height: 52, borderRadius: 999, border: 'none',
        background: '#fff', color: INK, fontSize: 15, fontWeight: 700,
      }}>Log breakfast</button>
    </div>
  </div>
);

/** Item logged footer (Done + View log) */
export const ItemLoggedFooter = () => (
  <div style={{
    display: 'flex', gap: 12, padding: '14px 16px', background: BG,
    borderTop: `1px solid ${BORDER}`,
  }}>
    <button style={{
      flex: '0 0 90px', height: 48, borderRadius: 999, background: '#fff',
      border: `1px solid ${BORDER}`, color: INK, fontWeight: 700, fontSize: 14,
    }}>Done</button>
    <button style={{
      flex: 1, height: 48, borderRadius: 999, background: DARK, border: 'none',
      color: '#fff', fontWeight: 700, fontSize: 14, display: 'flex',
      alignItems: 'center', justifyContent: 'center', gap: 8,
    }}>View log <ArrowRight /></button>
  </div>
);

/* ============================================================
   ONBOARDING
   ============================================================ */

export const FoodOnboardingIntro = () => (
  <div style={{ background: BG, minHeight: 700, padding: '0 0 24px' }}>
    <StatusBar />
    <Dots active={0} />
    <div style={{ padding: '24px 20px 0', textAlign: 'center' as const, fontSize: 24, fontWeight: 700, lineHeight: 1.25 }}>
      Snap, speak or type<br />your meals to log
    </div>
    <div style={{ position: 'relative', height: 360, margin: '22px 0 0' }}>
      <FloatChip x={30} y={60} bg={PURPLE_SOFT} icon={<Camera s={22} />} label={"Snap a\nphoto"} />
      <div style={{
        position: 'absolute', left: 110, top: 30, width: 170, height: 170, borderRadius: 22,
        background: 'linear-gradient(135deg,#3d4434,#2a2a28)', transform: 'rotate(-6deg)',
        display: 'grid', placeItems: 'center', fontSize: 54, boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
      }}>🍛</div>
      <div style={{
        position: 'absolute', left: 70, top: 200, background: '#fff', borderRadius: 18,
        padding: '14px 16px', width: 230, boxShadow: '0 6px 20px rgba(15,23,42,0.08)',
        color: MUTED, fontSize: 14,
      }}>
        Type what you ate...
        <div style={{ fontSize: 11, marginTop: 6, color: MUTED }}>Eg: I had a burger and fries at 8:30 pm</div>
      </div>
      <FloatChip x={220} y={170} bg={BLUE_SOFT} icon={<Pencil s={20} />} label="Type" />
      <div style={{
        position: 'absolute', left: 120, top: 290, width: 120, height: 44, borderRadius: 999,
        background: DARK, display: 'grid', placeItems: 'center',
      }}><Mic c="#fff" /></div>
      <FloatChip x={40} y={295} bg={GREEN_SOFT} icon={<Mic c={GREEN} s={20} />} label="Speak" />
    </div>
    <div style={{ padding: '0 20px' }}>
      <button style={{
        width: '100%', height: 54, borderRadius: 999, background: DARK, border: 'none',
        color: '#fff', fontWeight: 700, fontSize: 15,
      }}>Learn how to log</button>
    </div>
  </div>
);
const FloatChip = ({ x, y, bg, icon, label }: { x: number; y: number; bg: string; icon: React.ReactNode; label: string }) => (
  <div style={{
    position: 'absolute', left: x, top: y, background: bg, borderRadius: 14,
    padding: '10px 14px', boxShadow: '0 4px 14px rgba(15,23,42,0.08)',
    display: 'flex', flexDirection: 'column', gap: 4, minWidth: 90,
  }}>
    {icon}
    <div style={{ fontSize: 13, fontWeight: 700, color: INK, whiteSpace: 'pre-line' }}>{label}</div>
  </div>
);
const Dots = ({ active }: { active: number }) => (
  <div style={{ display: 'flex', gap: 6, justifyContent: 'center', padding: '10px 0 0' }}>
    {[0, 1, 2].map(i => (
      <div key={i} style={{
        width: i === active ? 10 : 8, height: i === active ? 10 : 8, borderRadius: 999,
        background: i === active ? BLUE : '#cbd5e1',
      }} />
    ))}
  </div>
);

export const FoodOnboardingPhoto = () => (
  <div style={{ background: BG, minHeight: 700, padding: '0 0 24px' }}>
    <StatusBar />
    <Dots active={1} />
    <div style={{ padding: '22px 20px 0', textAlign: 'center' as const, fontSize: 24, fontWeight: 700, lineHeight: 1.25 }}>
      Snap or upload a<br />photo to log
    </div>
    <div style={{ padding: '8px 20px 0', textAlign: 'center' as const, fontSize: 13, color: MUTED }}>
      AI recognizes all the food in your meal
    </div>
    <div style={{ position: 'relative', margin: '20px auto 0', width: 230, height: 360 }}>
      <div style={{
        width: 230, height: 360, borderRadius: 32, background: '#000',
        border: '6px solid #1f2937', padding: 8, boxSizing: 'border-box',
        display: 'grid', placeItems: 'center', fontSize: 92, overflow: 'hidden',
      }}>🥗</div>
      <div style={{
        position: 'absolute', left: -40, top: 40, background: '#fff', borderRadius: 14,
        padding: '10px 12px', width: 130, boxShadow: '0 6px 18px rgba(15,23,42,0.08)',
      }}>
        <div style={{ width: 20, height: 20, background: PURPLE_SOFT, borderRadius: 6, display: 'grid', placeItems: 'center', marginBottom: 6 }}>✨</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: INK, lineHeight: 1.2 }}>AI recognizes<br />your food</div>
      </div>
      <div style={{
        position: 'absolute', right: -30, bottom: 40, background: '#fff', borderRadius: 14,
        padding: '10px 12px', width: 130, boxShadow: '0 6px 18px rgba(15,23,42,0.08)',
      }}>
        <div style={{ fontSize: 18, marginBottom: 4 }}>⤴</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: INK, lineHeight: 1.2 }}>Upload from<br />gallery</div>
        <div style={{ display: 'flex', gap: 4, marginTop: 6 }}>
          {['🥝', '🍉', '🥑'].map((e, i) => (
            <div key={i} style={{
              width: 22, height: 22, borderRadius: 6, background: PURPLE_SOFT,
              display: 'grid', placeItems: 'center', fontSize: 12,
            }}>{e}</div>
          ))}
        </div>
      </div>
    </div>
    <div style={{ padding: '20px 20px 0' }}>
      <button style={{
        width: '100%', height: 54, borderRadius: 999, background: DARK, border: 'none',
        color: '#fff', fontWeight: 700, fontSize: 15,
      }}>That sounds easy</button>
    </div>
  </div>
);

/* ============================================================
   PLATE / DAILY LOG
   ============================================================ */

/** Today's meals horizontal carousel */
export const TodaysMealsCarousel = () => (
  <div style={{ padding: '4px 0 0' }}>
    <div style={{ padding: '0 16px 10px', fontSize: 20, fontWeight: 700 }}>Today's Meals</div>
    <div style={{
      display: 'flex', gap: 12, padding: '0 16px', overflow: 'hidden',
    }}>
      <MealCardSmall emoji="🥣" color="#22c55e" label="" small />
      <MealCardLarge />
      <MealCardSmall emoji="🍝" color="#f59e0b" label="Dinner" />
    </div>
    <div style={{ display: 'flex', gap: 4, justifyContent: 'center', padding: '10px 0 0' }}>
      <div style={{ width: 14, height: 6, borderRadius: 999, background: BLUE }} />
      <div style={{ width: 6, height: 6, borderRadius: 999, background: '#cbd5e1' }} />
      <div style={{ width: 6, height: 6, borderRadius: 999, background: '#cbd5e1' }} />
    </div>
  </div>
);
const MealCardLarge = () => (
  <div style={{
    flex: '0 0 auto', width: 220, background: CARD, borderRadius: 18, padding: 12,
    border: `1px solid ${BORDER}`, display: 'flex', gap: 10, alignItems: 'center',
  }}>
    <div style={{ flex: 1 }}>
      <div style={{ color: '#f59e0b', fontWeight: 700, fontSize: 13 }}>● Lunch</div>
      <div style={{ fontSize: 14, fontWeight: 600, marginTop: 4, lineHeight: 1.25 }}>Eggs, Sourdough bread and Avocado</div>
    </div>
    <div style={{
      width: 62, height: 62, borderRadius: 14, background: '#dcfce7',
      display: 'grid', placeItems: 'center', fontSize: 32,
    }}>🥗</div>
  </div>
);
const MealCardSmall = ({ emoji, color, label, small }: { emoji: string; color: string; label: string; small?: boolean }) => (
  <div style={{
    flex: '0 0 auto', width: small ? 64 : 170, background: CARD, borderRadius: 18, padding: 10,
    border: `1px solid ${BORDER}`, display: 'flex', flexDirection: 'column' as const, gap: 4,
  }}>
    {!small && <div style={{ color, fontWeight: 700, fontSize: 13 }}>● {label}</div>}
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: 46, height: 46, borderRadius: 12, background: '#fef3c7',
        display: 'grid', placeItems: 'center', fontSize: 24,
      }}>{emoji}</div>
      {!small && <div style={{ fontSize: 12, color: MUTED }}>Butter lentil s...</div>}
    </div>
  </div>
);

/** My diet plan card */
export const MyDietPlanCard = () => (
  <div style={{ padding: '16px 16px 0' }}>
    <div style={{
      background: CARD, borderRadius: 20, border: `1px solid ${BORDER}`,
      padding: 16, display: 'flex', gap: 12, alignItems: 'center',
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 16 }}>My diet plan</div>
        <div style={{ fontSize: 12, color: MUTED, marginTop: 4, lineHeight: 1.35 }}>
          Meals recommended by<br />your AI coach
        </div>
        <button style={{
          marginTop: 12, width: 40, height: 40, borderRadius: 999, background: DARK,
          border: 'none', display: 'grid', placeItems: 'center',
        }}><ArrowRight /></button>
      </div>
      <div style={{
        width: 86, height: 86, borderRadius: 14, background: '#fef3c7',
        display: 'grid', placeItems: 'center', fontSize: 44,
      }}>📒</div>
    </div>
  </div>
);

/** Diary calories ring summary */
export const DiaryCaloriesCard = () => (
  <div style={{ padding: '16px' }}>
    <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Diary</div>
    <div style={{
      background: CARD, borderRadius: 999, border: '2px solid transparent',
      backgroundImage: `linear-gradient(${CARD},${CARD}), linear-gradient(90deg,#67e8f9,#a78bfa)`,
      backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box',
      padding: '20px 22px', textAlign: 'center' as const,
    }}>
      <div style={{ fontSize: 12, color: MUTED }}>You had</div>
      <div style={{ fontSize: 24, fontWeight: 700 }}>1246 calories</div>
      <div style={{ fontSize: 12, color: MUTED }}>out of 1689 calories</div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 20px', padding: '16px 4px 0' }}>
      <MacroRow label="Carbs" val="15/167 gms" color="#60a5fa" pct={0.1} />
      <MacroRow label="Fat" val="289/260 gms" color={RED} pct={1} />
      <MacroRow label="Protein" val="23/267 gms" color="#3b82f6" pct={0.1} />
      <MacroRow label="Fiber" val="12/250 gms" color="#60a5fa" pct={0.05} />
    </div>
  </div>
);
const MacroRow = ({ label, val, color, pct }: { label: string; val: string; color: string; pct: number }) => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
      <span style={{ color: MUTED }}>{label}</span>
      <span style={{ color: INK, fontWeight: 500 }}>{val}</span>
    </div>
    <div style={{ height: 4, background: '#e5e7eb', borderRadius: 999, marginTop: 6, overflow: 'hidden' }}>
      <div style={{ width: `${Math.min(pct, 1) * 100}%`, height: '100%', background: color }} />
    </div>
  </div>
);

/** Breakfast section with logged items + feedback footer */
export const LoggedMealSection = () => (
  <div style={{ padding: '6px 16px 0' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0' }}>
      <span style={{ fontSize: 14, color: '#f59e0b' }}>✻</span>
      <div style={{ fontWeight: 700, flex: 1 }}>Breakfast</div>
      <div style={{ color: MUTED, fontSize: 18 }}>⋮</div>
    </div>
    <div style={{
      background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, overflow: 'hidden',
    }}>
      <div style={{ padding: '12px 14px', fontSize: 12, fontWeight: 500, color: MUTED }}>You logged</div>
      <LoggedItem emoji="🍚" name="Brown rice" meta="1 cup · 100 cal" />
      <LoggedItem emoji="🌶" name="Ranch" meta="1 cup · 100 cal" />
      <div style={{ borderTop: `1px solid ${BORDER}`, padding: '14px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 26, height: 26, borderRadius: 999, background: GREEN_SOFT, color: GREEN,
          display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700,
        }}>7</div>
        <div style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>Good meal, but can improve</div>
        <Chevron c={MUTED} />
      </div>
    </div>
  </div>
);
const LoggedItem = ({ emoji, name, meta }: { emoji: string; name: string; meta: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px' }}>
    <div style={{
      width: 38, height: 38, borderRadius: 999, background: '#fef3c7',
      display: 'grid', placeItems: 'center', fontSize: 18,
    }}>{emoji}</div>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 14, fontWeight: 600 }}>{name}</div>
      <div style={{ fontSize: 12, color: MUTED }}>{meta}</div>
    </div>
  </div>
);

/** Empty meal (e.g. Lunch, Dinner) with Log CTA */
export const EmptyMealSection = ({ meal = 'Lunch' }: { meal?: string }) => (
  <div style={{ padding: '12px 16px 0' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0' }}>
      <span style={{ fontSize: 14, color: '#f59e0b' }}>✻</span>
      <div style={{ fontWeight: 700, flex: 1 }}>{meal}</div>
      <div style={{ color: MUTED, fontSize: 18 }}>⋮</div>
    </div>
    <div style={{
      background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`,
      padding: '22px 16px 16px', textAlign: 'center' as const,
    }}>
      <div style={{ fontSize: 36 }}>🍽</div>
      <div style={{ fontSize: 13, color: MUTED, marginTop: 6 }}>Have a fulfilling {meal.toLowerCase()}</div>
      <button style={{
        marginTop: 12, width: '100%', height: 46, borderRadius: 999, background: DARK,
        border: 'none', color: '#fff', fontSize: 14, fontWeight: 700,
      }}>Log {meal}</button>
      <button style={{
        marginTop: 8, width: '100%', height: 40, background: 'transparent',
        border: 'none', color: INK, fontSize: 13, fontWeight: 600,
      }}>I didn't have {meal}</button>
    </div>
  </div>
);

/** Empty meal (single-line, no CTA) for morning snack etc */
export const EmptySnackRow = ({ meal = 'Morning Snack' }: { meal?: string }) => (
  <div style={{ padding: '12px 16px 0' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0' }}>
      <span style={{ fontSize: 14, color: '#f59e0b' }}>✻</span>
      <div style={{ fontWeight: 700, flex: 1 }}>{meal}</div>
      <div style={{ color: MUTED, fontSize: 18 }}>⋮</div>
    </div>
    <div style={{
      background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`,
      padding: '14px 16px', color: MUTED, fontSize: 13, textAlign: 'center' as const,
    }}>Get ready to have a nice lunch!</div>
  </div>
);

/* ============================================================
   INSIGHTS / FEEDBACK
   ============================================================ */

/** Circular meal score with emoji badge */
export const MealScoreCircle = ({ score = 8 }: { score?: number }) => {
  const r = 56, c = 2 * Math.PI * r;
  const pct = score / 10;
  return (
    <div style={{ display: 'grid', placeItems: 'center', padding: '8px 0' }}>
      <div style={{ fontSize: 12, color: GREEN, fontWeight: 600, marginBottom: 6 }}>Meal score</div>
      <div style={{ position: 'relative', width: 140, height: 140 }}>
        <svg width="140" height="140" viewBox="0 0 140 140">
          <circle cx="70" cy="70" r={r} stroke="#e5e7eb" strokeWidth="10" fill="#fff" />
          <circle cx="70" cy="70" r={r} stroke={GREEN} strokeWidth="10" fill="none"
            strokeDasharray={c} strokeDashoffset={c - c * pct} strokeLinecap="round"
            transform="rotate(-90 70 70)" />
        </svg>
        <div style={{
          position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
          fontSize: 42, fontWeight: 700, color: GREEN,
        }}>{score}</div>
        <div style={{
          position: 'absolute', right: 16, bottom: 16, width: 28, height: 28, borderRadius: 999,
          background: '#fef3c7', display: 'grid', placeItems: 'center', fontSize: 18,
          border: '2px solid #fff',
        }}>🙂</div>
      </div>
    </div>
  );
};

/** Coach says card with bullets */
export const CoachSaysCard = () => (
  <div style={{ padding: '4px 16px 0' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
      <div style={{
        width: 22, height: 22, borderRadius: 999,
        background: 'radial-gradient(circle at 30% 30%,#818cf8,#4338ca)',
      }} />
      <div style={{
        background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 999,
        padding: '4px 12px', fontSize: 12, fontWeight: 600,
      }}>Coach says</div>
    </div>
    <div style={{ fontSize: 22, fontWeight: 700, margin: '8px 0' }}>Good, but can improve</div>
    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
      <Bullet good text="Includes healthy complex carbs and fibre." />
      <Bullet good text="Keeps your blood sugar in check." />
      <Bullet text="High in saturated fats." />
    </div>
  </div>
);
const Bullet = ({ good, text }: { good?: boolean; text: string }) => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14 }}>
    {good ? <ThumbUp c={GREEN} /> : <ThumbDown c={RED} />}
    <div style={{ color: INK }}>{text}</div>
  </div>
);

/** Nutrition macros table with warning */
export const NutritionMacrosTable = () => (
  <div style={{ padding: '16px' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
      <div style={{ fontSize: 18, fontWeight: 700, flex: 1 }}>Nutrition</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#f59e0b', fontSize: 13, fontWeight: 600 }}>
        352 cal <Warning />
      </div>
    </div>
    <div style={{
      background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16,
      padding: '14px 4px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
    }}>
      <Macro name="Protein" val="25g" />
      <Macro name="Fat" val="17g" warn />
      <Macro name="Carbs" val="5g" />
      <Macro name="Fiber" val="10g" />
    </div>
    <ul style={{ marginTop: 12, paddingLeft: 18, fontSize: 13, color: INK2, lineHeight: 1.5 }}>
      <li>You are 15% over your calorie budget.</li>
      <li>High fat can cause inflammatory issues.</li>
    </ul>
  </div>
);
const Macro = ({ name, val, warn }: { name: string; val: string; warn?: boolean }) => (
  <div style={{ textAlign: 'center' as const, borderRight: `1px solid ${BORDER}`, padding: '4px 0' }}>
    <div style={{ fontSize: 12, color: MUTED }}>{name}</div>
    <div style={{ fontWeight: 700, fontSize: 15, marginTop: 4, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
      {val} {warn && <Warning />}
    </div>
  </div>
);

/** Meal breakdown card (good or bad with tips) */
export const MealBreakdownItem = ({
  emoji = '🥥', name = 'Coconut water', good = true, note = 'Keeps blood sugar in check.',
}: { emoji?: string; name?: string; good?: boolean; note?: string }) => (
  <div style={{
    background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`,
    padding: 14, margin: '10px 16px 0',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12, background: '#fef3c7',
        display: 'grid', placeItems: 'center', fontSize: 22,
      }}>{emoji}</div>
      <div style={{ flex: 1, fontWeight: 600 }}>{name}</div>
      <div style={{
        width: 36, height: 36, borderRadius: 999, background: good ? GREEN : RED,
        display: 'grid', placeItems: 'center',
      }}>{good ? <ThumbUp /> : <ThumbDown />}</div>
    </div>
    <div style={{ fontSize: 13, color: INK2, marginTop: 10 }}>• {note}</div>
  </div>
);

/** Bad item with tips (Make it healthy / Try this instead) */
export const MealBreakdownItemBad = () => (
  <div style={{
    background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`,
    padding: 14, margin: '10px 16px 0',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12, background: '#fed7aa',
        display: 'grid', placeItems: 'center', fontSize: 22,
      }}>🍳</div>
      <div style={{ flex: 1, fontWeight: 600 }}>Eggs</div>
      <div style={{
        width: 36, height: 36, borderRadius: 999, background: RED,
        display: 'grid', placeItems: 'center',
      }}><ThumbDown /></div>
    </div>
    <div style={{ fontSize: 13, color: INK2, marginTop: 10, display: 'flex', gap: 6 }}>📈 Increases blood sugar drastically.</div>
    <div style={{ borderTop: `1px dashed ${BORDER}`, marginTop: 12, paddingTop: 10 }}>
      <div style={{ color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: 0.5 }}>MAKE IT HEALTHY</div>
      <div style={{ fontSize: 13, marginTop: 6, display: 'flex', gap: 8 }}>🔎 Cook in a shallow skillet.</div>
      <div style={{ fontSize: 13, marginTop: 4, display: 'flex', gap: 8 }}>➕ Add a salad.</div>
    </div>
    <div style={{ borderTop: `1px dashed ${BORDER}`, marginTop: 12, paddingTop: 10 }}>
      <div style={{ color: BLUE, fontSize: 11, fontWeight: 700, letterSpacing: 0.5 }}>TRY THIS INSTEAD</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 999, background: BLUE_SOFT,
          display: 'grid', placeItems: 'center',
        }}>🍽</div>
        <div style={{ fontSize: 14, fontWeight: 600 }}>Avocado</div>
      </div>
      <div style={{ fontSize: 13, marginTop: 8, display: 'flex', gap: 8 }}>🥑 Uses olive oil which is healthier.</div>
    </div>
  </div>
);

/** Insights helpful prompt + Done footer */
export const InsightsHelpfulFooter = () => (
  <div style={{ padding: '16px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500, marginBottom: 10 }}>
      <span style={{ color: '#f59e0b' }}>✨</span> Were these insights helpful?
    </div>
    <div style={{ display: 'flex', gap: 10 }}>
      <button style={{
        flex: 1, height: 44, borderRadius: 999, background: '#fff',
        border: `1px solid ${BORDER}`, display: 'grid', placeItems: 'center',
      }}><ThumbUp c={INK} /></button>
      <button style={{
        flex: 1, height: 44, borderRadius: 999, background: '#fff',
        border: `1px solid ${BORDER}`, display: 'grid', placeItems: 'center',
      }}><ThumbDown c={INK} /></button>
    </div>
    <button style={{
      marginTop: 14, width: '100%', height: 52, borderRadius: 999, background: DARK,
      border: 'none', color: '#fff', fontSize: 15, fontWeight: 700,
    }}>Done</button>
  </div>
);

/* shell export */
export const Frame = ({ bg = BG, children }: { bg?: string; children: React.ReactNode }) => (
  <div style={{ ...shell, background: bg, minHeight: 800 }}>{children}</div>
);
