import { createStitches  } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      button_primary: '#2F80ED',
      button_secondary: '#F2F2F2',
    },
    fonts: {
      Poppins: 'Poppins',
      'Noto-Sans': 'Noto Sans',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: `${number}px` | `${number}rem`) => ({ marginLeft: value, marginRight: value }),
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: '$Poppins',
  }
});
