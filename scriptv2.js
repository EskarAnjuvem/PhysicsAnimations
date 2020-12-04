const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth-50;
canvas.height = window.innerHeight-100;
const c = canvas.getContext("2d");


function wavelet(xc,yc,timeDiffasRad,half=false){
    c.beginPath();
    c.strokeStyle="blue";
    //c.fillStyle="blue";
    c.lineWidth=3;
    c.arc(xc,yc,timeDiffasRad,0,Math.PI,half);
    c.stroke();
    //c.fill();
    c.closePath();
}


var x1=200,y1=300, x2 =200,y2 = 350,x3=200,y3=400,x4=200,y4=450;
var rad1 =0,rad1b=0,rad2=0,rad2b=0,rad3=0,rad3b=0,rad4=0,xw2=0,xw3=0,xw4=0;
//const xw1=0;
var xc=200,yc=200,rad=50,anglei=0,radNow=0;
var xw1 = x1 + ((60-y1)/(Math.tan(-Math.PI/4)));
var xw2 = x2 + ((60-y2)/(Math.tan(-Math.PI/4)));
var xw3 = x3 + ((60-y3)/(Math.tan(-Math.PI/4)));
var xw4 = x4 + ((60-y4)/(Math.tan(-Math.PI/4)));
function animate(){
    c.fillStyle = "rgba(255,255,255,0.5)";
    c.fillRect(0,0,canvas.width,canvas.height);

    // c.beginPath(); c.lineWidth = 3;   
    // c.strokeStyle="blue";    
    // c.fillStyle="lightgreen";
    // //c.lineWidth=15;
    // c.arc(xc,yc,rad,anglei,Math.PI*2,true);
    // // c.moveTo(xc,yc);
    // // c.lineTo(xc+5,yc+70);
    // c.stroke();

    // if(rad>= 140){
    //     //c.fill();
    //     wavelet(200,60,radNow);
    //     radNow += 0.05;
    // }
    // //c.fill();
    // c.closePath();

    c.beginPath();
    c.strokeStyle="black";
    c.lineWidth=1;
    c.moveTo(10,60);
    c.lineTo(1800,60);
    c.stroke();
    c.closePath();
    

    rad += 0.05;

    c.beginPath(); c.strokeStyle = "red"; c.fillStyle = "red";c.lineWidth = 3;
    c.arc(x1,y1,7,0,Math.PI*2);
    c.stroke();c.fill();
    x1 = x1 + 0.2; 
    y1 = y1 - 0.2;

    if(y1<=60){
        wavelet(xw1,60,rad1);
        wavelet(xw1,60,rad1b,true);
        rad1 += 0.1; rad1b += 0.03
    }

    c.beginPath(); c.strokeStyle = "red"; c.fillStyle = "red";c.lineWidth = 3;
    c.arc(x2,y2,7,0,Math.PI*2);
    c.stroke();c.fill();
    x2 = x2 + 0.2; 
    y2 = y2 - 0.2;

    if(y2<=60){
        wavelet(xw2,60,rad2);
        wavelet(xw2,60,rad2b,true);
        rad2b += 0.03;

        rad2 += 0.1;
    }

    c.beginPath(); c.strokeStyle = "red"; c.fillStyle = "red";c.lineWidth = 3;
    c.arc(x3,y3,7,0,Math.PI*2);
    c.stroke();c.fill();
    x3 = x3 + 0.2; 
    y3 = y3 - 0.2;
    if(y3<=60){
        wavelet(xw3,60,rad3);
        wavelet(xw3,60,rad3b,true);
        rad3b += 0.03;

        rad3 += 0.1;
    }

    c.beginPath(); c.strokeStyle = "red"; c.fillStyle = "red";c.lineWidth = 3;
    c.arc(x4,y4,7,0,Math.PI*2);
    c.stroke();c.fill();
    x4 = x4 + 0.2; 
    y4 = y4 - 0.2;

    if(y4<=60){
        wavelet(xw4,60,rad4);

        rad4 += 0.1;
    }

requestAnimationFrame(animate);
}

animate();


function Vector2D(x,y){
    this.xComponent = x;
    this.yComponent = y;
    this.magnitude = Math.sqrt(x*x + y*y);
    this.angle = Math.atan2(y,x);
}

function unitVector(vec){
    return (new CreateVector(vec.xComponent/vec.magnitude, vec.yComponent/vec.magnitude));
}

function pathParticle(x,y,theta){
    
}


