import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function hordeOver(){
  document.getElementById("root").style.backgroundPositionX="-120px";
  console.log("1");
}
function allianceOver(){
  document.getElementById("root").style.backgroundPositionX="-40px";
  console.log("2");
}

function hordeLeave(){
  document.getElementById("root").style.backgroundPositionX="-80px";
  console.log("3");
}
function allianceLeave(){
  document.getElementById("root").style.backgroundPositionX="-80px";
  console.log("4");
}
//document.getElementById("main").style.backgroundPositionX="-80px"


ReactDOM.render(
  <div id="main">
  <p id="middle">Chose your side!</p>

	<div id="left" className="part">

		<div className="content">
			<button id="alliance">Join The Alliance!</button>
		</div>

	</div>

	<div id="right" className="part">

		<div className="content"></div>
			<button id="horde">Fight for the Horde!</button>
		</div>

	</div>
  ,
  document.getElementById('root')
);

document.getElementById("horde").addEventListener("mouseover", hordeOver );
document.getElementById("horde").addEventListener("mouseleave", hordeLeave );

document.getElementById("alliance").addEventListener("mouseover", allianceOver );
document.getElementById("alliance").addEventListener("mouseleave", allianceLeave );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

