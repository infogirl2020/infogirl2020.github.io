const btnD4 = document.getElementById("d4");
const btnD6 = document.getElementById("d6");
const btnD8 = document.getElementById("d8");
const btnD10 = document.getElementById("d10");
const btnD12 = document.getElementById("d12");
const btnD20 = document.getElementById("d20");
const btnD100 = document.getElementById("d100");

const labelD4 = document.getElementById("labelD4");
const labelD6 = document.getElementById("labelD6");
const labelD8 = document.getElementById("labelD8");
const labelD10 = document.getElementById("labelD10");
const labelD12 = document.getElementById("labelD12");
const labelD20 = document.getElementById("labelD20");
const labelD100 = document.getElementById("labelD100");

btnD4.onclick = function(){
    rolarDado(4);
    labelD4.textContent = resultado;
}

btnD6.onclick = function(){
    rolarDado(6);
    labelD6.textContent = resultado;
}

btnD8.onclick = function(){
    rolarDado(8);
    labelD8.textContent = resultado;
}

btnD10.onclick = function(){
    rolarDado(10);
    labelD10.textContent = resultado;
}

btnD12.onclick = function(){
    rolarDado(12);
    labelD12.textContent = resultado;
}

btnD20.onclick = function(){
    rolarDado(20);
    labelD20.textContent = resultado;
}

btnD100.onclick = function(){
    rolarDado(100);
    labelD100.textContent = resultado;
}

function rolarDado(lados){
    resultado = Math.ceil(Math.random() * lados);
    return resultado;
}