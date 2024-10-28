import { style } from '@vanilla-extract/css';

export const folderShape = style({
  position: 'relative',
  width: 130,
  height: 96,
});

export const topShape = style({
  position: 'absolute',
  top: 10,
  left: 0,

  width: 130,
  height: 69.83,

  backgroundColor: '#9CC9FF', // TODO opacity: 0.7 또는 color 변경
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
});

export const topLeftShape = style({
  position: 'absolute',
  top: 0,
  left: 0,

  width: 66.62,
  height: 83.69,

  backgroundColor: '#9CC9FF', // TODO opacity: 0.7 또는 color 변경
  borderTopLeftRadius: 12,
  borderTopRightRadius: 23,
});

export const bottomShape = style({
  position: 'absolute',
  bottom: 0,
  left: 0,

  width: 130,
  height: 76.83,

  backgroundColor: '#E3EEFF',
  borderRadius: 12,
});
