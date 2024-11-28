import { style, styleVariants, ComplexStyleRule } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

//TODO: 공용모달 ver3.0 새디자인 필요
export const background = style({
  margin: 'auto',
  width: '100vw',
  height: '100vh',
  zIndex: 100,

  position: 'fixed',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: 'rgba(25, 25, 27, 0.3)',
});

const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.4rem',

  backgroundColor: vars.color.white,
});

interface SizeVariantsType {
  [key: string]: ComplexStyleRule;
}

export const sizeVariants = styleVariants<SizeVariantsType>({
  basic: [
    container,
    {
      minWidth: '270px',
      margin: '0px 52px',
      padding: '24px',
      borderRadius: '8px',
    },
  ],
  large: [
    container,
    {
      minWidth: '327px',
      maxWidth: '420px',
      width: '100%',
      margin: '0px 24px',
      padding: '6rem 2.5rem',
      borderRadius: '3rem',
    },
  ],
  small: [
    container,
    {
      width: '220px',
      padding: '23px 22px',
      borderRadius: '24px',
    },
  ],
});
