var video;
var slider;

function setup() {
    canvas = createCanvas(640, 480, WEBGL);
    //background(51);
    canvas.id('can');
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.id('vid');
    //video.hide();
    //slider = createSlider(0, 1, 0.5, 0.01);
    //slider.id('blur-range');

    var seriously = new Seriously();

    var src = seriously.source('#vid');
    var trg = seriously.target('#can');

    var effect = seriously.effect('chroma');
    //effect.amount = '#blur-range';
    effect.source = src;
    trg.source = effect;
    var r = 80 / 255;
    var g = 43 / 255;
    var b = 35 / 255;
    effect.screen = [r, g, b, 1];

    seriously.go();

}

