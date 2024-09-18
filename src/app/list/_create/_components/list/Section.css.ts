import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const title = style([
  fonts.labelLarge,
  {
    marginBottom: '1rem',
  },
]);

export const required = style({
  marginLeft: '5px',

  fontSize: '1.7rem',
  fontWeight: '400',
  lineHeight: '2.2rem',
  color: vars.color.red,
});

export const content = style({
  fontSize: '1.5rem',
});
