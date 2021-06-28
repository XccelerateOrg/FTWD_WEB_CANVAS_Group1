class DrawingEraser extends PaintFunction{
    constructor(ctx){
        super();
        this.ctx = ctx;            
    }
    
    onMouseDown(coord,e){
        this.ctx.strokeStyle = canvasSettings.colorBackground; 
        this.ctx.lineCap = "round";
        this.ctx.lineWidth = canvasSettings.strokeSize;
        // this should not be white
        this.ctx.lineJoin = "round";
        this.ctx.lineCap = "round"; 
        this.ctx.lineWidth = canvasSettings.brushSize;
        this.ctx.shadowBlur = 0;
        this.ctx.beginPath();
        this.ctx.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,e){
        this.draw(coord[0],coord[1]);
    }
    onMouseMove(){}
    onMouseUp(){
        this.ctx.closePath();
        this.ctx.stroke(); 
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;   
    }
    onMouseLeave(coord,e){
        this.ctx.closePath();
        this.ctx.stroke();  
    }
    onMouseEnter(coord,e){
        this.ctx.beginPath();
        this.ctx.moveTo(coord[0],coord[1]);
    }
    draw(x,y){
        this.ctx.lineTo(x,y);
        this.ctx.moveTo(x,y);
        this.ctx.closePath();
        this.ctx.stroke();
    }
}