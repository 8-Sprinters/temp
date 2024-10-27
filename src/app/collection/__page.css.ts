import { style, keyframes } from '@vanilla-extract/css';
import * as fonts from '@/styles/__font.css';

export const wrapper = style({
  marginBottom: 70,
});

export const title = style([
  fonts.headlineSmall,
  {
    padding: '24px 16px',
  },
]);

export const categoryFolders = style({
  padding: '18px 16px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: 'repeat(5, 1fr)',
  gridColumnGap: 15,
  gridRowGap: 25,
});

export const categoryContainer = style({
  height: '100%',
});

export const categoryFolder = style({
  width: 160,
  height: 120,
  margin: 'auto',
  position: 'relative',

  cursor: 'pointer',
});

export const folderIcon = style({
  width: 160,
  height: 120,
});

const folderHoverAnimation = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '100%': {
    transform: 'scale(1.2)',
  },
});

export const categoryIcon = style({
  position: 'absolute',
  bottom: 22,
  left: '50%',
  marginLeft: -25,

  selectors: {
    [`${categoryFolder}:hover &`]: {
      animation: `${folderHoverAnimation} 0.1s forwards`,
    },
  },
});

export const categoryLabel = style([
  fonts.titleSmall,
  {
    marginTop: '1.4rem',
    textAlign: 'center',
  },
]);
