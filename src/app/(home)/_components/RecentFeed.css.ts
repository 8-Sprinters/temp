import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const listEndWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',

  marginBottom: '90px',

  alignItems: 'center',
  justifyContent: 'center',
});

export const listEndMessage = style({
  fontWeight: '600',
  fontSize: '19px',
  color: '##323A43',
});

export const listPolicy = style({
  fontWeight: '600',
  fontSize: '1.5rem',
  color: '#8599AD',
});
