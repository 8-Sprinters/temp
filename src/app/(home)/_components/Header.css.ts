import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const headerWrapper = style({
  width: '100%',
  height: '40px',
  padding: '10px 16px',
  margin: '0 0 12px',
});

export const entireWrapper = style({
  display: 'flex',
  alignItems: 'centre',
  justifyContent: 'space-between',
});

export const homeTitleContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const homeTitle = style({
  fontWeight: '700',
  fontSize: '2rem',
  color: '#323A43',
});

export const authButton = style({
  padding: '4px 6px',

  borderRadius: '20px',
  backgroundColor: vars.color.white,
  color: '#637587',
  fontWeight: '600',
  letterSpacing: '-3%',
});

export const iconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '9px',
});

export const iconWrapperForMember = style({
  display: 'flex',
  alignItems: 'center',
  gap: '9px',
});

export const profileImageWrapper = style({
  width: '20px',
  height: '20px',

  position: 'relative',
});

export const profileImage = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: vars.color.white,
  borderRadius: '9999px',
});
