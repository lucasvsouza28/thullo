import { VscClose } from 'react-icons/vsc';
import BoardDescription from './components/BoardDescription';
import BoardMembers from './components/BoardMembers';
import OwnerInfo from './components/OwnerInfo';
import * as SC from './board-sidesheet.styles';
import { BoardType } from '../../../@types';

type BoardSidesheetProps = {
  open: boolean;
  onClose: () => void;
  board: BoardType | undefined;
};

const BoardSidesheet = ({
  open,
  onClose,
  board,
}: BoardSidesheetProps) => {
  return (
    <SC.Container
      open={open}
    >
      <SC.Header>
        <h5>{board?.name}</h5>
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
