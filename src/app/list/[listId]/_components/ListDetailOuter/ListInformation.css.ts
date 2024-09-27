import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import { body2, title3, bodyRegular } from '@/styles/__font.css';
/**@todo 공용폰트 스타일 적용 */

export const wrapper = style({
  padding: '25px 32px 15px',
});

export const noDataWrapper = style({
  width: '100%',
  height: '80vh',
  marginBottom: '40px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const noDataButton = style([
  bodyRegular,
  {
    color: vars.color.red,
  },
]);

export const categoryWrapper = style({
  marginBottom: '25px',

  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const labelWrapper = style({
  marginRight: '8px',
  cursor: 'pointer',
});

export const listTitle = style([
  title3,
  {
    marginBottom: '1.6rem',
  },
]);

export const listDescription = style([
  body2,
  {
    color: vars.color.black,
    wordBreak: 'break-word',
  },
]);

export const listComponentTemporary = style({
  padding: '0 38px',

  height: '604px',
});

export const bottomWrapper = style({
  padding: '21px 24px 25px',

  display: 'flex',
  justifyContent: 'space-between',
});

export const bottomLeftWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '7px',
});

export const informationWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const profileImageParent = style({
  width: '36px',
  height: '36px',
  position: 'relative',

  cursor: 'pointer',
});

export const profileImage = style({
  borderRadius: '9999px',
  backgroundColor: vars.color.gray7,
});

export const listOwnerNickname = style({
  fontSize: '1.2rem',
  fontWeight: 600,
  lineHeight: 'normal',
});

export const infoDetailWrapper = style({
  display: 'flex',
  gap: '7.5px',

  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: 'normal',
  color: vars.color.black,
});

export const collaboratorWrapper = style({
  display: 'flex',
  cursor: 'pointer',
});
