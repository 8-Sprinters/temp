import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const videoWrapper = style({
  border: `1px solid ${vars.color.gray5}`,
  borderRadius: '10px',

  overflow: 'hidden',
});

export const videoFrame = style({
  width: '100%',
  height: 'auto',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
