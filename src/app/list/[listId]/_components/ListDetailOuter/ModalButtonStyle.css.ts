import { vars } from '@/styles/__theme.css';
import { style } from '@vanilla-extract/css';

export const resetButtonStyle = style({
  background: 'none',
});

export const buttonCursor = style({
  cursor: 'pointer',
  marginTop: '4px',
  fill: vars.color.black,
});
