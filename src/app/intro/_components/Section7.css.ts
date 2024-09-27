import { style, createVar } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

export const background = style({
  width: '100%',
  height: '827px',
  padding: '90px 30px 50px',

  background: 'linear-gradient(0deg, rgba(193, 232, 254, 0.35) 0%, rgba(235, 244, 255, 0.10) 100%)',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const contentsWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const sectionNameWrapper = style({
  marginBottom: '10px',

  display: 'flex',
  gap: '4px',
  alignItems: 'center',

  fontSize: '2.2rem',
  fontWeight: 600,
  letterSpacing: '0.088px',
});

export const titleWrapper = style([
  fonts.headlineLarge,
  {
    marginBottom: '20px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    whiteSpace: 'wrap',
  },
]);

export const wordBreakContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '@media': {
    '(max-width: 415px)': {
      flexDirection: 'column',
      gap: '4px',
    },
  },
});

export const titleBreak = style([fonts.headlineLarge, wordBreakContainer, {}]);
export const subTitleBreak = style([fonts.bodyRegular, wordBreakContainer, {}]);

export const subTitleWrapper = style([
  fonts.bodyRegular,
  {
    marginBottom: '50px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '7px',

    color: '#828282',
  },
]);

export const imageWrapper = style({
  position: 'relative',
});

export const linkWrapper = style([
  {
    padding: '12px 25px',

    position: 'absolute',
    top: 150,
    left: -40,

    backgroundColor: vars.color.white,
    borderRadius: '50px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
    fontSize: '1.4rem',
    fontWeight: 700,
  },
]);
