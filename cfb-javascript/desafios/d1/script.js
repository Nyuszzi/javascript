let px = 0;
let py = 0;
    
let obj = document.querySelector('.dv1'); //pega div no html
obj.addEventListener('click',retornaKeyDown);


function mover(event){    
    let tecla = event.keyCode;
    if(tecla == 37){
        px-=10;
        obj.style.marginLeft=px+"px";
    };
    if(tecla == 38){
        py-=10;
        obj.style.marginTop=py+"px";
    };
    if(tecla == 39){
        px+=10;
        obj.style.marginLeft=px+"px";
    };
    if(tecla == 40){  
        py +=10;
        obj.style.marginTop=py+"px";
    };
    if(tecla == 13){//enter
        alert('evento keydown removido');
        document.removeEventListener('keydown',mover);
        obj.style.backgroundColor='white';
    };              
}

function retornaKeyDown(){
    alert('evento keydown ativado');
    document.addEventListener("keydown", mover);
    obj.style.backgroundColor='red';
}