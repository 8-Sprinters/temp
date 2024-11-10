import { style } from '@vanilla-extract/css';
import * as fonts from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const header = style({
  width: '100%',
  height: '50px',
  paddingLeft: '16px',
  paddingRight: '16px',

  position: 'sticky',
  top: '0',
  left: '0',
  zIndex: '10',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  backgroundColor: vars.color.bggray,
  color: vars.color.black,
});

export const flexChild = style({
  flex: 'auto',
});

export const headerTitle = style([
  fonts.Subtitle,
  {
    textAlign: 'center',
  },
]);

export const leftChild = style([
  fonts.BodyRegular,
  {
    display: 'flex',
    flex: 1,
    justifyContent: 'left',
    color: vars.color.bluegray10,
  },
]);

export const rightChild = style([
  fonts.BodyRegular,
  {
    display: 'flex',
    flex: 1,
    justifyContent: 'right',
    color: vars.color.bluegray10,
  },
]);
