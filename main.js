noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO)
    video.size(550,550);
    canvas=createCanvas(550,450);
    canvas.position(560,110);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("poseNet is on");

    
}
function gotPoses(results){
    if(results.length>0){
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX="+noseX+"noseY"+noseY);
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX)

    }
}
function draw(){
    background('yellow')
    document.getElementById("text_side").innerHTML="size of text is:"+difference+"px";
    textSize(difference);
    fill('green')
    text('jeeva',noseX,noseY);
}