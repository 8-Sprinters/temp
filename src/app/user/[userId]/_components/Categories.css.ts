import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';
import { Label } from '@/styles/font.css';

export const container = style({
  padding: '0 1.6rem',
  paddingBottom: '1.6rem',

  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.8rem',

  overflow: 'scroll',
  msOverflowStyle: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const skeletonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.5rem',
});

export const button = style([
  Label,
  {
    padding: '0.6rem 1.2rem',

    backgroundColor: vars.color.white,
    borderRadius: '2rem',

    color: vars.color.bluegray8,
    whiteSpace: 'nowrap',
  },
]);

export const variant = style({
  backgroundColor: vars.color.lightblue,
  color: vars.color.blue,
});
