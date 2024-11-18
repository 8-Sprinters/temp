import { BodyRegular } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

/** ContentsContainer */
export const container = style({
  padding: '1rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const wrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const title = style([BodyRegular]);

export const deleteButton = style({
  color: vars.color.red,
});

export const content = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

/** BodyContent */
export const contentButton = style({
  width: 100,
  padding: '1rem 1.5rem',
  borderRadius: 8,
  backgroundColor: vars.color.blue,

  color: vars.color.white,
  fontWeight: 500,
  fontSize: 14,
});

/** SubTitleContent, ButtonContent */
export const input = style([
  BodyRegular,
  {
    width: '100%',
    padding: '8px',
    borderRadius: '8px',
    '::placeholder': {
      fontSize: '14px',
    },
  },
]);

/** NoteContent */
export const textArea = style([
  BodyRegular,
  {
    width: '100%',
    height: '120px',
    padding: '8px',

    borderRadius: '8px',
    border: 'none',
    resize: 'none',
    outline: 'none',

    '::placeholder': {
      fontSize: '14px',
    },
  },
]);

/** ButtonContent */
export const buttonTitle = style({
  display: 'block',
  marginBottom: '1rem',
  fontSize: 14,
});

/** ImageContent */
export const imageContainer = style({
  position: 'relative',
});

const defaultImageBox = style({
  width: 700,
  height: 300,
  objectFit: 'cover',
  borderRadius: '8px',
  display: 'block',
  background: vars.color.white,
});

export const deleteImageButton = style({
  position: 'absolute',
  top: '10px',
  left: '10px',
});

export const imageBox = styleVariants({
  empty: [
    defaultImageBox,
    {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
  ],
  full: [defaultImageBox],
});

export const hidden = style({
  display: 'none',
});
