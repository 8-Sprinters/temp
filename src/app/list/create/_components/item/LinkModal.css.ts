import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const button = style({
  width: 18,
  height: 18,
});

export const linkModalChildren = style({
  width: '100%',
});

export const linkInput = style([
  fonts.bodyLarge,
  {
    width: '100%',
    padding: '8px',

    border: `solid 1px ${vars.color.gray7}`,
    borderRadius: '4px',
  },
]);

export const error = style([
  fonts.bodySmall,
  {
    marginTop: '8px',
    marginLeft: '4px',
    marginBottom: '4px',

    flexShrink: '0',
    color: vars.color.red,
  },
]);
