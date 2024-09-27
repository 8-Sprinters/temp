import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const backGround = style({
  position: 'fixed',
  margin: 'auto',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: 'rgba(0,0,0,0.3)',
  zIndex: 999,
});

export const wrapper = style({
  padding: '37px 0 43px',
  margin: 'auto',

  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  backgroundColor: '#ffffff',
  borderTopLeftRadius: '25px',
  borderTopRightRadius: '25px',

  transitionProperty: 'all',
  transitionDuration: '0.2s',
  overflow: 'none',
});

const slideIn = keyframes({
  from: { transform: 'translateY(100%)' },
  to: { transform: 'translateY(0)' },
});

export const sheetActive = style({
  animation: `${slideIn} 0.2s ease-in-out`,
});

export const sheetItemWrapper = style({
  width: '100%',
  textAlign: 'left',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  ':hover': {
    backgroundColor: vars.color.lightblue,
  },
});

export const checkIcon = style({
  display: 'none',
  marginRight: '28px',

  selectors: {
    [`${sheetItemWrapper}:hover &`]: {
      display: 'block',
    },
  },
});

export const sheetItem = style({
  width: '100%',
  fontSize: '1.4rem',
  cursor: 'pointer',
  padding: '2.5rem 2.8rem 2.5rem',

  selectors: {
    [`${sheetItemWrapper}:hover &`]: {
      color: vars.color.blue,
    },
  },
});

export const disabledSheetItemWrapper = style({
  ':hover': {
    backgroundColor: vars.color.gray3,
  },
});

export const disabledSheetItem = style({
  cursor: 'not-allowed',
  selectors: {
    [`${sheetItemWrapper}:hover &`]: {
      color: vars.color.gray7,
    },
  },
});

export const disabledCheckIcon = style({
  selectors: {
    [`${sheetItemWrapper}:hover &`]: {
      display: 'none',
    },
  },
});
