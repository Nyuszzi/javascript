/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

const navContent = `
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Articles</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Learn</a></li>
`;

const elementNav = document.createElement("nav");
elementNav.classList.add("navigation");
const elementNavUl = document.createElement("ul");
elementNavUl.innerHTML = navContent;
elementNav.append(elementNavUl);

document.querySelector(".siteheader").prepend(elementNav);