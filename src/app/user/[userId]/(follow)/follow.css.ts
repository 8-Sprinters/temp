import { style } from '@vanilla-extract/css';

import * as fonts from '@/styles/font.css';

export const totalMessage = style([
  fonts.BodyBold,
  {
    padding: '1.2rem 1.6rem',
  },
]);
