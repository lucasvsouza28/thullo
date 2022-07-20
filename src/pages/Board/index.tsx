import BoardHeader from './BoardHeader';
import * as SC from './board.styles';
import BoardLists from './BoardLists';
import BoardSidesheet from './BoardSidesheet';
import { useState } from 'react';

const BoardPage = () => {
  const [isSidesheetOpen, setisSidesheetOpen] = useState(false);

  return (
    <SC.Container>
      <BoardHeader
        onOpenSidesheet={() => setisSidesheetOpen(true)}
      />
      <BoardLists />
      <BoardSidesheet
        open={isSidesheetOpen}
        onClose={() => setisSidesheetOpen(false)}
      />
    </SC.Container>
  )
}

export default BoardPage
