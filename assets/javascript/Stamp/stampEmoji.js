class StampEmoji extends PaintFunction {
    constructor(ctx, ctxDraft) {
        super();
        this.ctx = ctx;
    }

    onMouseDown(coord, e) {
        var emoji = new Image();
        emoji.src = "assets/images/smile.png" //set the link
        this.ctx.drawImage(emoji, coord[0], coord[1]);
        console.log("stamp");
    }
}