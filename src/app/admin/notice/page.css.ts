import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { Body, BodyRegular } from '@/styles/font.css';

export const page = style({
  padding: '1.5rem',
  height: '100%',
});

export const button = style({
  maxWidth: '850px',

  display: 'flex',
  flexDirection: 'row-reverse',
  marginBottom: '1rem',
});

export const plusNoticeButton = style([
  Body,
  {
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    backgroundColor: vars.color.blue,
    color: vars.color.white,

    whiteSpace: 'nowrap',

    ':hover': {
      opacity: 0.7,
    },
  },
]);

export const table = style({
  maxWidth: '850px',
  padding: '1rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  backgroundColor: vars.color.white,
  borderRadius: '8px',
});

export const headRow = style([
  BodyRegular,
  {
    padding: '1rem 0.5rem',

    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    alignItems: 'center',

    textAlign: 'center',
  },
]);

export const rowItem = style({
  gridColumn: 'span 2',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});
