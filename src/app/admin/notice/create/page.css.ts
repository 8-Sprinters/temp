import { BodyBold, BodyRegular } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  height: '100vh',
  background: vars.color.bggray,
});

export const dropdown = style([
  BodyBold,
  {
    padding: '0.5rem',
    borderRadius: '8px',
  },
]);

export const row = style({
  padding: '0 1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const rowLabel = style([
  BodyBold,
  {
    width: 40,
  },
]);

export const rowInput = style([
  BodyRegular,
  {
    padding: '8px',
    flexGrow: 1,
    borderRadius: '8px',
    '::placeholder': {
      fontSize: '12px',
    },
  },
]);

export const contents = style({
  padding: '1rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const block = style({
  padding: '0.5rem',
  borderRadius: 4,
  background: vars.color.bluegray6,
  fontSize: 14,
});
