import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const container = style({
  margin: 'auto',

  width: '100%',
  maxWidth: 430,
  height: '100vh',

  backgroundColor: vars.color.bggray,
});
