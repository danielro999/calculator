const boton = document.getElementsByClassName("boton");
const pantalla = document.getElementsByClassName("pantalla");
const botones = ["reset", "del","%" ,"/",  7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "+/-", "=" ]


for (let i = 0; i < boton.length; i++) {
    boton[i].textContent = botones[i]	 
    boton[i].onmouseover = function (){
        boton[i].style.backgroundColor = "#238c5e";
    }   
    boton[i].onmouseout = function (){
        boton[i].style.backgroundColor = "#51c794";
    }  
    boton[i].onmousedown = function (){
        boton[i].style.fontSize = "large";
        pantalla[0].textContent += boton[i].textContent
    }   
    boton[i].onmouseup = function (){
        boton[i].style.fontSize= "x-large";
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