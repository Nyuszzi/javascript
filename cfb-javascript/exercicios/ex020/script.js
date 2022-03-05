
function contador(min, max){
    document.write(min + "<br>");
    if(min < max){
        contador(++min, max);
    };
};

contador(0, 10);

function fatorial(numero){
    if(numero == 1){
        return 1;
    };
    return numero * fatorial(numero - 1);
};

document.write(fatorial(5), "<br>");