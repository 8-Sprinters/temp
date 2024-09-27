import { style, styleVariants } from '@vanilla-extract/css';
import { body3 } from '@/styles/__font.css';
import { vars } from '@/styles/__theme.css';

export const buttonContainer = style({
  width: '100%',

  display: 'flex',
  justifyContent: 'flex-end',
  gap: '16px',
});

export const baseButton = style([
  body3,
  {
    padding: '10px 16px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    flexShrink: '0',

    borderRadius: '12px',
  },
]);

export const button = styleVariants({
  primary: [
    baseButton,
    {
      backgroundColor: vars.color.blue,
      color: vars.color.white,
    },
  ],
  secondary: [
    baseButton,
    {
      backgroundColor: vars.color.blueGray,
      color: vars.color.blue,
    },
  ],
  disabled: [
    baseButton,
    {
      backgroundColor: vars.color.gray7,
      color: vars.color.white,

      cursor: 'default',
    },
  ],
});
