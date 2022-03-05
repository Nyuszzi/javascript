
var auxiliar = location.hash;

document.write(auxiliar + "<br>");

var dados = auxiliar.split("#");
document.write(dados.join(" "));

var v1 = dados[1];
var v2 = dados[2];

document.write("<br>" + v1);
document.write("<br>" + v2);

var hostn = location.hostname;
document.write("<br>" + hostn);

var urlc = location.href;
document.write("<br>" + urlc);

var o = location.origin; //protocolo, hostname, porta
document.write("<br>" + o);

var p = location.pathname; //caminho
document.write("<br>" + p);

var pr = location.protocol;
document.write("<br>" + pr);


