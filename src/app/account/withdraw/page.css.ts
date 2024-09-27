import { vars } from '@/styles/__theme.css';
import { style } from '@vanilla-extract/css';

export const page = style({
  height: '100vh',
  overflow: 'hidden',
});

export const main = style({
  height: '100%',
  padding: '30px 0',

  backgroundColor: vars.color.gray3,
});
