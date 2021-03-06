//jshint esversion: 8

const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 1;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the function from running when it is not moused down
  console.log(e, hue);
  // Update line colour as hue increments
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  // update lastX + Y as mouse moves so current and previous cursor points are connected
  // Without this each point would connect to the one that the line started from
  [lastX, lastY] = [e.offsetX, e.offsetY];

  // Change hue as cursor moves
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  // Increase and decrase line size as cursor moves
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  //set last X + Y so that line starts from the point of mousedown
  //Without this the line with always connect to the point the previous line ended
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
