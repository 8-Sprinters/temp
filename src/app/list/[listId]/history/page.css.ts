import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/font.css';

export const page = style({
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',
});

export const navContainer = style({
  margin: '35px 0px 0px',
  paddingRight: '25px',

  display: 'flex',
  justifyContent: 'right',
  // columnGap: '5px',
});

export const navButton = style([
  fonts.Label,
  {
    width: '65px',
    padding: '10px 15px',
    color: vars.color.lightgray,
    backgroundColor: vars.color.white,
    // borderRadius: '20px',
    cursor: 'pointer',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
]);

export const activeButton = style({
  backgroundColor: vars.color.lightblue,
  color: vars.color.blue,
});

export const listTitle = style([
  fonts.Header,
  {
    padding: '10px',
    marginBottom: '30px',

    borderBottom: `2px solid ${vars.color.bggray}`,
  },
]);

export const contentContainer = style({
  margin: '20px 20px',
  padding: '20px 20px',

  borderRadius: '20px',
  backgroundColor: 'white',

  overflowX: 'auto',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});
