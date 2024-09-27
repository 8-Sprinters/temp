import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const bottomTapContainer = style({
  width: '100%',
  height: '8.4rem',

  position: 'fixed',
  bottom: 0,

  display: 'flex',

  backgroundColor: vars.color.bggray,
});

const bottomTap = style({
  width: '40%',

  flexGrow: 1,
  paddingTop: '0.7rem',
  paddingBottom: '3.3rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',

  justifyContent: 'end',
  alignItems: 'center',

  cursor: 'pointer',
});

export const bottomTapVariant = styleVariants({
  left: [bottomTap, { paddingLeft: '1.5rem' }],
  right: [bottomTap, { paddingRight: '1.5rem' }],
});

export const bottomTapText = styleVariants({
  default: {
    fontSize: '1.2rem',
    color: vars.color.gray,
  },
  variant: {
    fontSize: '1.2rem',
    color: vars.color.blue,
  },
});

export const addButtonTap = style({
  width: '20%',

  paddingTop: '0.7rem',
  paddingBottom: '2.1rem',

  display: 'flex',
  justifyContent: 'center',
});

export const addButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '5.3rem',
  height: '5.3rem',

  borderRadius: '100%',
  background: 'linear-gradient(44deg, #428AF7 0%, #6CA5F7 100%)',
});
