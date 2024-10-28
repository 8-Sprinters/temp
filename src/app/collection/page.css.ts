import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { Label } from '@/styles/font.css';

export const wrapper = style({
  height: '100vh',
});

export const container = style({
  position: 'relative',
  height: 'calc(100% - 70px)',
  backgroundColor: vars.color.bggray,
});

export const folders = style({
  padding: '2.4rem 4.8rem 8.3rem 4.8rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridColumnGap: 34,
  gridRowGap: 24,
});

// 폴더
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

// 폴더 버튼
export const addFolderButtonContainer = style({
  position: 'fixed',
  bottom: 0,
  padding: '1.6rem',
  width: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const addFolderButton = style({
  padding: '16px 10px 14px 10px',
  width: '100%',
  maxWidth: 358,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,

  border: '1px solid rgba(61, 149, 255, 0.50)',
  borderRadius: 18,
  backgroundColor: vars.color.white,

  color: vars.color.blue,
  fontSize: '1.6rem',
  fontWeight: 700,
});

// BottomSheet Input
export const contentInput = style({
  padding: '2rem 2.4rem',
  backgroundColor: '#F5F6FA',
  borderRadius: 18,

  color: vars.color.black,
  fontSize: '1.6rem',
  fontWeight: 400,
});
