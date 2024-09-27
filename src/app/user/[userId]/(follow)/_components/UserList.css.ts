import { style } from '@vanilla-extract/css';
import * as fonts from '@/styles/__font.css';
import { vars } from '@/styles/__theme.css';

export const container = style({
  width: '100%',
  padding: '0 18px',

  display: 'flex',
  flexDirection: 'column',
  rowGap: '12px',
});

export const profileContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: '12px',

  fontSize: '1.6rem',
  fontWeight: '600',
});

export const button = style([
  fonts.caption,
  {
    height: '24px',
    padding: '8px 12px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    fontSize: '1.6rem',
    color: vars.color.blue,
    backgroundColor: '#EBF4FF',

    borderRadius: '50px',
  },
]);

export const emptyMessage = style({
  marginTop: '69px',

  fontSize: '1.6rem',

  textAlign: 'center',
});
