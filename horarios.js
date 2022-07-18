/**
 * Script para criação de horários
 * 
 * Esta este script tem como função criar horários de acordo com o valor passado pelo usuário.
 * 
 * @author Anderson Souza
 * 
 */


// Constantes globais quer serão usadas no código
const criarHorariosBtn = document.querySelector("#criarHorarios");
const limparBtn = document.querySelector("#limpar");
const resultado = document.querySelector("#resultado form .horarios");
const resultado2 = document.querySelector("#resultado form .botao");
let acada = 0;

// Função responsável por pegar os valores do input
function getInputsValue(){
    let inicio = Number(document.querySelector("input[name='inicio']").value);
    let fim = Number(document.querySelector("input[name='fim']").value);
    acada = Number(document.querySelector("select[name='acada']").value)

    // Caso a função verificaHoraPassada retorne true os valores de fim e inicio são passados para a função de calcularHorarios
    if(verificaHoraPassada(fim, inicio)){
            calcularHorarios(fim, inicio);
    };
}

// Esta função verifica se os valores de fim e inicio passados são maiores que zero e menores que 23
function verificaHoraPassada(fim, inicio){
        if(fim > 23 || fim < 0){
            resultado.innerHTML = `<p class="title"> A hora de fim não pode ser menor que 0 e nem maior que 23. </p>`
            return;
        }
        if(inicio < 0 || inicio > 23){
            resultado.innerHTML = `<p class="title"> A hora de início não pode ser menor que 0 e nem maior que 23. </p>`
            return;
        }
        return true;
}

// Função responsável por criar os horários para o usuário de acordo com os valores passados
function calcularHorarios(fim, inicio){
    let arrayTempo = [];
     // Recebe os minutos do objVerificador e de acordo com o recebido faz o cálculo
        for(let i = 0; i <= fim; i++){
            let tempo = ((inicio) + i * objVerificador[acada].minutos / 60).toFixed(2);
            if(tempo < 24){
                arrayTempo.push(tempo);
            }
        }
    // Envia para verificar se o array não é vazio
    verificaArrayTempo(arrayTempo);
}

// Verifica se o arrayTemp não é vazio
function verificaArrayTempo(arrayTemp){
    if(arrayTemp != null && arrayTemp != ''){
        sendToPrint(arrayTemp)
    }
}

// Cria um novo array e a envia para a função printHorarios
function sendToPrint(arrayTemp){
    let arrayTempo2 = [];

    arrayTemp.forEach(i=>{
        let horasArray = i.toString().split(".");
        let mins = ((Number(horasArray[1])) * 60) / 100;
        let hora = horasArray[0].toString().length < 2 ? `0${horasArray[0]}`:horasArray[0]
        if(mins.toString().length < 2){
            arrayTempo2.push(`${hora}:${mins}0`);
        }else{
            arrayTempo2.push(`${hora}:${mins}`);
        }
    });
    printHorarios(arrayTempo2);
}

// Imprime os horários na div resultado
function printHorarios(arrayTempo2){
    arrayTempo2.forEach(i=>{
        resultado.innerHTML += 
            `  
                <label class="btn btn-outline-primary col-md-2" for="n${i}" id="n${i}"> ${i}
                </label>
                <input checked type="checkbox" value="${i}" name="horario[]" class="btn-check col-md-4" id="n${i}">
                
            ` 
        })
        resultado2.innerHTML += `

        <input class="btn btn-success" type="submit" value="Salvar">
       
        `
}

// Limpa a tela e os arrays
function limparArraysETela(){
    resultado.innerHTML = "";
    resultado2.innerHTML = "";
    arrayTempo2 = [];
    arrayTempo = [];
}

criarHorariosBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    limparArraysETela();
    getInputsValue();             
})

limparBtn.addEventListener("click", ()=>{
    limparArraysETela();
})
