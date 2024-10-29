import { style } from '@vanilla-extract/css';
import * as fonts from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const track = style({
  width: 'auto',
  padding: '0.2rem',

  display: 'flex',
  borderRadius: '1.2rem',
  gap: '0.5rem',

  backgroundColor: vars.color.bggray,
});

export const segment = style({
  padding: '1rem 2rem',

  display: 'relative',

  borderRadius: '1.2rem',
  ':hover': {
    backgroundColor: vars.color.bluegray6,
  },
});

export const selectedSegment = style({
  backgroundColor: vars.color.white,
});
