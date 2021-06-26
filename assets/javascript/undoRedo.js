function undo() {
    console.log(`undo pressed`)
    if(index >= 0){
        // console.log(`undo if state`, index)
        console.log(`undo index b4`, index);
        console.log(`reIndex b4`, reIndex);
        redoArray.push(restoreArray.pop());
        // console.log(`resotre`, restoreArray)
        reIndex +=1;
        index -= 1;
        console.log(`undo index aft`, index);
        console.log(`reIndex aft`, reIndex);
        if (index < 0) {
            // console.log(`index < 0`)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        } else {
            // console.log(`index > 0`)
            ctx.putImageData(restoreArray[index], 0, 0);
            // console.log(restoreArray[index])
            // console.log(`index > 0 done`)
        };
    } else {
        // redoArray = [];
        index = -1;
        console.log(`undo index <0`, index);
        console.log(`reIndex <0`, reIndex);
    }
    console.log(`///////`)
}

function redo(){
  console.log(`redo pressed`)
  if (reIndex > -1){
    console.log(`undo b4`, index)
    console.log(`redo b4`, reIndex)
        ctx.putImageData(redoArray[reIndex],0 ,0);
        restoreArray.push(redoArray.pop());
        reIndex -= 1;
        index += 1;
        console.log(`undo aft`, index);
        console.log(`redo aft`, reIndex);
    } else {
        // restoreArray = [];
        reIndex = -1
        console.log(`redo = -1, reset`)
    }
    console.log(`///////`)
} 