import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const wrapper = style({
  width: '330px',
  height: '37px',
  padding: '8px 15px',

  display: 'flex',
  justifyContent: 'space-between',

  backgroundColor: vars.color.gray5,
  borderRadius: '16px',
});

export const slideWrapper = style([
  fonts.bodyMedium,
  {
    width: '100%',

    display: 'flex',
    justifyContent: 'flex-start',
    textAlign: 'left',
  },
]);
