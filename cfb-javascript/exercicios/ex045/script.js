
var dirYJogador, dirXJogador;
var jog, velJ, posJX, posJY;
var jogo, tamTelaW, tamTelaH;
var frames;
var velT;
var contBombas, painelContBombas, bombasTotal, velBomba, tempoCriaBomba;
var vidaPlaneta;
var indiceExplosao;
var telaMsg;

//var isom;

function teclaDown(){
    let tecla = event.keyCode;
    if(tecla == 38){ //cima
        dirYJogador = -1;
    } else if(tecla == 40){ //baixo
        dirYJogador = 1;
    };

    if(tecla == 37){ //esquerda
        dirXJogador = -1;
    } else if(tecla == 39){ //direita
        dirXJogador = 1;
    };

    if(tecla == 32){ //espaço / tiro
        atira(posJX + 11, posJY);
    }
};

function teclaUp(){
    let tecla = event.keyCode;
    if((tecla == 38) || (tecla == 40)){ //cima
        dirYJogador = 0;
    };

    if((tecla == 37) || (tecla == 39)){ //esquerda
        dirXJogador = 0;
    };
};

function atira(x, y){
    let t = document.createElement("div");
    let attr1 = document.createAttribute("class");
    let attr2 = document.createAttribute("style");
    attr1.value = "tiroJog";
    attr2.value = "top:" + y + "px; left:" + x + "px";
    t.setAttributeNode(attr1);
    t.setAttributeNode(attr2);
    document.body.appendChild(t); 
};

function controlaTiro(){
    let tiros = document.getElementsByClassName("tiroJog");
    let tam = tiros.length;
    for(let i = 0; i < tam; i++){
        if(tiros[i]){
            let posT = tiros[i].offsetTop;
            posT -= velT;
            tiros[i].style.top = posT + "px";
            colisaoTiroBomba(tiros[i]);
            if(posT<0){
                tiros[i].remove();
                //document.body.removeChild(tiros[i]);
            };
        };
    };
};

function colisaoTiroBomba(tiro){
    let tam = bombasTotal.length;
    for(let i = 0; i < tam; i++){
        if(bombasTotal[i]){
            if(
                (
                    (tiro.offsetTop <= (bombasTotal[i].offsetTop + 40)) && 
                    ((tiro.offsetTop + 16) >= (bombasTotal[i].offsetTop))
                )
                &&
                (
                    (tiro.offsetLeft <= (bombasTotal[i].offsetLeft + 23)) &&
                    ((tiro.offsetLeft + 16) >= (bombasTotal[i].offsetLeft))
                )
            ){
                criaExplosao(1, bombasTotal[i].offsetLeft - 25, bombasTotal[i].offsetTop);
                bombasTotal[i].remove();
                tiro.remove();
            }
        };
    }
};

function criaExplosao(tipo, x, y){ //tipo 1 = Ar, 2 = Chao
    if(document.getElementById("explosao" + (indiceExplosao - 4))){
        document.getElementById("explosao" + (indiceExplosao - 4)).remove();
    };
    let explosao = document.createElement("div");
    let imagem = document.createElement("img");
    //let som = document.createElement("audio");
    //atributos para div
    let classeDiv = document.createAttribute("class");
    let estiloDiv = document.createAttribute("style");
    let idDiv = document.createAttribute("id");
    //atributos para imagem
    let origemImagem = document.createAttribute("src");
    //atributos para audio
    //let origemAudio = document.createAttribute("src");
    //let idAudio = document.createAttribute("id");

    idDiv.value = "explosao" + indiceExplosao;
    if(tipo == 1){
        classeDiv.value = "explosaoAr";
        estiloDiv.value = "top:" + y + "px; left:" + x + "px";
        origemImagem.value = "imagens/explosaoAr.gif?" + new Date();
    } else {
        classeDiv.value = "explosaoChao";
        estiloDiv.value = "top:" + (tamTelaH-40) +"px; left:" + (x-17) +"px";
        origemImagem.value = "imagens/explosaoChao.gif?" + new Date();
    };
    
    //origemAudio.value = "exp.mp3";
    //idAudio.value = "som" + isom;
    explosao.setAttributeNode(classeDiv);
    explosao.setAttributeNode(estiloDiv);
    explosao.setAttributeNode(idDiv);
    imagem.setAttributeNode(origemImagem);
    //som.setAttributeNode(origemAudio);
    //som.setAttributeNode(idAudio);
    explosao.append(imagem);
    //explosao.append(som);
    document.body.append(explosao);
    //document.getElementById("som" + isom).play();
    indiceExplosao++;
};

