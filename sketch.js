function setup() {
 frameRate(32);
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(32);
   // text
   fill (255);
   text('look for straight lines :)', 30, 30);
   }
   
   
function draw() {
   
    for (let x = 0; x < windowWidth; x += 5) {
     for (let y = 0; y < windowHeight; y += 5) {
   
      // the effect can be controlled moving around
      let i = mouseX; // x increment
      let t = mouseY; // y increment
      // define noise index with increment
      let n = noise (x * 0.005 * i , y * 0.01 * t);
      // relate noise and color
      fill (n*255, n*0, n*255);
   
      noStroke();
      square(x, y, 2);
     }
    }
   
   }