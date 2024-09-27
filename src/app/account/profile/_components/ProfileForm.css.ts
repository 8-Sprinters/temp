import { style, createVar } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import { labelSmall, bodyMedium, caption } from '@/styles/__font.css';

export const form = style({
  maxWidth: 400,
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const inputContainer = style({
  width: '100%',
  padding: '10px 12px',

  display: 'flex',
  flexDirection: 'column',
  gap: '8px',

  border: `1px solid ${vars.color.gray5}`,
  borderRadius: 10,
});

export const label = style([labelSmall, { color: vars.color.gray7 }]);

export const inputText = style([bodyMedium]);

export const textarea = style([
  bodyMedium,
  {
    border: 'none',
    resize: 'none',
  },
]);

export const textLength = style([
  bodyMedium,
  {
    color: vars.color.gray7,
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

  backgroundColor: vars.color.gray5 /**TODO: white로 대체예정*/,
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
  marginLeft: '0.9rem',

  display: 'flex',
  alignItems: 'center',
  gap: '0.45rem',
});

export const errorText = style([
  caption,
  {
    color: vars.color.red,
  },
]);

export const successText = style([
  caption,
  {
    color: vars.color.blue,
  },
]);
