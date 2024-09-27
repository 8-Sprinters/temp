import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const keywordWrapper = style({
  width: '100%',

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',

  backgroundColor: vars.color.gray5,
  borderRadius: '50px',
});

const moveInputRight = keyframes({
  '0%': { transform: 'translateX(1%)' },
  '100%': { transform: 'translateX(0)' },
});

const moveInputLeft = keyframes({
  '0%': { transform: 'translateX(-1%)' },
  '100%': { transform: 'translateX(0)' },
});

const moveIconRight = keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(0)' },
});

const moveIconLeft = keyframes({
  '0%': { transform: 'translateX(100%)' },
  '100%': { transform: 'translateX(0)' },
});

export const keywordInput = style({
  padding: '0.5rem 1.5rem 0.5rem 4rem',

  backgroundColor: 'transparent',

  fontSize: '1.5rem',

  zIndex: 2,
});

export const basicKeywordInput = style([
  keywordInput,
  {
    padding: '1.1rem 4rem 1.1rem 4rem',
    animation: `${moveInputLeft} 0.5s ease`,
  },
]);

export const typedKeywordInput = style([
  keywordInput,
  {
    padding: '1.1rem 4rem 1.1rem 1.5rem',
    animation: `${moveInputRight} 0.5s ease`,
  },
]);

export const searchIcon = style({
  position: 'absolute',
  top: '1.2rem',
  zIndex: 2,
});

export const basicSearchIcon = style([
  searchIcon,
  {
    left: '1.5rem',

    animation: `${moveIconLeft} 0.2s ease-in-out`,
  },
]);

export const typedSearchIcon = style([
  searchIcon,
  {
    right: '1.5rem',

    animation: `${moveIconRight} 0.2s ease-in-out`,
    cursor: 'pointer',
  },
]);
