/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */
const gridContainer = document.querySelector(".grid");

gridContainer.addEventListener("mouseenter", () => {
    gridContainer.style.border="2px solid purple";
});

gridContainer.addEventListener("mouseout", () => {
    gridContainer.style.border="none";
})

const randomColor = () => {
    let hexColor = Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
}

const gridCells = document.querySelectorAll(".cell");

gridCells.forEach((cell) => {
    cell.addEventListener("mouseenter", (event) => {
        console.log(event);
        cell.style.border="2px solid black";
    });

    cell.addEventListener("mouseout", (event) => {
        cell.style.border="none";
    });

    cell.addEventListener("click", (event) => {
        if(cell.style.backgroundColor){
            cell.style.backgroundColor = "";
        } else {
            cell.style.backgroundColor = `#${randomColor()}`;
        };
    });
});

const body = document.body;
body.addEventListener("keydown", (event) => {
    console.log(event.code);
    if (event.code === "KeyD") {
        body.style.backgroundColor === ""
        ? (body.style.backgroundColor = "black") 
        : (body.style.backgroundColor = "");
    };
});