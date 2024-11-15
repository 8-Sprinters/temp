import { BodyRegular } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '1rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const title = style([BodyRegular]);

export const content = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const contentButton = style({
  width: 100,
  padding: '1rem 1.5rem',
  borderRadius: 8,
  backgroundColor: vars.color.blue,

  color: vars.color.white,
  fontWeight: 500,
  fontSize: 14,
});
