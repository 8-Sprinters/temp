import { createThemeContract, createGlobalTheme } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    white: 'color-white',
    lightblue: 'color-lightblue',
    skyblue: 'color-skyblue',
    blue: 'color-blue',
    deepblue8: 'colpor-deepblue8',
    deepblue10: 'color-deepblue10',
    bluegray6: 'color-bluegray6',
    bluegray8: 'color-bluegray8',
    bluegray10: 'color-bluegray10',
    lightgray: 'color-lightgray',
    gray: 'color-gray',
    bggray: 'color-bggray',
    black: 'color-black',
    red: 'color-red',
  },
  // TODO 반응형 코드 수정 필요
  breakpoints: {
    common: 'mobile-common',
    medium: 'mobile-medium',
    mediumSmall: 'mobile-mediumSmall',
    small: 'mobile-small',
  },
});

createGlobalTheme(':root', vars, {
  color: {
    white: '#FFFFFF',
    lightblue: '#E5EEFE',
    skyblue: '#C5DFFF',
    blue: '#3D95FF',
    deepblue8: '#6A7DA1',
    deepblue10: '#3C4F76',
    bluegray6: '#B6C2CE',
    bluegray8: '#8599AD',
    bluegray10: '#637587',
    lightgray: '#B6BBBF',
    gray: '#7A7B7D',
    bggray: '#F5F6FA',
    black: '#323A43',
    red: '#FF0000',
  },
  // TODO 반응형 코드 수정 필요
  breakpoints: {
    common: '414px',
    medium: '400px',
    mediumSmall: '390px',
    small: '375px',
  },
});
