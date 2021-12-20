import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function getQuote(){
  fetch("https://api.quotable.io/random")
    .then((data) => data.json())
    .then((item) => {
      document.getElementById("quote").innerHTML = item.content + "<br /><br /> - " + item.author;
    });}
getQuote();


ReactDOM.render(
  <div id="main">
        <div id="window">
            
            <p id="quote"></p>
        </div>
        <br />
        <button id="genquote">Get quote</button>
  </div>
  ,
  document.getElementById('root')
);
document.getElementById("genquote").addEventListener("click", getQuote );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
