import { scientists } from './utils/scientists-data';

const century = document.getElementById('century');
const einshtein = document.getElementById('einshtein');
const alphabet = document.getElementById('alphabet');
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const name = document.getElementById('name');
const latest = document.getElementById('latest');
const longestAndSmallest = document.getElementById('longestAndSmallest');
const lettersMatch = document.getElementById('lettersMatch');

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

century.onclick = function() {
  const bornFiltered = scientists.filter(scientist => scientist.born >= 1800 && scientist.born < 1900);
  
  console.log(bornFiltered);
}

einshtein.onclick = function() {
  const einshteinFind = scientists.find(scientist => scientist.name === 'Albert');

  console.log(einshteinFind);
}

alphabet.onclick = function() {
  const scientistToSortByAlphabet = scientists.map(scientist => scientist.name);
  const alphabetSorted = scientistToSortByAlphabet.sort();

  console.log(alphabetSorted);
}

surname.onclick = function() {
  const surnameFind = scientists.filter(scientist => scientist.surname.startsWith('C'));

  console.log(surnameFind);
}

age.onclick = function() {
  const scientistToSortByAge = scientists.map(scientist => scientist.dead - scientist.born);
  const ageSorted = scientistToSortByAge.sort();
  
  console.log(ageSorted);
}

name.onclick = function() {
  const nameDelete = scientists.filter(scientist => !scientist.name.startsWith('A'));
  
  console.log(nameDelete);
}

latest.onclick = function() {
  const latestBorn = scientists.reduce((latest, earliest) => {
    if (earliest.born > latest.born) {
        return earliest;
    } else {
        return latest;
    }});

  console.log(latestBorn);
}

longestAndSmallest.onclick = function() {
  const longest = scientists.map(scientist => scientist.dead - scientist.born);
  const shortest = scientists.map(scientist => scientist.dead - scientist.born);

  console.log(ageSorted);
}

lettersMatch.onclick = function() {
  const lettersMatchFound =

  console.log(lettersMatchFound);
}
