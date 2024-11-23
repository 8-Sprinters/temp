import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const wrapper = style({
  width: '100%',
  maxWidth: 430,
  margin: 'auto',
  backgroundColor: vars.color.white,
});
