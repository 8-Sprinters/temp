import { style } from '@vanilla-extract/css';
import * as fonts from '@/styles/__font.css';
import { vars } from '@/styles/__theme.css';

export const baseLabel = style([
  fonts.labelMedium,
  {
    padding: '6px 24px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,

    borderRadius: '50px',
    textTransform: 'uppercase',
    color: vars.color.white,
  },
]);

export const blue1Label = style([
  baseLabel,
  {
    backgroundColor: '#0047FF',
  },
]);
export const blue2Label = style([
  baseLabel,
  {
    backgroundColor: '#0099FF',
  },
]);
export const blue3Label = style([
  baseLabel,
  {
    backgroundColor: '#0900FF',
  },
]);
export const blue4Label = style([
  baseLabel,
  {
    backgroundColor: '#5585FF',
  },
]);

export const skyblueLabel = style([
  baseLabel,
  {
    backgroundColor: '#00E9FF',
  },
]);
export const purpleLabel = style([
  baseLabel,
  {
    backgroundColor: '#5C00FF',
  },
]);
export const whiteLeftLabel = style([
  baseLabel,
  {
    backgroundColor: vars.color.white,
    border: '2px solid #7FA3FF',
  },
]);
export const whiteRightLabel = style([
  baseLabel,
  {
    backgroundColor: vars.color.white,
    border: '2px solid #999FF8',
  },
]);

export const whiteLabel = style([baseLabel, { backgroundColor: vars.color.white, color: vars.color.blue }]);

export const labelContent = style({
  height: '24px',

  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
});
