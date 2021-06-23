class DrawingBrush extends PaintFunction {
    constructor(ctx) {
        super();
        this.ctx = ctx;
    }
    onMouseDown(coord, event) {
        this.ctx.strokeStyle = canvasSettings.colorStroke;
        this.ctx.lineCap = "round";
        this.ctx.lineWidth = canvasSettings.strokeSize;
        this.ctx.beginPath();
        this.ctx.moveTo(coord[0], coord[1]);

        this.ctx.lineTo(coord[0], coord[1])
        this.ctx.moveTo(coord[0], coord[1]);
        this.ctx.closePath();
        this.ctx.stroke();
    }
    onDragging(coord, event) {
        this.ctx.lineTo(coord[0], coord[1])
        this.ctx.moveTo(coord[0], coord[1]);
        this.ctx.closePath();
        this.ctx.stroke();
    }
    onMouseMove(coord, event) {}
    onMouseUp(coord, event) {
        // push to restoreArray for undo / redo
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
    onMouseLeave(coord, event) {}
    onMouseEnter(coord, event) {}
}