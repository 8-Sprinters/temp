import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  maxWidth: 430,
  margin: 'auto',
  background: vars.color.bggray,
  position: 'relative',
});
