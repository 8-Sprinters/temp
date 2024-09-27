import { style } from '@vanilla-extract/css';
import * as fonts from '@/styles/__font.css';
import { vars } from '@/styles/__theme.css';

export const container = style({
  marginTop: 18,

  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const baseDiv = style([
  fonts.titleSmall,
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

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.lightblue,
      },
    },
  },
]);

export const titleDiv = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});
