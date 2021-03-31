//jshint esversion: 8

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
  sliderImages.forEach((sliderImage) => {
    /*
    get pixel level for bottom of current view then 
    offset by half the height for each image
    */
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;

    //bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    // console.log(slideInAt);

    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add("active");
      // console.log("shown");
    } else {
      sliderImage.classList.remove("active");
      // console.log("not shown");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
