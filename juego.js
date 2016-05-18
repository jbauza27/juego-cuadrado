divesc = document.getElementById("escapista");
divesc.addEventListener('mouseover', mover, false);
divesc.addEventListener('click', cambiarColor, false);
divcont = document.getElementById("contenedor"); 
divcont.addEventListener('click', sumarIntento, false);       
spacont = document.getElementById("contador");

contador = 0;            
           
function sumarIntento() {
    contador++;
    spacont.innerHTML = contador;
}
            
function mover() {                
    var temp = (Math.random()*100)+1;        
    var horizontal = Math.round(temp);
    temp = (Math.random()*100)+1;
    var vertical = Math.round(temp);
                                
    divesc.style.left = horizontal + "px";
    divesc.style.top = vertical + "px";
}
            
function cambiarColor() {
    divesc.style.backgroundColor = "red";
    alert("Juego terminado: necesitó de " + contador + " intentos para ganar.")
    divesc.removeEventListener('mouseover', mover, false);
    divesc.removeEventListener('click', cambiarColor, false);             
    divcont.removeEventListener('click', sumarIntento, false);
}