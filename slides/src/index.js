import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
        <div id="ParentBox">
            <div id="box1" class="box">
                <p>The Fellowship of the Ring</p>
            </div>
            <div id="box2" class="box">
                <p>The Two Towers</p>
            </div>
            <div id="box3" class="box">
                <p>The Return of the King</p>
            </div>
        </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
