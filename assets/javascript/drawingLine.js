class DrawingLine extends PaintFunction {
  constructor(ctx, ctxDraft) {
    super();
    this.ctx = ctx;
    this.ctxDraft = ctxDraft;
  }


  onMouseDown(coord, e) {
    this.ctxDraft.strokeStyle = canvasSettings.colorStroke;
    this.ctx.strokeStyle = canvasSettings.colorStroke;
    this.ctxDraft.lineWidth = canvasSettings.strokeSize;
    this.ctx.lineWidth = canvasSettings.strokeSize;
    this.origX = coord[0];
    this.origY = coord[1];
    this.ctx.beginPath();
    this.ctx.moveTo(coord[0],coord[1]);
  }
  
  onDragging(coord,e){
    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.ctxDraft.beginPath();
    
    this.ctxDraft.moveTo(this.origX, this.origY);
    this.ctxDraft.lineTo(coord[0],coord[1]);
    
    
    this.ctxDraft.stroke();
    this.ctx.stroke();
  }  
  
  
  onMouseUp(coord, e) {
    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.ctx.lineTo(coord[0],coord[1]);
    this.ctx.stroke();
    restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    index += 1;
    console.log(`index`, index);
    console.log(`redo`, reIndex);
  }

}

