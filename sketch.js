let corkX = 0;
let bottleX = 0;
let bottleY = 340;
let angle = 1;

function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  
  
  background(220);
  
  //bottle
  
  strokeWeight(0)
  fill(0);
  
  
    translate(300, 300);
    rotate(angle);
  
  rect(bottleX + 37, 250 - bottleY, 126, 309);
  rect(bottleX + 45, 558 - bottleY, 110, 8);
  ellipse(bottleX + 45, 558 - bottleY, 16, 16);
  ellipse(bottleX + 155, 558 - bottleY, 16, 16);
  ellipse(bottleX + 67, 250 - bottleY, 60, 60);
  ellipse(bottleX + 133, 250 - bottleY, 60, 60);
  rect(bottleX + 58, 197 - bottleY, 84, 27);
  
 
  
  fill(0);
  rect(corkX + 58, 177 - bottleY, 84, 18);
  triangle(bottleX + 75, 221 - bottleY, bottleX + 100, 270 - bottleY, bottleX + 125, 221 - bottleY); //inside 
  rect(corkX + 57, 142 - bottleY, 86, 33);
  
    
  
  //handle
  rect(corkX + 52, 112 - bottleY, 4, 60);
  rect(corkX + 144, 112 - bottleY, 4, 60);
  arc(corkX + 100, 115 - bottleY, 96, 96, PI, TWO_PI);
  rect(corkX + 149, 142 - bottleY, 3, 27);
  rect(corkX + 48, 142 - bottleY, 3, 27);
  
  fill(220);
  
  arc(corkX + 100, 115 - bottleY, 88, 88, PI, TWO_PI);
  rect(corkX + 57, 112 - bottleY, 86, 20);
  
  fill(0);
  triangle(bottleX + 142, 216 - bottleY, bottleX + 142, 225 - bottleY, bottleX + 150, 225 - bottleY);
  triangle(bottleX + 59, 216 - bottleY, bottleX + 59, 225 - bottleY, bottleX + 50, 225 - bottleY);
  fill(220);
  ellipse(bottleX + 150, 216 - bottleY, 16, 16);
  ellipse(bottleX + 50, 216 - bottleY, 16, 16);
  
  angle = angle + 0.01;
    
}