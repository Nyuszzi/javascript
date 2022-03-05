
document.write(Date(), "<br>");

let data = new Date();
let diaSemana = data.getDay();
let dia = data.getDate();
let mes = data.getMonth();
let ano = data.getFullYear();

let diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

document.write(data, "<br>");
document.write("Dia do mês: ", dia, "<br>");
document.write("Dia da semana: ", diaSemana, "<br>");
document.write("Mês: ", mes, "<br>");
document.write("Ano: ", ano, "<br>");
document.write("<hr>");
document.write(diasSemana[diaSemana], " dia ", dia, " de ", meses[mes], " de ", ano);

let horas = data.getHours();
let minutos = data.getMinutes();
let segundos = data.getSeconds();

document.write(" ", horas, ":", minutos, ":", segundos);
document.write("<hr>");

let ndt = new Date();
ndt.setDate(data.getDate() + 4);

data = new Date();
diaSemana = ndt.getDay();
dia = ndt.getDate();
mes = ndt.getMonth();
ano = ndt.getFullYear();

document.write("<br>", diasSemana[diaSemana], " dia ", dia, " de ", meses[mes], " de ", ano);
document.write(" ", horas, ":", minutos, ":", segundos);
document.write("<hr>");

let novaData = new Date(1976, 10, 4, 13, 41, 58, 10); //Ano, Mes, Dia, Hora, Minutos, Segundos, Milisegundos

document.write("<br>", novaData);

data = new Date();
diaSemana = novaData.getDay();
dia = novaData.getDate();
mes = novaData.getMonth();
ano = novaData.getFullYear();

document.write("<br>", diasSemana[diaSemana], " dia ", dia, " de ", meses[mes], " de ", ano);
document.write(" ", horas, ":", minutos, ":", segundos);
document.write("<hr>");

