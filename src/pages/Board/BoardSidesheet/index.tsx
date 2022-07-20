import { VscClose } from 'react-icons/vsc';
import BoardDescription from './components/BoardDescription';
import BoardMembers from './components/BoardMembers';
import OwnerInfo from './components/OwnerInfo';
import * as SC from './board-sidesheet.styles';
import { BoardType } from '../../../@types';

type BoardSidesheetProps = {
  open: boolean,
  onClose: () => void,
};

const BoardSidesheet = ({
  open,
  onClose,
}: BoardSidesheetProps) => {
  const board: BoardType = {
    name: 'DevChallenges Board',
    createdAt: new Date(),
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laborum inventore asperiores consequatur odio assumenda distinctio voluptatibus tenetur corrupti nobis voluptates consequuntur labore deleniti doloremque, unde repellat esse eligendi? Eaque.',
    owner: {
      id: 'Lucas Souza',
      name: 'Lucas Souza',
      avatar: 'https://avatars.dicebear.com/api/big-smile/lucasvsouza.svg?b=lightgray',
    },
    members: [
      { id: 'Lucas Souza', name: 'Lucas Souza', avatar: 'https://avatars.dicebear.com/api/big-smile/lucasvsouza.svg?b=lightgray' },
      { id: 'Adriana Domingues', name: 'Adriana Domingues', avatar: 'https://avatars.dicebear.com/api/big-smile/drica.svg?b=lightgray' },
      { id: 'Catarina Domingues', name: 'Catarina Domingues', avatar: 'https://avatars.dicebear.com/api/big-smile/catarina.svg?b=lightgray' },
    ]
  };

  return (
    <SC.Container
      css={{
        transition: 'all .2s ease-in-out',
        right: open ? '0' : '-500px',
        opacity: open ? '1' : '0',
        width: open ? '377px' : '0',
      }}
    >
      <SC.Header>
        <h5>{board.name}</h5>
        <SC.CloseButton
          onClick={onClose}
        >
          <VscClose size={25} color="#4F4F4F" />
        </SC.CloseButton>
      </SC.Header>
      <OwnerInfo
        board={board }
      />
      <BoardDescription
        board={board}
      />
      <BoardMembers
        board={board}
      />
    </SC.Container>
  )
}

export default BoardSidesheet
