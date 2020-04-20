import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import configureStore from "./redux/store";
import useDarkMode from "./hooks/useDarkMode";

import Home from "./components/home/home";

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <Provider store={configureStore()}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Home toggleDarkMode={toggleTheme} />
        </>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
