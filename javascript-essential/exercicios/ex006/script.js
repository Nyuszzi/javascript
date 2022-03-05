
//variável local
let item = "Flashlight";

const collection = ["Piggy", item, 5, true];

console.error(collection);
console.log("Collection length:", collection.length)
console.log("index [2] item:", collection[2], "and type", typeof collection[2]);
collection[2] = "Other item";
console.log("index [2] item:", collection[2], "and type", typeof collection[2]);
console.log(collection);

collection[collection.length] = "New item";
console.log(collection);
collection[9] = "End";
console.log(collection);
console.log(collection[7]);
console.log(collection.join(" | "));

const animalCollection = ["Cat", "Fox", "Rabbit", "Otter"];
console.log("Original array",animalCollection);
animalCollection.push("Cheetah");
animalCollection.push("Lion", "Dragon");
animalCollection.push("Dinossaur");
console.log("After push", animalCollection);
animalCollection.unshift("Squirrel", "Raccoon");
console.log("Inserting at the beginning", animalCollection);
animalCollection.shift();
console.log("Excluding at the beginning", animalCollection);
animalCollection.pop();
console.log("Excluding at the end", animalCollection);
animalCollection.unshift(animalCollection.pop());
console.log("Last item is now the first", animalCollection);
animalCollection.sort();
console.log("Alphabetical order (Capitalized letters are sorted before lowercase letters)", animalCollection)

animalCollection.forEach(function(animal){
    animal = `<li>${animal}</li>`;
    console.log(animal);
});

let fiveLong = animalCollection.find(function(animal){
    if(animal.length >= 5){
        return animal;
    }  
})

const foundItem = animalCollection.find(item => item === "Otter");
console.log("Found item", foundItem);
console.log(animalCollection);

let removedItem = "Lion";
animalCollection.splice(animalCollection.indexOf(removedItem), 1);
console.log(`Item "${removedItem}" was removed!`, animalCollection);



console.log(fiveLong)

