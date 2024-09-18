import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const article = style({
  padding: '16px 20px 35px',
});

export const label = style([
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

export const description = style([
  fonts.bodyMedium,
  {
    marginBottom: '2.4rem',

    color: vars.color.gray9,
  },
]);
