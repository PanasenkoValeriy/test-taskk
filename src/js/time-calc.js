const input = document.querySelector('.time-input');
const button = document.querySelector('.time-btn-js');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const result = document.querySelector('.time-text');
const form = document.getElementById('time-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    converter();
});

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        converter();
    }
});


function converter() {
    if(input.value !== '' && Number(input.value)) {
        const daysConverter = Math.floor(input.value / (24 * 60));
        const hoursConverter = Math.floor((input.value - daysConverter * 24 * 60) / 60);
        const minutesConverter = Math.floor(input.value - (daysConverter * 24 * 60 + hoursConverter * 60));
        const secondsConverter = Math.floor((input.value - (daysConverter * 24 * 60 + hoursConverter * 60 + minutesConverter)) * 60);

        days.textContent = `${daysConverter} дн.`;
        
        if (hoursConverter < 10) {
            hours.textContent = `${hoursConverter}:`;
        } else {
            hours.textContent = `0${hoursConverter}:`;
        }
    
        if (minutesConverter >= 10) {
            minutes.textContent = `${minutesConverter}:`;
        } else {
            minutes.textContent = `0${minutesConverter}:`;
        }
    
        if (secondsConverter >= 10) {
            seconds.textContent = `${secondsConverter}`;
        } else {
            seconds.textContent = `0${secondsConverter}`;
        }
        
        

        result.style.color = '#000000';
        result.textContent = `${daysConverter} дн. ${hoursConverter}:${minutesConverter}:${secondsConverter}`;

    } else {
        result.textContent = 'Введіть кількість хвилин!'
        result.style.color = '#DD0000';
    }
    
    input.value = '';

}