export default class Platform {
    constructor(x, y, canvas) {
        console.log(canvas)
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 30;
        this.radius = 25;
        this.canvas = canvas;

    }



    draw() {
        var canvas = this.canvas;
        console.log(this.x, this.y)
        var ctx = canvas.getContext('2d');

        ctx.strokeRect(this.x, this.y - this.height, this.width, this.height);
    }
}

