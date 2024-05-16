import { scientists } from './utils/scientists-data';

const buttons = document.querySelectorAll('.scientist-option-button');
const scientistList = document.querySelector('.scientist-card-list');

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active-calc-btn");
    });
    button.classList.toggle("active-calc-btn");

    button.addEventListener('click', () => {
      button.classList.toggle("active-calc-btn");
    });
  });
});

scientists.forEach((scientist, index) => {
  const card = document.createElement('li');
  card.classList.add('scientist-card');
  card.style.backgroundImage = `url('../img/scientists-img/${index + 1}.jpg')`;
  // card.style.backgroundImage = `${scientist.img}`;
  card.style.backgroundSize = 'cover';
  card.innerHTML = `<p class="scientist-card-text">${scientist.name} ${scientist.surname}<br>(${scientist.born}-${scientist.dead})</p>`;
  
  scientistList.appendChild(card);

  document.getElementById('century').addEventListener('click', centuryFn);
  document.getElementById('einshtein').addEventListener('click', einshteinFn);
  document.getElementById('alphabet').addEventListener('click', alphabetFn);
  document.getElementById('surname').addEventListener('click', surnameFn);
  document.getElementById('age').addEventListener('click', ageFn);
  document.getElementById('name').addEventListener('click', nameFn);
  document.getElementById('latest').addEventListener('click', latestFn);
  document.getElementById('longestAndSmallest').addEventListener('click', longestAndShortest);
  document.getElementById('lettersMatch').addEventListener('click', lettersMatchFn);

  function centuryFn() {
    card.classList.remove('hide');
    if(!(scientist.born >= 1800 && scientist.born < 1900)) {
      card.classList.add('hide');
    }
  }

  function einshteinFn() {
    if(scientist.name === 'Albert') {
      card.classList.remove('hide');
    } else {
      card.classList.add('hide');
    }
  }
  
  function alphabetFn() {
    const sortedScientists = scientists.map(scientist => scientist.name).sort();
    const cards = scientistList.querySelectorAll('.scientist-card');
    const sortedCards = [];
  
    sortedScientists.forEach(name => {
      const card = Array.from(cards).find(card => card.querySelector('.scientist-card-text').textContent.startsWith(name));
      if (card) {
        sortedCards.push(card);
      }
    });
  
    sortedCards.forEach(card => {
      scientistList.appendChild(card);
    });
  }

  function surnameFn() {
    scientists.forEach((scientist, index) => {
      const card = document.querySelector(`.scientist-card:nth-child(${index + 1})`);
      if (scientist.surname.startsWith('C')) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  }
  
  function ageFn() {
    const sortedScientists = scientists.slice().sort((a, b) => {
      const ageA = a.dead - a.born;
      const ageB = b.dead - b.born;
      return ageA - ageB;
    });
  
    sortedScientists.forEach((scientist, index) => {
      const card = document.querySelector(`.scientist-card:nth-child(${index + 1})`);
      scientistList.appendChild(card);
    });
    
  }

  function nameFn() {
    scientists.forEach((scientist, index) => {
      const card = document.querySelector(`.scientist-card:nth-child(${index + 1})`);
      if (!(scientist.name.startsWith('A'))) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  }

  function latestFn() {
    const sortedScientists = [...scientists].sort((a, b) => b.born - a.born);
  
    const latestBorn = sortedScientists[0];
  
    scientists.forEach((scientist, index) => {
      const card = document.querySelector(`.scientist-card:nth-child(${index + 1})`);
      if (scientist !== latestBorn) {
        card.classList.add('hide');
      } else {
        card.classList.remove('hide');
      }
    });
  }

  function longestAndShortest() {
    const scientistToSortByAge = scientists.map(scientist => scientist.dead - scientist.born);
    const ageSorted = scientistToSortByAge.sort((a, b) => a - b);
    
    const longestAge = ageSorted[ageSorted.length - 1];
    const shortestAge = ageSorted[0];
    
    scientists.forEach((scientist, index) => {
      const card = document.querySelector(`.scientist-card:nth-child(${index + 1})`);
      const age = scientist.dead - scientist.born;
      if (age !== longestAge && age !== shortestAge) {
        card.classList.add('hide');
      } else {
        card.classList.remove('hide');
      }
    });
  }
  
  function lettersMatchFn() {
    scientists.forEach((scientist, index) => {
      const card = document.querySelector(`.scientist-card:nth-child(${index + 1})`);
      const nameLetter = scientist.name[0];
      const surnameLetter = scientist.surname[0];
      if (nameLetter !== surnameLetter) {
        card.classList.add('hide');
      } else {
        card.classList.remove('hide');
      }
    });
  }
});

// lettersMatch.onclick = function() {
//   scientists.filter(scientist => {
//     const nameLetter = scientist.name[0];
//     const surnameLetter = scientist.surname[0];

//     if(nameLetter === surnameLetter) {
//       console.log(true);
//     }
//   })
// }
// century.addEventListener('click', centuryFn);

// function centuryFn() {
//   const bornFiltered = scientists.filter(scientist => !(scientist.born >= 1800 && scientist.born < 1900));

//     // card.setAttribute('id', 'centuryFiltered')
//     // const hideCenturyFiltered = document.getElementById('centuryFiltered');
//     // hideCenturyFiltered.style.display = 'none';
// }


// einshtein.onclick = function() {
//   const einshteinFind = scientists.find(scientist => scientist.name === 'Albert');

//   console.log(einshteinFind);
// }

// alphabet.onclick = function() {
//   return console.log(scientists.map(scientist => scientist.name).sort())
// }

// surname.onclick = function() {
//   const surnameFind = scientists.filter(scientist => scientist.surname.startsWith('C'));

//   console.log(surnameFind);
// }

// age.onclick = function() {
//   const scientistToSortByAge = scientists.map(scientist => scientist.dead - scientist.born).sort();
  
//   console.log(scientistToSortByAge);
// }

// name.onclick = function() {
//   const nameDelete = scientists.filter(scientist => !scientist.name.startsWith('A'));
  
//   console.log(nameDelete);
// }

// latest.onclick = function() {
//   const sortedScientists = [...scientists].sort((a, b) => b.born - a.born);

//   const latestBorn = sortedScientists[0];

//   console.log(latestBorn);
// }

// longestAndSmallest.onclick = function() {
//   const scientistToSortByAge = scientists.map(scientist => scientist.dead - scientist.born);
//   const ageSorted = scientistToSortByAge.sort();

//   const longest = ageSorted[0];
  
//   const shortest = ageSorted[11];

//   console.log(longest);
//   console.log(shortest);
// }

// lettersMatch.onclick = function() {
//   scientists.filter(scientist => {
//     const nameLetter = scientist.name[0];
//     const surnameLetter = scientist.surname[0];

//     if(nameLetter === surnameLetter) {
//       console.log(true);
//     }
//   })
// }