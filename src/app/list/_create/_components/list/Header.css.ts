import { style } from '@vanilla-extract/css';

export const header = style({
  width: '100%',
  height: '90px',
  paddingLeft: '20px',
  paddingRight: '20px',

  position: 'sticky',
  top: '0',
  left: '0',
  zIndex: '10',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: '#fff',

  borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
});

export const headerTitle = style({
  fontSize: '2rem',
});

export const headerNextButton = style({
  fontSize: '1.6rem',
  color: '#AFB1B6',
  cursor: 'default',
});

export const headerNextButtonActive = style({
  fontSize: '1.6rem',
});
