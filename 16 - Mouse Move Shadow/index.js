// jshint esversion: 8

const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 300; // px

function shadow(e) {
  // es6 destructuring approach
  // could alterntively do: const width = hero.offsetWidth
  const { offsetWidth: width, offsetHeight: height } = hero;

  /* 
  Get position of cursor - will be given relative to the element
  the event listener is added to, or to the any children of that element
  if the cursor is hovering over them.
  */
  let { offsetX: x, offsetY: y } = e;

  /*
  adjust cursor position to always be relative to "hero" which is the top level div
  'this' will always be the element the listener is attached to, the target will be
  the element the cursor is hovering over
  */
  if (this != e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 red,
${-xWalk}px ${yWalk}px 0 blue,
${-xWalk}px ${-yWalk}px 0 green,
${xWalk}px ${-yWalk}px 0 yellow
`;
}

hero.addEventListener("mousemove", shadow);
