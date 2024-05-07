import { scientists } from './utils/scientists-data';

// const century = document.querySelector('.scientist-option-button');
// const einshtein = document.querySelector('.scientist-option-button');
// const alphabet = document.querySelector('.scientist-option-button');
// const surname = document.querySelector('.scientist-option-button');
// const age = document.querySelector('.scientist-option-button');
// const name = document.querySelector('.scientist-option-button');
// const latest = document.querySelector('.scientist-option-button');
// const longestAndSmallest = document.querySelector('.scientist-option-button');
// const lettersMatch = document.querySelector('.scientist-option-button');

const scientistList = document.querySelector('.scientist-card-list');
const buttonList = document.querySelector('.scientists-button-list');

scientists.forEach((scientist, index) => {
  const card = document.createElement('li');
  card.classList.add('scientist-card');
  
  card.style.backgroundImage = `url('../img/scientists-img/${index + 1}.jpg')`;
  card.style.backgroundSize = 'cover';
  // card.style.backgroundPosition = 'center';

  card.innerHTML = `<p class="scientist-card-text">${scientist.name} ${scientist.surname}<br>(${scientist.born}-${scientist.dead})</p>`;
  
  scientistList.appendChild(card);
});

function century() {
  const bornFiltered = scientists.filter(scientist => scientist.born >= 1800 && scientist.born < 1900);
  
  console.log(bornFiltered);
}

// century.onclick = function century() {
//   const bornFiltered = scientists.filter(scientist => scientist.born >= 1800 && scientist.born < 1900);
  
//   console.log(bornFiltered);
// }

// einshtein.onclick = function einshtein() {
//   const einshteinFind = scientists.find(scientist => scientist.name === 'Albert');
  

//   console.log(einshteinFind);
// }

// alphabet.onclick = function alphabet() {
//   const alphabetSorted =

//   console.log(alphabetSorted);
// }

// surname.onclick = function surname() {
//   const surnameFound =

//   console.log(surnameFound);
// }

// age.onclick = function age() {
//   const ageSorted =

//   console.log(ageSorted);
// }

// name.onclick = function name() {
//   const nameDeleted =

//   console.log(nameDeleted);
// }

// latest.onclick = function latest() {
//   const latestFound =

//   console.log(latestFound);
// }

// longestAndSmallest.onclick = function longestAndSmallest() {
//   const longestAndSmallestFound =

//   console.log(longestAndSmallestFound);
// }

// lettersMatch.onclick = function lettersMatch() {
//   const lettersMatchFound =

//   console.log(lettersMatchFound);
// }
