import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '5px',

  fontSize: '1.4rem',
  fontWeight: '400',
  letterSpacing: '0.08px',
});

export const titleText = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
});
