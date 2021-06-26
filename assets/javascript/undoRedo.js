function undo() {
    console.log(`undo work`)
    if(index >= 0){
        // console.log(`undo if state`, index)
        redoArray.push(restoreArray.pop());
        // console.log(`resotre`, restoreArray)
        reIndex +=1;
        index -= 1;
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
        redoArray = [];
        index = -1;
    }
}

function redo(){
    if (reIndex > -1){
        ctx.putImageData(redoArray[reIndex],0 ,0);
        restoreArray.push(redoArray.pop());
        reIndex -= 1;
        index += 1;
    } else {
        restoreArray = [];
        reIndex = -1
    }
} 