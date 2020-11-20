import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TodoList from './components/TodoList';
import Header from './components/Header'
import { Card } from "@material-ui/core";



  let destination = document.querySelector('#container')

ReactDOM.render(
  <Card>
    <Header />
    <TodoList />
  </Card>,
  destination
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
