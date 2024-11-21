import { style, createVar } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/font.css';

export const form = style({
  maxWidth: 400,
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
});

export const field = style({
  display: 'flex',
  flexDirection: 'column',
});

export const inputContainer = style({
  width: '100%',
  padding: '1.2rem 1.4rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '8px',

  borderRadius: '1.2rem',
  backgroundColor: vars.color.white,
});

export const label = style([
  fonts.BodyBold,
  {
    marginBottom: '1.2rem',
  },
]);

export const inputText = style([
  fonts.BodyRegular,
  {
    color: vars.color.bluegray10,
    '::placeholder': {
      color: vars.color.bluegray6,
    },
  },
]);

export const textarea = style([
  fonts.BodyRegular,
  {
    border: 'none',
    resize: 'none',

    color: vars.color.bluegray10,
    '::placeholder': {
      color: vars.color.bluegray6,
    },
  },
]);

export const textLength = style([
  fonts.BodyRegular,
  {
    color: vars.color.bluegray6,
    textAlign: 'end',
  },
]);

export const inputFile = style({
  display: 'none',
});

export const imageUrl = createVar();

const option = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: vars.color.bggray,
  backgroundImage: imageUrl,
  backgroundSize: 'cover',

  cursor: 'pointer',

  border: `2px solid ${vars.color.white}`,

  selectors: {
    '&:hover': {
      border: `2px solid ${vars.color.blue}`,
    },
  },
});

export const selectedOption = style({
  border: `2px solid ${vars.color.blue}`,
});

export const backgroundOptionContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: '1fr 1fr',
  gridColumnGap: 8,
  gridRowGap: 10,

  overflow: 'scroll',
});

export const backgroundOption = style([
  option,
  {
    maxWidth: 85,
    height: 47,

    borderRadius: 15,
  },
]);

export const profileOptionContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 14,

  position: 'relative',

  overflow: 'scroll',
});

export const profileOption = style([
  option,
  {
    width: '100%',
    minWidth: 30,
    maxWidth: 50,

    borderRadius: '50%',

    selectors: {
      '&::before': {
        content: '',
        display: 'block',
        paddingBottom: '100%',
      },
    },
  },
]);

export const validationMessage = style({
  marginTop: '0.6rem',
  marginLeft: '0.6rem',

  display: 'flex',
  alignItems: 'center',
  gap: '0.45rem',
});

export const errorText = style([
  fonts.Label,
  {
    color: vars.color.red,
  },
]);

export const successText = style([
  fonts.Label,
  {
    color: vars.color.blue,
  },
]);
