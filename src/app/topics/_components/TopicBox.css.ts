import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/font.css';

export const container = style({
  width: '100%',
  padding: '12px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  rowGap: '10px',

  position: 'relative',

  backgroundColor: vars.color.white,
  borderRadius: '20px',
  cursor: 'pointer',
});

export const topicWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  columnGap: '8px',
});

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
  justifyContent: 'space-between',
});

export const author = style({
  fontSize: '1.3rem',
  color: vars.color.bluegray10,
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
