class DrawingCircle extends PaintFunction{
    constructor(ctx, ctxDraft){
        super();
        this.ctx = ctx;
        this.ctxDraft = ctxDraft;
    }
    onMouseDown(coord,event){
        this.ctx.fillStyle = canvasSettings.colorFill;
        this.ctx.strokeStyle = canvasSettings.colorStroke;
        this.ctx.lineWidth = canvasSettings.strokeSize;

        this.ctxDraft.fillStyle = canvasSettings.colorFill;
        this.ctxDraft.strokeStyle = canvasSettings.colorStroke;
        this.ctxDraft.lineWidth = canvasSettings.strokeSize;
        
        this.ctx.beginPath()
        this.origX = coord[0];
        this.origY = coord[1];
        this.centerX = (this.origX + coord[0])/2;
        this.centerY = (this.origY + coord[1])/2;
        console.log(coord)
    }
    onDragging(coord,event){

        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.ctxDraft.beginPath();

        this.centerX = (this.origX + coord[0])/2;
        this.centerY = (this.origY + coord[1])/2;

        if(coord[0]-this.centerX >= 0){
            let radius = (coord[0] - this.centerX)
            this.ctxDraft.arc(this.centerX, this.centerY, radius, 0, 2*Math.PI)
        } else {
            let radius = (this.centerX - coord[0])
            this.ctxDraft.arc(this.centerX, this.centerY, radius, 0, 2*Math.PI)
        }
        

        this.ctxDraft.fill();
        this.ctxDraft.stroke();
    }
    onMouseMove(){}
    onMouseUp(coord){
        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

        if(coord[0]-this.centerX >= 0){
            let radius = (coord[0] - this.centerX)
            this.ctx.arc(this.centerX, this.centerY, radius, 0, 2*Math.PI)
        } else {
            let radius = (this.centerX - coord[0])
            this.ctx.arc(this.centerX, this.centerY, radius, 0, 2*Math.PI)
        }

        this.ctx.fill();
        this.ctx.stroke();

        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
    onMouseLeave(){}
    onMouseEnter(){}

}

console.log(`a`)
