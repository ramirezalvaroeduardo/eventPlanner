
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

import TopMenu from './TopMenu';
import MatrixBox from './MatrixBox';
import getFA from './getAwesomeFontThemes';

//var fasArray = getFAS();
//var faArray = getFA();
//console.log( faArray );

ReactDOM.render(
  <React.StrictMode>
    <TopMenu />
    
    <MatrixBox numBox="20" />
        
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
