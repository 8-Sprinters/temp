import { style } from '@vanilla-extract/css';
import * as fonts from '@/styles/__font.css';
import { vars } from '@/styles/__theme.css';

export const totalMessage = style([
  fonts.titleMedium,
  {
    padding: '23px 18px',
  },
]);
