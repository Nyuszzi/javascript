
//elementos
var vbtIniciar;
var vbola;
var vcpu;
var vjogador;
var vpaineltxtPontos;

//animação
var game, frames;

//posições
var posBolaX, posBolaY;
var posJogadorX, posJogadorY;
var posCpuX, posCpuY;

//direção teclas
var dirJy;

//posições iniciais
var posJogIniY = 175, posJogIniX = 20, posCpuIniY = 175, posCpuIniX = 960, posBolaIniX = 490, posBolaIniY = 240;

//tamanhos
var campoX = 0, campoY = 0, campoW = 1000, campoH = 493;
var barraW = 20, barraH = 150, bolaW = 20, bolaH = 20;

//direção elementos
var bolaX, bolaY;
var cpuY = 0;

//velocidade
var velBola, velCpu, velJogador;

//pontos e controles
var pontos = 0;
var tecla;
jogo = false;

function controlajog(){
    if(jogo){
        posJogadorY += velJogador * dirJy;
        if(((posJogadorY + barraH) >= campoH) || ((posJogadorY) <= 0)){
            posJogadorY += (velJogador * dirJy) * (-1);
        };
        vjogador.style.top = posJogadorY + "px";
    };
}; 

function controlaCpu(){
    if(jogo){
        if((posBolaX > (campoW/2)) && (bolaX > 0)){
            //Movimentar CPU
            if(((posBolaY + (bolaH/2)) > ((posCpuY + (barraH/2))) + velCpu)){
                //Mover para baixo
                if((posCpuY + barraH) <= campoH){
                    posCpuY += velCpu;
                }
            } else if((posBolaY + (bolaH/2)) < (posCpuY + (barraH/2)) - velCpu){
                //Mover para cima
                if(posCpuY >= 0){
                    posCpuY -= velCpu;
                };
            };
        } /*else {
            //Posicionar CPU no centro
            if((posCpuY + (barraH/2)) < (campoH/2)){
                posCpuY += velCpu;
            } else if((posCpuY + (barraH/2)) > (campoH/2)){
                posCpuY -= velCpu;
            };
        };*/
        vcpu.style.top = posCpuY + "px";
    };
};


function controlaBola(){
    //movimentação da bola
    posBolaX += velBola * bolaX;
    posBolaY += velBola * bolaY;

    //colisão com jogador
    if((posBolaX <= posJogadorX + barraW) && ((posBolaY + bolaH >= posJogadorY) && (posBolaY <= posJogadorY + barraH))){
        bolaY = (((posBolaY + (bolaH / 2)) - (posJogadorY + (barraH / 2))) / 32);
        bolaX *=-1;
    };

    //colisão com CPU
    if((posBolaX >= posCpuX - barraW) && ((posBolaY + bolaH >= posCpuY) && (posBolaY <= posCpuY + barraH))){
        bolaY = (((posBolaY + (bolaH / 2)) - (posCpuY + (barraH / 2))) / 32);
        bolaX *=-1;
    };
    
    //limites superior e inferior
    if((posBolaY >= 480) || (posBolaY <= 0)){
        bolaY *=-1;
    };

    //limites horizontais
    if(posBolaX >= (campoW - bolaW)){
        velBola = 0;
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posCpuY = posCpuIniY;
        pontos++;
        vpaineltxtPontos.value = pontos;
        jogo = false;
        vjogador.style.top = posJogadorY + "px";
        vcpu.style.top = posCpuY + "px";
    } else if (posBolaX <= 0){
        velBola = 0;
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posCpuY = posCpuIniY;
        pontos--;
        vpaineltxtPontos.value = pontos;
        jogo = false;
        vjogador.style.top = posJogadorY + "px";
        vcpu.style.top = posCpuY + "px";
    };

    vbola.style.top = posBolaY + "px";
    vbola.style.left = posBolaX + "px";
};


function teclaDw(){
    tecla = event.keyCode;
    if(tecla == 38){
        dirJy = -1;
    } else if(tecla == 40){
        dirJy = 1;
    };
};

function teclaUp(){
    tecla = event.keyCode;
    if(tecla == 38){
        dirJy = 0;
    } else if(tecla == 40){
        dirJy = 0;
    };
};

function game(){
    if(jogo){
        controlajog();
        controlaBola();
        controlaCpu();
    };
    frames = requestAnimationFrame(game);
};

function iniciaJogo(){
    if(!jogo){
        velBola = velCpu = velJogador = 8;
        cancelAnimationFrame(frames);
        jogo = true;
        dirJy = 0;
        bolaY = 0;
        
        if((Math.random() * 10) < 5){
            bolaX = -1;
        } else {
            bolaX = 1;
        }

        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posJogadorX = posJogIniX;
        posCpuY = posCpuIniY;
        posCpuX = posCpuIniX;
        game();
    };
};

function inicializa(){
    vbtIniciar = document.querySelector("#btIniciar");
    vbtIniciar.addEventListener("click", iniciaJogo);

    vjogador = document.querySelector("#dvJogador");
    vcpu = document.querySelector("#dvCpu");
    vbola = document.querySelector("#dvBola");
    vpaineltxtPontos = document.querySelector("#txtPontos");
    
    velBola = velCpu = velJogador = 8;

    document.addEventListener("keydown", teclaDw);
    document.addEventListener("keyup", teclaUp);
    
};

window.addEventListener("load", inicializa);

