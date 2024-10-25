import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { Label, LabelSmall } from '@/styles/font.css';

export const imageUrl = createVar();

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

const content = style({
  width: 173,
  height: 173,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundImage: imageUrl,
  backgroundPosition: 'center',
  backgroundColor: vars.color.white,
});

export const contentVariant = styleVariants({
  round: [content, { borderRadius: '100%' }],
  square: [content, { borderRadius: 20 }],
});

export const category = style([
  LabelSmall,
  {
    padding: '2px 6px',
    backgroundColor: vars.color.blue,
    borderRadius: 20,
    color: vars.color.white,
  },
]);

export const info = style({
  paddingTop: '0.6rem',
  paddingBottom: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,
});

// 배경이미지 유무에 따른 스타일 variants
const fontColor = {
  white: vars.color.white,
  black: vars.color.black,
};

export const title = styleVariants(fontColor, (color) => [
  Label,
  {
    color,
    fontWeight: 600,
  },
]);

export const owner = styleVariants(fontColor, (color) => [
  LabelSmall,
  {
    color,
    fontWeight: 400,
  },
]);

export const items = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 5,
});

const item = style({
  padding: '0.45rem 0.62rem',
  borderRadius: 18,
  display: 'flex',
  gap: 2,
  alignItems: 'center',
});

export const itemVariant = styleVariants({
  white: [
    item,
    {
      backgroundColor: '#F5FAFF',
      color: vars.color.blue,
    },
  ],
  blue: [
    item,
    {
      backgroundColor: 'rgba(245, 250, 255, 0.30)',
      color: vars.color.white,
    },
  ],
});

export const date = styleVariants(fontColor, (color) => ({
  paddingTop: '0.8rem',
  fontSize: '0.9rem',
  color,
}));
