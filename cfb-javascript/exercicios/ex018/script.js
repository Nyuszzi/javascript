
function relogio(){
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();

    if(hora < 10){
        hora = "0" + hora;
    };

    if(minuto < 10){
        minuto = "0" + minuto;
    };

    if(segundo < 10){
        segundo = "0" + segundo;
    };

    let horas = "Hora do sistema: " + hora + ":" + minuto + ":" + segundo;

    document.querySelector(".rel").value = horas;
};

var tempo = setInterval(relogio, 1000);
