import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const wrapper = style({
  height: '300px',

  display: 'flex',
  flexDirection: 'column',
  gap: '12px',

  overflow: 'hidden',
});

const moveRight = keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '50%': { transform: 'translateX(0%)' },
  '100%': { transform: 'translateX(-100%)' },
});

const moveLeft = keyframes({
  '0%': { transform: 'translateX(0)' },
  '50%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(0)' },
});

export const labelLineWrapper = style({
  display: 'flex',
  gap: '10px',
});

export const labelLine1 = style([
  labelLineWrapper,
  {
    transform: 'translateX(-50%)',
    animation: `${moveRight} 20s linear infinite`,
  },
]);

export const labelLine2 = style([
  labelLineWrapper,
  {
    transform: 'translateX(-50%)',
    animation: `${moveLeft} 30s linear infinite`,
  },
]);

export const labelLine3 = style([
  labelLineWrapper,
  {
    transform: 'translateX(0%)',
    animation: `${moveRight} 20s linear infinite`,
  },
]);

export const labelLine4 = style([
  labelLineWrapper,
  {
    transform: 'translateX(0%)',
    animation: `${moveLeft} 40s linear infinite`,
  },
]);

export const labelLine5 = style([
  labelLineWrapper,
  {
    transform: 'translateX(0%)',
    animation: `${moveRight} 35s linear infinite`,
  },
]);

export const labelLine6 = style([
  labelLineWrapper,
  {
    transform: 'translateX(20%)',
    animation: `${moveRight} 60s linear infinite`,
  },
]);
