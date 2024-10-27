import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/font.css';

export const navContainer = style({
  width: '100%',

  padding: '18px 65.5px 0',
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  columnGap: '70px',
});

export const navButton = style([
  fonts.Label,
  {
    width: 'fit-content',
    padding: ' 15px 0',
    flexGrow: '1',

    color: vars.color.black,
  },
]);

export const navBarBase = style({
  width: '50px',
  height: '5px',

  backgroundColor: vars.color.black,
  borderRadius: '50px',
});

export const navBar = styleVariants({
  left: [
    navBarBase,
    {
      position: 'absolute',
      left: '23.5%',
      bottom: '0%',
    },
  ],
  right: [
    navBarBase,
    {
      position: 'absolute',
      left: '66.5%',
      bottom: '0%',
    },
  ],
});

export const listTitle = style([
  fonts.Header,
  {
    padding: '10px',
    marginBottom: '30px',
  },
]);

export const contentContainer = style({
  margin: '50px 20px',
  padding: '20px 20px',

  borderRadius: '20px',
  backgroundColor: 'white',

  overflowX: 'auto',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});
