import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

/**@todo 공용폰트 스타일 적용 */

export const commentOuterWrapper = style({
  marginBottom: '6px',

  position: 'relative',

  display: 'flex',
  justifyContent: 'space-between',
  gap: '16px',
});

export const profileImageParent = style({
  minWidth: '30px',
  width: '30px',
  height: '30px',
  position: 'relative',

  flex: '0 0 1',

  borderRadius: '16px',
});

export const profileImage = style({
  borderRadius: '16px',
  backgroundColor: vars.color.gray7,
});

export const commentWrapper = style({
  display: 'flex',
  gap: '8.85px',
  alignItems: 'flex-start',
});

export const commentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '8px',
});

export const commentInformationWrapper = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '8px',
});

export const commentWriter = style({
  fontSize: '1.2rem',
  fontWeight: 600,
  lineHeight: 'normal',
});

export const commentCreatedTime = style({
  fontSize: '1rem',
  fontWeight: 500,
  color: vars.color.gray9,
});

export const commentContent = style({
  fontSize: '1.2rem',
  fontWeight: 500,
  // lineHeight: 'normal',
  letterSpacing: '-0.36px',
  wordBreak: 'break-word',
  whiteSpace: 'pre-wrap',
});

export const deletedComment = style({
  fontSize: '1.2rem',
  fontWeight: 400,
  color: vars.color.gray9,
  lineHeight: 'normal',
  letterSpacing: '-0.36px',
});

export const actionButtonWrapper = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'flex-start',
  marginTop: '20px',
});

export const editButton = style({
  cursor: 'pointer',
});

export const createReplyButton = style({
  padding: '0 0 0 40px',

  background: 'none',
  fontSize: '1rem',
  color: vars.color.gray9,
  fontWeight: 500,
});

export const commentAndReplyButtonWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
});
