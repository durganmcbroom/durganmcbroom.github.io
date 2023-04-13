let context;
let ballClass;
let canvas;
let player1;
let player2;
let gameRunning = false;
export function startPong() {
    canvas = document.getElementById("gameCanvas");
    context = canvas.getContext("2d");
    startRound();
    update();
}

window.addEventListener("keydown", function(event) {

    if (event.keyCode == 38) {
        player1.moving = true;
        player1.dir = 1;
    } else if (event.keyCode == 40) {
        player1.moving = true;
        player1.dir = -1;
    } else if (event.keyCode == 87) {
        player2.moving = true;
        player2.dir = 1;
    } else if (event.keyCode == 83) {
        player2.moving = true;
        player2.dir = -1;
    }
});
window.addEventListener("keyup", function(event) {
    if (event.keyCode == 38) {
        player1.moving = false;
    } else if (event.keyCode == 40) {
        player1.moving = false;
    } else if (event.keyCode == 87) {
        player2.moving = false;
    } else if (event.keyCode == 83) {
        player2.moving = false;
    }
});

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ballClass.updatePos();
    player1.move();
    player2.move();
    setTimeout(function() {
        update();
    }, 10);
}


class ball {
    constructor(slope, x, y, dir, intercept, speed) {
        this.slope = slope;
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.intercept = intercept;
        this.speed = speed;
    }
    updatePos() {

        if (gameRunning) {
            this.x += (this.speed * this.dir);

            this.y = (this.slope * this.x) + this.intercept;
            this.shouldBounce();


            this.scoreCheck();
        }
        this.coordsToCanvas();
    }
    shouldBounce() {

        if ((this.y > canvas.height || this.y < 0) || (this.y -15 > canvas.height || this.y -15 < 0)) {
            this.bounceY();
        } else if (player1.ballBounce(this.x, this.y) || player2.ballBounce(this.x, this.y)) {

            this.bounceX();
        }
    }
    coordsToCanvas() {
        console.log(this.intercept + " is the intercept");
        const newYCoord = canvas.height - this.y
        this.render(this.x, newYCoord);
    }
    render(x,y) {

        context.fillRect(x,y, 15,15);
    }
    bounceY() {
        const newIntercept = (this.slope * this.x) + this.y;
        this.slope *= -1;


        this.intercept = newIntercept;
    }
    bounceX() {
        const newIntercept = (this.slope * this.x) + this.y;
        this.dir *= -1;
        this.slope *= -1;


        this.intercept = newIntercept;
    }
    scoreCheck() {
        if (this.x > canvas.width || this.x < 0) {

            gameRunning = false;
            startRound();
            //const newSlope = Math.floor(Math.random()*4) + 1;
            //console.log(newSlope);
            //this.slope = (newSlope);
        }
    }

}

function startRound() {
    const newSlope = Math.random();
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const dir = Math.random() > 0.5? 1: -1;
    const speed = Math.random() *1.5 + 0.5;
    const intercept = ((newSlope * x) - y) * -1;
    //slope, x, y, dir, intercept, speed
    ballClass = new ball(newSlope, x,  y, dir , intercept, speed);

    player1 = new paddle((canvas.width - 20), (canvas.height/2) +25, 1, 1);
    player2 = new paddle(20, (canvas.height/2) +25, 1, 2);
    setTimeout(function() {
        gameRunning = true;

    }, 1000)
}





class paddle {
    constructor(x, y, speed, side, moving, dir) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.side = side;
        this.moving = moving;
        this.dir= dir;
    }
    move() {

        if (this.moving && this.wallCheck()) {

            this.y += this.speed*this.dir;
            this.coordsToCanvas(this.x, this.y);
        } else {

            this.coordsToCanvas(this.x, this.y);
        }

    }
    wallCheck() {
        if (this.y > canvas.height || this.y - 50 < 0) {
            if (this.y - 50 < 0){
                this.y += 1;
            } else  {
                this.y -= 1;
            }

            return false;
        } else {
            return true;
        }
    }
    render(x, y) {
        context.fillRect(x, y, 10, 50);

    }
    coordsToCanvas(x, y) {
        const newYCoord = canvas.height - y
        this.render(x, newYCoord);
    }
    ballBounce(x, y) {

        if (this.side == 1) {
            if (x + 15 > this.x && (y > this.y - 50 && y -15 < this.y)) {
                return true;
            }
        } else if (this.side == 2) {
            if (x < this.x +10 && (y > this.y - 50 && y - 15 < this.y)) {
                return true;
            }
        }
    }
}