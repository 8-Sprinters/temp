import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';
import { Label, LabelSmall } from '@/styles/font.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.1rem',

  maxWidth: '185px',
  width: '100%',
  padding: '1.2rem',

  borderRadius: '2.4rem',
  backgroundColor: vars.color.white,

  cursor: 'pointer',
  transition: 'all 200ms ease',

  ':hover': {
    boxShadow: `0px 2px 3px -1px rgba(0,0,0,0.1), 
    0px 1px 0px 0px rgba(25,28,33,0.02), 
    0px 0px 0px 1px rgba(25,28,33,0.08)`,
  },

  '@media': {
    // 화면이 414px 이하일 때,
    'screen and (max-width: 414px)': {
      // iPhone XR, 갤럭시 S20
      maxWidth: '180px',
    },
    'screen and (max-width: 400px)': {
      // 중간 point
      maxWidth: '171px',
    },
    'screen and (max-width: 390px)': {
      // iPhone 12 Pro
      maxWidth: '165px',
    },
    'screen and (max-width: 375px)': {
      // iPhone SE
      maxWidth: '160px',
    },
  },
});

export const visible = style({
  backgroundColor: vars.color.lightblue,
});

export const title = style({
  fontSize: '1.7rem',
  fontWeight: '600',
  color: vars.color.black,
  textAlign: 'start',
  letterSpacing: '-0.51px',
  wordBreak: 'break-all',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',

  color: vars.color.black,
});

export const label = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const visibilityLabel = style([
  LabelSmall,
  {
    padding: '0.4rem 1rem',
    height: '2.6rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.2rem',

    color: vars.color.blue,

    borderRadius: '1.7rem',
    backgroundColor: '#F4F8FD',
  },
]);

export const item = style({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
});

export const rank = style([
  Label,
  {
    width: '1.6rem',
  },
]);

export const itemTitle = style([
  Label,
  {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
]);
