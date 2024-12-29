import { style } from '@vanilla-extract/css';
import * as fonts from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const item = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const profile = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: '12px',

  fontSize: '1.6rem',
  fontWeight: '600',

  cursor: 'pointer',
});

export const nickname = style([fonts.BodyBold]);

export const button = style([
  fonts.LabelBold,
  {
    padding: '0.6rem 1.2rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: vars.color.bluegray10,

    borderRadius: '1.5rem',
  },
]);

export const container = style({
  width: 'auto',
  margin: '8px 16px',
  padding: '12px 12px',
  borderRadius: '2rem',

  display: 'flex',
  flexDirection: 'column',
  rowGap: '16px',

  backgroundColor: vars.color.white,
});
