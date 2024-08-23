import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Router>
          <Header />
          <Routes></Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
