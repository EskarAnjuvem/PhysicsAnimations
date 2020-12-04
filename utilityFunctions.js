function dashedLines(xi,yi,xf,yf,color="black"){
    var delX = xf -xi;
    var delY = yf - yi;
    var dist = Math.sqrt((delX*delX)+(delY*delY));
    var angleRad = Math.atan2(delY,delX); //correction
    var unitVecXComp = 1*Math.cos(angleRad);
    var unitVecYComp = 1*Math.sin(angleRad);
    c.lineWidth = 3;
    var xc=xi; 
    var yc=yi;
    for(i=0;i<dist;i++){
        if((Math.floor(i/6))%2 == 0){
            c.beginPath();
            c.moveTo(xc,yc);
            xc = xc + unitVecXComp; yc = yc + unitVecYComp;
            c.strokeStyle = color;
            c.lineTo(xc,yc);
            c.stroke();
            c.closePath();        
        }
        else{
            c.beginPath();
            c.moveTo(xc,yc);
            xc = xc + unitVecXComp; yc = yc + unitVecYComp;
            c.strokeStyle = "white";
            c.lineTo(xc,yc);
            c.stroke();
            c.closePath();            
        }
    }
    
}

function arrowHead(x0,y0,angle,h=100,delta= ((Math.PI*30)/180),color="red"){
    c.beginPath();
    c.strokeStyle=color;c.fillStyle=color;
    c.lineWidth=2;
    c.moveTo(x0,y0);
    var z = h*Math.tan(delta);
    c.lineTo(x0 + z*Math.sin(angle),y0 - z*Math.cos(angle));
    var phi = ((Math.PI/2)+angle-2*delta);
    c.lineTo((x0+z*Math.sin(angle)+2*z*Math.cos(phi)),y0+ h*Math.cos(delta+(Math.PI/2) - phi));
    c.lineTo(x0 - z*Math.sin(angle),y0 + z*Math.cos(angle));
    c.lineTo(x0,y0);
    c.stroke();
    c.fill();
    c.closePath();
}

function drawAxes(x0,y0){
    dashedLines(x0,y0,x0+canvas.width-20,y0,"black");
    arrowHead(canvas.width-20,y0,0,20,((Math.PI*30)/180),"black");
    dashedLines(x0,canvas.height-40,x0,20,"black");
    arrowHead(x0,20,-Math.PI/2,20,((Math.PI*30)/180),"black");
}

function whiteWashCanvas(){
    c.fillStyle = "rgba(255,255,255,0.9)";
    c.fillRect(0,0,canvas.width,canvas.height);
}

function drawSurface(x,y,l=1200){
    c.beginPath();
    c.strokeStyle="black";
    c.lineWidth=2;
    c.moveTo(x,y);
    c.lineTo(x+l,y);
    c.stroke();
    c.closePath();
}

function CreateVector(x,y){
    this.xComponent = x;
    this.yComponent = y;
    this.magnitude = Math.sqrt(x*x + y*y);
    this.angle = Math.atan2(y,x);
}

function unitVector(vec){
    return (new CreateVector(vec.xComponent/vec.magnitude, vec.yComponent/vec.magnitude));
}

function CreateLightSources(x,y,rayAngle){
    this.xSource = x;
    this.ySource = y;
    this.rayAngle = rayAngle;
    this.x = this.xSource;
    this.y = this.ySource;
    this.hasCollided = false;

}

function renderLightRay(source){
    c.beginPath();
    c.strokeStyle="red";
    c.lineWidth=2;
    c.moveTo(source.xSource,source.ySource);
    c.lineTo(source.x,source.y);
    c.stroke();
    c.closePath();
}

function updateLightRay(source,l=speed){
    source.x += l*Math.sin(source.rayAngle);
    source.y += l*Math.cos(source.rayAngle);
}

function WaveFront(x,y,rayAngle,l=100){
    this.x = x;
    this.y = y;
    this.angle = rayAngle;
    this.length = l;
}

function renderWaveFront(wave){
    c.beginPath();
    c.strokeStyle="magenta";
    c.lineWidth=4;
    c.moveTo(wave.x,wave.y);
    var xf = wave.x - wave.length*Math.cos(wave.angle);
    var yf = wave.y + wave.length*Math.sin(wave.angle);
    c.lineTo(xf,yf);
    c.stroke();
    c.closePath();
}

function sourcesFromWF(wave){
    var N = wave.length / numberSources;
    var xi = wave.x - N*Math.cos(wave.angle), yi= wave.y + N*Math.sin(wave.angle);;
    for(i=0;i<(numberSources-1);i++){
        lightSourcesArr.push(new CreateLightSources(xi,yi,angleIncidence));
        xi -= N*Math.cos(wave.angle);
        yi += N*Math.sin(wave.angle);
    }
}

function updateWaveFront(wave,l=speed){
    wave.x += l*Math.sin(wave.angle);
    wave.y += l*Math.cos(wave.angle);
}

function renderAndUpdateWavelet(wavelet,half=false,newSpeed = speed,color="blue"){
    c.beginPath();
    c.strokeStyle=color;
    c.lineWidth=3;
    c.arc(wavelet.x,wavelet.y,wavelet.rad,0,Math.PI,half);
    c.stroke();
    c.closePath();
    wavelet.rad += newSpeed;
}

function Wavelet(x,y){
    this.x = x;
    this.y = y;
    this.rad = 0;
}

function createCollisionSources(lightSourcesArr){
    for (i=0;i<(numberSources-1);i++){
        if(lightSourcesArr[i].y<350){ 
            renderLightRay(lightSourcesArr[i]);
            updateLightRay(lightSourcesArr[i]);
        }
        else{
            if(!lightSourcesArr[i].hadCollided){
                waveletArr.push(new Wavelet(lightSourcesArr[i].x,lightSourcesArr[i].y));
                waveletArrB.push(new Wavelet(lightSourcesArr[i].x,lightSourcesArr[i].y));
                lightSourcesArr[i].hadCollided = true;
            }
            renderLightRay(lightSourcesArr[i]);
        }
    }
}

function wavefrontsReflAndRefr(waveletArr){
    for(j=0;j<waveletArr.length;j++){
        renderAndUpdateWavelet(waveletArr[j],false,newSpeed);
        renderAndUpdateWavelet(waveletArrB[j],true,speed,"green");
    }

    if(waveletArr.length>= numberSources-1){
        cancelAnimationFrame();
    }
}

