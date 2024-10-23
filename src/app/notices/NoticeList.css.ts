import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const noticeListWrapper = style({
  marginTop: '14px',
  padding: '0 16px',

  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const listItemWrapper = style({
  padding: '18px 14px',

  display: 'flex',
  justifyContent: 'space-between',

  backgroundColor: vars.color.white,
  borderRadius: '16px',
});

export const noticeTitle = style({
  marginBottom: '12px',

  color: '#323A43',
  fontSize: '1.6rem',
  fontWeight: '600',
  letterSpacing: '-3%',
});

export const noticeDescription = style({
  marginBottom: '10px',

  color: '#323A43',
  fontWeight: '400',
  fontSize: '1.4rem',
  letterSpacing: '-3%',
});

export const noticeInformationContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const timeStamp = style({
  color: '#495866',
  fontWeight: '400',
  fontSize: '1.3rem',
  letterSpacing: '-3%',
});

export const category = style({
  padding: '2px 6px',

  color: '#3D95FF',
  fontSize: '1.3rem',
  fontWeight: '500',
  // border: '0.5px solid #8599AD99',
  borderRadius: '9999px',
  backgroundColor: '#E3EEFF',
});

export const imageWrapper = style({
  position: 'relative',

  width: '90px',
  height: 'auto',

  flexShrink: 0,
});

export const image = style({
  borderRadius: '16px',
});
