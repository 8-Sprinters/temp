import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const container = style({
  width: '100%',
  paddingRight: '20px',
  position: 'relative',
});

export const inputBox = style([
  fonts.bodyRegular,
  {
    width: '100%',
    padding: '11px',

    position: 'relative',

    border: '0px',
    borderBottom: `1px solid ${vars.color.gray7}`,
    outline: 'none',

    '::placeholder': {
      color: `${vars.color.gray7}`,
    },
  },
]);

export const textareaBox = style([
  fonts.bodyMedium,
  {
    width: '100%',
    padding: '12px',

    resize: 'none',
    whiteSpace: 'pre-wrap',
    // overflowY: 'hidden',

    border: `1px solid ${vars.color.gray7}`,
    borderRadius: '8px',

    outline: 'none',

    '::placeholder': {
      color: `${vars.color.gray7}`,
    },
  },
]);

export const clearButton = style({
  position: 'absolute',
  top: '20px',
  right: '8px',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
});

export const error = style([
  fonts.bodyRegular,
  {
    marginTop: '8px',
    marginLeft: '4px',

    flexShrink: '0',
    color: vars.color.red,
  },
]);
