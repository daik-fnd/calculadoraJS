const valor1 = document.querySelector("#campo1");
const valor2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
const botao = document.querySelector("#botao");
let resposta = document.querySelector("#resposta");

botao.addEventListener("click", calcular);
seletor.addEventListener("change", calcular);

function calcular(){
    const campo1 = parseInt(valor1.value);
    const campo2 = parseInt(valor2.value);
    const operacao = seletor.value;

    if(valor1.value === "" || valor2.value === ""){
        resposta.classList.add("problema");
        resposta.innerHTML= "Campo vazio, digite um valor!";
        setTimeout(()=>{
            resposta.classList.remove("problema");
            resposta.innerHTML="";
        }, 3000)
    }

    else{

        if(operacao==="Somar"){
            resposta.innerHTML = campo1 + campo2;
        }
    
        if(operacao==="Subtrair"){
            resposta.innerHTML = campo1 - campo2;
        }
    
        if(operacao==="Multiplicar"){
            resposta.innerHTML = campo1 * campo2;
        }
    
        if(operacao==="Dividir"){
            resposta.innerHTML = campo1 / campo2;
        }
    
        if(operacao==="Potência"){
            resposta.innerHTML = campo1 ** campo2;
        }

    }
}