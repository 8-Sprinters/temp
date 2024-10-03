import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/font.css';

export const section = style({
  padding: '1.2rem 1.6rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  rowGap: '32px',
});

export const description = style([
  fonts.Label,
  {
    color: vars.color.bluegray8,
    lineHeight: '2rem',
  },
]);

export const field = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  rowGap: '1.6rem',
});

export const label = style([fonts.Subtitle]);

export const requiredIcon = style({
  color: vars.color.blue,
});

export const input = style([
  fonts.BodyRegular,
  {
    width: '100%',
    height: '4.8rem',
    padding: '1.2rem 1.6rem',
    borderRadius: '1.2rem',
    color: vars.color.bluegray10,

    '::placeholder': { color: vars.color.bluegray6 },
  },
]);

export const chipGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.8rem',
});

export const chip = style([
  fonts.Label,
  {
    width: 'auto',
    padding: '0.6rem 1.2rem',
    borderRadius: '2rem',

    color: vars.color.bluegray8,
    backgroundColor: vars.color.white,

    whiteSpace: 'nowrap',
  },
]);

export const selectedChip = style([
  fonts.Label,
  chip,
  {
    color: vars.color.blue,
    backgroundColor: vars.color.lightblue,
  },
]);

export const temp = style({
  all: 'inherit',
  cursor: 'pointer',
});
