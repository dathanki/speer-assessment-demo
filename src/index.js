import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import { createStore } from "redux";
import handleCarousel from "./redux/reducer";
import "./../node_modules/bootstrap/dist/css/bootstrap.css"

import App from './App';

const store = createStore(handleCarousel);


ReactDOM.render(
  <React.StrictMode>
   <HashRouter>  
    <Provider store={store}>
      <App />
    </Provider>
    </HashRouter>  
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
