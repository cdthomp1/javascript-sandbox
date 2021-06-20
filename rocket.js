export default class Rocket {
    constructor(x, y, canvas) {
        console.log(canvas)

        this.velocity = 0;
        this.roll = 0;
        this.x = x;
        this.y = y;
        this.vx = 5
        this.vy = 5;
        this.radius = 25;
        this.canvas = canvas;
        this.draw();
        this.image = new Image();
        this.src = './rocket.png';
        this.image.src = this.src;
    }

    get data() {
        return { x: this.x, y: this.y, vx: this.vx, vy: this.vy };
    }

    addThrust(thrust) {
        if (this.velocity !== 100) {
            this.y -= this.vy;
        } else {
            console.log('Too Fast')
        }
    }

    minusThrust(thrust) {
        this.velocity -= thrust;
    }

    rollLeft(roll) {
        this.roll -= roll;
    }

    rollRight(roll) {
        this.roll += roll;
    }

    draw() {
        var x = this.x;
        var y = this.y;
        var ctx = this.canvas.getContext('2d');
        var img = new Image();
        img.src = './rocket.png';
        img.onload = function () {
            ctx.drawImage(img, x, y, 100, 100);
        };
       /*  var ctx = this.canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill(); */
    }
}

