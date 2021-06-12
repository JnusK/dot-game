let slider = document.getElementById("speedRange");
let startButton = document.getElementById("startButton");
let scoreboard = document.getElementById("score");
let canvas = document.getElementById("game");

let start = false;
let score = 0;
let intervalId;

function onClickStart() {
  startButton.innerHTML === "Start" ? startButton.innerHTML = "Pause": startButton.innerHTML = "Start";
  start = !start;
  if (start) {
    createBall();
    intervalId = setInterval(createBall, 1000);
  } else {
    clearInterval(intervalId);
  }
}

startButton.addEventListener("click", onClickStart);

const properties = window.getComputedStyle(canvas, null);
const canvasHeight = Number(properties.height.slice(0, length - 2));
const canvasWidth = Number(properties.width.slice(0, length - 2));

function createBall() {
  if (start) {
    let ball = document.createElement("div");
  const duration = canvasHeight / slider.value / Math.max(0.6, Math.random());
  const size = Math.max(10, Math.random() * 100);
  const xpos = Math.min(Math.max(Math.random() * (canvasWidth - size) / canvasWidth, size / canvasWidth / 2), 1 - size / canvasWidth) * 100;
  const point = Math.ceil((100 - size + 10) / 10);
    
  ball.style.height = size + "px";
  ball.style.width = size + "px";
  ball.style.borderRadius = size / 2 + "px";
  ball.style.left = xpos + "%";
  ball.className = "ball"
  ball.style.animationDuration = duration + "s";
  ball.addEventListener("click", function() {
    if (start) {
      console.log(point);
    score += point;
    scoreboard.innerHTML = score;
    ball.remove();
    }
  });
  startButton.addEventListener("click", function() {
    ball.style.animationPlayState = start ? "running" : "paused";
  });
  ball.addEventListener("animationend", function() {
    ball.remove();
  }, false);
  canvas.appendChild(ball);
  }
}