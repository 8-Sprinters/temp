import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
/**
 * @todo 공용 폰트 스타일로 지정
 */

export const wrapper = style({
  width: '100%',
  height: '100%',

  padding: '55px 0',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: '#fff',
  borderRadius: '20px',
});

export const message = style({
  marginBottom: '8px',

  fontSize: '1.8rem',
  fontWeight: 600,
  lineHeight: '1.6',
  letterSpacing: '-3%',
  color: '#3C4F76',
});

export const button = style({
  padding: '7px 14px',
  borderRadius: '20px',
  border: '1px solid #3D95FF4D',
  color: '#3D95FF',
});
