import React from 'react';

import model from "./stateModel/model";
import { StoreProvider, createStore } from "easy-peasy";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './App.css';
import Main from './components/Main';

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
    <div className="App">
      <Main/>
    </div>
    </StoreProvider>
  );
}

export default App;
