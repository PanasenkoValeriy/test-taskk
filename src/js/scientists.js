// import { scientists } from './utils/scientists-data';


const card = document.querySelectorAll('.scientist-card');
const button = document.querySelector('.scientist-option-button');
const text = document.querySelectorAll('.scientist-card-text');
// const list = document.querySelectorAll('.scientist-card-list');

button.onclick = function century() {
  scientists.filter(scientist => scientist.born >= 1800 && scientist.born < 1900)
  
}