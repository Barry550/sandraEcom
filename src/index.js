import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AppContainer} from "./ressource/views/Containers/index"

import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux"
import {Store} from "./Lib/Store"

console.log(Store.getState())

const unsubscribe = Store.subscribe(() =>
  console.log(Store.getState())
)

// Store.dispatch(addToCart({name: "citron"},2))
// Store.dispatch(addToCart({name: "citron"},5))
// Store.dispatch(addToCart({name: "citron"},8))


ReactDOM.render(
  <Provider store={Store}>
      <AppContainer/>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

unsubscribe()