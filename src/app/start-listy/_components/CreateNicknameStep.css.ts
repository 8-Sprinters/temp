import { style, styleVariants } from '@vanilla-extract/css';
import { bodyLarge, labelMedium, titleLarge, titleMedium, titleRegular } from '@/styles/__font.css';
import { vars } from '@/styles/__theme.css';

export const background = style({
  minHeight: '100vh',
  maxWidth: '430px',
  padding: '4.6rem 2rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',

  backgroundColor: vars.color.lightblue,
});

// header
export const header = style({
  width: '95%',
  display: 'flex',
  justifyContent: 'space-between',
});

export const headerButton = style({
  width: '10%',
  padding: '1rem 1rem 1rem 0',
  display: 'flex',
  justifyContent: 'flex-start',
  cursor: 'pointer',
});

// step container
export const step = style({
  width: '95%',
  position: 'relative',
});

export const stepText = style([
  labelMedium,
  {
    paddingTop: '10px',
    color: vars.color.gray9,
  },
]);

export const stepContainer = style({
  width: '95%',
  display: 'flex',
  justifyContent: 'flex-end',
});

export const skipButton = style({
  padding: '0.5rem 0 0.5rem 1.6rem',
  color: vars.color.gray9,
});

// bar container
export const barContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '2.5px',
});

// progress bar
export const bar = styleVariants({
  default: {
    width: '100%',
    height: '10px',
    position: 'absolute',

    borderRadius: '10px',
    backgroundColor: vars.color.gray5,
  },
  progress: {
    height: '10px',
    position: 'absolute',

    borderRadius: '10px',
    backgroundColor: vars.color.skyblue,
    transition: 'all 300ms linear',
  },
});

export const statusBar = styleVariants({
  zero: [bar.progress, { width: '1%' }],
  divide: [bar.progress, { width: '33%' }],
  half: [bar.progress, { width: '50%' }],
  sixty: [bar.progress, { width: '66%' }],
  full: [bar.progress, { width: '100%' }],
});

// input form container
export const container = style({
  width: '100%',
  padding: '5rem 2.2rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',

  backgroundColor: vars.color.white,
  borderRadius: '3rem',
});

// title
export const title = style([
  titleLarge,
  {
    textAlign: 'center',
  },
]);

export const subTitle = style([
  titleRegular,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    color: vars.color.gray9,
  },
]);

export const inputWrapper = style({
  padding: '1rem 0 1rem 0',
  width: '80%',
});

// input, errormessage
export const input = style([
  bodyLarge,
  {
    paddingBottom: '0.5rem',
    width: '100%',
    textAlign: 'center',
    borderBottom: `1px solid ${vars.color.blueGray}`,
    caretColor: vars.color.blue,

    ':focus': {
      borderBottom: `1px solid ${vars.color.blue}`,
    },
  },
]);

export const errorMessage = style([
  bodyLarge,
  {
    height: '34px',
    paddingTop: '1rem',
    textAlign: 'center',
    color: vars.color.red,
  },
]);

// button
export const button = style([
  titleMedium,
  {
    width: '100%',
    padding: '1.4rem 7.6rem',
    marginTop: '2rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',

    borderRadius: '5rem',
    transition: 'all 500ms ease',
  },
]);

export const variant = styleVariants({
  default: [
    button,
    {
      color: vars.color.gray7,
      backgroundColor: vars.color.lightblue,
    },
  ],
  active: [
    button,
    {
      color: vars.color.white,
      backgroundColor: vars.color.blue,
    },
  ],
});
