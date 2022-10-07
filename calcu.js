let numero = document.getElementsByClassName("casa");
let resposta = document.getElementById("resposta");

for (let botao of numero){
    botao.addEventListener("click", clique_numero);
}
function clique_numero(event){
    resposta.innerHTML = resposta.innerHTML+event.target.innerHTML
}

let btnC = document.getElementById("casa13");
btnC.addEventListener("click", limpa);

function limpa(event){
    resposta.innerHTML = "";
}

let visor = document.getElementById("visor");

let valor_salvo = null;
let operador_salvo = null;

let btnNumeros = document.getElementsByClassName('botao-numero');
for (let botao of btnNumeros){
    botao.addEventListener('click', clique_numero);
}
function clica_numero(event) {

    if (isNaN(visor.innerHTML) === false){
        visor.innerHMTL = visor.innerHTML.HTML + event.target.innerHTML;
    } else {
        visor.innerHTML = event.target.innerHTML;
    }
}
let btnOperadores = document.getElementsByClassName('botao-operador');
for (let botao of btnOperadores){
    botao.addEventListener("click", clica_operador);
}
function clica_operador(event){
    if ( isNaN(visor.innerHTML) === false){
        if (valor_salvo === null){
            valor_salvo = Number(visor.innerHTML);
        }else{
            valor_salvo = executa_operacao(valor_salvo, operador_salvo, Number(visor.innerHTML));
        }
    }

    operador_salvo = event.target.innerHTML;

    visor.innerHTML = event.target.innerHTML;
}
let casa13 = document.getElementById('casa13');
casa13.addEventListener("click", limpa_visor);
function limpa_visor(event){
    visor.HTML = "";
    valor_salvo = null;
    operador_salvo = null;
}

let botaoIgual = document.getElementById('botao-Igual');

botaoIgual.addEventListener('click', calcula_resultado);

function calcula_resultado(event) {
    if (valor_salvo != null && operador_salvo != null &&
        isNaN(visor.innerHTML) === false){

                visor.innerHTML = executa_operacao(valor_salvo, operador_salvo,
                                                    Number(visor.innerHTML));
                valor_salvo = null;
                operador_salvo = null;
        }
}

function executa_operacao(valor1, operador, valor2){
    if (operador === '+'){
        return valor1+valor2;
    }else if (operador  ==='-'){
        return valor1 - valor2
    }else if (operador === '*'){
        return valor1 * valor2
    }else if (operador === '/'){
        return valor1 / valor2
    }
}

let vody = document.getElementsByTagName('body')[0];

body.addEventListener('keydown' , pressionou_tecla);

function pressionou_tleca(event) {
    if (event.key === "*"){
        document.getElementById('botao-multiplicacao').click();
    }
}

