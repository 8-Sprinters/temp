import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const wrapper = style({
  padding: '0 16px',
});

export const sectionTitle = style({
  color: '#323A43',
  fontSize: '1.8rem',
  fontWeight: 700,
  letterSpacing: '-0.54px',
});

export const titleWrapper = style({
  marginBottom: '12px',

  display: 'flex',
  alignItems: 'baseline',
  gap: '5px',
});

export const recommendUsersListWrapper = style({
  marginBottom: '12px',

  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  overflowX: 'scroll',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const recommendUserWrapper = style({
  padding: '12px 9px',
  paddingBottom: '84px',

  width: '122px',
  height: 'auto',

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 0,
  flexShrink: 0,
});

export const closeButton = style({
  position: 'absolute',
  top: 16,
  right: 12,
});

export const imageWrapper = style({
  marginBottom: '10px',
  width: '122px',
  height: '122px',

  position: 'relative',
});

export const recommendUserProfileImage = style({
  position: 'relative',

  borderRadius: '50%',
  backgroundColor: vars.color.lightblue,
});

export const recommendUserNickname = style({
  color: '#121417',
  marginBottom: '6px',
  textAlign: 'center',
  fontSize: '14px',
  fontWeight: 400,
  letterSpacing: '-0.28px',
});

export const followButtonDefault = style({
  width: 'auto',
  height: 'auto',
  padding: '4px 6px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '#3D95FF',
  borderRadius: '20px',
  color: vars.color.white,
  fontSize: '1.2rem',
  fontWeight: '400',
});

export const followButtonFollowing = style({
  backgroundColor: vars.color.white,
  color: '#8599AD',
});
