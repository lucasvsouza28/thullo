import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import { globalStyles, theme } from '../stitches.config';
import AllBoardsPage from './pages/AllBoards';
import BoardPage from './pages/Board';

var client = new QueryClient({});

function App() {
  globalStyles();
  return (
    <main className={theme}>
      <QueryClientProvider client={client}>
        <Header />
        <BoardPage />
        {/* <AllBoardsPage /> */}
      </QueryClientProvider>
    </main>
  )
}

export default App
