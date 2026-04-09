import React from 'react';

/**
 * Reco Meal — WeightEasy Figma "Reco Meal" COMPONENT_SET (9359:144015).
 * Variants (isSelected × Size): Large Selected 208×244, Large Unselected 184×192,
 * Small Selected 228×116, Small Unselected 228×84.
 *
 * Renders: circular meal image + NonVegMarker (top-right of image) + content
 * (MealType in orange #d97706 + Items in navy #18203a).
 * Surface: white, radius 24, padding 16, gap 12.
 * Large = vertical (image on top), Small = horizontal (image on right).
 */

const FONT = "var(--font-family, 'Noto Sans', -apple-system, sans-serif)";
const ORANGE = '#d97706';
const NAVY = 'var(--content-primary, #18203a)';
const GREEN_NONVEG = '#15803d';

export type RecoMealSize = 'Large' | 'Small';

export interface RecoMealProps {
  size?: RecoMealSize;
  isSelected?: boolean;
  imageUrl?: string;
  mealType?: string;
  items?: string;
  nonVeg?: boolean;
  nonVegLabel?: string;
}

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop&crop=center';

function NonVegMarker({ compact = false }: { compact?: boolean }) {
  const box = compact ? 12 : 16;
  return (
    <div
      style={{
        width: box,
        height: box,
        borderRadius: 4,
        background: '#fdfdfd',
        border: `1px solid ${GREEN_NONVEG}`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ width: box - 6, height: box - 6, borderRadius: 9999, background: GREEN_NONVEG }} />
    </div>
  );
}

export function RecoMeal({
  size = 'Large',
  isSelected = false,
  imageUrl = DEFAULT_IMAGE,
  mealType = 'Lunch',
  items = 'Chapati, Dal, Carrot peas sabzi and Raita',
  nonVeg = true,
}: RecoMealProps) {
  let cardW = 184;
  let cardH = 192;
  let imgSize = 96;
  let fs = 12;

  if (size === 'Large' && isSelected) {
    cardW = 208;
    cardH = 244;
    imgSize = 136;
    fs = 14;
  } else if (size === 'Small' && isSelected) {
    cardW = 228;
    cardH = 116;
    imgSize = 72;
    fs = 14;
  } else if (size === 'Small' && !isSelected) {
    cardW = 228;
    cardH = 84;
    imgSize = 48;
    fs = 12;
  }

  const isHorizontal = size === 'Small';

  const image = (
    <div style={{ position: 'relative', width: imgSize, height: imgSize, flexShrink: 0 }}>
      <img
        src={imageUrl}
        alt={items}
        style={{
          width: imgSize,
          height: imgSize,
          borderRadius: 9999,
          objectFit: 'cover',
          display: 'block',
        }}
      />
      {nonVeg && (
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          <NonVegMarker compact={isHorizontal} />
        </div>
      )}
    </div>
  );

  const content = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        flex: isHorizontal ? 1 : undefined,
        minWidth: 0,
      }}
    >
      <div style={{ fontSize: fs, lineHeight: `${fs + 6}px`, fontWeight: 500, color: ORANGE }}>
        {mealType}
      </div>
      <div style={{ fontSize: fs, lineHeight: `${fs + 6}px`, fontWeight: 400, color: NAVY }}>
        {items}
      </div>
    </div>
  );

  return (
    <div
      style={{
        width: cardW,
        height: cardH,
        boxSizing: 'border-box',
        padding: 16,
        borderRadius: 24,
        background: '#fdfdfd',
        border: '1px solid var(--border-default, #dce1e8)',
        display: 'flex',
        flexDirection: isHorizontal ? 'row' : 'column',
        alignItems: isHorizontal ? 'center' : 'flex-start',
        gap: 12,
        fontFamily: FONT,
      }}
    >
      {isHorizontal ? (
        <>
          {content}
          {image}
        </>
      ) : (
        <>
          {image}
          {content}
        </>
      )}
    </div>
  );
}
