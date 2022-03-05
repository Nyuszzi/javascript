
function mudaCor(){
    let obj = document.querySelector(".dv1");
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    obj.style.backgroundColor="rgb("+r+","+g+","+b+")";
};

//let tmp = setTimeout(mudaCor, 1000);

var tmp;

function iniciar(){
    tmp = setInterval(mudaCor, 1000);
};

function parar(){
    clearInterval(tmp);
};

document.querySelector(".btn1").addEventListener("click", iniciar);
document.querySelector(".btn2").addEventListener("click", parar);
