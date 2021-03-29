//jshint esversion: 8

const images = document.querySelectorAll("images");

/* debounce function allows you to reduce the frequency with which 
the internal function runs -> debouce will run all the time, e.g. 
on "scroll", internal function will only run every n milliseconds
*/
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  console.log(e);
}

window.addEventListener("scroll", checkSlide);
