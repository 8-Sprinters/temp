import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/font.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 42,
});

export const agreement = style([
  fonts.Label,
  {
    padding: '0px 10px 22px',

    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    gap: 8,

    color: vars.color.bluegray10,

    borderBottom: `1px solid ${vars.color.bluegray8} `,
  },
]);

export const confirmButton = style([
  fonts.Body,
  {
    padding: '8px 32px ',
    backgroundColor: vars.color.blue,
    color: vars.color.white,
    borderRadius: 50,

    selectors: {
      '&:disabled': {
        backgroundColor: vars.color.white,
        color: vars.color.bluegray8,
      },
    },
  },
]);
