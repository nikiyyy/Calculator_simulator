import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function box1Activate(){
    console.log("box1Activate");
    b1.style.flex=0.30
    b2.style.flex=0.15
    b3.style.flex=0.15
    document.getElementById("discription").innerHTML="A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron. An ancient Ring thought lost for centuries has been found, and through a strange twist of fate has been given to a small Hobbit named Frodo.";
}

function box2Activate(){
    console.log("box2Activate");
    b1.style.flex=0.15
    b2.style.flex=0.30
    b3.style.flex=0.15
    document.getElementById("discription").innerHTML="The two towers between Mordor and Isengard, Barad-dûr and Orthanc, have united in their lust for destruction. The corrupt wizard Saruman, under the power of the Dark Lord Sauron, and his slimy assistant, Gríma Wormtongue, have created a grand Uruk-hai army bent on the destruction of Man and Middle-earth.";
}

function box3Activate(){
    console.log("box3Activate");
    b1.style.flex=0.15
    b2.style.flex=0.15
    b3.style.flex=0.30
    document.getElementById("discription").innerHTML="The Return of the King, the third and final volume in The Lord of the Rings, opens as Gandalf and Pippin ride east to the city of Minas Tirith in Gondor, just after parting with King Théoden and the Riders of Rohan at the end of The Two Towers.";

}

ReactDOM.render(
    <div id="main">
        <div id="ParentBox">
            <div id="box1" className="box">
                <p>The Fellowship of the Ring</p>
            </div>
            <div id="box2" className="box">
                <p>The Two Towers</p>
            </div>
            <div id="box3" className="box">
                <p>The Return of the King</p>
            </div>

        </div>
        <p id="discription"></p>
     </div>,
    document.getElementById('root')
);

var b1 = document.getElementById("box1");
var b2 = document.getElementById("box2");
var b3 = document.getElementById("box3");

b1.addEventListener("click", box1Activate);
b2.addEventListener("click", box2Activate);
b3.addEventListener("click", box3Activate);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
