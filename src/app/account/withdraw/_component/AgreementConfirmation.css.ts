import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 42,
});

export const agreement = style([
  fonts.bodyMedium,
  {
    padding: '0px 10px 22px',

    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    gap: 8,

    color: vars.color.gray9,

    borderBottom: `1px solid ${vars.color.gray7} `,
  },
]);

export const confirmButton = style([
  fonts.bodyMedium,
  {
    padding: '8px 32px ',
    backgroundColor: vars.color.blue,
    color: vars.color.white,
    borderRadius: 50,

    selectors: {
      '&:disabled': {
        backgroundColor: vars.color.gray5,
        color: vars.color.gray7,
      },
    },
  },
]);
