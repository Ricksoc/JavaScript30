// jshint esversion: 8

/* Get Elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress-filled");
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

/* Connect event listners */
// eventListeners for clicking on button or video screen
toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
// Event listeners to change button icon when video is played / paused
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
// Event listeners to allow spacebar to play / pause video after button has been clicked
document.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    togglePlay();
    console.log("document");
  }
});
toggle.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    togglePlay();
    console.log("toggle");
  }
});

skipButtons.forEach((skip) => skip.addEventListener("click", timeSkip));

ranges.forEach((slider) =>
  slider.addEventListener("click", (e) => {
    console.log(e.target);
  })
);
