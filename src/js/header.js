const icon = document.getElementById('icon');

icon.addEventListener('click', onIconClick)

function onIconClick() {
    document.body.classList.toggle('night-mode');

    if (document.body.classList.contains('night-mode')) {
        icon.src = '../img/night-mode.svg'
    }
    else {
        icon.src = '../img/day-mode.svg'
    }
}