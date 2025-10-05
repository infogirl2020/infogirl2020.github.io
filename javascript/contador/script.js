const diminuirBtn = document.getElementById("diminuir");
const aumentarBtn = document.getElementById("aumentar");
const resetBtn = document.getElementById("reset");
const labelContador = document.getElementById("labelContador");

let contador = 0;

diminuirBtn.onclick = function(){
    contador--;
    labelContador.textContent = contador;
}

aumentarBtn.onclick = function(){
    contador++;
    labelContador.textContent = contador;
}

resetBtn.onclick = function(){
    contador = 0;
    labelContador.textContent = contador;
}