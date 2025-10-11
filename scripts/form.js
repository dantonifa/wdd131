const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const li = document.createElement("li");
const deleteButton = document.createElement("button");
/*Open the JavaScript file. Declare an array named chaptersArray and assign it to the results of a defined 
function named getChapterList (This function does not exist, yet).*/
/*In that same array variable declaration and assignment, add a compound OR condition to assign it an empty 
array in case this is the user's first visit or if the localStorage item is missing.*/
const chaptersArray = getChapterList() || [];
/*Now populate the displayed list of chapters. Use a forEach on the chaptersArray to process each entry 
named chapter. Use an arrow function within the loop to call a new defined function named displayList 
and pass it the argument of chapter. That way each entry will be processed (i.e., appended to the list).*/
chaptersArray.forEach((chapter) => {
  displayList(chapter);
});
/*Change the button click event listener to only do the following tasks */
button.addEventListener("click", function () {
  /*Check if the input is empty; if it is not empty, then ...
Call displayList with the input.value argument*/
  if (input.value.trim() !== "") {
    displayList(input.value);
    /*Push the input.value into the chaptersArray*/
    chaptersArray.push(input.value);
    /*Update the localStorage with the new array by calling a function named setChapterList*/
    setChapterList();
    /*Set the input.value to nothing*/
    input.value = "";
    /*Set the focus back to the input.*/
    input.focus();
  }
});
/*Create the displayList defined function that receives one parameter named item.*/
function displayList(item) {
  /*Put all the code that builds a list item from the previous button click event listener into this new
   displayList function and use the item parameter as the input. A deleteChapter function will need to be
   called within the delete button click event to remove the chapter from the array and localStorage.*/
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  li.textContent = item;
  deleteButton.textContent = "❌";
  li.appendChild(deleteButton);
  list.append(li);
  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    removeChapter(item);
    input.focus();
  });
}
/*Define the setChapterList function to set the localStorage item that you have already named. 
Use JSON.stringify() to stringify the array.*/
function setChapterList() {
  localStorage.setItem("chapters", JSON.stringify(chaptersArray));
}
/*Define the getChapterList function to get the localStorage item. No parameter is needed. 
Since this function returns to an awaiting array, you will need to use JSON.parse on the string.*/
function getChapterList() {
  return JSON.parse(localStorage.getItem("chapters"));
}
/*Finally, define the deleteChapter function with a parameter named chapter that does three things*/
function deleteChapter(chapter) {
  /*1. Reformat the chapter parameter to get rid of the ❌ that is passed on the end of the chapter string
  when you called the deleteChapter function. Use string.slice() method to extract the last character.*/
  chapter = chapter.slice(0, -1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  /*2. Redefine the chaptersArray array using the array.filter method to return everything except the chapter to be removed.
  setChapterList();*/
  setChapterList();
  /*3. Remove the chapter from the displayed list*/
  const listItems = Array.from(list.children);
  const listItem = listItems.find((item) => item.textContent === chapter);
  if (listItem) {
    list.removeChild(listItem);
  }
}

