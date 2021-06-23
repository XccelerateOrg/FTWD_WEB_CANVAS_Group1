class Fill extends PaintFunction{
    constructor(ctx, ctxDraft){
    super();
    this.ctx = ctx;
    this.ctxDraft = ctxDraft;
}

    onMouseDown(coord, e){

        let count = 0;
        let colorArray = [];
        this.origX = coord[0];
        this.origY = coord[1];
        this.color = ctx.getImageData(this.origX, this.origY, 4, 4);
        console.log(`color data`, this.color)
        console.log(`color0 red`, this.color.data[0]);
        console.log(`color1 green`, this.color.data[1]);
        console.log(`color2 blue`, this.color.data[2]);
        console.log(`color3 alpha`, this.color.data[3]);
        console.log(`set color`, canvasSettings.colorFillArray[3]);

        for (let i = this.origX; i < canvas.width; i++){
            if (this.color.data != colorArray){
                // console.log( this.color.data)
                count ++

                for(let a = 0; a < this.color.data.length; a += 4){
                    // if(colorArray.length <= 64){
                    // colorArray[i + 0] = canvasSettings.colorFillArray[0];
                    // colorArray[i + 1] = canvasSettings.colorFillArray[1];
                    // colorArray[i + 2] = canvasSettings.colorFillArray[2];
                    // colorArray[i + 3] = canvasSettings.colorFillArray[3];
                    // }
                    if (colorArray.length < 64){
                        if (a <= 3){
                            colorArray.push(canvasSettings.colorFillArray[a])
                        } else if (a > 3) {
                            a -= 4;
                            colorArray.push(canvasSettings.colorFillArray[a])
                        }
                    }
                }

                for(let x = 0; x < this.color.data.length; x++){
                    this.color.data[x] = colorArray[x];
                }
                console.log(`this.color`, this.color);
                console.log( this.color.data)
                console.log(`colorA`, colorArray)
                console.log(`count`, count)
                
                this.origX += 4
            }
        }
        let data = new ImageData((colorArray), 4, 4)
        this.ctx.putImageData(data, 1, 1, 10, 10);
    }


    
    
}

//==================================================================================================================
//==================================================================================================================
//==================================================================================================================



// pixelStack = [[startX, startY]];
//                                         //starting point of the scan, 
//                                         //click coord

// while(pixelStack.length)                //a while loop to do things when there are still pixels left in pixel stack

// {
//   var newPos, x, y, pixelPos, reachLeft, reachRight;
//   newPos = pixelStack.pop();
//                                         //pop the last X and Y of pixelStack into newPos
//                                         //use newPos to store the recently saved pixel coord

//   x = newPos[0];                        //coordX
//   y = newPos[1];                        //coordY

//   pixelPos = (y*canvas.Width + x) * 4;
//                                         //the last saved pixel Y * width + x
//                                         //travel until we reach the end of the paramiter

//   while(y-- >= 0 && matchStartColor(pixelPos))
//                                         //when Y-1 is >= then boundary and the color is correct, do:
//                                         //when we reach Y0, y-1 < 0, so it will stop running
//   {
//     pixelPos -= canvas.Width * 4;        //this somehow makes the scanning move?
    
//   }
//     pixelPos += canvas.Width * 4;        //when the above while loop stops, add the pixelPos back, why?
//   ++y;                                  //increment y, why?
//   reachLeft = false;                    //set some var
//   reachRight = false;                   //set some var
//   while(y++ < canvasHeight-1 && matchStartColor(pixelPos))
//                                         //y now starts to go down, when its taller then canvas or color not match, stop
//   {
//     colorPixel(pixelPos);               //this is a function

//     if(x > 0)                           //if last x coor is > 0
//     {                                   //it means x has reach far left
//       if(matchStartColor(pixelPos - 4)) //if the color match
//       {
//         if(!reachLeft){                 //if havent touch left, 
//           pixelStack.push([x - 1, y]);  //push new x-1 and y into pixelStack
//           reachLeft = true;             //make reach left = true???
//         }
//       }
//       else if(reachLeft)                //if reachLeft = true,
//       {
//         reachLeft = false;              //make it false
//       }                                 //this is some sort of loop until x = 0
//     }
	
//     if(x < canvas.Width-1)               //if x > 0 and x < canvas.Width-1,
//     {                                   //it means that x has reached far right
//       if(matchStartColor(pixelPos + 4)) //dont know why add 4
//       {
//         if(!reachRight)                 //same thing as above, loop till doesnt match
//         {
//           pixelStack.push([x + 1, y]);
//           reachRight = true;
//         }
//       }
//       else if(reachRight)
//       {
//         reachRight = false;
//       }
//     }
			
//     pixelPos += canvas.Width * 4;
//   }
// }
// context.putImageData(colorLayer, 0, 0); 
  
// function matchStartColor(pixelPos)
// {
//   var r = colorLayer.data[pixelPos];	
//   var g = colorLayer.data[pixelPos+1];	
//   var b = colorLayer.data[pixelPos+2];

//   return (r == startR && g == startG && b == startB);
// }

// function colorPixel(pixelPos)
// {
//   colorLayer.data[pixelPos] = fillColorR;
//   colorLayer.data[pixelPos+1] = fillColorG;
//   colorLayer.data[pixelPos+2] = fillColorB;
//   colorLayer.data[pixelPos+3] = 255;
// }

//==================================================================================================================
//==================================================================================================================
//==================================================================================================================


