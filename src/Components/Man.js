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
                context.lineTo(40, 5);
                context.lineTo(120, 5);
                context.lineTo(120, 30);
                context.stroke();
                break;
      
            case 2:
                context.lineWidth = 5;
                context.beginPath();
                context.arc(120, 55, 25, 0, Math.PI*2, true);
                context.closePath();
                context.stroke();
                break;
            
            case 3:
                context.beginPath();
                context.moveTo(120, 80);
                context.lineTo(120, 140);
                context.stroke();
                break;
      
            case 4:
                context.beginPath();
                context.moveTo(120, 90);
                context.lineTo(60, 100);
                context.stroke();
                break;
      
            case 5:
                context.beginPath();
                context.moveTo(120, 90);
                context.lineTo(175, 100);
                context.stroke();
                break;
      
            case 6:
                context.beginPath();
                context.moveTo(121, 135);
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
                context.moveTo(120, 136);
                context.lineTo(155, 190);
                context.stroke();
                break;
      
            case 9:
                context.beginPath();
                context.moveTo(152, 190);
                context.lineTo(165, 185);
                context.stroke();
                break;

            case 10:
                context.beginPath();
                context.font = "15px Arial bold";
                context.fillText("X  X", 105, 50);
                context.fillText("O", 115, 70);
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