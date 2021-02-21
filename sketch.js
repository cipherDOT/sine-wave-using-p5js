let radius;
let len;
let angle;
let anglev;
let anglea;
let bob;
let start;
let gravity;

function setup() {
    createCanvas(windowWidth, windowHeight);
    radius = 50;
    len = 600;
    angle = PI / 8;
    bob = createVector();
    start = createVector(width / 2, 0);
    anglev = 0;
    anglea = 0;
    gravity = 0.98;
}

function draw() {
    background(21);
    stroke(220);
    strokeWeight(8);
    fill(150);

    let force = (sin(angle) * gravity) / len;
    anglea = -force;

    anglev += anglea;
    angle += anglev;

    anglev *= 0.999;

    bob.x = len * sin(angle) + start.x;
    bob.y = len * cos(angle) + start.y;

    line(start.x, start.y, bob.x, bob.y); // the rigid string.
    ellipse(bob.x, bob.y, radius * 2, radius * 2); // the bob.
}
