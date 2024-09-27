import { style } from '@vanilla-extract/css';
import { body1 } from '@/styles/__font.css';

export const title = style([
  body1,
  {
    width: '100%',
  },
]);
