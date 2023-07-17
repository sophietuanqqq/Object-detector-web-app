function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHtml = "Status : Detecting Object";
}

function preload()
{
    img=loadImage("bedroom.jpg");
}