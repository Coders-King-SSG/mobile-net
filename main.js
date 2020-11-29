Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality: 90,
    constraints : {
        facingMode: 'environment'
    }
});
var cam = document.getElementById('camera');

Webcam.attach(cam);

function snap() {
    Webcam.snap(function(data_uri) {
        document.getElementById('result').innerHTML = '<img style="border-radius:15px;" src="'+data_uri+'" id="snapshot"/>'
    });
}

var version = ml5.version;
console.log('Version:', version);

var classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
    console.info('Model is loaded');
}

function predict() {
    var img = document.getElementById('snapshot');
    classifier.classify(img, gotResults);
}

function gotResults(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById('object_name').innerHTML = results[0].label;
    }
}