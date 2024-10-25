import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/font.css';

export const section = style({
  padding: '1.2rem 1.6rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  rowGap: '3.2rem',
});

export const description = style([
  fonts.Label,
  {
    color: vars.color.bluegray8,
    lineHeight: '2rem',
  },
]);

export const field = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  rowGap: '1.6rem',
});

export const label = style([fonts.Subtitle]);

export const requiredIcon = style({
  color: vars.color.blue,
});

export const inputDiv = style({
  display: 'flex',
  padding: '1.2rem 1.6rem',
  borderRadius: '1.2rem',
  color: vars.color.bluegray10,
  background: vars.color.white,
});

export const input = style([
  fonts.BodyRegular,
  {
    width: '100%',
    '::placeholder': { color: vars.color.bluegray6 },
  },
]);

export const length = style([fonts.BodyRegular, { color: vars.color.bluegray6 }]);

export const textarea = style([
  input,
  inputDiv,
  {
    resize: 'none',
    border: 'none',
    outline: 'none',
    '::-webkit-scrollbar': {
      width: '0', // 스크롤바 너비를 0으로 설정하여 숨김
    },
  },
]);

export const errorMessage = style([fonts.BodyRegular, { color: vars.color.red }]);

export const chipGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.8rem',
});

export const chip = style([
  fonts.Label,
  {
    width: 'auto',
    padding: '0.6rem 1.2rem',
    borderRadius: '2rem',

    color: vars.color.bluegray8,
    backgroundColor: vars.color.white,

    whiteSpace: 'nowrap',
  },
]);

export const selectedChip = style([
  fonts.Label,
  chip,
  {
    color: vars.color.blue,
    backgroundColor: vars.color.lightblue,
  },
]);

export const nextButton = style({
  all: 'inherit',
  cursor: 'pointer',
  ':disabled': { cursor: 'default', color: vars.color.bluegray6 },
});
