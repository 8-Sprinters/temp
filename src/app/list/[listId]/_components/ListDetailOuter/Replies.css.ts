import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import { caption1 } from '@/styles/__font.css';

/**@todo 공용폰트 스타일 적용 */

export const repliesOuterWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px',
});

export const repliesWrapper = style({
  marginTop: '16px',
});

export const replyWrapper = style({
  marginLeft: '30px',

  display: 'flex',
  gap: '8px',
});

export const showMoreRepliesWrapper = style({
  margin: '14px 0 23px 38px',

  display: 'flex',
  alignItems: 'center',
  gap: '3px',
});

export const showMoreReplies = style({
  fontSize: '1rem',
  color: vars.color.gray9,
  fontWeight: 500,
  cursor: 'pointer',
});

export const deleteButton = style({
  cursor: 'pointer',
});

export const profileImage = style({
  flex: '0 0 0',

  borderRadius: '16px',
  backgroundColor: vars.color.gray7,
});

export const replyContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const replyInformationWrapper = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '8.85px',
});

export const editButton = style({
  cursor: 'pointer',
});

export const actionButtonWrapper = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
});

export const replyWriter = style({
  fontSize: '1.2rem',
  fontWeight: 600,
});

export const replyCreatedTime = style({
  fontSize: '1rem',
  fontWeight: 500,
  color: vars.color.gray9,
});

export const replyContent = style({
  fontSize: '1.2rem',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.36px',
  whiteSpace: 'pre-wrap',
});
