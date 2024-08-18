import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const navDiv = style({
  width: '100%',
  height: '90px',

  position: 'fixed',
  bottom: 0,

  backgroundColor: '#F5F6FA',
});

export const ulDiv = style({
  padding: '9px 0 29px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '60px',
});

export const buttonDiv = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4.36px',
  justifyContent: 'center',
  alignItems: 'center',

  cursor: 'pointer',
});

export const listCreateButton = style({
  width: '52px',
  height: '52px',
  background: 'linear-gradient(219deg, #5CA5FE 20.55%, #2788FF 94.24%)',
  borderRadius: '9999px',
});

export const createButtonWrapper = style({
  width: '52px',
  height: '52px',

  position: 'relative',
});

export const addIcon = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const menuName = style({
  fontSize: '1rem',
  fontWeight: '400',
  color: '#7A7B7D',
});

export const selectedMenuName = style([
  menuName,
  {
    color: '#53A0FF',
  },
]);
