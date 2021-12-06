import React from 'react';
import reactDom from 'react-dom';
import './index.css'

var counter = 0;

function inc_element(){
  counter+=1;
  reactDom.render(<Test />, document.getElementById('root'))
}
function dec_element(){
  counter-=1;
  reactDom.render(<Test />, document.getElementById('root'))
}
function null_element(){
  counter=0;
  reactDom.render(<Test />, document.getElementById('root'))
}

function Test(){

  return (
  <div id="main">
	
  <p id="number">{counter}</p>
  
  <button type="button" onClick={inc_element}>Increment</button>
  <button type="button" onClick={dec_element}>Decrement</button>
  <button type="button" onClick={null_element}>Null</button>
  
</div>
  );
}
reactDom.render(<Test />, document.getElementById('root'))