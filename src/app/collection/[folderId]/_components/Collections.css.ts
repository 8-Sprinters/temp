import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  padding: '2.4rem 1.6rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: 'max-content',
  gridGap: 12,
  alignContent: 'flex-start',
  justifyItems: 'center',
  backgroundColor: vars.color.bggray,
});
