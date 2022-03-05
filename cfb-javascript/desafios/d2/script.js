
var jogador;
var vel;
var dx;
var dy;
var px;
var py;
var anima;

function game(){
    px += dx * vel;
    //py += dy * vel;
    jogador.style.left = px + "px";
    //jogador.style.top = py + "px";
    if(px>1000){
        dx = -1;
    } else if(px < 0){
        dx = 1;
    }
    anima = requestAnimationFrame(game);
};

function inicia(){
    vel = 5;
    dx = 1;
    dy = 0;
    px = 0;
    py = 0;

    let btn1 = document.querySelector(".btn1");
    btn1.addEventListener("click", function(){
        game();
    });

    let btn2 = document.querySelector(".btn2");
    btn2.addEventListener("click", function(){
        cancelAnimationFrame(anima);
    });

    let btn3 = document.querySelector(".btn3");
    btn3.addEventListener("click", function(){
        let hexColor = Math.floor(Math.random() * 16777215).toString(16);
        jogador.style.backgroundColor = "#" + hexColor;
    })

    jogador = document.querySelector(".jogador");
    jogador.addEventListener("click", function(){
        cancelAnimationFrame(anima);
    });
    jogador.addEventListener("dblclick", function(){
        game();
    })
    game();
};

window.addEventListener("load", inicia);
