import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',

  overflow: 'auto',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    width: '0',
  },
});

export const button = style([
  fonts.labelLarge,
  {
    height: '40px',
    marginRight: '12px',
    padding: '8px 12px',

    color: vars.color.black,
    backgroundColor: 'transparent',

    whiteSpace: 'nowrap',

    border: `1px solid ${vars.color.gray5}`,
    borderRadius: '10px',
  },
]);

export const buttonActive = style({
  backgroundColor: vars.color.lightblue,
});
