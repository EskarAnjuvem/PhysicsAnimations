const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth-50;
canvas.height = window.innerHeight-100;
const c = canvas.getContext("2d");


var dr=2;

function PlnarWF(){}
function Source(cx,cy){
    this.cx = cx;
    this.cy = cy;
    this.radius = 10;
}
var heightDisp = 700;
var sourcesNum = 10;
var sourcGap = heightDisp/sourcesNum;
var sourcArr = new Array();
var fwdWFArr = new Array();
var bckWFArr = new Array();
for(i=0;i<sourcesNum;i++){    
    sourcArr.push(new Source(730,0+sourcGap*i));
    fwdWFArr.push(new Source(730,0+sourcGap*i));
    bckWFArr.push(new Source(730,0+sourcGap*i));
}
// wavefront();
// wavelets();

for(i=0;i<sourcesNum;i++){
    // if (sourcArr[i].radius >= 80){
    //     sourcArr[i].cx = sourcArr[i].cx+80;
    //     sourcArr[i].radius=10;
    // }
    c.beginPath();
    c.strokeStyle = "red";c.lineWidth=2;
    c.arc(sourcArr[i].cx,sourcArr[i].cy,sourcArr[i].radius,0,Math.PI*2,true);
    c.stroke();
    c.closePath();
    sourcArr[i].radius = sourcArr[i].radius+10;
}
    
    



// for(i=0;i<15;i++){    
//     sourcArr.push(new Source(200+35*Math.cos((Math.PI/5)*i),200+35*Math.sin((Math.PI/5)*i)));
// }

// for(i=0;i<500;i++){    
//     sourcArr.push(new Source(-300+20*i));
// }


//var cx=500,cy=300;
//var radius=10;


var timeGap=0,fps=144;
function animate(){
    if(timeGap%fps == 0){
    c.fillStyle = "rgba(255,255,255,0.5)";
    c.fillRect(0,0,canvas.width,canvas.height);
    fwdWF();
    bckWF();
    
    }
    // cx +=1;
    // cy +=1;
    timeGap +=1;
    requestAnimationFrame(animate);
}

//animate();