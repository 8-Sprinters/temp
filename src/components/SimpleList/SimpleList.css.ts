import { style } from '@vanilla-extract/css';

export const simpleItemWrapper = style({
  width: '100%',
  height: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '40px',
  alignItems: 'center',
});

export const rankAndTitle = style({
  minHeight: '50px',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '16px',
});

export const rankWrapper = style({
  position: 'relative',
  width: '35px',
  height: '35px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
});

export const rankText = style({
  color: '#707681',
  fontSize: '1.8rem',
  fontWeight: '500',
  letterSpacing: '-0.6px',
  zIndex: 1,
});

export const rank1 = style([
  rankText,
  {
    color: '#3D95FF',
  },
]);

export const heart = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const titleText = style({
  color: '#3E4455',
  fontSize: '1.6rem',
  wordBreak: 'break-all',
  wordWrap: 'break-word',
});

export const titleRank1 = style([
  titleText,
  {
    fontWeight: '600',
    color: '#3D95FF',
  },
]);

export const simpleImageWrapper = style({
  width: '48px',
  height: '50px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,

  textAlign: 'center',
});

export const simpleImage = style({
  width: '48px',
  height: '50px',

  borderRadius: '10px',
  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.15)',

  objectFit: 'cover',
});
