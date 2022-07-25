import { BoardType } from '../../../@types';
import * as SC from './board-lists.styles';
import BoardListItem from './BoardListItem';

type BoardListsProps = {
  board: BoardType | undefined,
};

const BoardLists = ({
  board,
}: BoardListsProps) => {
  return (
    <SC.Container>
      {(board?.lists ?? []).map((list, i) => (
        <BoardListItem
          key={i}
          list={list}
        />
      ))}
    </SC.Container>
  )
}

export default BoardLists;
