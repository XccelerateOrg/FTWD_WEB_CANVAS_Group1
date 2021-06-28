// Smooth Brush
class smoothBrush extends PaintFunction {
    constructor(ctx) {
        super();
        this.ctx = ctx;
    }
    onMouseDown(coord, event) {
        this.ctx.strokeStyle = canvasSettings.colorStroke;
        this.ctx.lineCap = "round";
        this.ctx.lineWidth = canvasSettings.strokeSize;
        this.ctx.shadowBlur = 0;
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
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
    onMouseLeave(coord, event) {}
    onMouseEnter(coord, event) {}
}

// Shadow brush
class shadowBrush extends PaintFunction {
    constructor(ctx) {
        super();
        this.ctx = ctx;
    }
    onMouseDown = function (coord) {
        this.ctx.strokeStyle = canvasSettings.colorStroke;
        this.ctx.lineCap = "round";
        this.ctx.lineWidth = canvasSettings.strokeSize;
        this.ctx.beginPath();
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = 'rgb(0, 0, 0)';
        this.ctx.moveTo(coord[0], coord[1]);
        this.ctx.closePath();
        this.ctx.stroke();
    };
    onDragging(coord, event) {
        this.ctx.lineTo(coord[0], coord[1])
        this.ctx.moveTo(coord[0], coord[1]);
        this.ctx.closePath();
        this.ctx.stroke();
    }
    onMouseMove(coord, event) {}
    onMouseUp(coord, event) {
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}

// Radial gradient
class radialBrush extends PaintFunction {
    constructor(ctx) {
        super();
        this.ctx = ctx;
    }
    onMouseDown = function (coord) {
        this.ctx.strokeStyle = canvasSettings.colorStroke;
        this.ctx.lineCap = "round";
        this.ctx.lineWidth = canvasSettings.strokeSize;
        this.ctx.beginPath();
    };
    onDragging(coord, event) {
        var radgrad = ctx.createRadialGradient(
            coord[0], coord[1], 10, coord[0], coord[1], 20);

        radgrad.addColorStop(0, '#000');
        radgrad.addColorStop(0.5, 'rgba(0,0,0,0.5)');
        radgrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = radgrad;

        ctx.fillRect(coord[0] - 20, coord[1] - 20, 40, 40);
        this.ctx.lineTo(coord[0], coord[1])
        this.ctx.moveTo(coord[0], coord[1]);
        this.ctx.closePath();
        this.ctx.stroke();
    }
    onMouseMove(coord, event) {}
    onMouseUp(coord, event) {
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}
