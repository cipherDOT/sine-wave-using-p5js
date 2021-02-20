
class Charecter {

    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.value;
        this.speed = speed;
    }

    set() {
        this.value = String.fromCharCode(0x30A0 + round(random(0, 96)));
    }
    
    show() {
        fill(0, 255, 90);
        textSize(36);
        text(this.value, this.x, this.y);
        this.rain();
    }

    rain() {
        this.y += this.speed;
    }
}

