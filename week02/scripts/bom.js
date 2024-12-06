const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const li = document.createElement("li");
const deleteButton = document.createElement("button");
li.textContent = input.value;
deleteButton.textContent = "❌";
li.appendChild(deleteButton);
list.appendChild(li);
button.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = input.value;
    deleteButton.textContent = "❌";
    li.appendChild(deleteButton);
    list.appendChild(li);
  }
});
list.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
});
deleteButton.addEventListener("click", function () {
  list.removeChild(li);
  input.focus();
});
input.value = "";
input.focus();
