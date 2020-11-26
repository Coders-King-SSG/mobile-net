Webcam.set({
    width:360,
    height:310,
    image_format:'png',
    png_quality: 90,
    constraints : {
        facingMode: 'environment'
    }
});
var cam = document.getElementById('camera');

Webcam.attach(cam);