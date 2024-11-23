import { globalStyle } from '@vanilla-extract/css';
import { Pretendard } from './pretendardFont.css';
import { vars } from './theme.css';

globalStyle('html', {
  fontSize: '62.5%',
  color: vars.color.black,
  backgroundColor: vars.color.white,
});

globalStyle('body *', {
  boxSizing: 'border-box',
  fontFamily: Pretendard,
  WebkitTapHighlightColor: 'rgba(0,0,0,0) !important',
});

globalStyle('body, div, span, h1, h2, h3, h4, h5, h6, p, a, dl, dt, dd, ol, ul, li, form, label, table, button', {
  margin: 0,
  padding: 0,
  border: 0,
});

globalStyle('a', {
  textDecoration: 'none !important',
  color: vars.color.black,
  cursor: 'pointer',
});

globalStyle('button', {
  cursor: 'pointer',
  color: vars.color.black,
  backgroundColor: 'transparent',
  WebkitTapHighlightColor: 'rgba(0,0,0,0) !important',
});

globalStyle('input', {
  border: 'none',
  padding: 0,
});

globalStyle('input:focus', {
  outline: 'none',
});
