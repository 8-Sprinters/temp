import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import { title3, body1 } from '@/styles/__font.css';

export const header = style({
  width: '100%',
  height: '90px',
  paddingLeft: '20px',
  paddingRight: '20px',

  position: 'sticky',
  top: '0',
  left: '0',
  zIndex: '10',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: vars.color.white,

  borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
});

export const headerTitle = style([title3]);

export const baseButton = style([body1]);

export const headerNextButton = styleVariants({
  active: [baseButton],
  inactive: [baseButton, { color: vars.color.gray7, cursor: 'default' }],
});
