import { useCallback } from 'react';
import { BsPlusLg, BsThreeDots } from 'react-icons/bs';
import { Box } from '../../../../stitches.config';
import { BoardListType, BoardType, CardType } from '../../../@types';
import Card from '../../../components/Card';
import * as SC from './board-lists.styles';

type BoardListsProps = {
  board: BoardType | undefined,
};

const BoardLists = ({
  board,
}: BoardListsProps) => {
  const handleAddUser = useCallback((board: BoardListType, card: CardType) => {
    console.log('onAddUser', { board, card });
  }, []);

  const handleAddCard = useCallback((list: BoardListType) => {
    console.log('handleAddCard', { list });
  }, []);

  return (
    <SC.Container>
      {(board?.lists ?? []).map((list, i) => (
        <SC.BoardListItem
          key={`${list}-${i}`}
        >
          <Box css={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <SC.BoardTitle>
              { list.title }
            </SC.BoardTitle>
            <SC.IconButton>
              <BsThreeDots color='#828282' size={14} />
            </SC.IconButton>
          </Box>
          { (list?.items ?? []).map((card, j) => (
            <Card
              key={`board-${i}-card-${j}`}
              {...card}
              onAddUser={() => handleAddUser(list, card)}
            />
          ))}
          <SC.AddBoardCardButton
            onClick={() => handleAddCard(list)}
          >
            Add another card <BsPlusLg color='#2F80ED' />
          </SC.AddBoardCardButton>
        </SC.BoardListItem>
      ))}
    </SC.Container>
  )
}

export default BoardLists
