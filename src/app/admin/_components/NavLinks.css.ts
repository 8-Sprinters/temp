import { style, styleVariants } from '@vanilla-extract/css';
import { BodyBold, BodyRegular } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const nav = style({
  minWidth: 200,

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const variantLink = styleVariants({
  default: [BodyRegular],
  selected: [
    BodyBold,
    {
      color: vars.color.blue,
    },
  ],
});
