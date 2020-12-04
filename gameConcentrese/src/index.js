
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
