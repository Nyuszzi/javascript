
function doSomeMath(a, b){
    let c = a + b;
    return c;
};

console.log("Function doSomeMath result:", doSomeMath(20, 10));

const doMoreMath = function(a = 0, b = 0){
    let c = a * b;
    return c;
};

console.log("doMoreMath function result:", doMoreMath(5, 10));

(function(){
    let a = 5;
    let b = 9;
    let c = 3;
    console.log(`The sum of a, b and c is ${a+b+c}`)
})();

(function(){
    let a = 5;
    let b = 9;
    let c = doSomeMath(a, b);
    console.log(`The sum of ${a} and ${b} is ${c}`);
    console.log(`The result of ${a} x ${b} is ${doMoreMath(a, b)}`);
})();

const mercedes = {
    name: "mercedesc180",
    color: "white",
    maxSpeed: 300,
    seats: 4,
};

const addCar = function(currentCar){
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
        <h1>${currentCar.name}</h1>
        <ul>
            <li>Color: ${currentCar.color}</li>
            <li>Max speed: ${currentCar.maxSpeed}</li>
            <li>Seats: ${currentCar.seats}</li>
        </ul>
    `;
    return newArticle;
};

const otherArticle = addCar(mercedes);
console.log(otherArticle)

const main = document.querySelector("main");
main.append(addCar(mercedes));