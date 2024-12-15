import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const contents = style({
  padding: '1rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const item = style({
  transition: 'box-shadow 0.3s ease',
});

export const draggingItem = style([
  item,
  {
    backgroundColor: vars.color.lightblue,
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
  },
]);

export const block = style({
  padding: '0.5rem',
  borderRadius: 4,
  background: vars.color.bluegray6,
  fontSize: 14,
});
