import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { GlobalStyles } from './global.styles';
import { lightTheme } from './themes'

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider
        theme={lightTheme}
      >
        <Header />
      </ThemeProvider>
    </>
  )
}

export default App
