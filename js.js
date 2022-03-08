function myFunction(x) {
  x.classList.toggle("change");
} 

var sun = document.querySelector('.theme');

sun.addEventListener('click', () => {
document.body.classList.toggle('darkmode');
document.body.style.transition="all 1s";
if(document.body.classList.contains('darkmode')){
  sun.innerHTML = "<i class='bi bi-moon'></i>";
  document.querySelector('.about-me').style.background="rgb(69, 68, 68);"
}else{
  sun.innerHTML = "<i class='bi bi-sun'></i>";
  document.querySelector('.about-me').style.background="darkcyan";
}
});

// scroll btn
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const canvas = document.getElementById('particles-js')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

//get mouse position
let mouse = {
    x:null,
    y:null,
    radius: (canvas.height/80) * (canvas.width/80)
}

window.addEventListener('mousemove', function (event){
    mouse.x = event.x;
    mouse.y = event.y;
})

//create particle

class Particle{
    constructor(x,y,directionX, directionY, size, color){
        this.x =x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size= size;
        this.color = color;
}
//method to draw indiviual particle
draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI * 2, false);
    ctx.fillStyle = 'white';
    ctx.fill();
}
//check particle position, check mouse position, move the particle, draw the particle
update(){
    //check if particle is still within canvas
    if(this.x > canvas.width || this.x <0){
        this.directionX = -this.directionX;
    }
    if(this.y > canvas.height || this.y <0){
        this.directionY = -this.directionY;
    }


    //check collision detection - mouse position / particle position

    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;


    let distance = Math.sqrt(dx*dx + dy*dy)
    if(distance < mouse.radius + this.size){
        if(mouse.x < this.x && this.x < canvas.width - this.size * 10){
            this.x += 10;
        }
        if(mouse.x > this.x && this.x > this.size * 10){
            this.x -= 10;
        }
        if(mouse.y < this.y && this.y < canvas.height - this.size * 10){
            this.y += 10;
        }
        if(mouse.y > this.y && this.y > this.size * 10){
            this.y -= 10
        }
    }
    this.x += this.directionX;
    this.y += this.directionY;

    this.draw();
}

}

//create particle array
function init(){
    particlesArray = [];
let numberofParticles = (canvas.height * canvas.width) / 9000;
for(let i=0; i<numberofParticles * 1; i++){
    let size = (Math.random() * 5) + 1;
    let x = (Math.random() * ((innerWidth - size *2) - (size*2)) + size *2);
    let y = (Math.random() * ((innerHeight - size *2) - (size*2)) + size *2);
    let directionX = (Math.random() * 5) - 2.5;
    let directionY = (Math.random() * 5) - 2.5;
    let color = '#8C5523';

    particlesArray.push(new Particle(x,y,directionX,directionY,size,color))
}
}

//check if particles are close enough to draw line between them
function connect(){
    let opacityValue = 1;
    for(let a=0; a<particlesArray.length; a++){
        for(let b=a; b<particlesArray.length; b++){
            let distance = ((particlesArray[a].x - particlesArray[b].x)
            *(particlesArray[a].x - particlesArray[b].x))
            + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y -
            particlesArray[b].y))

            if(distance < (canvas.width/7) * (canvas.height/7)){
                opacityValue = 1 - (distance/20000)
                ctx.strokeStyle = 'rgba(255,255,255,' + opacityValue + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
                ctx.stroke();
            }
        }
    }
}

// animation loop

function animate(){
requestAnimationFrame(animate);
ctx.clearRect(0,0,innerWidth, innerHeight);

for (let i=0; i<particlesArray.length; i++){
    particlesArray[i].update();
}
connect();
}

//resize event 
window.addEventListener('resize', function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.radius = ((canvas.height/80) * (canvas.height/80))
    init();
})


//mouse event 
window.addEventListener('mouseout', function(){
    mouse.x = undefined;
    mouse.y = undefined;
})


init();
animate();


