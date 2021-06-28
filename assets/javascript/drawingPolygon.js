class DrawingPolygon extends PaintFunction {
    constructor(ctx, ctxDraft) {
      super();
      this.ctx = ctx;
      this.ctxDraft = ctxDraft;
      resetDrawing = false;
    }
  
    onMouseDown(coord, event) {

    this.ctx.fillStyle = canvasSettings.colorFill;
    this.ctxDraft.fillStyle = canvasSettings.colorFill;

    this.ctx.strokeStyle = canvasSettings.colorStroke;
    this.ctxDraft.strokeStyle = canvasSettings.colorStroke;

    this.ctxDraft.lineWidth = canvasSettings.strokeSize;
    this.ctx.lineWidth = canvasSettings.strokeSize

      this.origX = coord[0];
      this.origY = coord[1];
      this.sides = canvasSettings.polygonSides;
      resetDrawing = false;
    }
  
    onDragging(coord, event) {
      console.log("resetDrawing", resetDrawing);
      if (resetDrawing == false) {
        this.size = Math.sqrt(
          (coord[0] - this.origX) ** 2 + (coord[1] - this.origY) ** 2
        );
  
        function arcctg(x) {
          return Math.PI / 2 - Math.atan(x);
        }
  
        if (coord[1] - this.origY >= 0) {
          this.theta = arcctg((coord[0] - this.origX) / (coord[1] - this.origY));
        } else {
          this.theta =
            Math.PI + arcctg((coord[0] - this.origX) / (coord[1] - this.origY));
        }
  
        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.ctxDraft.beginPath();
        this.ctxDraft.moveTo(coord[0], coord[1]);
        for (let i = 1; i <= this.sides; i++) {
          this.ctxDraft.lineTo(
            this.origX +
              this.size * Math.cos(this.theta + (i * 2 * Math.PI) / this.sides),
            this.origY +
              this.size * Math.sin(this.theta + (i * 2 * Math.PI) / this.sides)
          );
        }
        if (fillStyle) {
          this.ctxDraft.fill();
        } else {
          this.ctxDraft.stroke();
        }
      }
    }
  
    onMouseMove(coord, event) {}
    onMouseUp(coord, event) {
      if (resetDrawing == false) {
        this.size = Math.sqrt(
          (coord[0] - this.origX) ** 2 + (coord[1] - this.origY) ** 2
        );
        function arcctg(x) {
          return Math.PI / 2 - Math.atan(x);
        }
        if (coord[1] - this.origY >= 0) {
          this.theta = arcctg((coord[0] - this.origX) / (coord[1] - this.origY));
        } else {
          this.theta =
            Math.PI + arcctg((coord[0] - this.origX) / (coord[1] - this.origY));
        }
  
        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.ctx.beginPath();
        this.ctx.moveTo(coord[0], coord[1]);
        for (let i = 1; i <= this.sides; i++) {
          this.ctx.lineTo(
            this.origX +
              this.size * Math.cos(this.theta + (i * 2 * Math.PI) / this.sides),
            this.origY +
              this.size * Math.sin(this.theta + (i * 2 * Math.PI) / this.sides)
          );
        }
        if (fillStyle) {
          this.ctx.fill();
        } else {
          this.ctx.stroke();
        }
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1; 
      }
    }
    onMouseLeave() {}
    onMouseEnter() {}
    reset() {
      this.click = 0;
      this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    }
  
    draw(x, y) {
      this.ctx.lineTo(x, y);
      this.ctx.moveTo(x, y);
      this.ctx.closePath();
      this.ctx.stroke();
    }
  }
  