import {
  getCustomProperty,
  incrementCustomProperty,
  setCustomProperty,
} from './updateCustomProperty';

const dinosaur = document.getElementById('dino-player');

const JUMP_SPEED = 0.45;
const GRAVITY = 0.0020;
const DINO_FRAME_COUNT = 2;
const FRAME_TIME = 100;

let isJumping;
let dinoFrame;
let currentFrameTime;
let yVelocity;

export function setupDino() {
  isJumping = false;
  dinoFrame = 0;
  currentFrameTime = 0;
  yVelocity = 0;
  setCustomProperty(dinosaur, '--bottom', 0);

  document.removeEventListener('keydown', onJump);
  document.addEventListener('keydown', onJump);
}

export function updateDino(delta, speedScale) {
  handleRun(delta, speedScale);
  handleJump(delta);
}

export function getDinoRect() {
  return dinosaur.getBoundingClientRect();
}

export function setDinoLose() {
  dinosaur.src = '/img/dino-img/dino-lose.png';
}

function handleRun(delta, speedScale) {
  if (isJumping) {
    dinosaur.src = `/img/dino-img/dino-stationary.png`;
    return;
  }

  if (currentFrameTime >= FRAME_TIME) {
    dinoFrame = (dinoFrame + 1) % DINO_FRAME_COUNT;
    dinosaur.src = `/img/dino-img/dino-run-${dinoFrame}.png`;
    currentFrameTime -= FRAME_TIME;
  }

  currentFrameTime += delta * speedScale;
}

function handleJump(delta) {
  if (!isJumping) return;

  incrementCustomProperty(dinosaur, '--bottom', yVelocity * delta);

  if (getCustomProperty(dinosaur, '--bottom') <= 0) {
    setCustomProperty(dinosaur, '--bottom', 0);
    isJumping = false;
  }

  yVelocity -= GRAVITY * delta;
}

function onJump(e) {
  if (e.code !== 'Space' || isJumping) return;

  yVelocity = JUMP_SPEED;
  isJumping = true;
}
