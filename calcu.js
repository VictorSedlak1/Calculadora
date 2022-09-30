let numero = document.getElementsByClassName("numeros");
let resposta = document.getElementById("resposta");

for (let botao of numero){
    botao.addEventListener("click", clique_numero);
}
function clique_numero(event){
    resposta.innerHTML = resposta.innerHTML+event.target.innerHTML
}

let btnC = document.getElementById("botao_C");
btnC.addEventListener("click", limpa);

function limpa(event){
    resposta.innerHTML = "";
}

let btnAdd = document.getElementById("botao_Add");
btnAdd.addEventListener("click", Add);

function Add(event){
    resposta.innerHTML = resposta.innerHTML+event.target.innerHTML
}