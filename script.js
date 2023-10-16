const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const operacao = document.querySelector("#operacao");
let resposta = document.querySelector("#res");

num1.addEventListener("keyup",calcular);
num2.addEventListener("keyup",calcular);
operacao.addEventListener("change",calcular);
function calcular(){

    if(num1.value!='' && num2.value!=''){
    resposta.style.background= 'gray';
    const v1 = parseInt(num1.value);
    const v2 = parseInt(num2.value);
    const resulta = operacao.value;
    if(resulta==="+")
        resposta.innerHTML = v1 + v2;
    if(resulta == "-")
        resposta.innerHTML = v1 - v2;
    if(resulta == "*")
        resposta.innerHTML = v1 * v2;
    if(resulta == "/")
        resposta.innerHTML = v1 / v2;
    }
}