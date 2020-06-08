/*
I worked on an interactive piece where I wanted the
piece to create something reminiscent of two doors (representing choice)
when the mouse is dragged. When the dragging stops, and a click is
registered, the word STOP appears somewhere. I wanted to comment on the
difficulty of making a choice sometimes and how you might be overthinking
rather than stopping and doing something.  I found using interactive art rather
than generative art worked better for this message.

Author - Neha Lingareddy
Last updated - June 7th 2020
Source - https://github.com/net-art-uchicago/form-code
*/



function setup() {
  createCanvas(innerWidth, innerHeight)
  background(255,255,255,100)
  let x = width / 2
  let y = height / 2
  let r = width / 4
}

function mouseDragged() {
    d = Math.sqrt((pmouseX - mouseX) * (pmouseX - mouseX) + (pmouseY - mouseY)
     * (pmouseY - mouseY))
    c = color(256*Math.random(),256*Math.random(),256*Math.random(),
    255 / (1 + d));

    square(pmouseX, pmouseY, mouseX - mouseY);
    fill(c);

    square(pmouseY, pmouseX, mouseY - mouseX);
    fill(c);
    if (keyIsPressed === true) {
      clear();
    }
}

function mouseClicked() {
   d = Math.sqrt((pmouseX - mouseX) * (pmouseX - mouseX) + (pmouseY - mouseY) * (pmouseY - mouseY))
   c = color(256*Math.random(),256*Math.random(),256*Math.random(),255 / (1 + d));
   textSize(75 * Math.random())
   text('STOP',innerWidth*Math.random(), innerHeight*Math.random())
   fill(c);
}
