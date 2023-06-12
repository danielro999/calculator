const arrayBotones = document.getElementsByClassName("boton");
const pantalla = document.getElementsByClassName("pantalla");
const botones = ["reset", "del","%" ,"/",  7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "+/-", "=" ]

for (let i = 0; i < arrayBotones.length; i++) {
    arrayBotones[i].textContent = botones[i]	
     
    arrayBotones[i].onmouseover = function (){
        arrayBotones[i].style.backgroundColor = "#238c5e";
    }   
    arrayBotones[i].onmouseout = function (){
        arrayBotones[i].style.backgroundColor = "#51c794";
    }  
    arrayBotones[i].onmousedown = function (){
        arrayBotones[i].style.fontSize = "large";
        pantalla[0].textContent += arrayBotones[i].textContent
    }   
    arrayBotones[i].onmouseup = function (){
        arrayBotones[i].style.fontSize= "x-large";
    } 
}


function add(a, b){
    return a + b
}

function subtract (a, b){
    return a - b 
}

function multiply (a, b){
    return a * b
}

function divide (a, b) {
    return a / b
}

function operate (a, b, operator){
    if (operator == "+"){
        return add(a, b)
    }
    if (operator == "-"){
        return subtract(a, b)
    }
    if (operator == "*"){
        return multiply(a, b)
    }
    if (operator == "/"){
        return divide(a, b)
    }
}
