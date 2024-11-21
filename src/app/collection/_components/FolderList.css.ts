import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { Label } from '@/styles/font.css';

export const folders = style({
  padding: '2.4rem 4.8rem 8.3rem 4.8rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridColumnGap: 34,
  gridRowGap: 24,
});

export const folder = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16,
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      transform: 'translateY(-10%)',
    },
  },
  transition: 'transform 0.2s ease',
});

export const title = style([
  Label,
  {
    maxWidth: 130,
    display: 'flex',
    gap: 6,
    alignItems: 'center',
    color: vars.color.black,
  },
]);

export const folderName = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});
