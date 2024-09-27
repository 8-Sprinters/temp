import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

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
