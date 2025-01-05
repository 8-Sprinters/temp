import { style } from '@vanilla-extract/css';

export const wrapper = style({
  width: '100%',

  display: 'flex',
  alignItems: 'center',
});

export const inputWrapper = style({
  width: '100%',

  display: 'flex',
  alignItems: 'center',
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
