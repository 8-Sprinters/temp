import { style } from '@vanilla-extract/css';
import * as fonts from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,

  padding: '0 1.6rem',
});

export const section = style({
  backgroundColor: vars.color.white,
  borderRadius: '1.2rem',
});

export const baseDiv = style([
  fonts.LabelBold,
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

export const accountFooter = style({
  marginTop: '3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',

  color: vars.color.bluegray8,
});

export const textButton = style([fonts.Label, { color: vars.color.bluegray8 }]);
