function setup() {
  createCanvas(innerWidth, innerHeight)
  background(255,255,255,100)
  let x = width / 2
  let y = height / 2
  let r = width / 4
  //ellipse(x, y, r)
}

function mouseDragged() {
    d = Math.sqrt((pmouseX - mouseX) * (pmouseX - mouseX) + (pmouseY - mouseY) * (pmouseY - mouseY))
    c = color(256*Math.random(),256*Math.random(),256*Math.random(),255 / (1 + d));
    //triangle(pmouseX, pmouseY, mouseX, mouseY, mouseX, mouseY);
    //cylinder(mouseX,mouseY);
    square(pmouseX, pmouseY, mouseX - mouseY);
    //circle(pmouseX, pmouseY, mouseX - mouseY);
    fill(c);
    //emissiveMaterial(130, 230, 0);
    if (keyIsPressed === true) {
      clear();
    } 
}

function mouseClicked() {
   //clear();
   d = Math.sqrt((pmouseX - mouseX) * (pmouseX - mouseX) + (pmouseY - mouseY) * (pmouseY - mouseY))
   c = color(256*Math.random(),256*Math.random(),256*Math.random(),255 / (1 + d));
   //ellipse(innerWidth*Math.random(), innerHeight*Math.random(),innerWidth*Math.random(), innerHeight*Math.random());
   textSize(75 * Math.random())
   text('STOP',innerWidth*Math.random(), innerHeight*Math.random())
   fill(c);
}

