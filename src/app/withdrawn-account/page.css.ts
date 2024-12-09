import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  maxWidth: 430,
  height: '100vh',
  padding: '18px 16px',
  margin: 'auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  fontSize: '1.6rem',

  backgroundColor: vars.color.bggray,
});

const baseLink = style({
  padding: '8px 16px',
  borderRadius: 15,
  marginBottom: '12px',
});

export const link = style([
  baseLink,
  {
    backgroundColor: vars.color.blue,
    color: vars.color.white,
  },
]);

export const subLink = style([
  baseLink,
  {
    backgroundColor: vars.color.lightblue,
    color: vars.color.blue,
  },
]);
