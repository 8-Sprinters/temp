import { style } from '@vanilla-extract/css';
import { Header, BodyRegular } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const container = style({
  minHeight: '100vh',
  display: 'flex',
});

export const nav = style({
  padding: '1.5rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',

  borderRight: '2px solid',
  borderRightColor: vars.color.bluegray6,
});

export const title = style([
  Header,
  {
    color: vars.color.bluegray8,
  },
]);

export const menu = style([
  BodyRegular,
  {
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
]);

export const main = style({
  flexGrow: 1,
});
