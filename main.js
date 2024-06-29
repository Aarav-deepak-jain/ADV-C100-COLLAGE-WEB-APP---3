var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}

var camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    setTimeout(function () {
        var img_id = "selfie1";
        take_snapshot(img_id);
        var speak_data = "Taking your selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);

    setTimeout(function () {
        var img_id = "selfie2";
        take_snapshot(img_id);
        var speak_data = "Taking your next selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);

    setTimeout(function () {
        var img_id = "selfie3";
        take_snapshot(img_id);
        var speak_data = "Taking your next selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 15000);
}

function take_snapshot(img_id) {
    console.log("Taking snapshot for " + img_id);

    Webcam.snap(function (data_uri) {
        if (img_id == "selfie1") {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="' + data_uri + '"/>';
        }
        if (img_id == "selfie2") {
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="' + data_uri + '"/>';
        }
        if (img_id == "selfie3") {
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="' + data_uri + '"/>';
        }
    });
}

// Add event listener for the start button or auto-start
document.addEventListener("DOMContentLoaded", function () {
    start();
    speak();
});
