document.write("curso");
document.write("curso2<br>");
document.write("<p = style='background-color:gray'>curso de javascript <br> curso de javascript</p>");

var curso = "Javascript", _nome = "cfb", $numero = 01011010;
document.write(curso + "<br>", _nome, $numero);

window.alert(curso + ": " + ($numero="524"));

var numR = Math.round(Math.random() * 12345);
var quebraLinha = "\n"
window.alert(curso + quebraLinha + numR);

var usuario = window.prompt("Usuário " + numR + " digite algo", numR);
alert("Usuário n°"+ numR + " digitou: " + usuario);

var resultado = confirm("Deseja continuar?");
if (resultado == true){
    alert("Continuou");
} else {
    alert("Cancelado");
}
