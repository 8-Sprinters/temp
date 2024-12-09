import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { Label } from '@/styles/font.css';

export const bodyRow = style([
  Label,
  {
    padding: '1rem 0.5rem',
    marginBottom: '1rem',
    borderBottom: `1px solid ${vars.color.bluegray6}`,

    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    alignItems: 'center',

    textAlign: 'center',
  },
]);

export const rowItem = style({
  gridColumn: 'span 2',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const rowText = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const buttons = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',

  whiteSpace: 'nowrap',
});

const button = style({
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  backgroundColor: vars.color.blue,
  color: vars.color.white,

  whiteSpace: 'nowrap',

  ':hover': {
    opacity: 0.7,
  },
});

export const variantsButton = styleVariants({
  default: [button],
  disabled: [
    button,
    {
      opacity: 0.7,
      cursor: 'default',
    },
  ],
});

export const modal = style({
  width: '100%',
  height: '100vh',
  overflow: 'scroll',
});
