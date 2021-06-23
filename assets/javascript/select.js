class Select extends PaintFunction{
    constructor(ctx, ctxDraft){
        super();
        this.ctx = ctx;
        this.ctxDraft = ctxDraft;
    }

    onMouseDown(coord, e){
        this.origX = coord[0];
        this.origY = coord[1];
        this.ctx.strokeStyle = "#000"
        this.ctxDraft.strokeStyle = "#000"
    }

    onDragging(coord, e){
        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.ctxDraft.strokeRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY)
    }

    onMouseUp(coord, e){
        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.ctx.strokeRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}