import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const background = style({
  width: '100%',
  height: 'auto',

  background: 'linear-gradient(180deg, rgba(193, 232, 254, 0.35) 0%, rgba(235, 244, 255, 0.10) 100%)',
});

export const wrapper = style({
  padding: '6px 17px 90px',
});

export const buttonsWrapper = style({
  width: '100%',
  height: '389px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const buttonContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const button = style({
  width: '182px',
  padding: '13px 0',

  display: 'flex',
  justifyContent: 'center',

  fontSize: '1.8rem',
  fontWeight: 600,
  color: vars.color.white,
  borderRadius: '50px',
});

export const blueButton = style([
  button,
  {
    backgroundColor: vars.color.blue,
  },
]);

export const skyBlueButton = style([
  button,
  {
    backgroundColor: '#82C3FF',
  },
]);

export const policyWrapper = style([
  fonts.bodySmall,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',

    color: vars.color.gray7,
  },
]);
