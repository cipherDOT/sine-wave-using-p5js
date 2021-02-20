let length_variable;
let multiplier_value;

function setup() {
    createCanvas(windowWidth, windowHeight);
    length_variable = 0;
    multiplier_value = 0.015;
}

function draw() {
    // background(21, 10); // transparent effect!
    background(21);
    translate(0, height / 2);
    stroke(0, 100, 100);
    strokeWeight(4);
    for (let i = 0; i < width; i += 20) {
        let m = i * multiplier_value;
        let line_length = sin(length_variable - m);
        line(i, 0, i, map(line_length, -1, 1, -100, 100));
    }
    length_variable += 0.05;
}
