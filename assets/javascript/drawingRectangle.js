class DrawingRectangle extends PaintFunction{
    constructor(ctx, ctxDraft){
        super();
        this.ctx = ctx;
        this.ctxDraft = ctxDraft;
    }

onMouseDown(coord,e){

    this.ctx.fillStyle = canvasSettings.colorFill;
    this.ctxDraft.fillStyle = canvasSettings.colorFill;

    this.ctx.strokeStyle = canvasSettings.colorStroke;
    this.ctxDraft.strokeStyle = canvasSettings.colorStroke;

    this.ctxDraft.lineWidth = canvasSettings.strokeSize;
    this.ctx.lineWidth = canvasSettings.strokeSize

    this.origX = coord[0];
    this.origY = coord[1];
}


onDragging(coord,e){
    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

    this.ctxDraft.fillRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY)
    this.ctxDraft.strokeRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY)
}

onMouseMove(){}

onMouseUp(coord){
    this.ctx.fillStyle = canvasSettings.colorFill;

    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

    this.ctx.fillRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
    this.ctx.strokeRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY)

    restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    index += 1; 
}
onMouseLeave(){}
onMouseEnter(){}

}
