import { style } from '@vanilla-extract/css';

export const wrapper = style({
  height: 'auto',
  padding: '20px 24px',
});

export const formWrapper = style({
  padding: '15px 10px',

  width: '100%',
  height: 'auto',

  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,

  display: 'flex',
  alignItems: 'center',
  gap: '4px',

  border: '1px solid rgba(0, 0, 0, 0.10)',
  background: '#fff',
  zIndex: 30,
});

export const form = style({
  width: '100%',
  height: '30px',
  padding: '8px 12px',

  display: 'flex',

  borderRadius: '50px',
  border: '1px solid #D9D9D9',
});

export const formInput = style({
  width: 'inherit',
  height: 'auto',

  flex: '1 0 0',
  wordBreak: 'break-all',
  wordWrap: 'break-word',
  whiteSpace: 'pre-wrap',
  resize: 'none',
});

export const formNickname = style({
  marginRight: '8px',

  fontSize: '1.2rem',
  fontWeight: 500,
});

export const formButton = style({
  marginLeft: '45px',

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

export const commentOuterWrapper = style({
  marginBottom: '10px',

  position: 'relative',

  display: 'flex',
  justifyContent: 'space-between',
});

export const commentWrapper = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
});

export const commentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
});

export const commentInformationWrapper = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '8px',
});

export const commentWriter = style({
  fontSize: '1.2rem',
  fontWeight: 600,
});

export const commentCreatedTime = style({
  fontSize: '1rem',
  fontWeight: 500,
  color: '#494949',
});

export const commentContent = style({
  fontSize: '1.2rem',
  fontWeight: 500,
});

export const profileImage = style({
  width: '30px',
  minWidth: '30px',
  height: '30px',
  flex: '0 0 1',

  borderRadius: '16px',
  backgroundColor: '#909090',
});

export const repliesOuterWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px',
});

export const repliesWrapper = style({});

export const replyWrapper = style({
  marginLeft: '30px',

  display: 'flex',
  gap: '8px',
});

export const showMoreRepliesWrapper = style({
  marginLeft: '30px',
  marginBottom: '25px',

  display: 'flex',
  alignItems: 'center',
  gap: '3px',
});

export const showMoreReplies = style({
  fontSize: '1rem',
});

export const createReplyButton = style({
  padding: '0 0 0 36px',
  marginBottom: '16px',

  background: 'none',
  fontSize: '1rem',
  color: '#494949',
  fontWeight: 500,
});

export const deleteButton = style({
  cursor: 'pointer',
});

export const formNicknameWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const clearButton = style({
  width: '20px',
  height: '20px',
});
