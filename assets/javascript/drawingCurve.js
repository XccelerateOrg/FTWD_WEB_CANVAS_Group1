    class DrawingCurve extends PaintFunction{
        constructor(ctx,ctxDraft){
            super();
            this.ctx = ctx;
            this.ctxDraft = ctxDraft;
            this.click = 0;
        }
        
        onMouseDown(coord, e){
            
            this.ctx.fillStyle = canvasSettings.colorFill;
            this.ctxDraft.fillStyle = canvasSettings.colorFill;
        
            this.ctx.strokeStyle = canvasSettings.colorStroke;
            this.ctxDraft.strokeStyle = canvasSettings.colorStroke;
        
            this.ctxDraft.lineWidth = canvasSettings.strokeSize;
            this.ctx.lineWidth = canvasSettings.strokeSize

            if(this.click == 0){
                this.origX = coord[0];
                this.origY = coord[1];
                this.click ++
            console.log(this.click)
    
            } else if (this.click == 1){
                this.endX = coord[0];
                this.endY = coord[1];
                this.click++
            console.log(this.click)
    
            } else if(this.click == 2){
                this.cpX = coord[0];
                this.cpY = coord[1];
                this.click++
            console.log(this.click)
                
    
            } else if(this.click == 3){
                this.cpX1 = coord[0];
                this.cpY1 = coord[1];
                currentFunction = new DrawingCurve (ctx,ctxDraft)
            }
            
            this.ctx.beginPath();
            this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.ctx.moveTo(this.origX, this.origY);
            this.ctx.bezierCurveTo(this.cpX, this.cpY, this.cpX1, this.cpY1, this.endX, this.endY);
            this.ctx.stroke();
            restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
            index += 1;
        }
    
        onMouseMove(coord, e){
            if(this.click == 1){
                this.ctxDraft.beginPath();
                this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
                
                this.ctxDraft.moveTo(this.origX, this.origY);
                this.ctxDraft.lineTo(coord[0], coord[1]);

                this.ctxDraft.stroke();
            } else if (this.click == 2){
                this.ctxDraft.beginPath();
                this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

                this.ctxDraft.moveTo(this.origX, this.origY);
                this.ctxDraft.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);

                this.ctxDraft.stroke();
            } else if (this.click == 3){
                this.ctxDraft.beginPath();
                this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

                this.ctxDraft.moveTo(this.origX, this.origY);
                this.ctxDraft.bezierCurveTo(this.cpX, this.cpY, coord[0], coord[1], this.endX, this.endY);
                
                this.ctxDraft.stroke();
            }
        }
            
        }
        