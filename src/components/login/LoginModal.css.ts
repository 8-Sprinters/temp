import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import { bodyRegular, titleLarge } from '@/styles/__font.css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2.4rem',
});

export const logoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2.4rem',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1.8rem',
});

export const text = style([
  bodyRegular,
  {
    color: vars.color.black,
  },
]);

export const variantText = style({
  color: vars.color.blue,
});

export const title = style([
  titleLarge,
  {
    color: vars.color.black,
  },
]);

export const buttonContainer = style({
  width: '100%',
  paddingTop: '2.4rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',

  borderTop: `1px solid ${vars.color.gray5}`,
});

export const buttonForLocal = style({
  height: '4.7rem',
  padding: '0.2rem',

  border: `1px solid ${vars.color.gray5}`,
  background: vars.color.lightblue,
  borderRadius: '1.2rem',
});
