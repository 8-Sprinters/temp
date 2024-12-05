import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';
import { Label } from '@/styles/font.css';

export const info = style({
  padding: '25px 16px 40px',

  display: 'flex',
  flexDirection: 'column',

  backgroundColor: vars.color.blue,
});

export const category = style([
  Label,
  {
    width: 'fit-content',
    padding: '6px 12px',
    textAlign: 'center',

    backgroundColor: vars.color.white,
    borderRadius: '16px',

    color: vars.color.bluegray8,
  },
]);

export const title = style({
  marginTop: '14px',
  marginBottom: '11px',

  color: vars.color.white,
  fontSize: '2rem',
  fontWeight: '600',
});

export const description = style({
  marginBottom: '4px',

  color: vars.color.white,
  fontSize: '1.4rem',
});

export const created = style({
  color: vars.color.bggray,
  fontSize: '1rem',
});

export const contents = style({
  paddingTop: '2rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});
