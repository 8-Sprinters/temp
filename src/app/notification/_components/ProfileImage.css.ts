import { vars } from '@/styles/__theme.css';
import { style } from '@vanilla-extract/css';

export const profileImageContainer = style({
  width: 45,
  height: 45,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,

  position: 'relative',

  backgroundColor: 'white',

  borderRadius: '50%',
  border: `1px solid ${vars.color.blue}`,

  overflow: 'hidden',
});
