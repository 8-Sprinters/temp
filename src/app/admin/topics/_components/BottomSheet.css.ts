import { keyframes, style } from '@vanilla-extract/css';
import * as fonts from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const backGround = style({
  zIndex: 99,
  position: 'fixed',
  margin: 'auto',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: 'rgba(0,0,0,0.3)',
});

const slideIn = keyframes({
  from: { transform: 'translateY(100%)' },
  to: { transform: 'translateY(0)' },
});

export const bottomsheet = style({
  height: 'fit-content',
  padding: '35px 20px 49px',
  margin: 'auto',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: vars.color.bggray,
  borderTopLeftRadius: '25px',
  borderTopRightRadius: '25px',
  transition: 'all 0.2s ease-in-out',
  animation: `${slideIn} 0.2s ease-in-out`,
});

export const header = style([
  fonts.Header,
  {
    marginBottom: '10px',
  },
]);

export const subText = style([
  fonts.Label,
  {
    color: vars.color.bluegray8,
    marginBottom: '30px',
  },
]);

export const upperWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const selectWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

export const categoryButton = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100px',
  padding: '10px',
  borderRadius: '8px',
  cursor: 'pointer',
});

export const categoryText = style({
  color: vars.color.bluegray10,
});

export const arrow = style({
  color: vars.color.bluegray6,
  fontSize: '14px',
});

export const dropdown = style({
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '110px',
  backgroundColor: 'white',
  border: `1px solid ${vars.color.bluegray6}`,
  borderRadius: '8px',
  marginTop: '5px',
  zIndex: 4,
});

export const dropdownItem = style([
  fonts.LabelSmall,
  {
    padding: '7px 20px',
    color: vars.color.bluegray10,

    cursor: 'pointer',
    ':hover': {
      backgroundColor: vars.color.bluegray8,
    },
  },
]);

export const checkbox = style({
  appearance: 'none',
  width: '19px',
  height: '19px',
  marginRight: '8px',
  color: 'white',
  backgroundColor: 'white',
  border: `1px solid ${vars.color.bluegray6}`,
  borderRadius: '0px',
  position: 'relative',

  selectors: {
    '&:checked': {
      backgroundColor: vars.color.blue,
      borderColor: vars.color.blue,
    },
    '&:checked::before': {
      content: '"✓"',
      color: 'white',
      fontSize: '18px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
});

export const checkboxLabel = style([
  fonts.Body,
  {
    color: vars.color.bluegray10,
  },
]);

export const inputWrapper = style({
  margin: '25px auto',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '15px;',
});

export const input = style([
  fonts.Body,
  {
    width: '100%',
    padding: '15px',
    color: vars.color.bluegray10,
    backgroundColor: 'white',
    borderRadius: '8px',
    fontSize: '14px',
  },
]);

export const anonymousWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const submitButton = style([
  fonts.BodyBold,
  {
    width: '100%',
    padding: '16px 10px',
    marginTop: '80px',
    color: 'white',
    backgroundColor: vars.color.blue,
    borderRadius: '18px',
    cursor: 'pointer',
    textAlign: 'center',
    ':disabled': {
      backgroundColor: vars.color.lightgray,
      cursor: 'not-allowed',
    },
  },
]);

export const errorMessage = style([
  fonts.Label,
  {
    color: vars.color.red,
    marginLeft: '12px',
  },
]);

export const modalContainer = style({
  position: 'relative',
});

export const modalText = style([fonts.BodyBold]);

export const buttonContainer = style({
  width: '100%',

  display: 'flex',
  justifyContent: 'flex-end',
  gap: '16px',
});

export const modalButton = style([
  fonts.BodyBold,
  {
    zIndex: '900',
    width: '30%',
    padding: '10px 30px',
    color: 'white',
    backgroundColor: vars.color.blue,
    borderRadius: '13px',
  },
]);
