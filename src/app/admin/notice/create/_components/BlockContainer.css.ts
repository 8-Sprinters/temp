import { BodyRegular } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '1rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const wrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const titleWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const drag = style({
  padding: '0.5rem',
  borderRadius: '0.5rem',
  border: `1px solid ${vars.color.lightgray}`,
});

export const title = style([BodyRegular]);

export const deleteButton = style({
  color: vars.color.red,
});

export const content = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});
