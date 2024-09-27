import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const buttonWrapper = style({
  padding: '7px 14px',

  backgroundColor: vars.color.white,
  border: '1px solid #3D95FF4D',
  borderRadius: '9999px',

  color: '#3D95FF',
  fontSize: '1.4rem',
});
