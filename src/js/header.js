const icon = document.getElementById('icon');

icon.addEventListener('click', onIconClick)

function onIconClick() {
    document.body.classList.toggle('dark__theme');

    if (document.classList.classList.contains('dark__theme')) {
        icon.src = '/img/night mode.svg'
    }
}