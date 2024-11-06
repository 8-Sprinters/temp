import { BodyBold, BodyRegular } from '@/styles/font.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
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
