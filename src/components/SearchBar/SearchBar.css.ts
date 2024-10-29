import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const wrapper = style({
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  gap: '17px',
});

export const inputWrapper = style({
  width: '100%',
  padding: '8px 16px',

  display: 'flex',
  alignItems: 'center',
  gap: '8px',

  backgroundColor: vars.color.white,
  borderRadius: '12px',
});

export const input = style({
  width: '100%',

  fontSize: '1.6rem',
  overflow: 'hidden',
  '::placeholder': {
    color: '#637587',
    fontWeight: '400',
    fontSize: '1.6rem',
  },
});

export const cancelButton = style({
  flexShrink: 0,
  fontWeight: '400',
  fontSize: '1.6rem',
  letterSpacing: '-3%',
  color: '#213752',
});
