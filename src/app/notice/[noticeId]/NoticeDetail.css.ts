import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const titleSection = style({
  padding: '25px 16px 40px',

  display: 'flex',
  flexDirection: 'column',

  backgroundColor: '#3D95FF',
});

export const category = style({
  padding: '6px 12px',

  backgroundColor: vars.color.white,
  fontSize: '1.4rem',
  color: vars.color.bluegray8,
  borderRadius: '16px',
});

export const header = style({
  padding: '10px 16px 0',

  backgroundColor: vars.color.blue,
});

export const back = style({
  fontSize: '1.4rem',
  color: vars.color.lightgray,
  cursor: 'pointer',
});

export const title = style({
  marginTop: '14px',
  marginBottom: '11px',

  color: vars.color.white,
  fontSize: '2rem',
  fontWeight: '600',
});

export const titleSectionDescription = style({
  marginBottom: '4px',

  color: vars.color.white,
  fontSize: '1.4rem',
});

export const titleSectionCreatedDate = style({
  color: vars.color.bggray,
  fontSize: '1rem',
});

export const articleWrapper = style({
  padding: '20px 16px',
});

export const articleSubtitle = style({
  marginBottom: '12px',

  fontSize: '1.8rem',
  color: '#3E4455',
});

export const articleDescription = style({
  marginBottom: '12px',

  fontSize: '1.4rem',
  color: '#3E4455',
});

export const articleImageWrapper = style({
  marginBottom: '20px',

  position: 'relative',

  width: '100%',
  height: '400px',
});

export const articleImage = style({
  objectFit: 'cover',
});

export const articleButton = style({
  marginBottom: '24px',
  padding: '16px 14px',

  width: '100%',

  fontSize: '1.6rem',
  fontWeight: '700',
  backgroundColor: vars.color.white,
  color: vars.color.blue,
  border: `1px solid #3D95FF80`,
  borderRadius: '18px',
});

export const articleLine = style({
  margin: '0px 0 20px',

  display: 'flex',
  alignItems: 'center',
  width: '100%',
  borderTop: `1px solid ${vars.color.lightblue}`,
});

export const articleNotice = style({
  marginBottom: '12px',

  fontSize: '1.3rem',
  color: vars.color.bluegray8,

  width: '100%',
  minHeight: '120px',

  border: 'none',
  outline: 'none',
  resize: 'none',
});

export const signPostWrapper = style({
  padding: '12px 16px 32px',

  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const link = style({
  marginTop: '10px',

  fontSize: '1.4rem',
  color: vars.color.deepblue10,
});

export const listItemWrapper = style({
  padding: '18px 14px',

  display: 'flex',
  flexDirection: 'column',

  backgroundColor: vars.color.white,
  borderRadius: '16px',
});

export const noticeTitle = style({
  marginTop: '4px',

  color: '#323A43',
  fontSize: '1.6rem',
  fontWeight: '600',
  letterSpacing: '-3%',
});

export const noticeDescription = style({
  marginTop: '6px',

  color: '#323A43',
  fontWeight: '400',
  fontSize: '1.2rem',
  letterSpacing: '-3%',
});

export const sign = style({
  fontSize: '1.2rem',
  color: vars.color.deepblue10,
});
