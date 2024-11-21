import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  maxWidth: 430,
  height: '100vh',
  margin: 'auto',
  backgroundColor: vars.color.bggray,
});
