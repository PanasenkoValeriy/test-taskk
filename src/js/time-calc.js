const input = document.querySelector('.time-input');
const button = document.querySelector('.time-btn-js');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const result = document.querySelector('.time-text');
days.style.marginRight = '5px';


button.onclick = function converter() {
    const daysConvertor = Math.floor(input.value / (24 * 60));
    const hoursConvertor = Math.floor((input.value - daysConvertor * 24 * 60) / 60);
    const minutesConvertor = Math.floor(input.value - (daysConvertor * 24 * 60 + hoursConvertor * 60));
    const secondsConvertor = Math.floor((input.value - (daysConvertor * 24 * 60 + hoursConvertor * 60 + minutesConvertor)) * 60);

    days.textContent = `${daysConvertor} дн.`;

    if (hoursConvertor >= 10) {
        hours.textContent = `${hoursConvertor}:`;
    } else {
        hours.textContent = `0${hoursConvertor}:`;
    }

    if (minutesConvertor >= 10) {
        minutes.textContent = `${minutesConvertor}:`;
    } else {
        minutes.textContent = `0${minutesConvertor}:`;
    }

    if (secondsConvertor >= 10) {
        seconds.textContent = `${secondsConvertor}`;
    } else {
        seconds.textContent = `0${secondsConvertor}:`;
    }
    
    

    // result.textContent = `${daysConvertor} дн. ${hoursConvertor}:${minutesConvertor}:${secondsConvertor}`

}