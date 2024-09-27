import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const background = style({
  width: '100%',
  height: '752px',
  padding: '71px 0 77px',

  backgroundColor: vars.color.white,
});

export const wrapper = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
});

export const recordWrapper = style({
  position: 'relative',
  padding: '0 30px',
  display: 'flex',
  alignItems: 'center',
  gap: '7px',
});

const pulseAnimation = keyframes({
  '0%': { opacity: 0 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0 },
});

export const record = style({
  width: '13px',
  height: '13px',
  flexShrink: 0,

  backgroundColor: '#ff5454',
  borderRadius: '50px',

  animation: `${pulseAnimation} 1s ease-in-out infinite`,
});

export const recText = style([fonts.labelLarge, {}]);

export const contentsWrapper = style({
  margin: '55.5px 0 46px',

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const titleWrapper = style([
  fonts.headlineLarge,
  {
    marginBottom: '17px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
  },
]);

export const subTitleWrapper = style([
  fonts.bodyRegular,
  {
    marginBottom: '59px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '7px',

    color: '#828282',
  },
]);

export const imageWrapper = style({
  width: '100%',
  height: '400px',
  position: 'relative',
});

export const video = style({
  width: '100%',
  height: 'auto',

  border: 'none',
});

// blurbox이 검은색으로 바뀌는 이상 현상이 있어서 잠시 주석화
export const blurBox = style({
  width: '100%',
  height: '174px',

  position: 'absolute',
  bottom: -20,

  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) -8.85%, #FFF 53.58%)',
});
