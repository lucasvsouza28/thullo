import { useCallback } from 'react';
import Card from '../../../components/Card';
import * as SC from './board-lists.styles';

type UserType = {
  name: string,
  avatar?: string,
}

type CardType = {
  title: string,
  image?: string,
  tags?: string[],
  users: UserType[],
}

type BoardType = {
  title: string,
  items: CardType[],
}

const BoardLists = () => {
  const boards: BoardType[] = [
    {
      title: 'Backlog',
      items: [
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: [{ avatar: '', name: 'Lucas Souza' }, { avatar: 'https://cataas.com/cat', name: 'Adriana Domingues' },{ avatar: 'https://cataas.com/cat', name: 'Cacá' }] },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: [] },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: [] },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: [] },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: [] },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: [] },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: [] },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: [] },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: [] },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: [] },
      ]
    },
  ];

  const handleAddUser = useCallback((board: BoardType, card: CardType) => {
    console.log('onAddUser', { board, card });
  }, []);

  return (
    <SC.Container>
      {boards.map((board, i) => (
        <SC.BoardListItem
          key={`${board}-${i}`}
        >
          { board.title }
          { board.items.map((card, j) => (
            <Card
              key={`board-${i}-card-${j}`}
              {...card}
              onAddUser={() => handleAddUser(board, card)}
            />
          ))}
        </SC.BoardListItem>
      ))}
    </SC.Container>
  )
}

export default BoardLists
