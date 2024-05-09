import { scientists } from './utils/scientists-data';
// .addEventListener('click', centuryFn)

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

scientists.forEach((scientist, index) => {
  const card = document.createElement('li');
  card.classList.add('scientist-card');
  
  card.style.backgroundImage = `url('../img/scientists-img/${index + 1}.jpg')`;
  card.style.backgroundSize = 'cover';

  card.innerHTML = `<p class="scientist-card-text">${scientist.name} ${scientist.surname}<br>(${scientist.born}-${scientist.dead})</p>`;
  
  scientistList.appendChild(card);



  century.onclick = function() {
    const bornFiltered = scientists.filter(scientist => !(scientist.born >= 1800 && scientist.born < 1900));

    console.log(bornFiltered);
    // card.setAttribute('id', 'centuryFiltered')

    // const hideCenturyFiltered = document.getElementById('centuryFiltered');

    // hideCenturyFiltered.style.display = 'none';
  }
});


einshtein.onclick = function() {
  const einshteinFind = scientists.find(scientist => scientist.name === 'Albert');

  console.log(einshteinFind);
}

alphabet.onclick = function() {
  return console.log(scientists.map(scientist => scientist.name).sort())
}

surname.onclick = function() {
  const surnameFind = scientists.filter(scientist => scientist.surname.startsWith('C'));

  console.log(surnameFind);
}

age.onclick = function() {
  const scientistToSortByAge = scientists.map(scientist => scientist.dead - scientist.born).sort();
  
  console.log(scientistToSortByAge);
}

name.onclick = function() {
  const nameDelete = scientists.filter(scientist => !scientist.name.startsWith('A'));
  
  console.log(nameDelete);
}

latest.onclick = function() {
  const sortedScientists = [...scientists].sort((a, b) => b.born - a.born);

  const latestBorn = sortedScientists[0];

  console.log(latestBorn);
}

longestAndSmallest.onclick = function() {
  const scientistToSortByAge = scientists.map(scientist => scientist.dead - scientist.born);
  const ageSorted = scientistToSortByAge.sort();

  const longest = ageSorted[0];
  
  const shortest = ageSorted[11];

  console.log(longest);
  console.log(shortest);
}

lettersMatch.onclick = function() {
  scientists.filter(scientist => {
    const nameLetter = scientist.name[0];
    const surnameLetter = scientist.surname[0];

    if(nameLetter === surnameLetter) {
      console.log(true);
    }
  })
}