import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const container = style({
  minHeight: '345px',
  padding: '24px 18px',

  position: 'relative',

  borderRadius: '20px',
  backgroundColor: vars.color.white,
  boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.10)',
});

export const dateDropdown = style([
  fonts.labelSmall,
  {
    position: 'absolute',
    top: '-40px',
    right: '5px',

    display: 'flex',
    alignItems: 'center',

    color: vars.color.gray9,

    // float: 'right',
    cursor: 'pointer',
  },
]);

export const kebabButton = style({
  width: '24px',
  height: '24px',

  position: 'absolute',
  right: '20px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  cursor: 'pointer',
});

export const kebabIcon = style({
  stroke: vars.color.gray7,
  fill: vars.color.gray7,
});

export const date = style([
  fonts.labelLarge,
  {
    paddingLeft: '110px',

    display: 'flex',
    alignItems: 'center',
    columnGap: '5px',

    color: vars.color.gray7,
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

export const itemTitle = style([fonts.bodyLarge, {}]);

export const itemRank = style([
  fonts.titleMedium,
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
