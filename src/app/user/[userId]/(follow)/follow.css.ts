import { style } from '@vanilla-extract/css';

import { Header } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',

  maxWidth: 430,
  height: '100vh',
  margin: 'auto',

  backgroundColor: vars.color.bggray,
});

export const totalMessage = style([
  Header,
  {
    padding: '23px 18px',
  },
]);
