import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import { titleSmall, headlineSmall } from '@/styles/__font.css';

export const wrapper = style({
  padding: '0 16px',
});

export const sectionTitle = style([
  headlineSmall,
  {
    fontWeight: 600,
  },
]);

export const titleWrapper = style({
  marginBottom: '26px',

  display: 'flex',
  alignItems: 'baseline',
  gap: '5px',
});

export const recommendUsersListWrapper = style({
  marginBottom: '30px',

  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  overflowX: 'scroll',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const recommendUserWrapper = style({
  padding: '12px 9px',
  width: '160px',
  height: 'auto',

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 0,
  flexShrink: 0,

  borderRadius: '5px',
  border: `1px solid ${vars.color.gray5}`,
});

export const closeButton = style({
  position: 'absolute',
  top: 16,
  right: 12,
});

export const imageWrapper = style({
  marginBottom: '13px',
  width: '110px',
  height: '110px',

  position: 'relative',
});

export const recommendUserProfileImage = style({
  position: 'relative',

  borderRadius: '50%',
  backgroundColor: vars.color.lightblue,
});

export const recommendUserNickname = style([
  titleSmall,
  {
    marginBottom: '10px',

    color: vars.color.black,
  },
]);

export const followButtonDefault = style([
  titleSmall,
  {
    width: '100%',
    padding: '4px 0',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: vars.color.blue,
    borderRadius: '9px',
    color: vars.color.white,
  },
]);

export const followButtonFollowing = style({
  background: vars.color.white,
  border: `1px solid ${vars.color.black}`,
  color: vars.color.black,
});
