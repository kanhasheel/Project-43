var hr;
var mn;
var sc;
var rm;
var hrIN,mnIN, sIN;
var form1;
var in1,in2;

function setup() {
  createCanvas(1100,400);
}

function draw() {
background(0);  

hr = hour();
mn = minute();
sc = second();

fill("white");
strokeWeight(1);
stroke("white");
textSize(47)
text("Kanha Sheel's Clock",570,225);


translate(400, 200);


strokeWeight(5);
stroke(255, 0, 0);
noFill();
rotate(-90);
var scAngle = map(sc, 0, 60, 0, 360);
arc(0, 0, 300, 300, 0, scAngle);

push();
rotate(scAngle);
line(0, 0, 110, 0);
pop();

stroke(40, 224, 74);
var mnAngle = map(mn, 0, 60, 0, 360);
arc(0, 0, 280, 280, 0, mnAngle);

push();
rotate(mnAngle);
line(0, 0, 90, 0);
pop();

stroke(0,1,244);
var hrAngle = map(hr%12, 0, 12, 0, 360);
arc(0, 0, 260, 260, 0, hrAngle);

push();
rotate(hrAngle);
line(0, 0, 60, 0);

pop();
}