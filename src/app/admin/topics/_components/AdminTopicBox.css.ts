import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/font.css';

export const bodyRow = style([
  fonts.Label,
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

export const container = style({
  width: '100%',
  padding: '12px',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',

  position: 'relative',

  backgroundColor: vars.color.white,
  borderRadius: '20px',
  cursor: 'pointer',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  rowGap: '10px',
});

export const topicWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  columnGap: '8px',
});

export const buttonWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const exposedButton = style([
  button,
  {
    backgroundColor: vars.color.blue,
    color: vars.color.white,
  },
]);

export const notExposedButton = style([
  button,
  {
    backgroundColor: vars.color.lightgray,
    color: vars.color.white,
  },
]);

export const editButton = style([
  button,
  {
    border: '1px solid #3D95FF80',
    backgroundColor: vars.color.white,
    color: vars.color.blue,
  },
]);

export const category = style([
  fonts.Label,
  {
    padding: '6px 12px',

    border: `0.5px solid ${vars.color.lightgray}`,
    borderRadius: '20px',

    color: vars.color.lightgray,
  },
]);

export const topic = style([fonts.BodyBold, { color: vars.color.black }]);

export const contentWrapper = style([
  fonts.Label,
  {
    width: '100%',
    paddingLeft: '4px',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    color: vars.color.black,
  },
]);

export const bottomWrapper = style({
  width: '100%',
  paddingLeft: '4px',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
});

export const author = style({
  fontSize: '1.3rem',
  color: vars.color.bluegray10,
});

export const anonymous = style({
  fontSize: '1.3rem',
  color: vars.color.blue,
});

export const click = style({
  fontSize: '1.3rem',
  color: vars.color.blue,
});

export const addBtn = style({
  width: '56px',
  height: '56px',

  position: 'absolute',
  bottom: '12px',
  right: '12px',

  borderRadius: '50%',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',

  backgroundColor: vars.color.white,
});
