import { style } from '@vanilla-extract/css';
import * as fonts from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const container = style({
  marginTop: 18,

  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const baseDiv = style([
  fonts.Label,
  {
    padding: '16px 32px',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
]);

export const buttonDiv = style([
  baseDiv,
  {
    cursor: 'pointer',
    borderRadius: '1.2rem',

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.bluegray6,
      },
    },
  },
]);

export const titleDiv = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});
