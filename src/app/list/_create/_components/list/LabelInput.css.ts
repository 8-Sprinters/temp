import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const inputBox = style([
  fonts.bodyMedium,
  {
    width: '100%',
    padding: '10px',

    borderRadius: '10px',
    border: `1px solid ${vars.color.gray5}`,
    outline: 'none',
    cursor: 'pointer',

    '::placeholder': {
      color: `${vars.color.gray7}`,
    },
  },
]);

export const labels = style({
  marginTop: '10px',

  display: 'flex',
  flexDirection: 'row',
  columnGap: '5px',
});

export const label = style([
  fonts.bodyMedium,
  {
    width: 'fit-content',
    padding: '7px',
    paddingRight: '20px',

    position: 'relative',

    color: '#333333',
    backgroundColor: vars.color.lightblue,

    borderRadius: '10px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
]);

export const deleteButton = style({
  position: 'absolute',
  top: '10px',
  right: '5px',

  stroke: '#8E8E93',
  strokeWidth: '1.5',

  cursor: 'pointer',
});

export const error = style({
  margin: '10px',

  fontSize: '1.5rem',

  color: 'red',
});
