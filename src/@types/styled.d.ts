import { DefaultTheme } from 'styled-components';

interface IBadgeColors {
  el: string,
  text: string,
}

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
          blue: IBadgeColors,
          green: IBadgeColors,
          yellow: IBadgeColors,
          purple: IBadgeColors,
          orange: IBadgeColors,
        }
      }
    }
  }
}
