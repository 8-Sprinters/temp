import { width } from './../../../components/Skeleton/Skeleton.css';
import { style, createVar } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import { headlineSmall, titleMedium, caption } from '@/styles/__font.css';

export const blackLayer = createVar();
export const itemFontColor = createVar();

export const customBorderRadius = createVar();
export const customBackgroundColor = createVar();
export const customFontColor = createVar();
export const customItemBorder = createVar();
export const customBackgroundImage = createVar();

export const sectionTitle = style([
  headlineSmall,
  {
    fontWeight: 600,
  },
]);

export const titleWrapper = style({
  marginBottom: '26px',
  padding: '0 16px',

  display: 'flex',
  alignItems: 'baseline',
  gap: '5px',
});

export const wrapper = style({
  marginTop: '50px',
  marginBottom: '50px',
});

export const listWrapper = style({
  marginBottom: '30px',
  height: '220px',

  display: 'flex',
  alignItems: 'center',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const sliderItem = style({
  height: 'auto',
});

export const listItem = style({
  cursor: 'pointer',
});

export const testItem = style({
  width: '100%',
  height: '100%',
});

export const slide = style({});

export const itemWrapper = style({
  width: '100%',
  height: '100%',
  padding: '0 40px',
  borderRadius: customBorderRadius,

  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: customBackgroundColor,
  border: customItemBorder,
  cursor: 'pointer',

  transition: 'transform 0.3s ease', // 애니메이션 효과를 부여할 속성 및 시간을 지정합니다.

  ':hover': {
    transform: 'scale(1.01)', // hover 시 scale을 1.02로 변경합니다.
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  },
});

export const itemWrapperWithImage = style([
  itemWrapper,
  {
    backgroundImage: customBackgroundImage,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 0,

    selectors: {
      '&:after': {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: customBorderRadius,
      },
    },
  },
]);

export const itemInformationWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: 4,
});

export const ownerProfileWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
});

export const itemTitle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',

  marginBottom: '16px',
  color: customFontColor,
  textAlign: 'center',
  zIndex: 1,
  overflow: 'hidden',
  whiteSpace: 'normal',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  wordBreak: 'keep-all',
});

export const itemTitleContent = style({
  display: 'inline',
  fontWeight: '600',
  fontSize: '1.8rem',
});

export const category = style({
  padding: '6px 12px',
  marginBottom: '16px',

  backgroundColor: '#3D95FF',
  color: '#fff',
  fontSize: '1.4rem',
  borderRadius: '20px',
});

export const listOwner = style({
  fontSize: '1.6rem',
  fontWeight: '400',
  letterSpacing: '-3%',
});

export const top3ItemNoImage = style({
  padding: '5px 7px',

  backgroundColor: '#F5FAFF',
  color: '#3D95FF',
  borderRadius: '20px',
});

export const top3ItemWithImage = style({
  padding: '5px 7px',

  color: '#ffffff',
  borderRadius: '20px',
  backgroundColor: '#F5FAFF4D',
});

export const top3Wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '7px',

  fontSize: '1rem',
});
