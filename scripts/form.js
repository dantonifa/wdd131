const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];
/*When the dropdown menu with the id = "product" is clicked, call the 
function populateDropdownMenu()*/
document
  .getElementById("product")
  .addEventListener("click", populateDropdownMenu);
// Function to populate the dropdown menu
function populateDropdownMenu() {
  // Get the dropdown menu with the id = "product"
  let dropdown = document.getElementById("product");
  // Loop through the products array
  for (let i = 0; i < products.length; i++) {
    // Create an option element
    let option = document.createElement("option");
    // Set the value of the option element to the id of the product
    option.value = products[i].id;
    // Set the text of the option element to the name of the product
    option.text = products[i].name;
    // Append the option element to the dropdown menu
    dropdown.appendChild(option);
  }
}
