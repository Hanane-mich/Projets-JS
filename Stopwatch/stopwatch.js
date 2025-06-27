const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  // Ajout des zéros devant les nombres < 10
  let formattedHH = hh.toString().padStart(2, "0");
  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");

  return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

function print(txt) {
  display.innerHTML = txt;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 1000);
  startStopBtn.textContent = "Pause";
  running = true;
}

function stop() {
  clearInterval(timerInterval);
  startStopBtn.textContent = "Démarrer";
  running = false;
}

startStopBtn.addEventListener('click', () => {
  if (!running) {
    start();
  } else {
    stop();
  }
});

resetBtn.addEventListener('click', () => {
  stop();
  elapsedTime = 0;
  print("00:00:00");
});
