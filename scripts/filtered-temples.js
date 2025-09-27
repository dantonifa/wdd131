const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Add more temple objects here...
  {
    templeName: "Guatemala City Guatemala",
    location: "Guatemala City, Guatemala",
    dedicated: "1984, December, 14",
    area: 11610,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/guatemala-city-guatemala-temple/guatemala-city-guatemala-temple-6415-main.jpg",
  },
  {
    templeName: "San Pedro Sula Honduras",
    location: "San Pedro Sula, Honduras",
    dedicated: "2024, October, 13",
    area: 35818,
    imageUrl:
      "https://assets.churchofjesuschrist.org/6b/d7/6bd79a151f9ec87098cd6005e23bf7522ecaf55d/san_pedro_sula_honduras_temple_rendering.jpeg",
  },
  {
    templeName: "Tegucigalpa Honduras ",
    location: "Tegucigalpa, Honduras ",
    dedicated: "2013, March, 17",
    area: 28254,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tegucigalpa-honduras-temple/tegucigalpa-honduras-temple-3878.jpg",
  },
];
/*Make a function that clears the existing content of the divs with the ids top:
 prevent repetition*/

function clearTempleCards() {
  document.getElementById("main-temples-1").innerHTML = "";
  document.getElementById("main-temples-2").innerHTML = "";
  document.getElementById("main-temples-3").innerHTML = "";
  document.getElementById("main-temples-4").innerHTML = "";
}

/*Respond to the main navigation home item by displaying all the temples again*/
document.getElementById("home").addEventListener("click", function () {
  // Clear existing content
  clearTempleCards();
  document.getElementById("main-temples-3").innerHTML = "";
  document.getElementById("main-temples-4").innerHTML = "";
  // Change the heading h2
  document.querySelector("h2").textContent = "All Temples";
  /* Call the functions CreateTempleCard1, CreateTempleCard2, CreateTempleCard3,
  and CreateTempleCard4 and display the temple cards */
  createTempleCard1();
  createTempleCard2();
  createTempleCard3();
  createTempleCard4();
});
/* Create temple cards for the elements of the array with
the indexes 0, 1, and 2, and send them to the div id=main-temples-1 */
createTempleCard1();
function createTempleCard1() {
  for (let i = 0; i < 3; i++) {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temples[i].templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temples[i].location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temples[i].dedicated}`;
    area.innerHTML = `<span class="label">Area:</span> ${temples[i].area} sq ft`;
    img.setAttribute("src", temples[i].imageUrl);
    img.setAttribute("alt", `${temples[i].templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector("#main-temples-1").appendChild(card);
  }
}

/* Create temple cards for the elements of the array with
the indexes 3, 4, and 5, and send them to the div id=main-temples-2 */
createTempleCard2();
function createTempleCard2() {
  for (let i = 3; i < 6; i++) {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temples[i].templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temples[i].location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temples[i].dedicated}`;
    area.innerHTML = `<span class="label">Area:</span> ${temples[i].area} sq ft`;
    img.setAttribute("src", temples[i].imageUrl);
    img.setAttribute("alt", `${temples[i].templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector("#main-temples-2").appendChild(card);
  }
}
/*Create temple cards for the elements of the array with the indexes
  6, 7, and 8, and add them to the div id=main-temples-3*/
