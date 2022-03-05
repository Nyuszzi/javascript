
var imgs=[];
var slider;
var imgAtual;
var maxImg;
var tmp;
var tempoTroca;
var vtempo;
var vbarra;

function preCarregamento(){
    let s = 1;
    for(let i = 0; i<3 ; i++){
        imgs[i] = new Image();
        imgs[i].src="imgs/s" + s + ".jpg";
        s++;
    };
};

function carregar(img){
    slider.style.backgroundImage = "url('" + imgs[img].src + "')";
};

function iniciar(){
    preCarregamento();
    imgAtual = 0;
    maxImg = imgs.length-1;
    slider = document.querySelector(".divSlider");
    carregar(imgAtual);
    tempoTroca = 0;
    vbarra = document.querySelector(".dvbarra");
    anima();
};

function anima(){
    tempoTroca++;
    if(tempoTroca >= 500){
        tempoTroca = 0;
        troca(1);
    };
    vtempo = tempoTroca / 5;
    vbarra.style.width = vtempo+"%";

    window.requestAnimationFrame(anima);
};

function troca(dir){
    tempoTroca = 0;
    imgAtual += dir;
    if(imgAtual > maxImg){
        imgAtual = 0;
    } else if (imgAtual < 0){
        imgAtual = maxImg;
    };
    
    carregar(imgAtual);
};

iniciar();
