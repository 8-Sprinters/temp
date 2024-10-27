import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/font.css';

export const container = style({
  position: 'relative',
});

export const triggerDiv = style([
  fonts.LabelSmall,
  {
    width: 172,
    height: 36,
    padding: '6px 12px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    color: vars.color.black,

    border: `2px solid ${vars.color.bluegray8}`,
    borderRadius: 8,
  },
]);

export const menuDiv = style([
  fonts.LabelSmall,
  {
    width: 172,

    position: 'absolute',

    color: vars.color.black,

    border: `2px solid ${vars.color.bluegray8}`,
    borderTop: 'none',
    borderRadius: '0.8rem',
    backgroundColor: vars.color.bggray,
  },
]);

export const listDiv = style([
  fonts.LabelSmall,
  {
    padding: '8px 16px',
    borderRadius: '0.8rem',

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.bluegray6,
      },
    },
  },
]);

export const selected = style({
  color: vars.color.blue,
});
