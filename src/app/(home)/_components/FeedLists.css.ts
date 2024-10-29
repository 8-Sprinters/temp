import { style, createVar, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const listBackground = createVar();

export const wrapperOuter = style({
  padding: '0 16px 30px',
  marginTop: '12px',

  display: 'flex',
  flexDirection: 'column',
});

export const titleWrapper = style({
  marginBottom: '26px',

  display: 'flex',
  alignItems: 'baseline',
  gap: '5px',
});

export const sectionTitle = style({
  fontWeight: 600,
});

const listWrapperHoverAnimation = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '100%': {
    transform: 'scale(1.01)',
  },
});

export const listWrapper = style({
  width: '100%',
  marginBottom: '35px',
  padding: '30px 24px 14px',

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  borderRadius: '24px',
  backgroundColor: '#fff',

  ':hover': {
    animation: `${listWrapperHoverAnimation} 0.1s forwards`,
    boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',
  },
});

export const listTopWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  marginBottom: '8px',
});

export const version = style({
  padding: '6px 12px',

  fontWeight: '400',
  letterSpacing: '-3%',
  fontSize: '1.4rem',
  color: '#3D95FF',
  backgroundColor: '#EEF6FF',
  borderRadius: '20px',
});

export const listInformationWrapper = style({
  marginBottom: '20px',

  display: 'flex',
  flexDirection: 'column',
});

export const listTitle = style({
  color: '#3E4455',
  wordBreak: 'break-word',
  fontWeight: '700',
  fontSize: '2rem',
  letterSpacing: '-3%',
});

export const listDescription = style({
  marginTop: '13px',

  fontWeight: '400',
  fontSize: '1.6rem',
  color: '#3E4455',
  wordBreak: 'break-word',
});

export const ownerInformationWrapper = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '8px',
});

export const ownerNicknameText = style({
  color: '#676B75',
  fontSize: '1.6rem',
  fontWeight: '500',
  letterSpacing: '-3%',
});

export const profileImageWrapper = style({
  width: '30px',
  height: '30px',

  position: 'relative',
});

export const ownerProfileImage = style({
  borderRadius: '50%',
});

export const simpleListWrapper = style({
  height: 'auto',
  padding: '20px 16px',
  marginBottom: '16px',

  display: 'flex',
  flexDirection: 'column',
  gap: '10px',

  borderTop: `1px solid ${vars.color.gray5}`,
  backgroundColor: vars.color.white,
});
