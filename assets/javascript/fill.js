class Fill extends PaintFunction {
  constructor(ctx, ctxDraft) {
    super();
    this.ctx = ctx;
  }

  onMouseDown(coord, e) {
    function floodFill(x, y, newColor) {
      var left, right, leftEdge, rightEdge;
      const w = ctx.canvas.width,
        h = ctx.canvas.height,
        pixels = w * h; 
      const imgData = ctx.getImageData(0, 0, w, h); 
      const p32 = new Uint32Array(imgData.data.buffer); 
      const stack = [x + y * w]; 

      const targetColor = p32[stack[0]]; 

      if (targetColor === newColor || targetColor === undefined) {
        return;
      } 

      while (stack.length) {

        let idx = stack.pop();

        while (idx >= w && p32[idx - w] === targetColor) {
          idx -= w;
        }

        right = left = false;

        leftEdge = idx % w === 0;
        rightEdge = (idx + 1) % w === 0;

        while (p32[idx] === targetColor) {

          p32[idx] = newColor;

          if (!leftEdge) {

            if (p32[idx - 1] === targetColor) {

              if (!left) {
                stack.push(idx - 1); 
                left = true; 
              }

            } else if (left) {
              left = false;
            }
          }
          if (!rightEdge) {

            if (p32[idx + 1] === targetColor) {

              if (!right) {
                stack.push(idx + 1); 
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

      return;
    }
    floodFill(coord[0], coord[1], canvasSettings.colorHex1);
    restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    index += 1;
  }
}