function undo() {
    console.log(`firing`)
    if(index >= 0){
        console.log(`before index`, index)
        redoArray.push(restoreArray.pop());
        reIndex +=1;
        index -= 1;
        if (index < 0) {
            clear_canvas();
        } else {
            ctx.putImageData(restoreArray[index], 0, 0);
        };
    }
}

function redo(){
    if (reIndex > -1){
        ctx.putImageData(redoArray[reIndex],0 ,0);
        restoreArray.push(redoArray.pop());
        reIndex -= 1;
        index += 1;
    }
}