import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const addButton = style([
  fonts.bodyLarge,
  {
    width: '100%',
    height: '60px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',

    color: vars.color.gray9,

    backgroundColor: '#FFF',

    border: 'solid 1px #AFB1B6 ',
    borderRadius: '15px',
  },
]);
