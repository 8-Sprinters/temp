import { style } from '@vanilla-extract/css';
import * as fonts from '@/styles/__font.css';
import { vars } from '@/styles/__theme.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '30px',
});

export const image = style({
  marginTop: '218px',
});

export const text = style([
  fonts.titleRegular,
  {
    color: vars.color.black,
  },
]);

export const button = style([
  fonts.titleRegular,
  {
    width: '200px',
    height: '50px',
    marginTop: '80px',

    color: vars.color.white,
    backgroundColor: vars.color.blue,

    borderRadius: '50px',
  },
]);
