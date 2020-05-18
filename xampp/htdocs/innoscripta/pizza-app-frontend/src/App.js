import React from 'react';
import { Provider } from "react-redux";
import Routes from "../src/routes";
import {configureStore} from "./store";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
