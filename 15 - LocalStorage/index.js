// jshint esversion: 8

const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];
const btnClear = document.querySelector("#clear");
const btnCheck = document.querySelector("#check");
const btnUncheck = document.querySelector("#uncheck");

function addItem(e) {
  // by default submitting a form refreshes the page
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text, // es:6 shorthand allows this to be used instead of text: text
    done: false,
  };
  items.push(item);
  populateList(itemsList, items);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset(); // resest form
}

function populateList(platesList, plates = []) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
    <li>
    <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      }/>
    <label for="item${i}">${plate.text}</label>
    </li>
    `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(itemsList, items);
}

addItems.addEventListener("submit", addItem);

// add event listener to the <ul> which is always present nomatter how many list items
// this is called event delegation
itemsList.addEventListener("click", toggleDone);

btnClear.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

btnCheck.addEventListener("click", () => {
  items.forEach((element) => {
    element.done = true;
});
localStorage.setItem("items", JSON.stringify(items));
location.reload();
});

btnUncheck.addEventListener("click", () => {
  items.forEach((element) => {
    element.done = false;
});
localStorage.setItem("items", JSON.stringify(items));
location.reload();
});

setTimeout(() => {
    populateList(itemsList, items);
}, 0);
