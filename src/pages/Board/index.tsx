import BoardHeader from './BoardHeader';
import * as SC from './board.styles';
import BoardLists from './BoardLists';

const BoardPage = () => {
  return (
    <SC.Container>
      <BoardHeader />
      <BoardLists />
    </SC.Container>
  )
}

export default BoardPage
