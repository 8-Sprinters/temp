import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/font.css';

export const body = style({
  width: '100vw',
  height: '100vh',
  padding: '16px 16px 100px',

  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  rowGap: '12px',
});

export const goBackButton = style({
  width: '18px',
});

export const title = style([
  fonts.Subtitle,
  {
    color: vars.color.black,
  },
]);

export const subtitle = style([
  fonts.Body,
  {
    paddingBottom: '15px',
    color: vars.color.bluegray8,
  },
]);

export const gradient = style({
  width: '100%',
  height: '100px',

  position: 'absolute',
  top: '100vh',
  left: '0',

  background: 'linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
});
