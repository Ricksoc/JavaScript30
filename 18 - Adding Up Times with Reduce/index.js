// jshint esversion: 8

const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const totalSeconds = timeNodes.reduce((total, nodeTime) => {
  const timeString = nodeTime.dataset.time.split(":");
  return (
    total + (parseInt(timeString[0], 10) * 60 + parseInt(timeString[1], 10))
  );
}, 0);

const hours = Math.floor(totalSeconds / 3600);
let secondsLeft = totalSeconds % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(
  `Total length of videos is: ${hours} hours ${minutes} minutes and ${secondsLeft} seconds`
);
console.log(`${hours}:${minutes}:${secondsLeft}`);
