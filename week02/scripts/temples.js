const today = new Date();

document.querySelector("#currentyear").textContent = today.getFullYear()

document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector("nav");
menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Close Navigation menu");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
});

