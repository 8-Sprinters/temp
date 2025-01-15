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

const rankBadge = style([
  fonts.Label,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '4.2rem',
    height: '2.6rem',

    color: vars.color.blue,
    backgroundColor: vars.color.lightblue,
    borderRadius: '1.5rem',

    whiteSpace: 'nowrap',
  },
]);

export const variantRankBadge = styleVariants({
  default: [rankBadge],
  first: [rankBadge, { color: vars.color.white, backgroundColor: vars.color.blue }],
});

export const titleInput = style([
  fonts.BodyBold,
  {
    flexGrow: 1, //남는 공간 차지하게
    minWidth: '0', //부모컨테이너에 맞춰 줄어들 수 있도록 강제 (안넣을 경우 내용에 맞춰서 크기 유지)

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
  flexShrink: 0, //아이콘은 줄어들지 않도록 설정
});

//콘텐트
export const hr = style({
  width: '100%',
  height: '0.4px',
  backgroundColor: vars.color.bluegray6,
  border: 0,
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
