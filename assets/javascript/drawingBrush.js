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

        isDrawing = true;
        this.ctx.moveTo(coord[0], coord[1]);
    };
    onDragging(coord, event) {
        if (isDrawing) {
            var radgrad = ctx.createRadialGradient(
                coord[0], coord[1], 10, coord[0], coord[1], 20);

            radgrad.addColorStop(0, '#000');
            radgrad.addColorStop(0.5, 'rgba(0,0,0,0.5)');
            radgrad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = radgrad;

            ctx.fillRect(coord[0] - 20, coord[1] - 20, 40, 40);
        }
    }
    onMouseMove(coord, event) {}
    onMouseUp(coord, event) {
        isDrawing = false;
        // push to restoreArray for undo / redo
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}


// Pen Brush
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var points = []

class penBrush extends PaintFunction {
    constructor(ctx) {
        super();
        this.ctx = ctx;
    }

    onMouseDown = function (coord) {
        this.ctx.strokeStyle = canvasSettings.colorStroke;
        this.ctx.lineCap = "round";
        this.ctx.lineWidth = canvasSettings.strokeSize;
        this.ctx.shadowBlur = 0;
        this.ctx.lineJoin = 'round';

        points.push({
            x: coord[0],
            y: coord[1],
            width: getRandomInt(3, 5)
        });

        isDrawing = true;
        this.ctx.moveTo(coord[0], coord[1]);
    };
    onDragging(coord, event) {
        if (!isDrawing) return;
        points.push({
            x: coord[0],
            y: coord[1],
            width: getRandomInt(3, 5)
        });

        for (var i = 1; i < points.length; i++) {
            ctx.beginPath();
            ctx.moveTo(points[i-1].x, points[i-1].y);
            ctx.lineWidth = points[i].width;
            ctx.lineTo(points[i].x, points[i].y);
            ctx.stroke();
          }
    }
    onMouseMove(coord, event) {}
    onMouseUp(coord, event) {
        isDrawing = false;
        points.length = 0
        // push to restoreArray for undo / redo
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}

// Multiple lines brush 
var lastPoint = {}
class multipleLineBrush extends PaintFunction {
    constructor(ctx) {
        super();
        this.ctx = ctx;
    }

    onMouseDown = function (coord) {
        this.ctx.lineJoin = ctx.lineCap = 'round';
        this.ctx.strokeStyle = canvasSettings.colorStroke;
        this.ctx.lineCap = "round";
        this.ctx.lineWidth = 1;
        this.ctx.shadowBlur = 0;

        isDrawing = true;
        lastPoint = { x: coord[0], y: coord[1] };

    };
    onDragging(coord, event) {
        if (!isDrawing) return;
  
    this.ctx.beginPath();
    
    this.ctx.moveTo(lastPoint.x - getRandomInt(0, 2), lastPoint.y - getRandomInt(0, 2));
    this.ctx.lineTo(coord[0] - getRandomInt(0, 2), coord[1] - getRandomInt(0, 2));
    this.ctx.stroke();
    
    this.ctx.moveTo(lastPoint.x, lastPoint.y);
    this.ctx.lineTo(coord[0], coord[1]);
    this.ctx.stroke();
    
    this.ctx.moveTo(lastPoint.x + getRandomInt(0, 2), lastPoint.y + getRandomInt(0, 2));
    this.ctx.lineTo(coord[0] + getRandomInt(0, 2), coord[1] + getRandomInt(0, 2));
    this.ctx.stroke();
      
    lastPoint = { x: coord[0], y: coord[1] };
    }
    onMouseMove(coord, event) {}
    onMouseUp(coord, event) {
        isDrawing = false;
        // push to restoreArray for undo / redo
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}
