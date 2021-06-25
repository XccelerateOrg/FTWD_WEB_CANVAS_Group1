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
        pixels = w * h; //calculate how many pixles there is
      const imgData = ctx.getImageData(0, 0, w, h); //get the entire canvas
      const p32 = new Uint32Array(imgData.data.buffer); //get all px in canvas
      const stack = [x + y * w]; // add starting pos to stack, this will be the position assigned to the px
      //
      const targetColor = p32[stack[0]]; //Hex of the clicked px

      if (targetColor === newColor || targetColor === undefined) {
        //when the color is the same, as selected, dont do shit, duh
        return;
      } // avoid endless loop
      while (stack.length) {
        //while stack is not empty, do the following:

        //if the idx has not reach the edge, there will be two elements in the stack

        let idx = stack.pop();
        //idx is an array that takes the last thing that pushed into stack,
        //the first time this run, idx should be the coord you clicked,
        //when the function goes through, idx will move

        while (idx >= w && p32[idx - w] === targetColor) {
          //while idx is more then width ?? and

          //^this is the coord u clicked

          idx -= w;
          //substract the number of width will not immediately take you to the edge,
          //idx number is not a precise number to ur coord,
          //rather a representation of that pixel, think of it as a phone number to that coord
          //therefore, extracting the w will make the pixel move by one because it was multiplied??
        } // move to top edge

        right = left = false;

        leftEdge = idx % w === 0;
        //try to understand [X+Y*W] with X = 10, Y = 10, W = 100
        //then implement those numbers into these two formular
        //modify the X along the way to understand why this is happening
        rightEdge = (idx + 1) % w === 0;

        while (p32[idx] === targetColor) {
          //while trgt and new color is not the same, and the selected px color is === target color,

          p32[idx] = newColor;
          //set that px to new color
          //everytime when idx - 1 was pushed, new px is called,
          //therefore rendering the px

          if (!leftEdge) {
            //if it is not left edge yet

            if (p32[idx - 1] === targetColor) {
              //p32 is the whole canvas
              //p32[idx] points to the current px,
              //if the p32[idx-1] is still the same color,
              //then ...

              // check left
              if (!left) {
                //if the left is false
                stack.push(idx - 1); // found new column to left
                //push the new coord into the stack for next examination
                left = true; //chagenleft back to true
              }
            } else if (left) {
              //when left is true change left back to false so above runs again
              left = false;
            }
          }
          if (!rightEdge) {
            //if its not right edge yet

            if (p32[idx + 1] === targetColor) {
              //p32 is the whole canvas
              //p32[idx] points to the current px,
              //if the p32[idx+1] is still the same color,
              //then ...

              if (!right) {
                stack.push(idx + 1); // new column to right
                //push the new coord into the stack for next examination
                right = true; //chagenright back to true
              }
            } else if (right) {
              //when left is true change left back to false so above runs again
              right = false;
            }
          }
          idx += w;
          //idx + w will go to next px?????
        }
      }
      ctx.putImageData(imgData, 0, 0);

      return;
    }
    floodFill(coord[0], coord[1], canvasSettings.colorHex1);
  }
}
