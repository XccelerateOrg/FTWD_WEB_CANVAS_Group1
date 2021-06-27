function undo() {
    if (index >= 0) {
        redoArray.push(restoreArray.pop());
        reIndex += 1;
        index -= 1;
        if (index < 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        } else {
            ctx.putImageData(restoreArray[index], 0, 0);
        }
    } else {
        index = -1;
    }
}

function redo() {
    if (reIndex > -1) {
        ctx.putImageData(redoArray[reIndex], 0, 0);
        restoreArray.push(redoArray.pop());
        reIndex -= 1;
        index += 1;
    } else {
        // restoreArray = [];
        reIndex = -1;
    }
}