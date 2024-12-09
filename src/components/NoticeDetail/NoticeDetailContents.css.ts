import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';
import { BodyRegular, Subtitle, Label } from '@/styles/font.css';

export const subtitle = style([
  Subtitle,
  {
    color: vars.color.black,
  },
]);

export const imgaeBox = style({
  position: 'relative',
  height: '400px',
});

export const image = style({
  objectFit: 'cover',
  borderRadius: '5px',
});

export const button = style([
  BodyRegular,
  {
    padding: '16px 14px',
    width: '100%',

    backgroundColor: vars.color.white,
    color: vars.color.blue,
    fontWeight: '700',

    border: `1px solid ${vars.color.blue}`,
    borderRadius: '18px',
  },
]);

export const line = style({
  width: '100%',
  height: '2px',
  margin: '1rem 0',

  backgroundColor: vars.color.lightblue,
});

export const notice = style([
  Label,
  {
    width: '100%',
    minHeight: '120px',

    color: vars.color.bluegray8,

    border: 'none',
    outline: 'none',
    resize: 'none',
  },
]);
