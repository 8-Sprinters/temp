import { style } from '@vanilla-extract/css';

export const gridContainer = style({
  padding: '0 16px',

  width: '100%',
  position: 'relative',
});

export const list = style({
  display: 'inline-flex',
  gap: '8px',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

export const item = style({
  padding: '6px 12px',
  flexShrink: 0,

  borderRadius: '20px',
  backgroundColor: '#fff',
  fontWeight: '500',
  fontSize: '1.4rem',
  color: '#8599AD',
});

export const selectedItem = style([
  item,
  {
    backgroundColor: '#E3EEFF',
    color: '#3D95FF',
  },
]);

export const alignText = style({
  flexGrow: 1,
});

export const orderDropdown = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  float: 'right',
});

export const order = style({
  fontWeight: '400',
  fontSize: '1.6rem',
  color: '#3C4F76',
});
