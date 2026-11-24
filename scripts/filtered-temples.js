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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "images/aba-nigeria-temple.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: 
    "images/manti-utah-temple.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: 
    "images/payson-utah-temple.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: 
    "images/yigo-guam-temple.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: 
    "images/washington-dc-temple.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/lima-peru-temple.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: 
    "images/mexico-city-mexico-temple.jpg"
  },
  {
    templeName: "Alabang Philippines Temple",
    location: "Alabang, Muntinlupa, Philippines",
    dedicated: "2026, January, 18",
    area: 35998,
    imageUrl: 
    "images/alabang-philippines-temple2.jpg"  },
  {
    templeName: "Bacolod Philippines Temple",
    location: "Bacolod, Philippines",
    dedicated: "2026, May, 31",
    area: 27895,
    imageUrl: 
    "images/bacolod-philippines-temple.jpg"
  },
  {
    templeName: "Manila Philippines Temple",
    location: "Quezon City, Metro Manila, Philippines",
    dedicated: "1984, September, 25-27",
    area: 26683,
    imageUrl:
    "images/manila-philippines-temple.jpg"
  }
];

const gallery = document.querySelector(".gallery");

function displayTemples(templeList) {
    gallery.innerHTML = "";

    templeList.forEach(temple => {
        const card = document.createElement("section");
        
        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        gallery.appendChild(card);
    });
}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", function () {
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", function () {
    const oldTemples = temples.filter(temple => {
        return Number(temple.dedicated.split(",")[0]) < 1900;
    });
    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", function () {
    const newTemples = temples.filter(temple => {
        return Number(temple.dedicated.split(",")[0]) > 2000;
    });
    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", function () {
    const largeTemples = temples.filter(temple => {
        return temple.area > 90000;
    });
    displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", function () {
    const smallTemples = temples.filter(temple => {
        return temple.area < 10000;
    });
    displayTemples(smallTemples);
});

