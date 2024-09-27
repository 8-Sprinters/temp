import { style, keyframes, createVar } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const customBackgroundImage = createVar();

const moveRight = keyframes({
  '0%': { transform: 'translateX(-135%)' },
  '50%': { transform: 'translateX(0%)' },
  '100%': { transform: 'translateX(-135%)' },
});

const moveUpDown = keyframes({
  '0%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(30px)' },
  '100%': { transform: 'translateY(0)' },
});

export const wrapper = style({
  height: '268px',
  padding: '20px 0',

  overflow: 'hidden',
});

export const listWrapper = style({
  minWidth: '109px',
  height: '150px',
  padding: '8px 10px',

  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,

  position: 'relative',
  backgroundImage: customBackgroundImage,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
});

export const listWrapper1 = style([
  listWrapper,
  {
    animation: `${moveUpDown} 2s ease infinite`,
  },
]);
export const listWrapper2 = style([
  listWrapper,
  {
    animation: `${moveUpDown} 2s ease infinite 0.3s`,
  },
]);
export const listWrapper3 = style([
  listWrapper,
  {
    animation: `${moveUpDown} 2s ease infinite 0.6s`,
  },
]);
export const listWrapper4 = style([
  listWrapper,
  {
    animation: `${moveUpDown} 2s ease infinite 0.9s`,
  },
]);
export const listWrapper5 = style([
  listWrapper,
  {
    animation: `${moveUpDown} 2s ease infinite 1.2s`,
  },
]);
export const listWrapper6 = style([
  listWrapper,
  {
    animation: `${moveUpDown} 2s ease infinite 1.5s`,
  },
]);
export const listWrapper7 = style([
  listWrapper,
  {
    animation: `${moveUpDown} 2s ease infinite 1.8s`,
  },
]);

export const listsContainer = style({
  display: 'flex',
  gap: '30px',

  animation: `${moveRight} 20s linear infinite`,
});

export const informationWrapper = style([
  fonts.bodySmall,
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '8.15px',

    color: vars.color.white,
  },
]);

export const iconWrapper = style({
  position: 'absolute',
  right: -20,
  top: -20,
});
