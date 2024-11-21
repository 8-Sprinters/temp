import { style, styleVariants, ComplexStyleRule } from '@vanilla-extract/css';
import { titleLarge, bodyMedium } from '@/styles/__font.css';
import { vars } from '@/styles/__theme.css';

export const container = style({
  width: '80%',
  padding: '1rem 0 1rem 0',
  display: 'grid',
  gridTemplateAreas: `
    "restaurant_cafe restaurant_cafe movie_drama"
    "entertainment_arts food_recipes food_recipes"
    "place travel travel"
    "dailylife_thoughts dailylife_thoughts music"
    "etc hobby_leisure hobby_leisure"
  `,
  gap: '1rem',
});

export const title = style([titleLarge]);

const category = style([
  bodyMedium,
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
  restaurant_cafeButton: [
    category,
    {
      gridArea: 'restaurant_cafe',
      backgroundColor: vars.color.skyblue,
    },
  ],
  musicButton: [
    category,
    {
      gridArea: 'music',
      backgroundColor: '#FFDCB2', // orange
    },
  ],
  movie_dramaButton: [
    category,
    {
      gridArea: 'movie_drama',
      backgroundColor: vars.color.yellow,
    },
  ],
  entertainment_artsButton: [
    category,
    {
      gridArea: 'entertainment_arts',
      backgroundColor: '#D0FF89', // green
    },
  ],
  dailylife_thoughtsButton: [
    category,
    {
      gridArea: 'dailylife_thoughts',
      backgroundColor: '#E6C6FF', // purple
    },
  ],
  travelButton: [
    category,
    {
      gridArea: 'travel',
      backgroundColor: '#E6C6FF', // purple,
    },
  ],
  placeButton: [
    category,
    {
      gridArea: 'place',
      backgroundColor: vars.color.skyblue,
    },
  ],
  hobby_leisureButton: [
    category,
    {
      gridArea: 'hobby_leisure',
      backgroundColor: '#D0FF89', // green
    },
  ],
  food_recipesButton: [
    category,
    {
      gridArea: 'food_recipes',
      backgroundColor: '#FFDCB2', // orange
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
