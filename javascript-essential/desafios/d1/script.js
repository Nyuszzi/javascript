import Book from "./Book.js";

const sherlockHolmes = new Book(
    "Sherlock Holmes",
    "Arthur Conan Doyle",
    307,
    33,
    180,
    "Strand Magazine",
    true
);

console.log(sherlockHolmes.title);
console.log(sherlockHolmes.pageUP());
console.log(sherlockHolmes.pageUP());
console.log(sherlockHolmes.pageDOWN());
console.log(sherlockHolmes.discount());
console.log(sherlockHolmes);

const hamlet = new Book(
    "Hamlet",
    "William shakespeare",
    0,
    0,
    0,
    "Nicholas Ling & John Trundell",
    false
);

console.log(hamlet.title);
console.log(hamlet.discount());
console.log(hamlet);