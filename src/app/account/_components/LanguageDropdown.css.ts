import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const container = style({
  position: 'relative',
});

export const triggerDiv = style([
  fonts.labelMedium,
  {
    width: 172,
    height: 36,
    padding: '6px 12px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    color: vars.color.gray9,

    border: `2px solid ${vars.color.gray7}`,
    borderRadius: 8,
  },
]);

export const menuDiv = style([
  fonts.labelMedium,
  {
    width: 172,
    padding: '8px 0',

    position: 'absolute',

    color: vars.color.gray9,

    border: `2px solid ${vars.color.gray7}`,
    borderTop: 'none',
    borderRadius: '0px 0px 8px 8px',
  },
]);

export const listDiv = style([
  fonts.labelMedium,
  {
    padding: '8px 16px',

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.lightblue,
      },
    },
  },
]);

export const selected = style({
  color: vars.color.blue,
});
