import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const wrapper = style({
  marginBottom: '24px',

  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
});

export const sectionTitleWrapper = style({
  padding: '0 16px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const sectionTitle = style({
  color: '#323A43',
  fontSize: '1.8rem',
  fontWeight: 700,
  letterSpacing: '-0.54px',
});

export const itemsWrapper = style({
  padding: '0 0 0 16px',

  display: 'flex',
  alignItems: 'center',
  gap: '12px',

  overflowX: 'scroll',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const topic = style({
  padding: '14px',

  flexShrink: 0,
  textWrap: 'nowrap',

  backgroundColor: vars.color.white,
  borderRadius: '20px',
  fontWeight: '400',
  fontSize: '1.5rem',
  letterSpacing: '-3%',
  color: '#292929',
  cursor: 'pointer',
});

export const topicButton = style([
  topic,
  {
    backgroundColor: '#3D95FF',
    color: vars.color.white,
  },
]);

export const showMoreButton = style({
  color: '#637587',
  fontWeight: '400',
  fontSize: '1.4rem',
  letterSpacing: '-3%',
});
