import { style, createVar } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { headlineSmall, titleMedium, caption } from '@/styles/font.css';

/**@todo 트렌딩 리스트 바뀐 디자인에 맞게 새로 갈아엎을 예정 */

export const blackLayer = createVar();
export const itemFontColor = createVar();

export const customWidth = createVar();
export const customPadding = createVar();
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
  height: '200px',
  padding: '0 40px',
  width: customWidth,
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
});

export const ownerProfileWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
});

export const itemTitle = style([
  titleMedium,
  {
    marginBottom: '16px',
    color: customFontColor,
    textAlign: 'center',
    zIndex: 1,
    overflow: 'hidden',
    whiteSpace: 'normal',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    wordBreak: 'keep-all',
  },
]);

export const itemTitleContent = style({
  display: 'inline',
});

export const profileImageWrapper = style({
  width: '32px',
  height: '32px',

  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const profileImage = style({
  background: vars.color.gray5,
  borderRadius: '50px',
  border: `2px solid ${vars.color.white}`,
});

export const profileTransparentBlack = style({
  width: '100%',
  height: '100%',

  border: `2px solid ${vars.color.white}`,
  borderRadius: '50px',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  zIndex: 1,
});

export const ownerNickname = style([
  caption,
  {
    color: customFontColor,
    zIndex: 1,
  },
]);
