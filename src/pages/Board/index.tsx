import { useState } from 'react';
import BoardHeader from './BoardHeader';
import BoardLists from './BoardLists';
import BoardSidesheet from './BoardSidesheet';
import * as SC from './board.styles';
import useFetchBoard from '../../hooks/useFetchBoard';

const BoardPage = () => {
  const [isSidesheetOpen, setisSidesheetOpen] = useState(false);
  const boardId = '0';
  const { data: board } = useFetchBoard(boardId);

  return (
    <SC.Container>
      <BoardHeader
        board={board}
        onOpenSidesheet={() => setisSidesheetOpen(true)}
      />
      <BoardLists
        board={board}
      />
      <BoardSidesheet
        board={board}
        open={isSidesheetOpen}
        onClose={() => setisSidesheetOpen(false)}
      />
    </SC.Container>
  )
}

export default BoardPage
