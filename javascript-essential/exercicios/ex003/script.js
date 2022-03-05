import Car from "./Car.js";

const mitsubishiLancer = new Car(
    "Lancer",
    2000,
    "gray",
    "red",
    2.0,
    6,
    198,
    4
);

console.log("Car object: ", mitsubishiLancer);
mitsubishiLancer.changeColor("white", "green");
console.log("Car object: ", mitsubishiLancer);

const lamborghiniUrus = new Car(
    "Urus",
    2200,
    "black",
    "yellow",
    4.0,
    8,
    305,
    5
);

console.log("Car object: ", lamborghiniUrus);
lamborghiniUrus.changeEngine(9.0);
console.log("Car object: ", lamborghiniUrus)

const content = `
    <main>
    <article>
        <h1>${lamborghiniUrus.name}</h1>
        <ul>
            <li>Weight:${lamborghiniUrus.weight}</li>
            <li>Inner Color:${lamborghiniUrus.innerColor}</li>
            <li>Outer Color:${lamborghiniUrus.outerColor}</li>
            <li>Engine:${lamborghiniUrus.engine}</li>
            <li>Gear:${lamborghiniUrus.gear}</li>
            <li>Max speed:${lamborghiniUrus.maxSpeed}</li>
            <li>Seats:${lamborghiniUrus.seat}</li>
        </ul>
    </article>
    </main>
`;

document.body.innerHTML = content;
