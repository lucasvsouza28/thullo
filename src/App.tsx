import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { GlobalStyles } from './global.styles';
import AllBoardsPage from './pages/AllBoards';
import { lightTheme } from './themes'

function App() {
  return (
    <>
      <ThemeProvider
        theme={lightTheme}
      >
        <GlobalStyles />
        <Header />
        <AllBoardsPage />
      </ThemeProvider>
    </>
  )
}

export default App
