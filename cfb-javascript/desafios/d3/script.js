
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
    let btn1 = document.querySelector(".btn1").addEventListener("click", function(){
        anterior();
    });

    let btn2 = document.querySelector(".btn2").addEventListener("click", function(){
        pararSlide();
    })

    let btn3 = document.querySelector(".btn3").addEventListener("click", function(){
        proxima();
    });
};

function troca(){
    imgAtual++;
    if(imgAtual > maxImg){
        imgAtual = 0;
    };
    carregar(imgAtual);
};

function proxima(){
    imgAtual++;
    if(imgAtual > maxImg){
        imgAtual = maxImg;
    };
    carregar(imgAtual);
};

function pararSlide(){
    clearInterval(tmp);
};

function anterior(){
    imgAtual--;
    if(imgAtual < 0){
        imgAtual = 0;
    };
    carregar(imgAtual);
};

iniciar();
