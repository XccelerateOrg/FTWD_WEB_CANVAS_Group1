function clear() {
    ctx.fillStyle = canvasSettings.colorBackground
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    // push to restoreArray for undo / redo
    restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    index += 1;
}