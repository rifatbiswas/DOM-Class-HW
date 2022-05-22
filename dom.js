
document.getElementById("rifat").innerHTML="my name is Rajebul"
document.getElementsByTagName("h4")[0].innerHTML="I study in northern university"
document.getElementsByClassName("main")[0].innerHTML="I'am in 21 years old"
document.querySelectorAll(".main")[0].innerHTML="I study in northern university khulna"
document.querySelector("h2").innerHTML="my home town Chuadanga"


const paragraph= document.createElement("p");
paragraph.innerText = "I am full stack developer";
document.body.appendChild(paragraph);

let text= document.createElement("h5");
text.innerText = "I try my best";
document.body.appendChild(text);


var rlegion= document.createElement("i");
rlegion.innerText = "I am muslim";
document.body.appendChild(rlegion);

var muslim= document.createElement("b");
muslim.innerText = "Allah is one";
document.body.appendChild(muslim);

let composition= document.createElement("div");
composition.innerText = "My school name";
document.body.appendChild(composition);


