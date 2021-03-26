// jshint esversion: 8
const pressedKeys = [];
const secretCode = "wesbos";

window.addEventListener("keyup", (e) => {
  pressedKeys.push(e.key);
  pressedKeys.splice(-secretCode.length - 1, pressedKeys.length - secretCode.length);
  console.log(pressedKeys);

  if (pressedKeys.join("").includes(secretCode)) {
    alert("Secret code activated");
  }
});
