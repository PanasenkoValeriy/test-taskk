import {getCustomProperty, incrementCustomProperty, setCustomProperty} from './updateCustomProperty';

const ground = document.querySelectorAll('[data-ground]');

const SPEED = 0.05;

export function setupGround() {
    setCustomProperty(ground[0], '--left', 0);
    setCustomProperty(ground[1], '--left', 100);
}

export function updateGround(delta, speedScale) {
    ground.forEach(ground => {
        incrementCustomProperty(ground, '--left', delta * speedScale * SPEED * -1);
        if(getCustomProperty(ground, '--left') <= -100) {
            incrementCustomProperty(ground, '--left', 200);
        }
    })
}