import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
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
