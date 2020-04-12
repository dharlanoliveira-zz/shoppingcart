import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ShoppingCartStore from "./ShoppingCartStore";

const products = [{
    id: 1,
    name: "mango"
}, {
    id: 2,
    name: "apple"
}]

const shoppingCartStore = ShoppingCartStore();

ReactDOM.render(
  <React.StrictMode>
    <App products={products} shoppingCartStore={shoppingCartStore}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
