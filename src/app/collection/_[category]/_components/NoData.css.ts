import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const container = style({
  paddingTop: '2rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
});

export const messageText = style({
  fontSize: '1.8rem',
  fontWeight: '600',
  lineHeight: '2.4rem',
  letterSpacing: '0.14px',
});

export const actionText = style({
  fontSize: '1.5rem',
  color: vars.color.red,
  fontWeight: '500',
  lineHeight: '2rem',
  letterSpacing: '0.2px',

  cursor: 'pointer',
});
