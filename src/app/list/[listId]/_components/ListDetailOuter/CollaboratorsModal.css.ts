import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import * as fonts from '@/styles/__font.css';

/**
 * @todo 공용 폰트 스타일 적용
 */

export const wrapper = style({
  height: '200px',
  width: '100%',

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  gap: '15px',

  background: vars.color.white,
});

export const listWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '13px',

  overflow: 'scroll',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const cancelButton = style({
  position: 'absolute',
  right: 0,
});

export const itemWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const collaboratorTitle = style([
  fonts.labelLarge,
  {
    color: vars.color.black,
    textAlign: 'center',
  },
]);

export const profileImageParent = style({
  width: '25px',
  height: '25px',

  position: 'relative',
});

export const profileImage = style({
  borderRadius: '9999px',
});

export const nickname = style([
  fonts.labelSmall,
  {
    fontWeight: 600,
  },
]);
