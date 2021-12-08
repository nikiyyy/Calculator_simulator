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

console.log("gfddg");
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
            <td><button id="on_off" type="button" onclick="deleteAll()">C/CE</button></td>
            <td><button type="button" onclick="tirnOff()">OFF</button></td>
            <td><button type="button" onclick="squareroot()">√</button></td>
            <td><button type="button" onclick="">%</button></td>
          </tr>
          <tr>
            <td><button type="button" onclick="">MRC</button></td>
            <td><button type="button" onclick="">M-</button></td>
            <td><button type="button" onclick="">M+</button></td>
            <td><button type="button" onclick="devideNumbers()">÷</button></td>
          </tr>
          <tr>
            <td><button type="button" onclick="appendToScreen(7)">7</button></td>
            <td><button type="button" onclick="appendToScreen(8)">8</button></td>
            <td><button type="button" onclick="appendToScreen(9)">9</button></td>
            <td><button type="button" onclick="multiplyNumbers()">X</button></td>
          </tr>
          <tr>
            <td><button type="button" onclick="appendToScreen(4)">4</button></td>
            <td><button type="button" onclick="appendToScreen(5)">5</button></td>
            <td><button type="button" onclick="appendToScreen(6)">6</button></td>
            <td><button type="button" onclick="subtractNumbers()">-</button></td>
          </tr>
          <tr>
            <td><button type="button" onclick="appendToScreen(1)">1</button></td>
            <td><button type="button" onclick="appendToScreen(2)">2</button></td>
            <td><button type="button" onclick="appendToScreen(3)">3</button></td>
            <td rowspan="2"><button id="plus" type="button" onclick="addNumbers()">+</button></td>
          </tr>
          <tr>
            <td><button type="button" onclick="appendToScreen(0)">0</button></td>
            <td><button type="button" onclick="appendToScreen(.)">.</button></td>
            <td><button type="button" onclick="calculate()">=</button></td>
          </tr>
         </table>
        </div>
        
    </div>
</div>
  );
}
reactDom.render(<Main />, document.getElementById('root'))