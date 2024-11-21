import { BodyBold, BodyRegular, LabelSmall } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  background: vars.color.bggray,
});

export const field = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const row = style({
  width: '100%',
  padding: '0 1rem',
  display: 'flex',
  alignItems: 'baseline',
  gap: '1rem',
});

export const rowLabel = style([
  BodyBold,
  {
    width: 50,
  },
]);

export const rowInput = style([
  BodyRegular,
  {
    width: '100%',
    padding: '8px',
    flexGrow: 1,
    borderRadius: '8px',
    '::placeholder': {
      fontSize: '12px',
    },
  },
]);

export const rowErrorMessage = style([
  LabelSmall,
  {
    color: vars.color.red,
    paddingLeft: '8px',
  },
]);

const button = style({
  padding: '1rem 0.8rem',
  margin: '1rem',
  color: vars.color.white,
  background: vars.color.blue,
  borderRadius: '0.8rem',
});

export const savedButton = styleVariants({
  default: [button, { opacity: 0.5 }],
  active: [button],
});
