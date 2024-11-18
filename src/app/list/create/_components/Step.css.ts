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

export const subLabel = style([fonts.BodyRegular, { lineHeight: '150%' }]);

export const requiredIcon = style({
  color: vars.color.blue,
});

export const inputDiv = style({
  display: 'flex',
  padding: '1.2rem 1.6rem',
  borderRadius: '1.2rem',

  background: vars.color.white,
});

export const input = style([
  fonts.BodyRegular,
  {
    width: '100%',

    color: vars.color.bluegray10,
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

    color: vars.color.bluegray10,
  },
]);

export const errorMessage = style([fonts.Label, { marginLeft: '4px', color: vars.color.red }]);

export const categoryChipGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.8rem',
});

export const categoryChip = style([
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

export const selectedCategoryChip = style([
  fonts.Label,
  categoryChip,
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

/** STEP2 아이템 DND */
export const itemList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const item = style([
  fonts.Label,
  {
    transition: 'box-shadow 0.3s ease',
    cursor: 'grab',
  },
]);

export const draggingItem = style([
  item,
  {
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
  },
]);

export const addButton = style([
  fonts.BodyBold,
  {
    width: '100%',
    padding: '1.6rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',

    color: vars.color.blue,

    backgroundColor: vars.color.white,

    border: `solid 0.1rem ${vars.color.blue}`,
    borderRadius: '1.2rem',
  },
]);

export const minimumMessage = style([
  fonts.LabelBold,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    padding: '0.6rem',
    marginBottom: '1rem',

    borderRadius: '1rem',
    backgroundColor: vars.color.blue,
    color: vars.color.white,
  },
]);

/** STEP3 */
//라벨(태그)
export const labelList = style({
  display: 'flex',
  gap: '0.7rem',
});

export const labelChip = style([
  fonts.Label,
  {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',

    width: 'auto',
    padding: '0.6rem 1.2rem',
    borderRadius: '2rem',

    backgroundColor: vars.color.lightblue,
    color: vars.color.blue,
  },
]);

//배경색상
export const tapContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const tapButton = style([
  fonts.Label,
  {
    padding: '0.6rem 1.2rem',
    borderRadius: '2rem',

    color: vars.color.bluegray8,

    cursor: 'pointer',
  },
]);

export const selectedTapButton = style([
  tapButton,
  {
    color: vars.color.white,
    backgroundColor: vars.color.blue,
  },
]);

export const colorChipContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const colorChip = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '5.5rem',
  height: '5.5rem',

  borderRadius: '50%',
  border: `0.2rem solid ${vars.color.white}`,
});

export const radioContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const radioOptionsWrapper = style({
  display: 'flex',
  gap: '1.6rem',
});

export const radioOption = style({
  cursor: 'pointer',
});

//동그라미 체크박스
export const radioInput = style({
  appearance: 'none',
  verticalAlign: 'middle',

  width: '1.6rem',
  height: '1.6rem',
  marginLeft: '0',
  marginRight: '0.8rem',

  borderRadius: '50%',
  border: `0.2rem solid ${vars.color.lightgray}`,

  cursor: 'pointer',

  ':checked': {
    border: `0.4rem solid ${vars.color.blue}`,
  },
});

export const radioLabel = style([fonts.Label, { verticalAlign: '-0.3rem' }]);

export const radioMessage = style([
  fonts.Label,
  {
    lineHeight: '2.0rem',
    color: vars.color.bluegray8,
  },
]);
