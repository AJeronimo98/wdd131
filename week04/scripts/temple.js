alert("¡El JavaScript sí está cargando!");

const container = document.querySelector(".res-grid");
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Oaxaca Mexico",
        location: "Oaxaca, Mexico",
        dedicated: "2000, March, 11",
        area: 10700,
        imageUrl: "images/oaxaca.jpg" 
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    }
];

function displayTemples(list) {
    container.innerHTML = "";
    list.forEach(temple => {
        const card = document.createElement("section");
        card.style.border = "2px solid red"; 
        card.style.padding = "10px";

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" style="width:100%; height:auto; display:block;">
            <p>Location: ${temple.location}</p>
        `;
        container.appendChild(card);
    });
}

console.log("El script se está ejecutando correctamente");
displayTemples(temples);

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;