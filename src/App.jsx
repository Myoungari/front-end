import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Theme } from "./styles/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import HomeLayout from "./pages/HomeLayout";
import TabLayout from "./pages/TabLayout";
import TabContent from "./components/TabContent";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeLayout />} />

          <Route path="/" element={<TabLayout />}>
            <Route path="/service" element={<TabContent />}>
              <Route path="/service/:id" element={<TabContent />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
