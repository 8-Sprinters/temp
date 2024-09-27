import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const container = style({
  width: '100%',

  color: 'black',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',

  border: '1px solid lightgray',
  borderRadius: '10px',

  overflow: 'hidden',
});

export const image = style({
  width: '100%',
  minHeight: '5rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',

  backgroundColor: 'lightgray',
});

export const contentWrapper = style({
  padding: '1rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '0.5rem',
});

export const title = style({});

export const description = style({
  color: vars.color.gray9,
});

export const url = style({
  color: vars.color.gray7,
});
