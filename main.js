var roar = 0
var bark = 0
var meow = 0
var moo = 0

function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/9Qdwbetvp/model.json" , modelReady)
}
function modelReady(){
    console.log("Model Loaded!");
    classifier.classify(gotResults);
}
function gotResults(error , results){
if (error) {
console.log("Error")
    
} else {
    console.log(results);
    document.getElementById("result_label").innerHTML = results[0].label;
    document.getElementById("count_label").innerHTML = " Detected roar - " + roar+ " Detected bark - " + bark+ " Detected meow - " + meow+ " Detected moo - " + moo;
    img = document.getElementById("alien1");
    if (results[0].label == "Roar") {
        img.src="lion.png";
        roar = roar+1;

    } else if(results[0].label == "Barking") {
        img.src="dog.png";
        bark = bark+1;

    }

    else if(results[0].label == "Meowing") {
        img.src="cat.png";
        meow = meow+1;
    }

    else if(results[0].label == "Mooing") {
        img.src="cow.webp";
        moo = moo+1;
    }
    else{
        img.src="ear.gif";
    }
}
}
