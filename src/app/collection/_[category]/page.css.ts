import { style } from '@vanilla-extract/css';

export const container = style({
  paddingBottom: '9rem',
});

export const cardsWrapper = style({
  width: '100%',
  padding: '1.8rem 1.6rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const cards = style({
  width: '100%',

  display: 'grid',
  gridTemplateColumns: 'repeat(2, 49%)',
  gridAutoRows: 'auto',
  gap: '1.6rem 0.8rem',

  '@media': {
    'screen and (max-width: 380px)': {
      gridTemplateColumns: 'repeat(1, 100%)',
    },
  },
});
