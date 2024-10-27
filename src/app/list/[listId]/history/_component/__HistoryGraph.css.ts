import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const container = style({
  width: '100%',
  minWidth: 'calc(200vw - 54px)',
  height: '345px',
  padding: '20px',

  display: 'flex',
  alignItems: 'center',

  borderRadius: '20px',
  backgroundColor: vars.color.white,
  boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.10)',
});
