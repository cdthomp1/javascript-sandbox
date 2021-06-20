import Rocket from './rocket.js'
import Platform from './platform.js'

document.addEventListener('keydown', logKey);
//document.addEventListener('keyup', logKey);

var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
var raf;


var rocket = new Rocket(1, canvas.height - 100, canvas);
var platform = new Platform(300, canvas.height, canvas);
platform.draw();

function draw(vy, vx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rocket.draw();
    platform.draw();


    rocket.y += vy;

    rocket.x += vx;

    if(336 - rocket.x > 0){
        alert("crash")
    }

    //raf = window.requestAnimationFrame(draw);
}

var stop = true;

// Currently does nothing, for now :) 

function logKey(e) {
    console.log(e.type)
    if (e.keyCode === 87) { // w
        draw(-rocket.vy, 0)
        window.cancelAnimationFrame(raf);
    } else if (e.keyCode === 65) { // a
        draw(0, -rocket.vx)
        window.cancelAnimationFrame(raf);
        console.log(rocket.data)
    } else if (e.keyCode === 83) { // s
        draw(rocket.vy, 0)
        console.log(rocket.data)
        window.cancelAnimationFrame(raf);
    } else if (e.keyCode === 68) { // d
        draw(0, rocket.vx)
        window.cancelAnimationFrame(raf);

        console.log(rocket.data)
    }
}

