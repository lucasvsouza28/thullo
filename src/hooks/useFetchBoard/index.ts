import { useQuery } from '@tanstack/react-query';
import { BoardType } from '../../@types';

const fetchBoard = async (boardId: string) => {
  return new Promise<BoardType>((res, rej) => {
    const owner = {
      id: (new Date().getTime()).toString(),
      name: 'Lucas Souza',
      avatar: 'https://avatars.dicebear.com/api/big-smile/lucasvsouza.svg?b=lightgray'
    };

    const drica = {
      id: '0',
      name: 'Drica',
      avatar: 'https://avatars.dicebear.com/api/big-smile/drica.svg?b=lightgray',
    };

    const nina = {
      id: '1',
      name: 'Nina',
      avatar: 'https://avatars.dicebear.com/api/big-smile/caca.svg?b=lightgray'
    };

    res({
      createdAt: new Date(),
      name: 'Super Cool App',
      description: 'Hi! This is the board of Super Cool App, wich is the coolest app you\'ll ever see.',
      owner,
      members: [
        {...owner},
        {...drica},
        {...nina},
      ],
      lists: [
        {
          title: 'Backlog',
          items: [
            { title: 'very important task', tags: ['tag-1', 'tag-2'], image: 'https://cataas.com/cat', users: [
              {...owner},
              {...drica},
              {...nina},

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
      ]
    } as BoardType);
  });
};

function getUsersMock(){
  const randomCount = Math.ceil(Math.random() * 8);
  const users = (new Array(randomCount)).fill(0);

  return users.map((_, i) => ({
    avatar: `https://avatars.dicebear.com/api/big-smile/${Math.ceil(Math.random() * 10) + i}.svg?b=lightgray`,
    name: `user-${i}`
  }));
}

const useFetchBoard = (boardId: string) => useQuery<BoardType, Error>([
  `getBoard(id:${boardId})`
], () => fetchBoard(boardId));

export default useFetchBoard;

