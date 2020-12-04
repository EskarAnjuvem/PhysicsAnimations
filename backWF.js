function bckWF(){
    for(i=0;i<sourcesNum;i++){
        if (bckWFArr[i].radius >= 80){
        
        bckWFArr[i].cx = bckWFArr[i].cx-80;
        bckWFArr[i].radius=10;        
    }
        c.beginPath();c.strokeStyle="green";
        c.moveTo(bckWFArr[i].cx,bckWFArr[i].cy-100);
        c.lineTo(bckWFArr[i].cx,700);c.stroke();
        c.closePath();
        c.beginPath();
        c.strokeStyle = "red";c.lineWidth=2;
        c.arc(bckWFArr[i].cx,bckWFArr[i].cy,bckWFArr[i].radius,0,Math.PI*2,true);
        c.stroke();
        c.closePath();
        bckWFArr[i].radius += 10*dr;
    }
}