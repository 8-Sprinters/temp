import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const wrapper = style({
  padding: '35px 16px 24px',

  display: 'flex',
  flexDirection: 'column',
});

export const logoWrapper = style({
  display: 'flex',
  justifyContent: 'center',
});

export const userInfoOuterWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const userInfoWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',

  cursor: 'pointer',
});

export const userProfile = style({
  borderRadius: '16px',
});

export const userName = style({
  color: vars.color.black,
  fontSize: '1.4rem',
  fontWeight: 600,
});

export const loginButton = style([userName, { cursor: 'pointer' }]);
