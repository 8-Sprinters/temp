import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const page = style({
  margin: 'auto',
  maxWidth: 430,
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  backgroundColor: vars.color.bggray,
});

export const content = style({
  width: '100%',
  padding: '18px 16px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
});
