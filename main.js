function setup(){
    var video = createCapture(VIDEO);
    video.size(550, 500);
    var canvas = createCanvas(550, 500);
    canvas.position (560, 100);
    var poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("modelo foi inicializado");

}

function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);
    }
}