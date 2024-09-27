import { style, createVar } from '@vanilla-extract/css';

import { BodyBold, LabelSmall } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const imageUrl = createVar();

export const container = style({
  padding: '2.1rem 2rem 1.9rem 2rem',
  width: '100%',
  height: '225px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 68%), ${imageUrl} lightgray 50% / cover no-repeat`,
  backgroundPosition: 'center',

  borderBottomLeftRadius: '4.5rem',
  borderBottomRightRadius: '4.5rem',
});

export const header = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const skeletonProfileContainer = style({
  paddingBottom: '2rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const skeletonTextContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const icon = style({
  cursor: 'pointer',
});

export const profile = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.9rem',
});

export const profileImageWrapper = style({
  width: '4.8rem',
  height: '4.8rem',

  borderRadius: '50%',
  backgroundColor: vars.color.white,
});

export const profileImage = style({
  width: '4.8rem',
  height: '4.8rem',
  padding: '2px',
  borderRadius: '50%',
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
});

export const user = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '1rem',
});

export const nickName = style([
  BodyBold,
  {
    color: vars.color.black,
  },
]);

export const follow = style({
  display: 'flex',
  gap: '1rem',
});

export const text = style([
  LabelSmall,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',

    color: vars.color.black,

    cursor: 'pointer',
  },
]);

export const description = style([
  LabelSmall,
  {
    padding: '0.3rem 0.8rem',
    width: 'fit-content',

    borderRadius: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.50)',
  },
]);
