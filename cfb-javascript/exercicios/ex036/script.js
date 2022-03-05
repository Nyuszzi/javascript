
var painel, btnBack, btnForward;

function back(){
    window.history.back();
};

function forward(){
    window.history.forward();
};

function avancarVoltarMultiplo(num){
    window.history.go(num);
}

function inicia(){
    painel = document.querySelector(".info");
    painel.innerHTML = history.length;

    btnBack = document.querySelector(".btnBack");
    btnBack.addEventListener("click", function(){
        avancarVoltarMultiplo(-1);
    });

    btnForward = document.querySelector(".btnForward");
    btnForward.addEventListener("click", function(){
        avancarVoltarMultiplo(1);
    });

    btnAvancarVoltar = document.querySelector(".btnAvancarVoltar");
    btnAvancarVoltar.addEventListener("click", function(){
        avancarVoltarMultiplo(-2)
    });
};

inicia();
