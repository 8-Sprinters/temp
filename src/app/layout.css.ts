import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/__font.css';
import { style } from '@vanilla-extract/css';

export const body = style({
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  margin: 'auto',

  position: 'relative',

  backgroundColor: vars.color.whiteblue,
});

export const toastContainer = style([fonts.labelMedium]);
