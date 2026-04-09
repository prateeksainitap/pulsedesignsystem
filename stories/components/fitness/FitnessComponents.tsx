import React from 'react';

const INK = '#050914';
const INK2 = '#1f2937';
const MUTED = '#6b7280';
const BG = '#eff6ff';
const CARD = '#ffffff';
const BORDER = 'rgba(15,23,42,0.08)';
const BLUE = '#2563eb';
const BLUE_SOFT = '#e0ecff';
const GREEN = '#15803d';
const GREEN_SOFT = '#dcfce7';
const DARK = '#050914';

const shell: React.CSSProperties = {
  width: 360, fontFamily: "'Noto Sans',-apple-system,sans-serif", color: INK,
};

const ArrowLeft = ({ c = INK }: { c?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M19 12H5M12 19l-7-7 7-7" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Search = ({ c = INK }: { c?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7" stroke={c} strokeWidth="2" />
    <path d="M20 20l-3.5-3.5" stroke={c} strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const Play = ({ c = '#fff', s = 18 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><path d="M8 5v14l11-7L8 5Z" /></svg>
);
const Dots = ({ c = MUTED }: { c?: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={c}>
    <circle cx="12" cy="5" r="1.8" /><circle cx="12" cy="12" r="1.8" /><circle cx="12" cy="19" r="1.8" />
  </svg>
);

/* ==================== Diary / Fitness home ==================== */

/** Teal header with date strip + Weight/Fitness/Food/Fitness tabs */
export const FitnessHeader = () => (
  <div style={{
    background: 'linear-gradient(175deg,#0a4a4a 0%,#0d5a4a 60%,#0f5d3a 100%)',
    color: '#fff', padding: '14px 0 0',
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px 4px', fontSize: 12 }}>
      <span>9:30</span><span>▲ ▸ ▮</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 20px 10px' }}>
      <div>
        <div style={{ fontSize: 16, fontWeight: 600 }}>Today ▾</div>
        <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>Cycle 2 · Day 6 of 7</div>
      </div>
      <div style={{
        width: 36, height: 36, borderRadius: 999, background: '#e0ecff', color: BLUE,
        display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700,
      }}>MK</div>
    </div>
    <div style={{ display: 'flex', gap: 4, padding: '0 12px', justifyContent: 'space-between' }}>
      {[
        ['Mon', 8], ['Tue', 9], ['Wed', 9], ['Thu', 10], ['Fri', 11], ['Sat', 12], ['Sun', 13],
      ].map(([d, n], i) => (
        <div key={i} style={{
          flex: 1, textAlign: 'center', padding: '6px 0',
          background: i === 3 ? '#fff' : 'transparent',
          borderRadius: 14, color: i === 3 ? INK : '#fff',
        }}>
          <div style={{ fontSize: 11, opacity: i === 3 ? 0.7 : 0.75 }}>{d}</div>
          <div style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>{n}</div>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', padding: '12px 10px 14px' }}>
      {['Weight', 'Side Effect', 'Food', 'Fitness'].map((l, i) => (
        <div key={l} style={{
          flex: 1, textAlign: 'center' as const, padding: '10px 0 8px', fontSize: 12, fontWeight: 600,
          color: '#fff', borderBottom: i === 3 ? '2px solid #fff' : '2px solid transparent', opacity: i === 3 ? 1 : 0.7,
        }}>
          <div style={{ fontSize: 18 }}>{['⚖', '😊', '🍽', '🏃'][i]}</div>
          {l}
        </div>
      ))}
    </div>
  </div>
);

/** Stats row: steps / cal burned / time */
export const FitnessStatsRow = () => (
  <div style={{
    margin: '14px 16px 0', background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`,
    padding: '14px 0', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
  }}>
    {[
      { icon: '👣', label: 'STEPS', val: '6723' },
      { icon: '🔥', label: 'CAL BURNED', val: '185' },
      { icon: '⏱', label: 'TIME', val: '12m' },
    ].map((s, i) => (
      <div key={i} style={{
        textAlign: 'center' as const,
        borderRight: i < 2 ? `1px solid ${BORDER}` : 'none',
      }}>
        <div style={{ fontSize: 18 }}>{s.icon}</div>
        <div style={{ fontSize: 10, fontWeight: 600, color: MUTED, marginTop: 4, letterSpacing: 0.5 }}>{s.label}</div>
        <div style={{ fontSize: 18, fontWeight: 700, marginTop: 2 }}>{s.val}</div>
      </div>
    ))}
  </div>
);

/** Workout day card */
export const WorkoutDayCard = () => (
  <div style={{ padding: '14px 16px 0' }}>
    <div style={{
      background: CARD, borderRadius: 18, border: `1px solid ${BORDER}`, padding: 16,
    }}>
      <div style={{ fontSize: 11, color: BLUE, fontWeight: 600 }}>Workout Day 4</div>
      <div style={{ fontSize: 17, fontWeight: 700, marginTop: 4 }}>It's a Workout Day</div>
      <div style={{ fontSize: 12, color: MUTED, marginTop: 4 }}>Strength Training · 35 min · Moderate</div>
      <div style={{ fontSize: 12, color: MUTED, marginTop: 2 }}>Days 4-5 are peak energy — ideal for resistance work</div>
      <button style={{
        marginTop: 12, width: '100%', height: 46, borderRadius: 999, background: BLUE,
        border: 'none', color: '#fff', fontWeight: 700, fontSize: 14,
      }}>Start Workout</button>
    </div>
  </div>
);

/** Feeling nausea? tri-emoji card */
export const NauseaCard = () => (
  <div style={{ padding: '14px 16px 0' }}>
    <div style={{
      background: CARD, borderRadius: 18, border: `1px solid ${BORDER}`, padding: 16,
    }}>
      <div style={{ fontSize: 11, color: BLUE, fontWeight: 600 }}>Nausea & common</div>
      <div style={{ fontSize: 15, fontWeight: 700, marginTop: 4, marginBottom: 14 }}>Feeling any nausea?</div>
      <div style={{ display: 'flex', gap: 10 }}>
        {[['🙂', 'Nope'], ['😐', 'A little'], ['😖', 'A lot']].map(([e, l], i) => (
          <div key={i} style={{
            flex: 1, borderRadius: 14, border: `1px solid ${BORDER}`, padding: '14px 0',
            textAlign: 'center' as const,
          }}>
            <div style={{ fontSize: 26 }}>{e}</div>
            <div style={{ fontSize: 12, fontWeight: 600, marginTop: 4 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/** Full Body Resistance dark workout card */
export const FullBodyResistanceCard = () => (
  <div style={{ padding: '14px 16px 0' }}>
    <div style={{
      borderRadius: 18, overflow: 'hidden', position: 'relative',
      background: 'linear-gradient(180deg,#2d4a2a,#1a2e18)',
      minHeight: 200, padding: 16, color: '#fff',
    }}>
      <div style={{
        display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#fff',
        padding: '4px 10px', borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: 0.6,
      }}>MUSCLE PRESERVE FOCUS</div>
      <div style={{ fontSize: 22, fontWeight: 800, marginTop: 60 }}>Full Body Resistance</div>
      <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4, lineHeight: 1.4 }}>
        Why this workout: utilizes your Day 4 energy peak to strengthen muscle fibers, counteracting GLP-1 related muscle loss.
      </div>
      <button style={{
        marginTop: 14, width: '100%', height: 44, borderRadius: 999, background: BLUE,
        border: 'none', color: '#fff', fontWeight: 700, fontSize: 14,
      }}>Start workout</button>
    </div>
  </div>
);

/** How are you feeling today card */
export const FeelingTodayCard = () => (
  <div style={{ padding: '14px 16px 0' }}>
    <div style={{
      background: CARD, borderRadius: 18, border: `1px solid ${BORDER}`, padding: 16,
    }}>
      <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>How are you feeling today?</div>
      <div style={{ display: 'flex', gap: 10 }}>
        {[['😊', "I'm okay"], ['😞', 'Not feeling good']].map(([e, l], i) => (
          <div key={i} style={{
            flex: 1, borderRadius: 14, border: `1px solid ${BORDER}`, padding: '12px 0',
            textAlign: 'center' as const,
          }}>
            <div style={{ fontSize: 22 }}>{e}</div>
            <div style={{ fontSize: 11, fontWeight: 600, marginTop: 4 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/** Did Something Else? + Log activity CTA */
export const DidSomethingElseCard = () => (
  <div style={{ padding: '14px 16px 0' }}>
    <div style={{
      background: CARD, borderRadius: 18, border: `1px solid ${BORDER}`, padding: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 38, height: 38, borderRadius: 12, background: BLUE_SOFT, color: BLUE,
          display: 'grid', placeItems: 'center', fontSize: 20,
        }}>✨</div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700 }}>Did Something Else?</div>
          <div style={{ fontSize: 12, color: MUTED, marginTop: 2 }}>Log any other activity here</div>
        </div>
      </div>
      <button style={{
        marginTop: 12, width: '100%', height: 44, borderRadius: 999, background: DARK,
        border: 'none', color: '#fff', fontSize: 13, fontWeight: 700,
      }}>＋ Log activity</button>
    </div>
  </div>
);

/** Streak row with week letters */
export const StreakRow = () => (
  <div style={{ padding: '16px 16px 0' }}>
    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>Streak</div>
    <div style={{ display: 'flex', gap: 8, justifyContent: 'space-between' }}>
      {[
        ['M', true], ['T', true], ['W', true], ['T', false],
        ['F', false], ['S', false], ['S', false],
      ].map(([l, done], i) => (
        <div key={i} style={{ textAlign: 'center', flex: 1 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 999, margin: '0 auto',
            background: done ? GREEN : '#f1f5f9',
            color: done ? '#fff' : MUTED,
            display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 14,
          }}>{done ? '✓' : ''}</div>
          <div style={{ fontSize: 11, color: MUTED, marginTop: 4 }}>{l}</div>
        </div>
      ))}
    </div>
  </div>
);

/** Explore exercises tabs + search */
export const ExploreExercisesFilter = () => (
  <div style={{ padding: '16px 16px 0' }}>
    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>Explore exercises</div>
    <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
      {[['All', true], ['Cardio'], ['Strength'], ['Yoga']].map(([l, a], i) => (
        <div key={i} style={{
          padding: '8px 16px', borderRadius: 999, fontSize: 12, fontWeight: 600,
          background: a ? DARK : '#fff', color: a ? '#fff' : INK,
          border: a ? 'none' : `1px solid ${BORDER}`,
        }}>{l as string}</div>
      ))}
    </div>
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8, background: '#fff',
      border: `1px solid ${BORDER}`, borderRadius: 14, padding: '10px 14px', color: MUTED, fontSize: 13,
    }}>
      <Search c={MUTED} /> Search exercise
    </div>
  </div>
);

/** Exercise card (thumbnail + title + guided badge) */
export const ExerciseCard = ({
  title = 'Cardio & Conditioning', dur = '15 min watch',
}: { title?: string; dur?: string }) => (
  <div style={{ padding: '14px 16px 0' }}>
    <div style={{ fontSize: 11, fontWeight: 700, color: MUTED, letterSpacing: 0.4, marginBottom: 8 }}>Strength Training</div>
    <div style={{
      background: CARD, borderRadius: 18, border: `1px solid ${BORDER}`, overflow: 'hidden',
      display: 'flex', gap: 12, padding: 10, alignItems: 'center',
    }}>
      <div style={{
        position: 'relative', width: 130, height: 86, borderRadius: 12,
        background: 'linear-gradient(135deg,#4a5d4a,#2a3a2a)', overflow: 'hidden',
        display: 'grid', placeItems: 'center', fontSize: 36,
      }}>
        🧘
        <div style={{
          position: 'absolute', left: 8, top: 8, background: GREEN, color: '#fff',
          padding: '2px 8px', borderRadius: 6, fontSize: 9, fontWeight: 700, letterSpacing: 0.4,
        }}>GUIDED</div>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.25 }}>{title}</div>
        <div style={{ fontSize: 11, color: MUTED, marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
          ⏱ {dur}
        </div>
      </div>
    </div>
  </div>
);

/* ==================== More details (Full body energizer) ==================== */

export const WorkoutDetailsHeader = () => (
  <div style={{ background: '#cbd5e1', height: 260, position: 'relative' as const }}>
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(135deg,#b5c5d0,#9aaab5)',
      display: 'grid', placeItems: 'center', fontSize: 100,
    }}>🤸</div>
    <div style={{
      position: 'absolute', top: 12, left: 0, right: 0, display: 'flex',
      justifyContent: 'space-between', padding: '0 16px',
    }}>
      <div style={{ background: 'rgba(255,255,255,0.8)', borderRadius: 999, padding: 8 }}><ArrowLeft /></div>
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ background: 'rgba(255,255,255,0.8)', borderRadius: 999, padding: 8 }}><Search /></div>
        <div style={{ background: 'rgba(255,255,255,0.8)', borderRadius: 999, padding: 8 }}><Search /></div>
      </div>
    </div>
  </div>
);

export const WorkoutDetailsMeta = () => (
  <div style={{ padding: '18px 20px 6px' }}>
    <div style={{ fontSize: 24, fontWeight: 800 }}>Full body energizer</div>
    <div style={{ display: 'flex', gap: 16, marginTop: 10, color: INK2, fontSize: 13, fontWeight: 600 }}>
      <span>⏱ 20 min</span>
      <span style={{ color: BLUE }}>🔥 150 kcal</span>
      <span style={{ color: BLUE }}>💪 Strength</span>
    </div>
  </div>
);

export const BeforeYouStart = () => (
  <div style={{ padding: '16px 20px 0' }}>
    <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Before you start</div>
    <ul style={{ paddingLeft: 18, fontSize: 13, color: INK2, lineHeight: 1.55, margin: 0 }}>
      <li>Do not overexert.</li>
      <li>Do not exercise if blood sugar is below 100 mg/dL or above 250 mg/dL.</li>
      <li>Keep sugar candy or juice handy.</li>
      <li>Stay hydrated.</li>
      <li>Stop immediately if you feel dizzy, shaky or unwell.</li>
    </ul>
  </div>
);

export const DifficultySelector = () => (
  <div style={{ padding: '16px 20px 0' }}>
    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>Difficulty</div>
    <div style={{ display: 'flex', gap: 10, position: 'relative' as const }}>
      <Pill label="Easy" active />
      <div style={{ position: 'relative' as const }}>
        <Pill label="Moderate" />
        <div style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 'calc(100% + 6px)',
          background: DARK, color: '#fff', fontSize: 10, fontWeight: 600,
          padding: '4px 10px', borderRadius: 6, whiteSpace: 'nowrap' as const,
        }}>Recommended</div>
      </div>
      <Pill label="Challenging" />
    </div>
  </div>
);
const Pill = ({ label, active }: { label: string; active?: boolean }) => (
  <div style={{
    padding: '10px 20px', borderRadius: 999, fontSize: 13, fontWeight: 700,
    background: active ? DARK : '#fff', color: active ? '#fff' : INK,
    border: active ? 'none' : `1px solid ${BORDER}`,
  }}>{label}</div>
);

/** Exercise list row (used for Warmup / Core / Cool Down lists) */
export const ExerciseListRow = ({
  emoji = '🧘', name = 'Arm Circles', dur = '30 sec',
}: { emoji?: string; name?: string; dur?: string }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
    background: CARD, borderBottom: `1px solid ${BORDER}`,
  }}>
    <div style={{
      width: 46, height: 46, borderRadius: 10,
      background: 'linear-gradient(135deg,#e0ecff,#c7d8f0)',
      display: 'grid', placeItems: 'center', fontSize: 20,
    }}>{emoji}</div>
    <Dots />
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 14, fontWeight: 600 }}>{name}</div>
      <div style={{ fontSize: 11, color: MUTED, marginTop: 2 }}>{dur}</div>
    </div>
    <div style={{
      width: 38, height: 38, borderRadius: 999, background: BLUE,
      display: 'grid', placeItems: 'center',
    }}><Play /></div>
  </div>
);

/** Full exercise list group (Warmup) */
export const ExerciseListGroup = ({ title = 'Warmup' }: { title?: string }) => (
  <div style={{ padding: '16px 0 0' }}>
    <div style={{ fontSize: 16, fontWeight: 700, padding: '0 20px 8px' }}>{title}</div>
    <div style={{ borderTop: `1px solid ${BORDER}` }}>
      <ExerciseListRow name="Arm Circles" dur="30 sec" emoji="💪" />
      <ExerciseListRow name="High Knees" dur="30 sec" emoji="🏃" />
      <ExerciseListRow name="Hip Circles" dur="30 sec" emoji="🧘" />
      <ExerciseListRow name="Jumping Jacks" dur="30 sec" emoji="🤸" />
    </div>
  </div>
);

export const StartWorkoutCTA = () => (
  <div style={{ padding: '16px' }}>
    <button style={{
      width: '100%', height: 54, borderRadius: 999, background: BLUE, border: 'none',
      color: '#fff', fontWeight: 700, fontSize: 15,
    }}>Start workout</button>
  </div>
);

/* ==================== Starting soon (Mountain Pose) ==================== */

export const ExerciseStartingSoon = () => (
  <div style={{ background: BG, minHeight: 800 }}>
    <div style={{
      height: 360, position: 'relative' as const,
      background: 'radial-gradient(circle at 50% 35%,#e5e7eb 0%,#d1d5db 60%,#94a3b8 100%)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 16px' }}>
        <span style={{ fontSize: 12 }}>9:30</span><span style={{ fontSize: 12 }}>▲ ▸ ▮</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 16px' }}>
        <ArrowLeft />
        <div style={{ display: 'flex', gap: 10 }}><Search /><Search /></div>
      </div>
      <div style={{ textAlign: 'center' as const, fontSize: 140, marginTop: 30 }}>🧍</div>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 32,
        background: 'linear-gradient(180deg,transparent,#94a3b8)',
      }} />
    </div>
    <div style={{
      background: BG, borderRadius: '22px 22px 0 0', marginTop: -22, padding: '18px 20px 0',
    }}>
      <div style={{ width: 40, height: 4, background: '#cbd5e1', borderRadius: 999, margin: '0 auto 14px' }} />
      <div style={{ fontSize: 24, fontWeight: 800 }}>Mountain Pose</div>
      <div style={{ fontSize: 15, fontWeight: 700, marginTop: 14, marginBottom: 8 }}>Instructions</div>
      {[
        'Start in high plank, hands below shoulders.',
        'Keep arms straight.',
        'Keep head, shoulders, hips and knees aligned.',
        'Bring knee to touch opposite elbow.',
        'Alternate sides.',
      ].map((t, i) => (
        <div key={i} style={{ display: 'flex', gap: 12, padding: '6px 0', fontSize: 13, color: INK2 }}>
          <div style={{
            width: 22, height: 22, borderRadius: 999, background: DARK, color: '#fff',
            display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700, flex: '0 0 22px',
          }}>{i + 1}</div>
          <div style={{ flex: 1, lineHeight: 1.5 }}>{t}</div>
        </div>
      ))}
      <button style={{
        marginTop: 20, width: '100%', height: 54, borderRadius: 999, background: BLUE,
        border: 'none', color: '#fff', fontWeight: 700, fontSize: 15,
      }}>Starting in 3</button>
    </div>
  </div>
);

/* ==================== Workout Complete / Log Activity ==================== */

export const WorkoutCompleteHero = () => (
  <div style={{
    background: 'linear-gradient(180deg,#b8a888,#8a7a5e 50%,#2a2a2e 100%)',
    color: '#fff', padding: '40px 16px 24px', textAlign: 'center' as const, position: 'relative' as const,
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18 }}>
      <ArrowLeft c="#fff" />
      <div style={{ display: 'flex', gap: 10 }}><Search c="#fff" /><Search c="#fff" /></div>
    </div>
    <div style={{ fontSize: 70 }}>🏆</div>
    <div style={{ fontSize: 24, fontWeight: 800, marginTop: 6 }}>Workout Complete!</div>
    <div style={{ fontSize: 13, opacity: 0.95, marginTop: 4, lineHeight: 1.4 }}>
      Great job, Prateek! You're taking control of<br />your health.
    </div>
  </div>
);

export const WorkoutStatsCard = () => (
  <div style={{ padding: '16px', background: BG }}>
    <div style={{
      background: CARD, borderRadius: 18, border: `1px solid ${BORDER}`,
      padding: 18, display: 'grid', gridTemplateColumns: '1fr 1fr',
    }}>
      <div style={{ textAlign: 'center' as const, borderRight: `1px solid ${BORDER}`, padding: '0 8px' }}>
        <div style={{ fontSize: 22 }}>📅</div>
        <div style={{ fontSize: 11, color: MUTED, fontWeight: 600, letterSpacing: 0.5, marginTop: 6 }}>TIME</div>
        <div style={{ fontSize: 20, fontWeight: 800, marginTop: 4 }}>15 mins</div>
      </div>
      <div style={{ textAlign: 'center' as const, padding: '0 8px' }}>
        <div style={{ fontSize: 22, color: '#f59e0b' }}>⚡</div>
        <div style={{ fontSize: 11, color: MUTED, fontWeight: 600, letterSpacing: 0.5, marginTop: 6 }}>CALORIES BURNED</div>
        <div style={{ fontSize: 20, fontWeight: 800, marginTop: 4 }}>130</div>
      </div>
    </div>
  </div>
);

/** Intensity pick (Too easy / Just right / Too hard) */
export const IntensityPicker = () => (
  <div style={{ padding: '6px 16px 0', background: BG }}>
    <div style={{ textAlign: 'center' as const, fontSize: 14, fontWeight: 600, padding: '14px 0 12px' }}>
      How was the intensity?
    </div>
    <div style={{ display: 'flex', gap: 10 }}>
      {[['😩', 'Too Easy'], ['👍', 'Just Right'], ['🥵', 'Too Hard']].map(([e, l], i) => (
        <div key={i} style={{
          flex: 1, background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`,
          padding: '14px 0', textAlign: 'center' as const,
        }}>
          <div style={{ fontSize: 28 }}>{e}</div>
          <div style={{ fontSize: 12, fontWeight: 700, marginTop: 6 }}>{l}</div>
        </div>
      ))}
    </div>
  </div>
);

export const LogActivityFooter = () => (
  <div style={{ padding: '18px 16px 16px', background: BG }}>
    <button style={{
      width: '100%', height: 54, borderRadius: 999, background: BLUE,
      border: 'none', color: '#fff', fontWeight: 700, fontSize: 15,
    }}>Done</button>
    <button style={{
      marginTop: 10, width: '100%', height: 40, background: 'transparent', border: 'none',
      color: BLUE, fontWeight: 700, fontSize: 14,
    }}>→ Edit duration</button>
  </div>
);

/** Edit workout duration sheet (iOS-style wheel pickers) */
export const EditDurationSheet = () => (
  <div style={{
    background: BG, borderRadius: '22px 22px 0 0', padding: '14px 20px 20px',
    boxShadow: '0 -10px 30px rgba(15,23,42,0.15)',
  }}>
    <div style={{ width: 44, height: 4, background: '#cbd5e1', borderRadius: 999, margin: '0 auto 14px' }} />
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ fontSize: 16, fontWeight: 700, flex: 1 }}>Edit workout duration</div>
      <div style={{ display: 'flex', gap: 10 }}><Search /><Search /></div>
    </div>
    <div style={{ display: 'flex', gap: 10, padding: '18px 0 10px' }}>
      <Wheel values={['10', '25', '0', '1', '2']} unit="hrs" selectedIdx={2} />
      <Wheel values={['10', '25', '30', '1.7', '2.0']} unit="mins" selectedIdx={2} />
    </div>
    <button style={{
      marginTop: 20, width: '100%', height: 54, borderRadius: 999, background: BLUE,
      border: 'none', color: '#fff', fontWeight: 700, fontSize: 15,
    }}>Save</button>
  </div>
);
const Wheel = ({ values, unit, selectedIdx }: { values: string[]; unit: string; selectedIdx: number }) => (
  <div style={{ flex: 1, position: 'relative' as const, height: 220 }}>
    {values.map((v, i) => {
      const isSel = i === selectedIdx;
      return (
        <div key={i} style={{
          position: 'absolute', left: 0, right: 0,
          top: (i - selectedIdx) * 44 + 88,
          textAlign: 'center' as const,
          background: isSel ? CARD : 'transparent',
          borderRadius: isSel ? 16 : 0,
          padding: '10px 0',
          border: isSel ? `1px solid ${BORDER}` : 'none',
          opacity: isSel ? 1 : 0.4,
        }}>
          <span style={{ fontSize: isSel ? 28 : 22, fontWeight: 800, color: INK }}>{v}</span>
          {isSel && <span style={{ fontSize: 14, fontWeight: 700, marginLeft: 4, color: INK }}>{unit}</span>}
        </div>
      );
    })}
  </div>
);

export const Frame = ({ bg = BG, children }: { bg?: string; children: React.ReactNode }) => (
  <div style={{ ...shell, background: bg, minHeight: 800 }}>{children}</div>
);
