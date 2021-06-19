import Rocket from './rocket.js'

document.addEventListener('keydown', logKey);

var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
var raf;


var rocket = new Rocket(0, canvas.height - 100, canvas);

function draw(vy) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rocket.draw();
    if (rocket.y + rocket.vy > canvas.height || rocket.y + rocket.vy < 0) {
        rocket.vy = -rocket.vy;
    }
    if (rocket.x + rocket.vx > canvas.width || rocket.x + rocket.vx < 0) {
        rocket.vx = -rocket.vx;
    }
    rocket.y += rocket.vy;
    raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', function (e) {
    raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', function (e) {
    window.cancelAnimationFrame(raf);
});

// Currently does nothing, for now :) 

function logKey(e) {
    if (e.keyCode === 87) { // w
        rocket.draw()
    } else if (e.keyCode === 65) { // a
        rocket.rollLeft(10)
        console.log(rocket.data)
    } else if (e.keyCode === 83) { // s
        rocket.minusThrust(10)
        console.log(rocket.data)
    } else if (e.keyCode === 68) { // d
        rocket.rollRight(10)
        console.log(rocket.data)
    }
}

