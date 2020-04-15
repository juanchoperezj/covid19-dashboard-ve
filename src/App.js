import React from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import Home from "./components/home/home";

const App = () => (
  <Provider store={configureStore()}>
    <Home />
  </Provider>
);

export default App;
