import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const wrapper = style({
  width: '100%',
  backgroundColor: vars.color.white,
});
