Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function capture(){
    Webcam.snap(function(data_uri){
    document.getElementById("captured_img").innerHTML= "<img id='snap' src='"+ data_uri+ "'>"
    });
}

console.log("ml5 version", ml5.version);

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yslxM4AsN/model.json", modelLoaded);

function modelLoaded(){
    console.log("model loaded")
};

function identify(){
    img= document.getElementById("snap");
    classifier.classify(img , gotResult);
}

function gotResult(error, results){
if ( error ) {
    console.error(error);
}

else {
    console.log(results);
    document.getElementById("result_obj_name").innerHTML= results[0].label;
    document.getElementById("result_accuracy").innerHTML= results[0].confidence.toFixed(3);

}
}