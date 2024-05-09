import { updateGround, setupGround } from './dino/ground.js';
import {
  updateDino,
  setupDino,
  getDinoRect,
  setDinoLose,
} from './dino/dino.js';
import { updateCactus, setupCactus, getCactusRects } from './dino/cactus.js';

const button = document.getElementById('start-game');
const scoreEl = document.querySelector('.dino-score');
const loose = document.getElementById('loose');

button.addEventListener('click', handleStart, { once: true });

const SPEED_SCALE_INCREASE = 0.00001;

let lastTime;
let speedScale;
let score;

function update(time) {
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(update);
    return;
  }

  const delta = time - lastTime;

  updateGround(delta, speedScale);
  updateDino(delta, speedScale);
  updateCactus(delta, speedScale);
  updateSpeedScale(delta);
  updateScore(delta);

  if (checkLose()) return handleLose();

  lastTime = time;
  window.requestAnimationFrame(update);
}

function checkLose() {
  const dinoRect = getDinoRect();
  return getCactusRects().some(rect => isCollision(rect, dinoRect));
}

function isCollision(rect1, rect2) {
  return (
    rect1.left < rect2.right &&
    rect1.top < rect2.bottom &&
    rect1.right > rect2.left &&
    rect1.bottom > rect2.top
  );
}

function updateSpeedScale(delta) {
  speedScale += delta * SPEED_SCALE_INCREASE;
}

function updateScore(delta) {
  score += delta * 0.01;
  scoreEl.textContent = Math.floor(score);
}

button.addEventListener('click', handleStart);

function handleStart() {
  lastTime = null;
  speedScale = 1;
  score = 0;
  setupGround();
  setupDino();
  setupCactus();
  loose.classList.remove('show');
  window.requestAnimationFrame(update);
}

function handleLose() {
  setDinoLose();
  setTimeout(() => {
    button.addEventListener('click', handleStart, { once: true });
    loose.classList.add('show');
  }, 100);
}