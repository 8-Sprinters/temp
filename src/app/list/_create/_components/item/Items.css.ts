import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const itemsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

  cursor: 'grab',
});

export const item = style([
  fonts.bodyLarge,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',

    backgroundColor: vars.color.white,

    transition: 'box-shadow 0.3s ease',
  },
]);

export const draggingItem = style([
  item,
  {
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
  },
]);

export const placeholder = style({
  '::placeholder': {
    color: vars.color.gray7,
  },
});

export const title = style([
  fonts.bodyLarge,
  placeholder,
  {
    width: 0,

    flexGrow: 1,

    backgroundColor: 'transparent',
    ':disabled': { cursor: 'not-allowed' },
  },
]);

export const errorTitle = style([
  title,
  placeholder,
  {
    color: vars.color.red,
    '::placeholder': {
      color: vars.color.red,
    },
  },
]);

export const comment = style([
  fonts.bodyMedium,
  placeholder,
  {
    width: '100%',
    resize: 'none',

    flexGrow: 1,

    border: 'none',
    outline: 'none',
  },
]);

export const imageInput = style({
  display: 'none',
});

export const countLength = style([fonts.bodyMedium, { color: vars.color.gray7 }]);

export const errorCountLength = style([fonts.bodyMedium, { color: vars.color.red }]);

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
