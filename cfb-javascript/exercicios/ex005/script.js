let pos = parseInt(prompt("Digite a posição:"));
let msg;

switch(pos){
    case 1:
        msg = "Primeiro lugar<br>Medalha de ouro!";
        break;
    case 2:
        msg = "Segundo lugar<br>Medalha de prata!";
        break;
    case 3:
        msg = "Terceiro lugar<br>Medalha de bronze!";
        break;
    default:
        msg = "Você ficou em " + pos + "° lugar";        
}

document.write(msg);
