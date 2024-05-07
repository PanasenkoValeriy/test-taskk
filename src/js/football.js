const field = document.querySelector('.football__field');
const ball = document.querySelector('.ball');

const center = ball.offsetWidth / 2;
let ballSpin = false;

field.addEventListener('click', onFieldClick);

function onFieldClick(e) {
    if (!ballSpin) {
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;

        mouseX = mouseX > field.offsetWidth - ball.offsetWidth + center ? field.offsetWidth - ball.offsetWidth + center : mouseX;
        mouseY = mouseY > field.offsetHeight - ball.offsetHeight + center ? field.offsetHeight - ball.offsetHeight + center : mouseY;

        mouseX = mouseX < center ? center : mouseX;
        mouseY = mouseY < center ? center : mouseY;

        ball.style.left = `${mouseX - center}px`;
        ball.style.top = `${mouseY - center}px`;

        ball.classList.add('spin')
        ballSpin = true;

        setTimeout(() => {
            ball.classList.remove('spin');
            ballSpin = false;
        }, 1000)
    }
}