import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const listSkeletonWrapper = style({
  width: '370px',
  height: '490px',
  padding: '44px 24px 14px',
  marginBottom: '24px',

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  borderRadius: '24px',
  gap: '24px',
  backgroundColor: vars.color.gray3,
});

export const listWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const trendingListSkeletonWrapper = style({
  height: '229px',
  padding: '0 16px',
  marginBottom: '24px',
  marginTop: '30px',

  display: 'flex',
  gap: '12px',
  overflow: 'scroll',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const UserListsSkeletonWrapper = style({
  height: '210px',
  padding: '0 16px',
  marginBottom: '24px',
  marginTop: '30px',

  display: 'flex',
  gap: '12px',
  overflow: 'scroll',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const userSkeletonWrapper = style({
  display: 'flex',
  gap: '10px',
});
