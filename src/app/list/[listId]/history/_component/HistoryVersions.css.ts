import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/font.css';

export const container = style({
  padding: '0px 18px',

  position: 'relative',
});

export const dateDropdown = style([
  fonts.LabelSmall,
  {
    position: 'absolute',
    top: '-65px',
    right: '5px',

    display: 'flex',
    alignItems: 'center',

    color: vars.color.gray,

    // float: 'right',
    cursor: 'pointer',
  },
]);

export const iconWrapper = style({
  position: 'absolute',
  top: '-5px',
  right: '5px',

  display: 'flex',
  alignItems: 'center',

  color: vars.color.gray,

  cursor: 'pointer',
});

export const iconButton = style({
  padding: '5px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'align-end',
  cursor: 'pointer',
});

export const eyeIcon = style({
  width: '20px',
  height: '20px',
  color: vars.color.bluegray8,
});

export const deleteIcon = style({
  width: '20px',
  height: '20px',
  color: vars.color.bluegray8,
});

export const title = style([
  fonts.Subtitle,
  {
    color: vars.color.black,
    textAlign: 'center',
  },
]);

export const date = style([
  fonts.Body,
  {
    color: vars.color.black,
    textAlign: 'center',
    marginTop: '5px',
  },
]);

export const itemsContainer = style({
  marginTop: '50px',
});

export const itemContainer = style({
  height: '74px',
  padding: '0 20px',

  display: 'flex',
});

export const itemTitle = style([fonts.Body, {}]);

export const itemRank = style([
  fonts.Subtitle,
  {
    marginRight: '20px',

    textAlign: 'center',
    minWidth: '21px',
  },
]);

export const crown = style({
  marginRight: '5px',

  position: 'relative',
  right: '9px',
  bottom: '5px',
});

export const noDataImage = style({
  marginTop: '40px',
});
