class DrawingEraser extends PaintFunction{
    constructor(ctx){
        super();
        this.ctx = ctx;            
    }
    
//     onMouseDown(coord,e){
//         //this.ctx.globalCompositeOperation="destination-out";
//         this.ctx.strokeStyle = "white"; 
//         // this should not be white
//         this.ctx.lineJoin = "round";
//         this.ctx.lineCap = "round"; //lineCap = "butt" or "round"
//         this.ctx.lineWidth = canvasSettings.brushSize;
//         this.ctx.beginPath();
//         this.ctx.moveTo(coord[0],coord[1]);
//         this.draw(coord[0],coord[1]);
//     }
//     onDragging(coord,e){
//         this.draw(coord[0],coord[1]);
//     }
//     onMouseMove(){}
//     onMouseUp(){
//         this.ctx.closePath();
//         this.ctx.stroke();
//         this.onFinish();
//     }
//     onMouseLeave(coord,e){
//         this.ctx.closePath();
//         this.ctx.stroke();  
//     }
//     onMouseEnter(coord,e){
//         this.ctx.beginPath();
//         this.ctx.moveTo(coord[0],coord[1]);
//     }
//     draw(x,y){
//         this.ctx.lineTo(x,y);
//         this.ctx.moveTo(x,y);
//         this.ctx.closePath();
//         this.ctx.stroke();   
//     }
//     // onFinish(){
//     //     canvasSettings.undoObject.states[canvasSettings.undoObject.actionCount] = new Image();
//     //     canvasSettings.undoObject.states[canvasSettings.undoObject.actionCount].src = ctx.toDataURL();
//     //     canvasSettings.undoObject.actionCount++;
//     // }
// }