import { style } from '@vanilla-extract/css';
import * as fonts from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 18,
});

export const title = style([fonts.Header]);

export const warning = style([
  fonts.Subtitle,
  {
    color: vars.color.red,
  },
]);

export const detailBox = style([
  fonts.Label,
  {
    margin: '20px 30px 30px',
    padding: '18px 16px',

    lineHeight: '150%',
    color: vars.color.bluegray10,
    backgroundColor: vars.color.white,
    borderRadius: '2rem',
  },
]);

export const textLine = style({
  display: 'flex',
  gap: 8,
});
