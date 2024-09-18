import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const previewBox = style({
  width: '90px',
  height: '90px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'relative',

  backgroundColor: vars.color.lightblue,

  borderRadius: '10px',
  whiteSpace: 'pre-wrap',
  overflow: 'hidden',
  cursor: 'pointer',
});

export const clearButton = style({
  position: 'absolute',
  top: '5px',
  right: '5px',
});

export const domainText = style({
  marginTop: '0.5rem',

  fontSize: '1rem',
  color: vars.color.gray9,
});

export const previewImage = style({
  objectFit: 'cover',
});
