import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { BodyRegular, Label } from '@/styles/font.css';

export const page = style({
  padding: '1.5rem',
  height: '100%',
});

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

export const bodyRow = style([
  Label,
  {
    padding: '1rem 0.5rem',
    marginBottom: '1rem',
    borderBottom: `1px solid ${vars.color.bluegray6}`,

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

export const rowText = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const button = style({
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  backgroundColor: vars.color.blue,
  color: vars.color.white,

  ':hover': {
    opacity: 0.7,
  },
});

export const editButtons = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',
});
