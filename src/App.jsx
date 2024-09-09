import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Theme } from "./styles/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import TabLayout from "./pages/TabLayout";
import TabContent from "./components/TabContent";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route element={<TabLayout />}>
            <Route index element={<TabLayout />} />
            <Route path=":category" element={<TabContent />}>
              <Route path=":id" element={<TabContent />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
