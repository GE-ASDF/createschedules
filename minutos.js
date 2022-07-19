/**
 * Este objeto tem como função verificar qual valor foi passado pelo select option do html
 * O atributo value no option deve começar em 0;
 */
 let objVerificador = [
    {minutos: 15, texto: "15 minutos"},
    {minutos: 30, texto: "30 minutos"},
    {minutos: 45, texto: "45 minutos"},
    {minutos: 60, texto: "60 minutos"},
    {minutos: 90, texto: "90(1h30min) minutos"},
    {minutos: 120, texto: "120(2h) minutos"},
];

/**
 * Esta é uma função autoexecutável que imprime os options no select
 */
(function(){
    let acadaOptions = document.querySelector("#acada");

    objVerificador.forEach((value, i)=>{
        acadaOptions.innerHTML += 
        `   
        <option value="${i}">${value.texto}</option>

        `    
    });
    
})()
