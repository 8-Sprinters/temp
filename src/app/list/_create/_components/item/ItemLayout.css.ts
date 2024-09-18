import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const itemHeader = style({
  width: '100%',

  flexGrow: 0,

  display: 'flex',
  alignItems: 'center',
  gap: '12px',

  overflow: 'hidden',
});

export const titleError = style([
  fonts.bodySmall,
  {
    marginBottom: '4px',
    flexShrink: '0',
    color: vars.color.red,
  },
]);

export const headerIcon = style({
  flexShrink: '0',
});

export const rankAndTitle = style({
  flexGrow: 1,

  display: 'flex',
  gap: '8px',
});

export const details = style({
  borderTop: `solid 1px ${vars.color.gray5} `,
});

export const moreInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const countLength = style({
  width: '100%',

  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
});

export const toolbar = style({
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const fileButtons = style({
  height: '18px',

  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const previewContainer = style({
  display: 'flex',
  gap: '10px',
});
