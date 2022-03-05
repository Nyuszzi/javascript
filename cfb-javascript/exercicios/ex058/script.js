
const Carro = {
    marca: "Mercedes",
    modelo: "Celta",

    info: function(){
        return "Marca: " + this.marca + ", Modelo: " + this.modelo;
    },
};

console.log(Carro.marca);
console.log(Carro.modelo);
console.log(Carro.info());

Carro.marca = "Chevrolet";

console.log(Carro.info());

Carro["marca"] = "Tesla";
Carro["modelo"] = "Tesla model S";

console.log(Carro.info());

const c2 = Object.create(Carro);

console.log(c2.info());

c2.marca = "Fiat";
c2.modelo = "Toro";

console.log("C2: " + c2.info());
console.log("Carro: " + Carro.info());

const Veiculo = {
    marca: "Lamborghini",
    modelo: "Lamborghini Huracan",
    info: function(){
        return "Marca: " + this.marca + ", Modelo: " + this.modelo;
    },
};

const Caracteristicas = {
    cor: "Amarelo",
    cambio: "Automático",
};

var carro = Object.assign(Veiculo, Caracteristicas);

console.log(carro);
console.log(carro.info());

delete Caracteristicas.cor;

var carro2 = Object.assign(Veiculo, Caracteristicas);
console.log(carro2);
console.log(carro2.info());

const VeiculoCarro = {
    marca: "Lamborghini",
    modelo: "Lamborghini Huracan",
    cor: "Amarelo",
    cambio: "Automático",
    info: function(){
        return "Marca: " + this.marca + ", Modelo: " + this.modelo;
    },
};

let {marca, modelo} = VeiculoCarro;
console.log(marca, "", modelo);

marca = "Honda";
modelo = "HRV";

console.log(VeiculoCarro);
console.log(marca);
console.log(modelo);
