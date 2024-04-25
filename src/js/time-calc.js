const input = document.querySelector('.time-input');
const button = document.querySelector('.time-btn-js');
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

button.onclick = function converter() {
    days = Math.floor(input.value / (24 * 60));
    hours = Math.floor((input.value - (days * (24 * 60))) / 60);
    minutes = input.value - ((days * (24 * 60)) + hours * 60);
    

    console.log(days);
    console.log(hours);
    console.log(minutes);
}
