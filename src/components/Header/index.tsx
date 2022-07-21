import Logo from './components/Logo';
import { CgMenuGridO } from 'react-icons/cg';
import * as SC from './header.styles';
import Search from './components/Search';
import Profile from './components/Profile';
import useFetchBoard from '../../hooks/useFetchBoard';

const Header = () => {
  const boardId = '0';
  const { data: board } = useFetchBoard(boardId);

  return (
    <SC.Container>
      <SC.LeftContainer className="left-container">
        <Logo />
        <SC.BoardInfo>
          <SC.CurrentBoard>
            {board?.name}
          </SC.CurrentBoard>
          <SC.Divider />
          <SC.AllBoardsButton
            variant='secondary'
            size='sm'
          >
            <CgMenuGridO
              size={12}
              color="#828282"
            />
            All boards
          </SC.AllBoardsButton>
        </SC.BoardInfo>
      </SC.LeftContainer>
      <div />
      <SC.RightContainer>
        <Search />
        <Profile
          owner={board?.owner}
        />
      </SC.RightContainer>
    </SC.Container>
  )
}

export default Header
