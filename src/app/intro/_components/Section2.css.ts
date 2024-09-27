import { style, createVar } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const customBackgroundImage = createVar();

export const background = style({
  width: '100%',
  height: '658px',
  paddingBottom: '42px',

  background: 'linear-gradient(180deg, #42BAFF 15.35%, rgba(66, 186, 255, 0.00) 76.44%)',
});

export const wrapper = style({
  width: '100%',
  height: '500px',
  paddingTop: '136px',

  position: 'relative',

  overflow: 'hidden',
});

export const imageWrapper = style({
  position: 'absolute',

  width: '100%',
});

export const tapeImageWrapper = style([
  imageWrapper,
  {
    width: '100%',
    height: '170px',
    left: '45%',
    transform: 'translateX(-50%)',

    bottom: 50,
    zIndex: 10,
  },
]);

export const tapeImageParent = style({
  width: '100%',
  height: 'auto',
  position: 'relative',

  backgroundImage: customBackgroundImage,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
});

export const titleWrapper = style({
  width: '100%',

  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '36px',
});

export const description = style([
  fonts.titleLarge,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    color: vars.color.white,
  },
]);

export const title = style({
  color: '#fff',
  fontSize: '3.2rem',
  fontWeight: 800,
  wordBreak: 'keep-all',
});
