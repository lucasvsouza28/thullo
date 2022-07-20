import { useCallback, useState } from 'react';
import { BiLock, BiDotsHorizontalRounded } from 'react-icons/bi';
import { GiEarthAmerica } from 'react-icons/gi';
import Button from '../../../components/Buttton';
import * as SC from './board-header.styles';
import BoardUsersList from './components/BoardUsersList';

type BoardVisibilityType = 'private' | 'public';

const BoardVisibilitySelect = ({
  visibility,
}: {
  visibility: BoardVisibilityType
}) => {
  const handleChangeBoardVisibility = useCallback((type: BoardVisibilityType) => {
    if (
      (visibility === 'private' && type === 'private') ||
      (visibility === 'public' && type === 'public')
    ) {
      return;
    }

    console.log('handleChangeBoardVisibility')
  }, []);

  return (
    <SC.BoardVisibilityContainer>
      <h5>Visibility</h5>
      <p>Choose who can see to this board</p>
      <SC.BoardVisibilitySelectList>
        <SC.BoardVisibilityOption
          onClick={() => handleChangeBoardVisibility('public')}
          selected={visibility === 'public'}
        >
          <div>
            <GiEarthAmerica color='#4F4F4F' size={15} />
            <h6>Public</h6>
          </div>
          <SC.BoardVisibilityOptionDescription>
            Only board members can see this
          </SC.BoardVisibilityOptionDescription>
        </SC.BoardVisibilityOption>
        <SC.BoardVisibilityOption
          onClick={() => handleChangeBoardVisibility('private')}
          selected={visibility === 'private'}
        >
          <div>
            <BiLock color='#4F4F4F' size={15} />
            <h6>Private</h6>
          </div>
          <SC.BoardVisibilityOptionDescription>
            Anyone on the internet can see this.
          </SC.BoardVisibilityOptionDescription>
        </SC.BoardVisibilityOption>
      </SC.BoardVisibilitySelectList>
    </SC.BoardVisibilityContainer>
  );
};

const BoardHeader = ({
  onOpenSidesheet,
}: {
  onOpenSidesheet: () => void
}) => {
  const [isBoardVisibilityOpen, setIsBoardVisibilityOpen] = useState(false);
  const boardVisibility: BoardVisibilityType = 'private';

  return (
    <SC.Container>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Button
          variant="secondary"
          size='sm'
          onClick={() => setIsBoardVisibilityOpen(state => !state)}
          style={{
            width: '98px',
          }}
        >
          <BiLock />
          Private
        </Button>
        { isBoardVisibilityOpen && (
          <BoardVisibilitySelect
            visibility={boardVisibility}
          />
        )}
        <BoardUsersList />
      </div>
      <Button
        variant="secondary"
        onClick={onOpenSidesheet}
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
