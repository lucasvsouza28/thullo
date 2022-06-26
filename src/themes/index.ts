interface ThulloTheme {
  colors: {
    elements: {
      header: string;
      body: string;
      boards_list: string;
      board_card: string;
      button: {
        primary: string;
        secondary: string;
        board: string;
        board_user: string,
        card_save: string,
      },
      badge: {
        blue: string,
        green: string,
        yellow: string,
        purple: string,
        orange: string,
      }
    }
  }
}

export const lightTheme: ThulloTheme = {
  colors: {
    elements: {
      board_card: '#FFF',
      body: '#FFF',
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
        blue: '#D5E6FB',
        green: '#D3EADD',
        yellow: '#FCF4DB',
        purple: '#EBDCF9',
        orange: 'rgba(242, 153, 74, 0.2)',
      }
    }
  }
}
