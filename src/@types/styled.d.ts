import { DefaultTheme } from 'styled-components';

export module 'styled-components' {
  interface DefaultTheme {
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
}
