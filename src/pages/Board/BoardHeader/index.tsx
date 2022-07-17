import { BiLock, BiDotsHorizontalRounded } from 'react-icons/bi';
import Button from '../../../components/Buttton';
import * as SC from './board-header.styles';
import BoardUsersList from './components/BoardUsersList';

const BoardHeader = () => {

  return (
    <SC.Container>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
        }}
      >
        <Button
          variant="secondary"
          size='sm'
          style={{
            width: '98px',
          }}
        >
          <BiLock />
          Private
        </Button>
        <BoardUsersList />
      </div>
      <Button
        variant="secondary"
        style={{
          width: '117px',
        }}
      >
        <BiDotsHorizontalRounded />
        Show Menu
      </Button>
    </SC.Container>
  )
}

export default BoardHeader
