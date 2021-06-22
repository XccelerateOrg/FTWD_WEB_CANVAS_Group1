class DrawingLine extends PaintFunction {
  constructor(ctx, ctxDraft) {
    super();
    this.ctx = ctx;
    this.ctxDraft = ctxDraft;
  }


  onMouseDown(coord, e) {
    this.origX = coord[0];
    this.origY = coord[1];
    this.ctx.beginPath();
    this.ctx.moveTo(coord[0],coord[1]);
  }

  onDragging(coord,e){
    this.ctxDraft.beginPath();
    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

    this.ctxDraft.moveTo(this.origX, this.origY);
    this.ctxDraft.lineTo(coord[0],coord[1]);


    this.ctxDraft.stroke();
  }  


  onMouseUp(coord, e) {
    this.ctx.lineTo(coord[0],coord[1]);
    this.ctx.stroke();
  }

}

