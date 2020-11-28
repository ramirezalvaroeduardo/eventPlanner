import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

import TopMenu from './TopMenu';
import MatrixBox from './MatrixBox';
import getFAS from './getAwesomeFontThemes';

var fasArray = getFAS();
//console.log( fasArray );

ReactDOM.render(
  <React.StrictMode>
    <TopMenu />
    
    <MatrixBox numBox="20" />
        
  </React.StrictMode>,
  document.getElementById('root')
);

console.log( Math.floor( Math.random() * ( Math.floor( 1002 ) - Math.ceil( 1 ) + 1 ) ) );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
