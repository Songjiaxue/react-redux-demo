import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './store/reducers/index';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './api/index'
console.log(rootReducer);

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    createLogger(), // 一个很便捷的 middleware，用来打印 action 日志
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
