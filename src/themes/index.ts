import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    elements: {
      board_card: '#FFF',
      body: '#F8F9FD',
      boards_list: '#F8F9FD',
      button: {
        primary: '#2F80ED',
        secondary: '#F2F2F2',
        board: '#DAE4FD',
        board_user: '#BDBDBD',
        card_save: '#219653',
      },
      header: '#FFF',
      badge: {
        blue: {
          el: '#D5E6FB',
          text: '#2F80ED',
        },
        green: {
          el: '#D3EADD',
          text: '#219653' },
        yellow: {
          el: '#FCF4DB',
          text: '#F2C94C'
        },
        purple: {
          el: '#EBDCF9',
          text: '#9B51E0'
        },
        orange: {
          el: 'rgba(242, 153, 74, 0.2)',
          text: '#F2994A'
        },
      }
    }
  }
}
