import { useTheme } from 'styled-components';
import BoardHeader from './BoardHeader';
import * as SC from './board.styles';

const BoardPage = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        height: '100vh',
        padding: '0 24px',
        background: theme.colors.elements.header,
      }}
    >
      <BoardHeader />
      {/* BoardLists */}
    </div>
  )
}

export default BoardPage
