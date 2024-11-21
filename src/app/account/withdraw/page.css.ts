import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const page = style({
  height: '100vh',
  overflow: 'hidden',

  maxWidth: 430,
  margin: 'auto',
  backgroundColor: vars.color.bggray,
});

export const main = style({
  height: '100%',
  padding: '30px 0',
});
