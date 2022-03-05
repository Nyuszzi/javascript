
var painel;

function localizar(pos){
    var coordenadas = pos.coords;
    painel.innerHTML += "Latitude: " + coordenadas.latitude + " - Longitude: " + coordenadas.longitude + "<hr>";
};

function verifica(){
    painel = document.querySelector(".painel");
    painel.innerHTML = "Nome do browser: " + navigator.appName + "<hr>";
    painel.innerHTML += "Versão do browser: " + navigator.appVersion + "<hr>";
    painel.innerHTML += "Cookies habilitados: " + navigator.cookieEnabled + "<hr>";
    painel.innerHTML += "Localização: " + navigator.geolocation.getCurrentPosition(localizar) + "<hr>";

    painel.innerHTML += "Idioma: " + navigator.languages + "<hr>";
    painel.innerHTML += "Online: " + navigator.onLine + "<hr>";
    painel.innerHTML += "Sistema operacional: " + navigator.platform + "<hr>";
    painel.innerHTML += "Engine: " + navigator.product + "<hr>";
    painel.innerHTML += "Agente: " + navigator.userAgent + "<hr>";
};

window.addEventListener("load", verifica);