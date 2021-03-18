// jshint esversion:8

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  setAngle(secondHand, seconds);
  setAngle(minuteHand, minutes);
  setAngle(hourHand, hours);
  console.log(seconds, minutes, hours);
}

function setAngle(hand, handTime) {
  const degrees = (360 / 60) * handTime + 90;
  if (degrees === 90) {
    hand.style.transition = "none";
  } else {
    hand.style.transition = "";
  }
  hand.style.transform = `rotate(${degrees}deg)`;
}

setInterval(setDate, 1000);
