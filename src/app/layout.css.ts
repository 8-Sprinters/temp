import { style, globalStyle } from '@vanilla-extract/css';

import * as fonts from '@/styles/__font.css';
import { vars } from '@/styles/theme.css';

export const basicBodyStyle = style({
  maxWidth: '430px',
  height: '100%',
  minHeight: '100vh',

  margin: 'auto',
  position: 'relative',

  backgroundColor: vars.color.bggray,
});

globalStyle(`${basicBodyStyle} li`, {
  listStyle: 'none',
});

export const adminBodyStyle = style({
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  margin: 'auto',

  position: 'relative',
  backgroundColor: vars.color.bggray,
});

export const toastContainer = style([fonts.labelMedium]);
