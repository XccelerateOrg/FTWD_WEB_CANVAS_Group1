class Fill extends PaintFunction {
  constructor(ctx, ctxDraft) {
    super();
    this.ctx = ctx;
  }

  onMouseDown(coord, e) {
    function floodFill( x, y, newColor) {
      var left, right, leftEdge, rightEdge;
      const w = ctx.canvas.width,
        h = ctx.canvas.height,
        pixels = w * h;   //calculate how many pixles there is
      const imgData = ctx.getImageData(0, 0, w, h); //get the entire canvas
      const p32 = new Uint32Array(imgData.data.buffer); //
      const stack = [x + y * w]; // add starting pos to stack
      const targetColor = p32[stack[0]];
      if (targetColor === newColor || targetColor === undefined) {
        return;
      } // avoid endless loop
      while (stack.length) {
        let idx = stack.pop();
        while (idx >= w && p32[idx - w] === targetColor) {
          idx -= w;
        } // move to top edge
        right = left = false;
        leftEdge = idx % w === 0;
        rightEdge = (idx + 1) % w === 0;
        while (p32[idx] === targetColor) {
          p32[idx] = newColor;
          if (!leftEdge) {
            if (p32[idx - 1] === targetColor) {
              // check left
              if (!left) {
                stack.push(idx - 1); // found new column to left
                left = true; //
              }
            } else if (left) {
              left = false;
            }
          }
          if (!rightEdge) {
            if (p32[idx + 1] === targetColor) {
              if (!right) {
                stack.push(idx + 1); // new column to right
                right = true;
              }
            } else if (right) {
              right = false;
            }
          }
          idx += w;
        }
      }
      ctx.putImageData(imgData, 0, 0);

      const fillColors = [
        0xffff0000, 0xffffff00, 0xff00ff00, 0xff00ffff, 0xff0000ff, 0xffff00ff,
      ];
      
      return;
    }
    floodFill(coord[0], coord[1], canvasSettings.colorHex1)
  }
}

