import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/font.css';

export const body = style({
  width: '100%',
  minHeight: '100vh',
  padding: '1.5rem',

  display: 'flex',
  flexDirection: 'column',
  rowGap: '12px',
});

export const title = style([
  fonts.Subtitle,
  {
    color: vars.color.black,
  },
]);

export const subtitle = style([
  fonts.Body,
  {
    paddingBottom: '15px',
    color: vars.color.bluegray8,
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
  fonts.BodyRegular,
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
