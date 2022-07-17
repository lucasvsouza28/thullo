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
      button_save: '#219653',
      element_header: '#FFF',
      element_board_card: '#FFF',
    },
    fonts: {
      Poppins: 'Poppins',
      'Noto-Sans': 'Noto Sans',
    },
    radii: {
      4: '4px',
      8: '8px',
      12: '12px',
      full: '999px',
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
