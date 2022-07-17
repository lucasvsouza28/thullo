import Header from './components/Header';
import { globalStyles, theme } from '../stitches.config';
import AllBoardsPage from './pages/AllBoards';
import BoardPage from './pages/Board';

function App() {
  globalStyles();
  return (
    <main className={theme}>
      <Header />
      {/* <AllBoardsPage />
      <BoardPage /> */}
    </main>
  )
}

export default App
