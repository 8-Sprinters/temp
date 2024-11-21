import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const contents = style({
  padding: '1rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const block = style({
  padding: '0.5rem',
  borderRadius: 4,
  background: vars.color.bluegray6,
  fontSize: 14,
});
