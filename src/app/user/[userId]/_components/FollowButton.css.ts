import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const button = style({
  padding: '0.4rem 0.6rem',
  borderRadius: '2rem',

  fontSize: '1.2rem',
  fontWeight: '400',
  letterSpacing: '-0.036rem',
});

export const variant = styleVariants({
  primary: [
    button,
    {
      backgroundColor: vars.color.blue,
      color: vars.color.white,
    },
  ],
  white: [
    button,
    {
      backgroundColor: vars.color.white,
      color: vars.color.blue,
    },
  ],
});
