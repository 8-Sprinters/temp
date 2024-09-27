import { style } from '@vanilla-extract/css';
import * as fonts from '@/styles/__font.css';
import { vars } from '@/styles/__theme.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 18,
});

export const title = style([fonts.titleLarge]);

export const warning = style([
  fonts.titleRegular,
  {
    color: vars.color.red,
  },
]);

export const detailBox = style([
  fonts.bodyMedium,
  {
    margin: '20px 35px',
    padding: '18px 12px',

    backgroundColor: vars.color.white,
    color: vars.color.gray9,
    borderRadius: 10,
  },
]);

export const textLine = style({
  display: 'flex',
  gap: 8,
});