createTempleCard3();
function createTempleCard3() {
  for (let i = 6; i < 9; i++) {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temples[i].templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temples[i].location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temples[i].dedicated}`;
    area.innerHTML = `<span class="label">Area:</span> ${temples[i].area} sq ft`;
    img.setAttribute("src", temples[i].imageUrl);
    img.setAttribute("alt", `${temples[i].templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector("#main-temples-3").appendChild(card);
  }
}
//Create a temple card for the index 9 in the array and send it to the div id=main-temples-4.
createTempleCard4();
function createTempleCard4() {
  for (let i = 9; i < 10; i++);
  let card = document.createElement("section");
  let name = document.createElement("h3");
  let location = document.createElement("p");
  let dedication = document.createElement("p");
  let area = document.createElement("p");
  let img = document.createElement("img");

  name.textContent = temples[9].templeName;
  location.innerHTML = `<span class="label">Location:</span> ${temples[9].location}`;
  dedication.innerHTML = `<span class="label">Dedicated:</span> ${temples[9].dedicated}`;
  area.innerHTML = `<span class="label">Area:</span> ${temples[9].area} sq ft`;
  img.setAttribute("src", temples[9].imageUrl);
  img.setAttribute("alt", `${temples[9].templeName} Temple`);
  img.setAttribute("loading", "lazy");

  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedication);
  card.appendChild(area);
  card.appendChild(img);

  document.querySelector("#main-temples-4").appendChild(card);
}
const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date;
const hamButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".menu");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});
// Close the menu when a link is clicked
document.querySelectorAll(".menu a").forEach((link) =>
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    hamButton.classList.remove("open");
  })
);
/*Respond to the main navigation menu items by filtering and displaying the temples as follows:
Old – temples built before 1900
New – temples built after 2000
Large – temples larger than 90,000 square feet
Small – temples smaller than 10,000 square feet
Home – displays all the temples stored in the array.*/
/*If the user clicks on the Old menu item, go to the function that will 
display only the temples built before 1900.*/
document.getElementById("old").addEventListener("click", function () {
  // Clear existing content
  clearTempleCards();
  // Change the heading h2
  document.querySelector("h2").textContent = "Old Temples";
  /* Call the function createOldTempleCard and display the temple cards */
  createOldTempleCard();
});
function createOldTempleCard() {
  // Loop through the temples array and filter temples built before 1900
  temples.forEach((temple) => {
    const dedicationYear = parseInt(temple.dedicated.split(",")[0]);
    if (dedicationYear < 1900) {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");
      name.textContent = temple.templeName;
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
      dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", `${temple.templeName} Temple`);
      img.setAttribute("loading", "lazy");

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);

      document.querySelector("#main-temples-1").appendChild(card);
    }
  });
}
/*If the user clicks on the New menu item, go to the function that will
display only the temples built after 2000.*/
document.getElementById("new").addEventListener("click", function () {
  // Clear existing content
  clearTempleCards();
  // Change the heading h2
  document.querySelector("h2").textContent = "New Temples";
  /* Call the function createNewTempleCard and display the temple cards */
  createNewTempleCard();
});
function createNewTempleCard() {
  // Loop through the temples array and filter temples built after 2000
  temples.forEach((temple) => {
    const dedicationYear = parseInt(temple.dedicated.split(",")[0]);
    if (dedicationYear > 2000) {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");
      name.textContent = temple.templeName;
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
      dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", `${temple.templeName} Temple`);
      img.setAttribute("loading", "lazy");

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);

      document.querySelector("#main-temples-2").appendChild(card);
    }
  });
}
/*If the user clicks on the Large menu item, go to the function that will
display only the temples larger than 90,000 square feet.*/
document.getElementById("large").addEventListener("click", function () {
  // Clear existing content
  clearTempleCards();
  document.getElementById("main-temples-1").innerHTML = "";
  document.getElementById("main-temples-2").innerHTML = "";
  document.getElementById("main-temples-3").innerHTML = "";
  document.getElementById("main-temples-4").innerHTML = "";
  createLargeTempleCard();
  // Change the heading h2
  document.querySelector("h2").textContent = "Large Temples";
  /* Call the function createLargeTempleCard and display the temple cards */
});
function createLargeTempleCard() {
  // Loop through the temples array and filter temples larger than 90,000 square feet
  temples.forEach((temple) => {
    if (temple.area > 90000) {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");
      name.textContent = temple.templeName;
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
      dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", `${temple.templeName} Temple`);
      img.setAttribute("loading", "lazy");

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);

      document.querySelector("#main-temples-3").appendChild(card);
    }
  });
}
/*If the user clicks on the Small menu item, go to the function that will
display only the temples smaller than 10,000 square feet.*/
document.getElementById("small").addEventListener("click", function () {
  // Clear existing content
  clearTempleCards();
  createSmallTempleCard();
  // Change the heading h2
  document.querySelector("h2").textContent = "Small Temples";
  /* Call the function createSmallTempleCard and display the temple cards */
});
function createSmallTempleCard() {
  // Loop through the temples array and filter temples smaller than 10,000 square feet
  temples.forEach((temple) => {
    if (temple.area < 10000) {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");
      name.textContent = temple.templeName;
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
      dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", `${temple.templeName} Temple`);
      img.setAttribute("loading", "lazy");

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);

      document.querySelector("#main-temples-4").appendChild(card);
    }
  });
}

