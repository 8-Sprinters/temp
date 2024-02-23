import { style } from '@vanilla-extract/css';
import { bodySmall, labelLarge, titleMedium } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const container = style({
  width: '100%',
  padding: '2.9rem 2.1rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.9rem',

  borderRadius: '3rem',
  border: `1px solid ${vars.color.gray5}`,
  boxShadow: '0px 8px 15px 0px rgba(0, 0, 0, 0.15);',
});

export const title = style([
  titleMedium,
  {
    height: '24px',
    color: vars.color.gray9,
    textAlign: 'center',
  },
]);

export const items = style({
  width: '100%',
  padding: '0 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const item = style({
  padding: '0 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  color: vars.color.black,
});

export const inputBox = style([
  labelLarge,
  {
    paddingBottom: '5px',
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottom: `1px solid ${vars.color.gray5}`,
  },
]);

export const input = style([
  labelLarge,
  {
    caretColor: vars.color.blue,
    color: vars.color.black,
  },
]);

export const errorMessage = style([
  bodySmall,
  {
    paddingLeft: '1.8rem',
    height: '16px',
    color: vars.color.red,
  },
]);
