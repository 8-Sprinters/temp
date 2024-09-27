import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const categoryWrapper = style({
  paddingLeft: '1.6rem',

  position: 'relative',

  display: 'flex',
  gap: '1rem',

  overflow: 'auto',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const category = style({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',

  cursor: 'pointer',
});

export const skeletonCategory = style([
  category,
  {
    cursor: 'default',
  },
]);

export const categoryImage = style({
  width: '6rem',
  height: '6rem',

  borderRadius: '8px',

  ':hover': { filter: 'opacity(50%)' },
});

export const selectedCategoryImage = style([categoryImage, { filter: 'opacity(50%)' }]);

export const categoryText = style({});

const slide = keyframes({
  '0%': {
    transform: 'translateY(10px)',
  },
  '50%': {
    transform: 'translateY(-10px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
});

export const selectedIconWrapper = style({
  width: '2.5rem',
  height: '2.5rem',

  position: 'absolute',
  top: '2rem',
  zIndex: '2',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: 'rgba(0,0,0, 0.5)',
  borderRadius: '20px',

  animation: `${slide} 0.2s ease-in-out`,
});

const slideInRight = keyframes({
  '0%': {
    opacity: 0,
    right: '-100%',
  },
  '100%': {
    opacity: 1,
    right: '10px',
  },
});

const moveLeftRight = keyframes({
  '0%': {
    right: '10px',
  },
  '25%': {
    right: '0',
  },
  '50%': {
    right: '10px',
  },
  '75%': {
    right: '0',
  },
  '100%': {
    right: '10px',
  },
});

const slideOutRight = keyframes({
  '0%': {
    right: '10px',
  },
  '100%': {
    right: '-100%',
    display: 'none',
  },
});

export const scrollMessage = style({
  position: 'absolute',
  top: '25%',
  right: '-10px',

  color: vars.color.white,

  borderRadius: '5px',
  animationName: `${slideInRight}, ${moveLeftRight}, ${slideOutRight}`,
  animationDuration: '3s, 4s, 1s',
  animationTimingFunction: 'ease-in-out, linear, ease-in-out',
  animationFillMode: 'forwards',
  animationDelay: '0s, 0s, 4s',
});

export const selectedIcon = style({
  fill: vars.color.white,
});
