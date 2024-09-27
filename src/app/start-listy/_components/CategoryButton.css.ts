import { style, styleVariants, ComplexStyleRule } from '@vanilla-extract/css';
import { titleLarge, titleMedium } from '@/styles/__font.css';
import { vars } from '@/styles/__theme.css';

export const container = style({
  width: '80%',
  padding: '1rem 0 1rem 0',
  display: 'grid',
  gridTemplateAreas: `
    "culture life life"
    "movie movie music"
    "place book book"
    "animal animal animal"
    "food food etc"
  `,
  gap: '1rem',
});

export const title = style([titleLarge]);

const category = style([
  titleMedium,
  {
    padding: '0.8rem 1.2rem',
    height: '40px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    border: `2px solid ${vars.color.lightblue}`,
    borderRadius: '1rem',
    color: vars.color.black,

    selectors: {
      '&:hover': {
        boxShadow: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
      },
    },
  },
]);

interface ColorVariantsType {
  [key: string]: ComplexStyleRule;
}

export const variants = styleVariants<ColorVariantsType>({
  lifeButton: [
    category,
    {
      gridArea: 'life',
      backgroundColor: vars.color.skyblue,
    },
  ],
  placeButton: [
    category,
    {
      gridArea: 'place',
      backgroundColor: '#FFDCB2', // orange
    },
  ],
  musicButton: [
    category,
    {
      gridArea: 'music',
      backgroundColor: vars.color.yellow,
    },
  ],
  movie_dramaButton: [
    category,
    {
      gridArea: 'movie',
      backgroundColor: '#D0FF89', // green
    },
  ],
  cultureButton: [
    category,
    {
      gridArea: 'culture',
      backgroundColor: '#E6C6FF', // purple
    },
  ],
  bookButton: [
    category,
    {
      gridArea: 'book',
      backgroundColor: '#E6C6FF', // purple,
    },
  ],
  animal_plantButton: [
    category,
    {
      gridArea: 'animal',
      backgroundColor: vars.color.skyblue,
    },
  ],
  foodButton: [
    category,
    {
      gridArea: 'food',
      backgroundColor: '#D0FF89', // green
    },
  ],
  etcButton: [
    category,
    {
      gridArea: 'etc',
      backgroundColor: '#FFDCB2', // orange
    },
  ],
});

export const selected = style({
  border: `2px solid ${vars.color.blue}`,
});
