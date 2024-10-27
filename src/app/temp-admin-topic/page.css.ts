import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/font.css';

export const body = style({
  width: '100vw',
  minHeight: '100vh',
  padding: '16px 16px 120px',

  position: 'relative',
  overflowY: 'auto',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  rowGap: '12px',
});

export const goBackButton = style([
  fonts.Body,
  {
    marginBottom: '6.5px',
    textAlign: 'left',
    color: vars.color.deepblue10,
  },
]);

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

export const gradientOverlay = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '113px',
  pointerEvents: 'none',
  background: 'linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
  zIndex: 2,
});

export const floatingBox = style([
  fonts.BodyBold,
  {
    position: 'fixed',
    bottom: '49px',
    zIndex: 3,

    width: 'calc(100vw - 32px)',
    maxWidth: '398px',
    padding: '16px 10px',

    textAlign: 'center',

    borderRadius: '18px',
    color: 'white',
    backgroundColor: vars.color.blue,
    cursor: 'pointer',
  },
]);
