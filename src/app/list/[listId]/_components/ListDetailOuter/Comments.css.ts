import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

/**@todo 공용폰트 스타일 적용 */

export const wrapper = style({
  height: 'auto',
  padding: '0 27.5px 94px',
});

export const formWrapperOuter = style({
  padding: '10px 10px',
  margin: 'auto',

  width: '100%',
  height: 'auto',

  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,

  display: 'flex',
  alignItems: 'flex-end',
  gap: '4px',

  background: vars.color.white,
  zIndex: 1,
});

export const formWrapperInner = style({
  width: '100%',
  height: 'auto',
  padding: '7px 12px',

  display: 'flex',
  flexDirection: 'column',
  gap: '4px',

  borderRadius: '50px',
  border: `1px solid ${vars.color.gray5}`,
  backgroundColor: vars.color.gray3,
});

export const activeFormWrapper = style({
  borderRadius: '10px',
});

export const formContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const formInput = style({
  width: '100%',
  height: '20px',
  maxHeight: '60px',

  flex: '1 0 0',

  display: 'block',
  overflow: 'hidden',
  resize: 'none',
  outline: 'none',
  border: 'none',
  fontSize: '1.6rem',
  wordBreak: 'break-all',
  wordWrap: 'break-word',
  whiteSpace: 'pre-wrap',
  backgroundColor: vars.color.gray3,
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const replyNickname = style({
  marginRight: '8px',

  flex: '1 0 0',

  fontSize: '1.2rem',
  fontWeight: 400,
  color: vars.color.gray7,
});

export const formButton = style({
  marginLeft: '16px',

  background: 'none',
  fontSize: '1.2rem',
  fontWeight: 500,
  letterSpacing: '-0.36px',
});

export const totalCount = style({
  marginBottom: '15px',

  fontSize: '1.2rem',
  fontWeight: 600,
});

export const profileImageParent = style({
  width: '30px',
  height: '30px',
  position: 'relative',
});

export const profileImage = style({
  borderRadius: '16px',
  backgroundColor: vars.color.gray9,
});

export const commentWrapper = style({
  marginBottom: '20px',
});

export const activeReplyWrapper = style({
  padding: '5px 0px',
  display: 'flex',
  justifyContent: 'space-between',
});

export const replyNicknameWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const clearButton = style({
  cursor: 'pointer',
});
