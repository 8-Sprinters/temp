import { style, styleVariants } from '@vanilla-extract/css';
import { Label } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const buttonContainer = style({
  width: '100%',

  display: 'flex',
  justifyContent: 'flex-end',
  gap: '16px',
});

export const baseButton = style([
  Label,
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
      backgroundColor: vars.color.whiteblue,
      color: vars.color.blue,
    },
  ],
  disabled: [
    baseButton,
    {
      backgroundColor: vars.color.white,
      color: vars.color.bluegray8,

      cursor: 'default',
    },
  ],
});
