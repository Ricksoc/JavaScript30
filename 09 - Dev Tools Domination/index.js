// jshint esversion: 8

const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("hello i am a %s string", 100);
// Styled
console.log("%c I am some great text", "font-size:50px; background: red");
// warning!
console.warn("Oh No");
// highlighted yellow in console
// Error :|
console.error("Bad times");
//highlighted red in console
// Info
console.info("A beaver is interesting");
// Testing
console.assert(1 === 2, "That is wrong");
//only fires if assertion is wrong
// clearing
// console.clear();
// clears console
// Viewing DOM Elements
const p = document.querySelector("p");
console.log(p);
console.dir(p); // allows you to open up an element in the console.
// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  // can also have groupCollapsed
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count("hello");
console.count("hello");
console.count("hello");
console.count("goodbye");
console.count("goodbye");
console.count("hello");
console.count("hello");
console.count("goodbye");
console.count("hello");
// timing
console.time("Fetching data");
let i = 0;
while (i < 100) {
  i++;
}
console.timeEnd("Fetching data");
