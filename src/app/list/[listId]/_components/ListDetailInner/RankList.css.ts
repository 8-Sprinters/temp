import { createVar, style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const listColor = createVar();

export const background = style({
  width: '100%',
  padding: '2.4rem 1.8rem',

  backgroundColor: listColor,
});

export const container = style({
  width: '100%',
  padding: '2.7rem',

  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',

  backgroundColor: vars.color.white,

  borderRadius: '30px',
});

export const listWrapper = style({
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  gap: '1.6rem',
});

export const simpleItemWrapper = style({
  width: '100%',
  height: '7rem',

  display: 'flex',
  justifyContent: 'space-between',
  gap: '4rem',
  alignItems: 'center',
});

export const detailItemWrapper = style({
  width: '100%',
  marginBottom: '6rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  alignItems: 'left',

  ':last-child': {
    marginBottom: 0,
  },
});

export const commentText = style({
  width: '100%',
  padding: '2rem',

  backgroundColor: vars.color.white,

  border: `1px solid ${vars.color.gray5}`,
  borderRadius: '10px',

  fontSize: '1.4rem',
});

export const rankAndTitle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '2rem',
});

export const rankWrapper = style({
  width: '35px',
  height: '35px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const rankTextWrapper = style({
  width: '40px',
  height: '40px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,

  fontSize: '2.4rem',
  fontWeight: 'bold',
  textAlign: 'center',
});

export const firstRankTextWrapper = style({
  width: '40px',
  height: '40px',

  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,

  fontSize: '2.4rem',
  fontWeight: 'bold',
  color: vars.color.white,
  textAlign: 'center',
});

export const crownIcon = style({
  position: 'absolute',
  bottom: '30px',
});

export const top3RankTextWrapper = style({
  width: '40px',
  height: '40px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,

  backgroundColor: vars.color.lightblue,
  borderRadius: '99px',

  fontSize: '2.4rem',
  fontWeight: 'bold',
  color: vars.color.blue,
  textAlign: 'center',
});

export const rankText = style({
  position: 'relative',
});

export const titleText = style({
  fontSize: '2rem',
});

export const simpleImageWrapper = style({
  width: '7rem',
  height: '7rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  textAlign: 'center',
});

export const detailImageWrapper = style({
  // width: '100%',
  height: 'fit-content',

  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  textAlign: 'center',
});

export const simpleImage = style({
  width: '7rem',
  height: '7rem',

  borderRadius: '10px',
  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.15)',

  objectFit: 'cover',
});

export const detailImage = style({
  width: '100%',
  maxHeight: '35rem',
  height: 'fit-content',

  border: `1px solid ${vars.color.gray5}`,
  borderRadius: '10px',

  objectFit: 'cover',
});
