// jshint esversion: 8

/* Get Elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

/* Build Functions */
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? "▶️" : "⏸️";
  toggle.textContent = icon;
}

function timeSkip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTIme = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTIme;
}

/* Connect event listners */
// eventListeners for clicking on button or video screen
toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
// Event listeners to change button icon when video is played / paused
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
// Add event listener to update time
video.addEventListener("timeupdate", handleProgress);

// Set up ability to move video time using progress bar
let mousedown = false;
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
progress.addEventListener("click", scrub);

// function first checks mousedown and if true proceeds onto scrub
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));

// Event listeners to allow spacebar to play / pause video after button has been clicked
document.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    togglePlay();
  }
});
toggle.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    togglePlay();
  }
});

skipButtons.forEach((skip) => skip.addEventListener("click", timeSkip));

// Add event listener to detect when volue / playback rate are changed
ranges.forEach((slider) =>
  slider.addEventListener("change", handleRangeUpdate)
);

// function enterFullScreen(){
//   if(!video.webkitDisplayingFullscreen){
//       video.webkitRequestFullScreen();
//   }else{
//       document.webkitExitFullscreen();
//   }
// }

// fullScreen.addEventListener('click', enterFullScreen);