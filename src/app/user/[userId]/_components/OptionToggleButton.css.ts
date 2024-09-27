import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';
import { Label } from '@/styles/font.css';

export const labelOption = style({
  width: '2.4rem',
  height: '2.4rem',

  position: 'relative',
  padding: '0.7rem 1.1rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  color: vars.color.deepblue10,
  borderRadius: '100%',

  selectors: {
    '&:hover': {
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.08), 0px 0px 4px rgba(0, 0, 0, 0.02)',
    },
  },
});

export const optionMenu = style({
  width: '9.1rem',
  padding: '0.4rem',

  position: 'absolute',
  top: '3.2rem',
  right: '-20px',

  display: 'flex',
  flexDirection: 'column',

  borderRadius: '1.2rem',
  background: vars.color.white,
  boxShadow: '0px 0px 4px 0px rgba(180, 180, 180, 0.04), 0px 8px 16px 0px rgba(136, 136, 136, 0.08)',
});

export const optionTop = style([
  Label,
  {
    textAlign: 'left',

    width: '100%',
    padding: '0.9rem 1.2rem',
    borderRadius: '0.8rem',

    selectors: {
      '&:hover': {
        backgroundColor: 'rgba(149, 158, 176, 0.11)',
      },
    },
  },
]);

export const optionBottom = style([
  Label,
  {
    textAlign: 'left',

    width: '100%',
    padding: '0.9rem 1.2rem',
    borderRadius: '0.8rem',

    color: vars.color.red,

    selectors: {
      '&:hover': {
        backgroundColor: 'rgba(149, 158, 176, 0.11)',
      },
    },
  },
]);
