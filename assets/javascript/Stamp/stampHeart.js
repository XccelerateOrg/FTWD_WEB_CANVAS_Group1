class StampHeart extends PaintFunction {
    constructor(ctx, ctxDraft) {
        super();
        this.ctx = ctx;

    }
    
    onMouseDown(coord, e) {
        var heart = new Image();
        heart.src = "assets/images/PNG-images-PNGs-Love-Love-heart--69png.png" //set the link

        this.ctx.drawImage(heart, coord[0], coord[1]);
        console.log("stamp");
    }
}