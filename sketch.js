var video;

function setup() {
    canvas = createCanvas(640, 480);
    background(51);
    video = createCapture(VIDEO);
    video.size(640, 480);

    var seriously = new Seriously();

    seriously.go();

}

