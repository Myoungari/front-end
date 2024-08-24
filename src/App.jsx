import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Theme } from "./styles/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
