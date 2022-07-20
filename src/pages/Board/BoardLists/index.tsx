import { useCallback } from 'react';
import { BsPlusLg, BsThreeDots } from 'react-icons/bs';
import { Box } from '../../../../stitches.config';
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
  const boards = getBoards()

  const handleAddUser = useCallback((board: BoardType, card: CardType) => {
    console.log('onAddUser', { board, card });
  }, []);

  const handleAddCard = useCallback((board: BoardType) => {
    console.log('handleAddCard', { board });
  }, []);

  return (
    <SC.Container>
      {boards.map((board, i) => (
        <SC.BoardListItem
          key={`${board}-${i}`}
        >
          <Box css={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <SC.BoardTitle>
              { board.title }
            </SC.BoardTitle>
            <SC.IconButton>
              <BsThreeDots color='#828282' size={14} />
            </SC.IconButton>
          </Box>
          { board.items.map((card, j) => (
            <Card
              key={`board-${i}-card-${j}`}
              {...card}
              onAddUser={() => handleAddUser(board, card)}
            />
          ))}
          <SC.AddBoardCardButton
            onClick={() => handleAddCard(board)}
          >
            Add another card <BsPlusLg color='#2F80ED' />
          </SC.AddBoardCardButton>
        </SC.BoardListItem>
      ))}
    </SC.Container>
  )
}

function getBoards(){
  const boards: BoardType[] = [
    {
      title: 'Backlog',
      items: [
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: [
          { avatar: 'https://avatars.dicebear.com/api/big-smile/lucasvsouza28.svg?b=lightgray', name: 'Lucas Souza' },
          { avatar: 'https://avatars.dicebear.com/api/big-smile/adriana.svg?b=lightgray', name: 'Adriana Domingues' },
          { avatar: 'https://avatars.dicebear.com/api/big-smile/catarina.svg?b=lightgray', name: 'Cacá' },

        ]},
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
      ]
    },
    {
      title: 'In Progress',
      items: [
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock()},
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock()},
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock()},
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock()},
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock()},
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock()},
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock()},
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock()},
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock()},
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock()},
      ]
    },
    {
      title: 'In Review',
      items: [
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
      ]
    },
    {
      title: 'Completed',
      items: [
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
        { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: getUsersMock() },
      ]
    },
  ];

  return boards;
}

function getUsersMock(){
  const randomCount = Math.ceil(Math.random() * 8);
  const users = (new Array(randomCount)).fill(0);

  return users.map((_, i) => ({
    avatar: `https://avatars.dicebear.com/api/big-smile/${Math.ceil(Math.random() * 10) + i}.svg?b=lightgray`,
    name: `user-${i}`
  }));
}

export default BoardLists
