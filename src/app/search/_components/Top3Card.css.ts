import { style, createVar } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const listColor = createVar();
export const listBackgroundImage = createVar();

export const container = style({
  minWidth: '17rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const card = style({
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  rowGap: '1rem',
  columnGap: '1.6rem',
});

export const listWrapper = style({
  width: '100%',
  height: '26rem',
  padding: '3rem 1.8rem',

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  border: `1px solid ${vars.color.gray5}`,
  borderRadius: '10px',

  backgroundColor: listColor,
  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent), ${listBackgroundImage}`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  cursor: 'pointer',

  ':hover': {
    boxShadow: 'rgba(0, 0, 0, 0.3) 3px 3px 2px;',
    borderWidth: '1.5px',
  },
});

export const skeletonListWrapper = style([
  listWrapper,
  {
    cursor: 'default',
    ':hover': {
      boxShadow: 'none',
      borderWidth: '1px',
    },
  },
]);

export const userProfiles = style({
  width: '80%',

  position: 'absolute',
  bottom: '1rem',

  display: 'flex',
  alignItems: 'center',
  gap: '.8rem',
});

export const userImageWrapper = style({
  width: '3rem',
  height: '3rem',

  border: `1px solid ${vars.color.gray5}`,
  borderRadius: '50px',

  flexShrink: 0,

  overflow: 'hidden',
});

export const userImage = style({
  width: '100%',
  height: '100%',

  borderRadius: '50px',
  backgroundColor: vars.color.gray7,
  objectFit: 'cover',
});

export const userTextWrapper = style({
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const nameText = style({
  width: '100%',

  fontSize: '1.2rem',
  fontWeight: '400',
  color: vars.color.white,

  wordWrap: 'break-word',
});

export const updatedDateText = style({
  fontSize: '1.1rem',
  color: vars.color.white,
});

export const title = style({
  fontSize: '1.8rem',
  fontWeight: '600',
  color: 'var(--text-text-grey-dark, #202020)',
  textAlign: 'left',
  letterSpacing: '0.14px',
  wordWrap: 'break-word',
});

export const list = style({
  padding: '1rem 0',

  display: 'flex',
  flexDirection: 'column',
  gap: '.8rem',

  fontSize: '1.2rem',
  fontWeight: '400',
  color: vars.color.white,
  lineHeight: '2.5rem',
  letterSpacing: '-0.36px',
});
