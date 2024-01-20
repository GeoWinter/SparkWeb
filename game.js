const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let background = "rgb(255,255,255)";
canvas.style.background = background;

class Object{
  constructor(x, y, speed){
    this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 100;
    this.speed = speed;
    this.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    this.ver = "down";
    this.hor = "right";
  }
}

let allRects = [];
for(let i = 0; i < 5; i ++){
  rect = new Object(Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight), Math.floor(Math.random() * 3) + 1);
  allRects.push(rect);
}

function update(){
  allRects.forEach(x => {
    //ctx.fillStyle = x.color;
    //ctx.fillRect(x.x, x.y, x.w, x.h);
    
    let image = new Image();
    image.src = "sparkle.png";
    ctx.drawImage(image, x.x, x.y, x.w, x.h);
  });
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  
  update();
  
  allRects.forEach(i => {
    if(i.ver == "down"){
      i.y += i.speed;
    }
    else if(i.ver == "up"){
      i.y -= i.speed;
    }
    if(i.hor == "right"){
      i.x += i.speed;
    }
    else if(i.hor == "left"){
      i.x -= i.speed;
    }
    if(i.x + i.w > window.innerWidth){
      i.hor = "left";
    }
    else if(i.x < 0){
      i.hor = "right";
    }
    if(i.y + i.h > window.innerHeight){
      i.ver = "up";
    }
    if(i.y < 0){
      i.ver = "down";
    }
  });
}

animate();

canvas.addEventListener("click", function(event){
  xpos = event.offsetX;
  ypos = event.offsetY;
});