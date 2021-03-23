// jshint esversion: 8

const checkboxes = document.querySelectorAll(".inbox [type = 'checkbox']");

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((box) => {
      if (box === this || box === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        box.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((box) => {
  box.addEventListener("click", handleCheck);
});
