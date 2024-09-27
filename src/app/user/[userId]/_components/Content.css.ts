import { style } from '@vanilla-extract/css';

import { Subtitle, Label } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const container = style({
  // position: 'absolute',

  // (참고 - 내부 카드 영역만 스크롤되도록 구현 시) 상하단 요소 크기에 맞춰 높이 조정 (100vh - 프로필 영역 제외)
  // height: 'calc(100vh - 225px)',
  backgroundColor: vars.color.bggray,
});

export const contentInfo = style({
  padding: '1.65rem 1.6rem 0.65rem 1.9rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const infoTitle = style([
  Subtitle,
  {
    color: vars.color.deepblue10,
  },
]);

export const collectionButton = style([
  Label,
  {
    padding: '0.9rem 1.2rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: ' 0.7rem',

    color: vars.color.blue,

    borderRadius: '2rem',
    backgroundColor: vars.color.white,
  },
]);

export const cards = style({
  padding: '0.1rem 2.1rem 1rem 2.1rem',
  marginBottom: '84px',

  textAlign: 'center',

  // (참고 - 내부 카드 영역만 스크롤되도록 구현 시) 상하단 요소 크기에 맞춰 높이 조정 (100vh - 타이틀, 카테고리 영역 제외)
  // height: 'calc(100% - 100px)',
  // overflowY: 'auto',
});

export const stickyContainer = style({
  position: 'sticky',
  top: '-1px', // observer API로 sticky 영역이 stuck 상태임을 감지하기 위해

  zIndex: 1,
  background: vars.color.bggray,
});

export const scrollDivTop = style({
  position: 'absolute',
  top: 0,

  width: '100%',
  height: '1px',

  background: 'linear-gradient(360deg, rgba(245, 246, 250, 0.00) 35.68%, #F5F6FA 92.16%)',
  opacity: 0,

  transition: 'opacity 0.3s ease',
});

export const scrollDivBottom = style({
  position: 'fixed',
  bottom: '84px',

  width: '100%',
  height: '83px',

  background: 'linear-gradient(180deg, rgba(245, 246, 250, 0.00) 0%, #F5F6FA 100%)',
  opacity: 0,

  transition: 'opacity 0.3s ease',
});

export const visibleScrollDivTop = style({
  top: '100px',
  height: '83px',
  opacity: 1,
});

export const visibleScrollDiv = style({
  opacity: 1,
});

export const gridSkeletonContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1.6rem',
});

export const nodataContainer = style({
  minHeight: '250px',
});

export const target = style({
  width: '100%',
  height: '2px',
});

export const scrollBottomTarget = style({
  height: '2px',
  width: '100%',
});
