const boton = document.getElementsByClassName("boton");
const pantalla = document.getElementsByClassName("pantalla");

const botones = ["reset", "del", ,"/",  7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "+/-", "=" ]
for (let i = 0; i < boton.length; i++) {
    boton[i].textContent = botones[i]	 
    boton[i].onmouseover = function (){
        boton[i].style.backgroundColor = "#238c5e";
    }   
    boton[i].onmouseout = function (){
        boton[i].style.backgroundColor = "#51c794";
    }  
    boton[i].onmousedown = function (){
        boton[i].style.fontSize= "large";
    }   
    boton[i].onmouseup = function (){
        boton[i].style.fontSize= "x-large";
    } 
}

