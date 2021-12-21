import React from 'react';
import reactDom from 'react-dom';
import './index.css'

//only one flag can be raised at a time
//the flag determens wich opertaion will be performed
var nextNumber_Flag=false;
var plus_Flag=false;
var minus_Flag=false;
var multiply_Flag=false;
var devide_Flag=false;

//stored the firstNumber
var firstNumber=0;
var secondNumber=0;

function clearAllFlags(){
	nextNumber_Flag=false;
	plus_Flag=false;
	minus_Flag=false;
	multiply_Flag=false;
	devide_Flag=false;
}

function appendToScreen(a)
{
	if (document.getElementById("output").innerHTML.length == 1 && document.getElementById("output").innerHTML == 0)
	{
		document.getElementById("output").innerHTML=a;
		return
	}
	
	if (document.getElementById("output").innerHTML.length != 0 && document.getElementById("output").innerHTML.length <8)
	{
		document.getElementById("output").innerHTML = document.getElementById("output").innerHTML += a;
	}
}

function tirnOff(){
	document.getElementById("output").innerHTML = "";
	clearAllFlags();
	firstNumber=0;
}

function deleteAll(){
	document.getElementById("output").innerHTML = "0";
	clearAllFlags();
	firstNumber=0;
}

// arethmethic operations
function addNumbers(){
	clearAllFlags();
	plus_Flag=true;
	firstNumber=document.getElementById("output").innerHTML;
	document.getElementById("output").innerHTML = 0;
}

function subtractNumbers(){
	clearAllFlags();
	minus_Flag=true;
	firstNumber=document.getElementById("output").innerHTML;
	document.getElementById("output").innerHTML = 0;
}

function devideNumbers(){
	clearAllFlags();
	devide_Flag=true;
	firstNumber=document.getElementById("output").innerHTML;
	document.getElementById("output").innerHTML = 0;
}

function multiplyNumbers(){
	clearAllFlags();
	multiply_Flag=true;
	firstNumber=document.getElementById("output").innerHTML;
	document.getElementById("output").innerHTML = 0;
}

function squareroot(){
	document.getElementById("output").innerHTML = Math.sqrt(document.getElementById("output").innerHTML)
	document.getElementById("output").innerHTML = document.getElementById("output").innerHTML.slice(0,9);
}

function calculate(){
	if(plus_Flag){
		document.getElementById("output").innerHTML = parseInt(firstNumber) + parseInt(document.getElementById("output").innerHTML);
	}
	else if(minus_Flag){
		document.getElementById("output").innerHTML = parseInt(firstNumber) - parseInt(document.getElementById("output").innerHTML);
	}
	else if(multiply_Flag){
		document.getElementById("output").innerHTML = parseInt(firstNumber) * parseInt(document.getElementById("output").innerHTML);
	}
	else if(devide_Flag){
		document.getElementById("output").innerHTML = parseInt(firstNumber) / parseInt(document.getElementById("output").innerHTML);
	}
	if (document.getElementById("output").innerHTML.length > 8){
		document.getElementById("output").innerHTML = 99999999
	}
	
}

function Main(){

  return (
    <div id="outershell">
    <div id="innershell">
        
        <div id="left">
            <p>CITIZEN</p>
        </div>
        <div id="right">
            <p id="model">LC-110N</p>
            <hr />
            <p>AUTO POWER OFF</p>
        </div>
        <div id="bottom">
            <h2 id="output"></h2>
        </div>	
        
        <div id="lower_part">
        <p>ON</p>
        <table>
          <tr>
            <td><button id="tirnOn" type="button">C/CE</button></td>
            <td><button id="tirnOff" type="button">OFF</button></td>
            <td><button id="squareroot" type="button" >√</button></td>
            <td><button id="percent" type="button" >%</button></td>
          </tr>
          <tr>
            <td><button id="mrc" type="button" >MRC</button></td>
            <td><button id="m" type="button" >M-</button></td>
            <td><button id="mplus" type="button" >M+</button></td>
            <td><button id="devideNumbers" type="button">÷</button></td>
          </tr>
          <tr>
            <td><button id="aToS7" type="button" >7</button></td>
            <td><button id="aToS8" type="button" >8</button></td>
            <td><button id="aToS9" type="button" >9</button></td>
            <td><button id="multi" type="button" onclick="multiplyNumbers()">X</button></td>
          </tr>
          <tr>
            <td><button id="aToS4" type="button" >4</button></td>
            <td><button id="aToS5" type="button" >5</button></td>
            <td><button id="aToS6" type="button" >6</button></td>
            <td><button id="subtract" type="button" >-</button></td>
          </tr>
          <tr>
            <td><button id="aToS1" type="button"> 1</button></td>
            <td><button id="aToS2" type="button"> 2</button></td>
            <td><button id="aToS3" type="button"> 3</button></td>
            <td rowspan="2"><button id="plus" type="button" >+</button></td>
          </tr>
          <tr>
            <td><button id="0" type="button"> 0</button></td>
            <td><button id="droba" type="button" onclick="appendToScreen(.)">.</button></td>
            <td><button id="calculate" type="button" >=</button></td>
          </tr>
         </table>
        </div>
        
    </div>
</div>
  );
}
reactDom.render(<Main />, document.getElementById('root'))

document.getElementById("tirnOn").addEventListener("click", deleteAll );
document.getElementById("tirnOff").addEventListener("click", tirnOff );

document.getElementById("squareroot").addEventListener("click", squareroot );
document.getElementById("devideNumbers").addEventListener("click", devideNumbers );
document.getElementById("multi").addEventListener("click", multiplyNumbers );
document.getElementById("subtract").addEventListener("click", subtractNumbers );
document.getElementById("plus").addEventListener("click", addNumbers );

document.getElementById("calculate").addEventListener("click", calculate );


document.getElementById("aToS7").addEventListener("click", appendToScreen.bind(null,7) );
document.getElementById("aToS8").addEventListener("click", appendToScreen.bind(null,8) );
document.getElementById("aToS9").addEventListener("click", appendToScreen.bind(null,9) );
document.getElementById("aToS4").addEventListener("click", appendToScreen.bind(null,4) );
document.getElementById("aToS5").addEventListener("click", appendToScreen.bind(null,5) );
document.getElementById("aToS6").addEventListener("click", appendToScreen.bind(null,6) );
document.getElementById("aToS1").addEventListener("click", appendToScreen.bind(null,1) );
document.getElementById("aToS2").addEventListener("click", appendToScreen.bind(null,2) );
document.getElementById("aToS3").addEventListener("click", appendToScreen.bind(null,3) );