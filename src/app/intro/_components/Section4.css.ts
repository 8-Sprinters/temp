import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const background = style({
  width: '100%',
  height: '700px',
  padding: '70px 30px 77px',

  backgroundColor: '#E8F7FF',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const contentsWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const titleWrapper = style([
  fonts.headlineLarge,
  {
    marginBottom: '20px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
  },
]);

export const subTitleWrapper = style([
  fonts.bodyRegular,
  {
    marginBottom: '50px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '7px',

    color: '#828282',
  },
]);

export const imageWrapper = style({
  position: 'relative',
  marginLeft: '20px',
});

const heartAnimation = keyframes({
  '0%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.3)' },
  '100%': { transform: 'scale(1)' },
});

export const iconWrapper = style({
  position: 'absolute',
  top: -20,

  animation: `${heartAnimation} 2s ease-in-out infinite`,
});
