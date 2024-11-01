import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  overflowX: 'scroll',
  overflowY: 'hidden',
  width: '100%',
  height: '520px',
  paddingBottom: '60px',

  display: 'flex',
  alignItems: 'center',
  borderRadius: '20px',
  backgroundColor: vars.color.white,

  selectors: {
    '&::-webkit-scrollbar': {
      height: '5px',
      background: vars.color.bggray,
      borderRadius: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: vars.color.lightgray,
      borderRadius: '6px',
    },
  },
});
