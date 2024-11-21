import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/font.css';

export const accordion = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1.1rem 1.6rem ',

  backgroundColor: vars.color.white,
  borderRadius: '1.2rem',
});

//헤더
export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  color: vars.color.red,
});

export const rank = style([
  fonts.Label,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '4.2rem',
    height: '2.6rem',

    color: vars.color.blue,
    backgroundColor: vars.color.lightblue,
    borderRadius: '1.5rem',
  },
]);

export const variantRank = styleVariants({
  default: [rank],
  first: [rank, { color: vars.color.white, backgroundColor: vars.color.blue }],
});

export const titleInput = style([
  fonts.BodyBold,
  {
    flexGrow: 1,
    color: vars.color.bluegray10,
    '::placeholder': { color: vars.color.bluegray6 },
  },
]);

//TODO: 모바일에서 아코디언 아이콘 잘 눌리는지 확인하기
export const accordionIconWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '2rem',
  height: '2.6rem',
});

//콘텐트
export const hr = style({
  width: '100%',
  strokeWidth: '0.4rem ',
  stroke: vars.color.bluegray8,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const commentTextarea = style([
  fonts.Label,
  {
    resize: 'none',
    border: 'none',
    outline: 'none',
    '::-webkit-scrollbar': {
      width: '0', // 스크롤바 너비를 0으로 설정하여 숨김
    },

    color: vars.color.bluegray10,
    '::placeholder': { color: vars.color.bluegray6 },
  },
]);

export const length = style([
  fonts.Label,
  {
    width: '100%',

    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',

    color: vars.color.bluegray6,
  },
]);

export const toolsContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const toolsWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const imageInput = style({
  display: 'none',
});

export const deleteButton = style([
  fonts.Label,
  {
    color: vars.color.blue,
  },
]);

export const previewContainer = style({
  display: 'flex',
  gap: '10px',
});
