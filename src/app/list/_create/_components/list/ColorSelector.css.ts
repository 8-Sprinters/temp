import { style } from '@vanilla-extract/css';

export const backgroundContainer = style({
  display: 'flex',
  flexDirection: 'row',
  columnGap: '12px',
});

export const colorCircle = style({
  width: '50px',
  height: '50px',

  flexShrink: '0',

  appearance: 'none',
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  outline: 'none',

  accentColor: 'red',
  backgroundColor: '#ffffff',

  border: '3px #ffffff solid',
  WebkitBorderBefore: '3px #ffffff solid',
  borderRadius: '50%',
  WebkitBorderRadius: '50%',
  MozBorderRadius: '50%',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

  cursor: 'pointer',
});

export const selectedColor = style({
  borderColor: '#0047FF',
});
