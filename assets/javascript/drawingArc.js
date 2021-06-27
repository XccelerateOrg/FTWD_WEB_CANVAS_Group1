class DrawingArc extends PaintFunction {
  constructor(ctx, ctxDraft) {
    super();
    this.ctx = ctx;
    this.ctxDraft = ctxDraft;
    this.click = 0;
  }

  onMouseDown(coord, e) {
    this.ctx.strokeStyle = canvasSettings.colorStroke;
    this.ctx.lineWidth = canvasSettings.strokeSize;
    
    this.ctxDraft.strokeStyle = canvasSettings.colorStroke;
    this.ctxDraft.lineWidth = canvasSettings.strokeSize;

    if (this.click == 0) {
      this.origX = coord[0];
      this.origY = coord[1];
      console.log(this.click);
    } else if (this.click == 1) {
      this.endX = coord[0];
      this.endY = coord[1];
      console.log(this.click);
    } else if (this.click == 2) {
      this.cpX = coord[0];
      this.cpY = coord[1];
      console.log(this.click);
    } else if (this.click == 3) {
      currentFunction = new DrawingArc(ctx,ctxDraft);
    }

    this.click ++;
    this.ctx.beginPath();
    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.ctx.moveTo(this.origX, this.origY);
    this.ctx.quadraticCurveTo(this.cpX, this.cpY, this.endX, this.endY);
    this.ctx.stroke();
    console.log(this.click);

    restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    index += 1;
  }

  onMouseMove(coord, e) {
    if (this.click == 1) {
      this.ctxDraft.beginPath();
      this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.ctxDraft.moveTo(this.origX, this.origY);
      this.ctxDraft.lineTo(coord[0], coord[1]);
      this.ctxDraft.stroke();
    } else if (this.click == 2) {
      this.ctxDraft.beginPath();
      this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.ctxDraft.moveTo(this.origX, this.origY);
      this.ctxDraft.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
      this.ctxDraft.stroke();
    }
  }
}
