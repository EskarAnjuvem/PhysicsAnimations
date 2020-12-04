function fwdWF(){
    //     fwsourcArr = new Array();
    //     for(i=0;i<sourcesNum;i++){    
    //     fwsourcArr.push(new Source(600,50+sourcGap*i));
    // }
        for(i=0;i<sourcesNum;i++){
            if (fwdWFArr[i].radius >= 80){
            
            fwdWFArr[i].cx = fwdWFArr[i].cx+80;
            fwdWFArr[i].radius=10;        
        }
            c.beginPath();c.strokeStyle="blue";
            c.moveTo(fwdWFArr[i].cx,fwdWFArr[i].cy-100);
            c.lineTo(fwdWFArr[i].cx,700);c.stroke();
            c.closePath();
            c.beginPath();
            c.strokeStyle = "red";c.lineWidth=2;
            c.arc(fwdWFArr[i].cx,fwdWFArr[i].cy,fwdWFArr[i].radius,0,Math.PI*2,true);
            c.stroke();
            c.closePath();
            fwdWFArr[i].radius += 10*dr;
        }
    }