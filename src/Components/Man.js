import { useEffect, useRef } from "react";

const Man = ({incorrect}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext("2d");

        switch (incorrect) {
            case 0:
                context.clearRect(0, 0, canvas.width, canvas.height);
                break;
                
            case 1:
                context.strokeStyle = '#444';
                context.lineWidth = 10; 
                context.beginPath();
                context.moveTo(175, 225);
                context.lineTo(5, 225);
                context.moveTo(40, 225);
                context.lineTo(25, 5);
                context.lineTo(100, 5);
                context.lineTo(100, 25);
                context.stroke();
                break;
      
            case 2:
                context.lineWidth = 5;
                context.beginPath();
                context.arc(100, 50, 25, 0, Math.PI*2, true);
                context.closePath();
                context.stroke();
                break;
            
            case 3:
                context.beginPath();
                context.moveTo(100, 75);
                context.lineTo(100, 140);
                context.stroke();
                break;
      
            case 4:
                context.beginPath();
                context.moveTo(100, 85);
                context.lineTo(60, 100);
                context.stroke();
                break;
      
            case 5:
                context.beginPath();
                context.moveTo(100, 85);
                context.lineTo(140, 100);
                context.stroke();
                break;
      
            case 6:
                context.beginPath();
                context.moveTo(100, 140);
                context.lineTo(80, 190);
                context.stroke();
                break;
      
            case 7:
                context.beginPath();
                context.moveTo(82, 190);
                context.lineTo(70, 185);
                context.stroke();
                break;
      
            case 8:
                context.beginPath();
                context.moveTo(100, 140);
                context.lineTo(125, 190);
                context.stroke();
                break;
      
            case 9:
                context.beginPath();
                context.moveTo(122, 190);
                context.lineTo(135, 185);
                context.stroke();
                break;

            default:
                break;
        } 
     
    }, [incorrect]);
        
    return (
        <canvas ref={canvasRef} height="250px" width="200px" />
    );
}

export default Man;