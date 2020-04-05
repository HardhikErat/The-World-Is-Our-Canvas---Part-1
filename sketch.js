var database;
var erase;

var canvas2;

var drawing = [];
var currentPath = [];

function  setup() {
  canvas = createCanvas(2000, 2000);
  canvas.mousePressed(startPath);

  var config = {
    apiKey: "AIzaSyD3Nvy2OOYEjeik3tPG1I7wqoA1WXIkyJo",
    authDomain: "the-world-is-our-canvas.firebaseapp.com",
    databaseURL: "https://the-world-is-our-canvas.firebaseio.com",
    storageBucket: "the-world-is-our-canvas.appspot.com",
    messagingSenderId: "195400053417",
  };
  firebase.initializeApp(config);
  database = firebase.database();
}

function startPath(){
  currentPath = [];
  drawing.push(currentPath); 
  }

function draw(){
  background(220);
  stroke("red");
  textSize(25);
  fill(220);
  text("Press F5 to reload the canvas.",10 ,20);
  if (mouseIsPressed){
    var point = {
      x: mouseX,
      y: mouseY
    }
    currentPath.push(point);  
  }
  stroke("Black");
  strokeWeight(8);
  noFill();
  for (var i = 0; i < drawing.length;i++){
    var path = drawing[i];
    beginShape();
    for (var j = 0; j < path.length;j++){
      vertex(path[j].x,path[j].y)
    }
    endShape();
  }
}