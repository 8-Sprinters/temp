import { style } from '@vanilla-extract/css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const content = style({
  width: '100%',
  padding: '18px 16px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
});
