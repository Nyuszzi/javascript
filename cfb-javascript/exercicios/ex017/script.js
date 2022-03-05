let px;
let py;
let dx;
let dy;
let vel
let tmp;
var obj = document.querySelector('.dv1');

function iniciar(){
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 10;
    document.addEventListener("keydown", teclaDown);
    document.addEventListener("keyUp", teclaUp);
    tmp = setInterval(enterFrame, 20);
}

function teclaDown(event){
    let tecla = event.keyCode;

    if(tecla == 37){
        dx = -1;
    } else if(tecla == 38){
        dy = -1;
    } else if(tecla == 39){
        dx = 1;
    } else if(tecla == 40){
        dy = 1;
    }
};

function teclaUp(event){
    let tecla = event.keyCode;

    if(tecla == 37){
        dx = 0;
    } else if(tecla == 38){
        dy = 0;
    } else if(tecla == 39){
        dx = 0;
    } else if(tecla == 40){
        dy = 0;
    }
};

function enterFrame(){
    px += dx * vel;
    py += dy * vel;
    obj.style.left = px + "px";
    obj.style.top = py + "px"
}

iniciar();


