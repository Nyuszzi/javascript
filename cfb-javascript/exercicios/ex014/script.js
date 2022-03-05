
document.write(Math.round(Math.PI));

document.write("<br>", Math.abs(-310));

document.write("<br>", Math.pow(3, 2));

document.write("<br>", Math.sqrt(81));

document.write("<br>", Math.round(Math.random() * 6) + "<br/>");

let valor = 60;

for(let i=0; i<6; i++){
    let numeroAleatorio = Math.round(Math.random() * 60);
    document.write("Numero " + i + ": "+ numeroAleatorio + "<br>")
};



