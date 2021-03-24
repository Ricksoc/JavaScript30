// jshint esversion: 8

const checkboxes = document.querySelectorAll(".inbox [type = 'checkbox']");

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked && lastChecked) {
    checkboxes.forEach((box) => {
      if (box === this || box === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        box.checked = true;
      }
    });
  }

  //If action was to check a box update lastChecked
  if (this.checked) {
    lastChecked = this;
  }

  // Check if no boxes are checked and if so nullify lastChecked
  let unchecked = 0;
  checkboxes.forEach((box) => {
    if (box.checked == false) {
      unchecked++;
    }
  });
  if (unchecked == checkboxes.length) {
    lastChecked = null;
  }
}

checkboxes.forEach((box) => {
  box.addEventListener("click", handleCheck);
});
