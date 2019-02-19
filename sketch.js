var video;
var slider;

function setup() {
    canvas = createCanvas(640, 480, WEBGL);
    //background(51);
    canvas.id('can');
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.id('vid');
    video.hide();
    //slider = createSlider(0, 1, 0.5, 0.01);
    //slider.id('blur-range');
    var movi = createVideo(['A.mp4']);
    movi.crossOrigin = 'anonymous';

    movi.id('movi');
    movi.muted = true;
    movi.hide();

    var seriously = new Seriously();

    var top = seriously.source('#vid');
    var trg = seriously.target('#can');

    var effect = seriously.effect('chroma');
    //effect.amount = '#blur-range';
    effect.source = top;
    //    trg.source = effect;
    var r = 177 / 255;
    var g = 158 / 255;
    var b = 160 / 255;
    effect.screen = [r, g, b, 1];


    const blend = seriously.effect("blend");
    blend.top = effect;
    blend.bottom = seriously.source('#movi');

    trg.source = blend;

    seriously.go();
    movi.loop();
}

