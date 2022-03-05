
var imgs=[];
var slider;
var imgAtual;
var maxImg;
var tmp;

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
    tmp = setInterval(troca, 2000);
};

function troca(){
    imgAtual++;
    if(imgAtual > maxImg){
        imgAtual = 0;
    };
    carregar(imgAtual);
};

iniciar();
