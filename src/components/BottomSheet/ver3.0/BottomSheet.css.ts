import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { Subtitle } from '@/styles/font.css';

const containerStyle = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  margin: 'auto',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  borderRadius: '40px 40px 0px 0px',
  background: vars.color.white,
  boxShadow: '0px -4px 40px 0px #D9D9D9',

  transition: 'all 0.2s linear',
  zIndex: -1,
});

export const container = styleVariants({
  open: [containerStyle, { height: 216, opacity: 1, zIndex: 1 }],
  close: [containerStyle, { height: 0.5, opacity: 0 }],
});

export const contents = style({
  paddingTop: '3.3rem',
  paddingLeft: '2rem',
  paddingRight: '2rem',

  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const contentTitle = style([
  Subtitle,
  {
    color: vars.color.black,
    textAlign: 'center',
  },
]);

export const optionButtons = style({
  margin: 12,
  display: 'flex',
  justifyContent: 'space-between',
  height: '100%',
});

const button = style({
  flexGrow: 1,

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',

  fontSize: '1.6rem',
  fontWeight: 400,
  color: vars.color.black,
});

export const variantButton = styleVariants({
  default: [button],
  active: [button, { color: vars.color.blue }],
  delete: [button, { color: vars.color.red }],
});
