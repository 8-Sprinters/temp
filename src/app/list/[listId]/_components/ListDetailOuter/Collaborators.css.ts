import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const collaboratorWrapper = style({
  position: 'relative',
  display: 'flex',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'translateZ(0px)',
});

export const profileImageParent = style({
  marginRight: '-7px',
  width: 35,
  height: 35,

  position: 'relative',
});

export const profileImage = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  border: `3px solid ${vars.color.white}`,
  backgroundColor: vars.color.white,
  borderRadius: '9999px',
});

export const profilePlus = style({
  width: 35,
  height: 35,
  backgroundColor: vars.color.gray7,
});

export const profileText = style({
  color: vars.color.lightblue,
  fontSize: '1.5rem',
});

export const collaboratorsPopOverWrapper = style({
  display: 'none',

  selectors: {
    [`${collaboratorWrapper}:hover &`]: {
      display: 'block',
    },
  },
});
