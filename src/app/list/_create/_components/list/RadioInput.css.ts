import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const container = style({
  marginBottom: '8px',

  display: 'flex',
  flexDirection: 'row',
  columnGap: '16px',

  accentColor: 'black',
});

export const label = style([
  fonts.bodyRegular,
  {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.8rem',
  },
]);

export const radioInput = style({
  margin: 0,
});

export const message = style([
  fonts.bodyMedium,
  {
    color: vars.color.gray9,
  },
]);
