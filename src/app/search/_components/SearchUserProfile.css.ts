import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',
  gap: '1rem',

  ':hover': {
    transform: 'translateY(-10px)',
    transition: 'transform 0.3s ease',
  },
});

export const skeletonContainer = style([
  container,
  {
    cursor: 'default',
    ':hover': {
      transform: 'none',
      transition: 'none',
    },
  },
]);

export const profileImageWrapper = style({
  width: '4.2rem',
  height: '4.2rem',

  border: `1px solid ${vars.color.gray5}`,
  borderRadius: '50px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const nicknameText = style({
  width: '6rem',

  fontSize: '1.1rem',
  fontWeight: '500',
  textAlign: 'center',
});