function controlaJogador(){
    posJY += dirYJogador * velJ;
    posJX += dirXJogador * velJ;
    jog.style.top = posJY + "px";
    jog.style.left = posJX + "px";
};

function criaBomba(){
    if(jogo){
        let y = 0;
        let x = Math.random() * tamTelaW;
        let bomba = document.createElement("div");
        let attr1 = document.createAttribute("class");
        let attr2 = document.createAttribute("style");
        attr1.value = "bomba";
        attr2.value = "top:" + y + "px; left:" + x + "px";
        bomba.setAttributeNode(attr1);
        bomba.setAttributeNode(attr2);
        document.body.appendChild(bomba);
        contBombas--;
    };
};

function controlaBomba(){
    bombasTotal = document.getElementsByClassName("bomba");
    let tam = bombasTotal.length;
    for(let i = 0; i < tam; i++){
        if(bombasTotal[i]){
            let posicaoIndice = bombasTotal[i].offsetTop;
            posicaoIndice += velBomba;
            bombasTotal[i].style.top = posicaoIndice + "px";
            if(posicaoIndice > tamTelaH){
                vidaPlaneta-=10;
                criaExplosao(2, bombasTotal[i].offsetLeft, null);
                bombasTotal[i].remove();
            };
        };
    };
};

function gerenciaGame(){
    barraPlaneta.style.width = vidaPlaneta + "px";
    if(contBombas <= 0){
        jogo = false;
        clearInterval(tempoCriaBomba);
        telaMsg.style.backgroundImage = "url(imagens/vitoria.png)";
        telaMsg.style.display = "block";
    };
    if(vidaPlaneta <= 0){
        jogo = false;
        clearInterval(tempoCriaBomba);
        telaMsg.style.backgroundImage = "url(imagens/derrota.png)";
        telaMsg.style.display = "block";
    }
};

function reinicia(){
    bombasTotal = document.getElementsByClassName("bomba");
    let tam = bombasTotal.length;
    for(let i = 0; i < tam; i++){
        if(bombasTotal[i]){
            bombasTotal[i].remove();
        };
    };
    telaMsg.style.display = "none";
    clearInterval(tempoCriaBomba);
    cancelAnimationFrame(frames);
    vidaPlaneta = 300;
    posJX = tamTelaW/2;
    posJY = tamTelaH/2;
    jog.style.top = posJY + "px";
    jog.style.top = posJX + "px";
    contBombas = 70;
    jogo = true;
    tempoCriaBomba = setInterval(criaBomba, 2000);
    gameLoop();
};

function gameLoop(){
    if(jogo){
        //Funções de controle
        controlaJogador();
        controlaTiro();
        controlaBomba();
        gerenciaGame();
    };
    frames = requestAnimationFrame(gameLoop);
};

function inicia(){
    jogo = false;
    
    //ini Tela
    tamTelaH = window.innerHeight;
    tamTelaW = window.innerWidth;
    telaMsg = document.querySelector(".telaMsg");
    telaMsg.style.backgroundImage = "url(imagens/intro.png)";
    telaMsg.style.display = "block";
    document.querySelector(".btnJogar").addEventListener("click", reinicia);

    //ini jogador
    dirXJogador = dirYJogador = 0;
    posJX = tamTelaW / 2;
    posJY = tamTelaH / 2;
    velJ = velT = 5;
    jog = document.querySelector(".naveJog");
    jog.style.top = posJY + "px";
    jog.style.left = posJX + "px";
    
    //Controle das bombas
    contBombas = 70;
    velBomba = 3;  

    //Controles do planeta
    vidaPlaneta = 300;
    barraPlaneta = document.querySelector("#barraPlaneta");
    barraPlaneta.style.width = vidaPlaneta + "px";

    //Controles de explosao
    indiceExplosao = 0;
    //isom = 0
};

document.addEventListener("keydown", teclaDown);
document.addEventListener("keyup", teclaUp);
window.addEventListener("load", inicia);
