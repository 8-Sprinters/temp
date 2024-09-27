import { style } from '@vanilla-extract/css';
import * as fonts from '@/styles/__font.css';
import { vars } from '@/styles/__theme.css';

export const button = style([
  fonts.bodyLarge,
  {
    padding: '2px 12px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,

    backgroundColor: vars.color.blue,
    color: vars.color.white,

    borderRadius: '16px',
    textTransform: 'uppercase',

    selectors: {
      '&:disabled': {
        backgroundColor: vars.color.gray7,
        color: vars.color.white,

        cursor: 'default',
      },
    },
  },
]);
