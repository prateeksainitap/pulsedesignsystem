import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Svg, {
  Path,
  Circle,
  Line,
  Polygon,
  Defs,
  LinearGradient as SvgLinearGradient,
  Stop,
} from 'react-native-svg';
import { Spacing, Radius, Colors, Typography, Sizing, BorderWidth } from '../../theme';
import { PulseCard, PulseSegmentedTabs } from '../primitives';

const TABS = ['1W', '1M', '6M', 'All-time'];

const POINTS = [
  { x: 0, label: 'May', v: 75 },
  { x: 1, label: 'Jun', v: 71 },
  { x: 2, label: 'Jul', v: 68 },
  { x: 3, label: 'Aug', v: 65 },
];

const CHART_W = 280;
const CHART_H = 130;
const PAD_L = 4;
const PAD_R = 8;
const PAD_T = 8;
const PAD_B = 20;

const yMin = 63;
const yMax = 92;

function yFor(v) {
  const inner = CHART_H - PAD_T - PAD_B;
  return PAD_T + inner - ((v - yMin) / (yMax - yMin)) * inner;
}
function xFor(i) {
  const inner = CHART_W - PAD_L - PAD_R;
  return PAD_L + (i / (POINTS.length - 1)) * inner;
}

export default function ProgressCard() {
  const [active, setActive] = useState('1M');
  const currentIdx = 1;
  const solid = POINTS.slice(0, currentIdx + 1);
  const dashed = POINTS.slice(currentIdx);

  const solidPath = solid
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${xFor(p.x)} ${yFor(p.v)}`)
    .join(' ');
  const dashedPath = dashed
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${xFor(p.x)} ${yFor(p.v)}`)
    .join(' ');

  const areaPath =
    solidPath +
    ` L ${xFor(solid[solid.length - 1].x)} ${CHART_H - PAD_B}` +
    ` L ${xFor(solid[0].x)} ${CHART_H - PAD_B} Z`;

  const endX = xFor(POINTS[POINTS.length - 1].x);
  const endY = yFor(POINTS[POINTS.length - 1].v);

  return (
    <View style={styles.wrap}>
      <Text style={styles.sectionTitle}>Your progress</Text>

      <PulseCard style={styles.card} padding={Spacing.s24}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.titleIcon}>
            <MaterialCommunityIcons name="monitor-dashboard" size={16} color={Colors.status.success} />
          </View>
          <Text style={styles.cardTitle}>Weight</Text>
        </View>

        {/* Delta + split chips */}
        <View style={styles.statsRow}>
          <View style={styles.deltaBlock}>
            <View style={styles.deltaRow}>
              <MaterialCommunityIcons name="menu-down" size={22} color={Colors.status.success} />
              <Text style={styles.deltaBig}>1.2</Text>
              <Text style={styles.deltaUnit}>lbs</Text>
            </View>
          </View>

          <View style={styles.chipGroup}>
            <View style={styles.chip}>
              <Text style={styles.chipLabel}>Current Weight</Text>
              <Text style={styles.chipValue}>187.2 lbs</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipLabel}>BMI</Text>
              <Text style={[styles.chipValue, { color: Colors.status.warning }]}>21.7</Text>
            </View>
          </View>
        </View>

        {/* Y-axis + chart */}
        <View style={styles.chartContainer}>
          <View style={styles.yLabels}>
            <Text style={styles.axisText}>90</Text>
            <Text style={styles.axisText}>75</Text>
            <Text style={styles.axisText}>70</Text>
            <Text style={styles.axisText}>65</Text>
          </View>

          <Svg width={CHART_W} height={CHART_H}>
            <Defs>
              <SvgLinearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0" stopColor={Colors.accent.blue} stopOpacity="0.12" />
                <Stop offset="1" stopColor={Colors.accent.blue} stopOpacity="0" />
              </SvgLinearGradient>
            </Defs>

            {/* Gridlines */}
            {[0, 0.33, 0.66, 1].map((t, i) => {
              const y = PAD_T + t * (CHART_H - PAD_T - PAD_B);
              return (
                <Line
                  key={i}
                  x1={PAD_L}
                  x2={CHART_W - PAD_R}
                  y1={y}
                  y2={y}
                  stroke={Colors.surface.default}
                  strokeWidth={1}
                />
              );
            })}

            {/* Very subtle area fill */}
            <Path d={areaPath} fill="url(#areaGrad)" />

            {/* Solid blue line */}
            <Path
              d={solidPath}
              stroke={Colors.accent.blue}
              strokeWidth={3}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Dashed gray projection */}
            <Path
              d={dashedPath}
              stroke={Colors.border.strong}
              strokeWidth={2}
              strokeDasharray="5,5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Current point (filled blue dot) */}
            <Circle
              cx={xFor(POINTS[currentIdx].x)}
              cy={yFor(POINTS[currentIdx].v)}
              r={7}
              fill={Colors.accent.blue}
              stroke={Colors.fixed.white}
              strokeWidth={3}
            />

            {/* Projection terminator — diamond */}
            <Polygon
              points={`${endX},${endY - 6} ${endX + 6},${endY} ${endX},${endY + 6} ${endX - 6},${endY}`}
              fill={Colors.fixed.white}
              stroke={Colors.border.strong}
              strokeWidth={2}
            />
          </Svg>
        </View>

        {/* X-axis */}
        <View style={styles.xLabels}>
          {POINTS.map((p) => (
            <Text key={p.label} style={styles.axisText}>{p.label}</Text>
          ))}
        </View>

        {/* Tabs */}
        <PulseSegmentedTabs tabs={TABS} value={active} onChange={setActive} />
      </PulseCard>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: Spacing.s16,
    marginTop: Spacing.s28,
  },
  sectionTitle: {
    ...Typography.custom.sectionTitle,
    color: Colors.content.primary,
    marginBottom: Spacing.s12,
  },
  card: {},
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.s8,
    marginBottom: Spacing.s8,
  },
  titleIcon: {
    width: Sizing.icon.lg,
    height: Sizing.icon.lg,
    borderRadius: Radius.full,
    borderWidth: BorderWidth.md,
    borderColor: Colors.status.success,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: { ...Typography.custom.cardTitleSm, color: Colors.content.primary },

  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.s12,
  },
  deltaBlock: { flex: 1 },
  deltaRow: { flexDirection: 'row', alignItems: 'baseline' },
  deltaBig: {
    ...Typography.custom.deltaBig,
    color: Colors.status.success,
    marginLeft: -Spacing[4],
  },
  deltaUnit: {
    ...Typography.custom.deltaUnit,
    color: Colors.status.success,
    marginLeft: Spacing[2],
  },
  chipGroup: {
    flexDirection: 'row',
    gap: Spacing.s8,
  },
  chip: {
    borderWidth: BorderWidth.sm,
    borderColor: Colors.border.default,
    borderRadius: Radius.lg,
    paddingHorizontal: Spacing.s12,
    paddingVertical: Spacing.s8,
    backgroundColor: Colors.surface.container,
    alignItems: 'flex-start',
  },
  chipLabel: { ...Typography.custom.chipLabel, color: Colors.content.tertiary },
  chipValue: { ...Typography.custom.chipValue, color: Colors.content.primary, marginTop: 1 },

  chartContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  yLabels: {
    justifyContent: 'space-between',
    paddingVertical: 6,
    marginRight: 6,
    width: 22,
  },
  xLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 26,
    paddingRight: 6,
    marginTop: -12,
    marginBottom: Spacing.s16,
  },
  axisText: {
    ...Typography.custom.axisText,
    color: Colors.content.disabled,
  },
});
