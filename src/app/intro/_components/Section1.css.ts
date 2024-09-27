import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const wrapper = style({
  width: '100%',
  height: '842px',

  position: 'relative',

  backgroundColor: '#FFD600',
});

export const logoWrapper = style({
  padding: '38px 0 24px',

  display: 'flex',
  justifyContent: 'center',
});

export const contentsWrapper = style({
  position: 'relative',
  marginTop: '120px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',

  position: 'absolute',
  left: 37,
  top: 86,

  color: vars.color.white,
  fontSize: '6rem',
  fontWeight: 700,
  lineHeight: '6rem',
  textShadow: `1px 1px 7px ${vars.color.gray7}`,
  transform: 'scaleX(1.07)',
});

export const imageWrapper = style({
  width: '100%',
  height: 'auto',

  position: 'absolute',
});

export const titleWrapper = style({
  width: '100%',
  height: '690px',

  position: 'absolute',
});

export const telescopeWrapper = style({
  position: 'absolute',
  left: 210,
  top: 35,
});

const bounceAnimation = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(10px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
});

export const chevronWrapper = style({
  width: '100%',

  position: 'absolute',
  bottom: 30,

  display: 'flex',
  justifyContent: 'center',

  cursor: 'pointer',

  animation: `${bounceAnimation} 1s ease infinite`,
});
