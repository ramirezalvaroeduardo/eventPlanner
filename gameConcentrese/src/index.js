
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import getFAS from './getAwesomeFontThemes';
import MatrixBox from './MatrixBox';
import AddPlayerForm from './AddPlayer';

let numSquares=20;
let squareCont=[];
let fasArray = getFAS();


ReactDOM.render(
  <React.StrictMode>
    <MatrixBox numBox={numSquares} fasArray={fasArray} squareCont={squareCont} />
    <AddPlayerForm />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
