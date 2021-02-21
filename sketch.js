let angle;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angle = 0;
}

function draw() {
    background(21);
    translate(0, height / 2);
    stroke(0, 100, 100);
    strokeWeight(4);
    for (let i = 0; i < width; i += 10) {
        line(i, 0, i, sin(i * 0.019 - angle) * 100);
    }
    angle += 0.01;
}
