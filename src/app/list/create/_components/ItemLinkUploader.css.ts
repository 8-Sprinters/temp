import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/font.css';

export const linkIcon = style({
  width: '1.7rem',
  height: '1.7rem',

  cursor: 'pointer',
});

export const linkModalChildren = style({
  width: '100%',
});

export const linkInput = style([
  fonts.BodyRegular,
  {
    width: '100%',
    padding: '1rem',

    border: `solid 0.15rem ${vars.color.bluegray6}`,
    borderRadius: '1.2rem',

    '::placeholder': {
      color: vars.color.bluegray6,
    },
  },
]);

export const error = style([
  fonts.Label,
  {
    marginTop: '0.6rem',
    marginLeft: '0.4rem',

    color: vars.color.red,
  },
]);
