const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth-50;
canvas.height = window.innerHeight-100;
const c = canvas.getContext("2d");

var numberSources = 50,xi= 100,yi=100;
var rad1=0;
var lightSourcesArr = [], waveletArr =[],waveletArrB = [];
var angleIncidence = Math.PI*0.25;
var speed = 0.15,newSpeed = 0.06; 

var incidentWF = new WaveFront(450,50,angleIncidence,400);
sourcesFromWF(incidentWF);


function animate(){
    whiteWashCanvas();

    renderWaveFront(incidentWF);
    //updateWaveFront(incidentWF);

    drawSurface(100,350,1200);
    
    createCollisionSources(lightSourcesArr);

    wavefrontsReflAndRefr(waveletArr);

    requestAnimationFrame(animate);
}

animate();


















































// for (i=0;i<(numberSources-1);i++){
    //     if(lightSourcesArr[i].y<350){ 
    //         renderLightRay(lightSourcesArr[i]);
    //         updateLightRay(lightSourcesArr[i]);
    //     }
    //     else{
    //         if(!lightSourcesArr[i].hadCollided){
    //             waveletArr.push(new Wavelet(lightSourcesArr[i].x,lightSourcesArr[i].y));
    //             waveletArrB.push(new Wavelet(lightSourcesArr[i].x,lightSourcesArr[i].y));
    //             lightSourcesArr[i].hadCollided = true;
    //         }
    //         renderLightRay(lightSourcesArr[i]);
    //     }
    // }














// for(j=0;j<waveletArr.length;j++){
    //     renderAndUpdateWavelet(waveletArr[j],false,0.08);
    //     renderAndUpdateWavelet(waveletArrB[j],true,0.25,"green");
    // }