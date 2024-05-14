const icon = document.getElementById('icon');

icon.addEventListener('click', onIconClick)

function onIconClick() {
    document.body.classList.toggle('night-mode');

    if (document.body.classList.contains('night-mode')) {
        icon.src = '/img/night-mode.svg'
    }
    else {
        icon.src = '/img/day-mode.svg'
    }
}

// filter

const filterBox = document.querySelectorAll('section, hr');
// const filterBtn = document.querySelectorAll('.submenu__btn')

document.querySelector('.submenu__list').addEventListener('click', e => {
    if (e.target.className !== 'submenu__btn'){
      return false;
    } 

    let filterClass = e.target.dataset['h'];

    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });

});