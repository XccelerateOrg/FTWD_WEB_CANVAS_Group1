class StampEmoji extends PaintFunction {
    constructor(ctx, ctxDraft) {
        super();
        this.ctx = ctx;
        this.emoji = new Image();
        this.emoji.src = "./assets/images/smile.png" 
    }

    onMouseDown(coord, e) {
        this.ctx.drawImage(this.emoji, coord[0], coord[1]);
        console.log("Emoji stamp");
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}

class StampHeart extends PaintFunction {
    constructor(ctx, ctxDraft) {
        super();
        this.ctx = ctx;
        this.heart = new Image();
        this.heart.src = "./assets/images/heart.png"
    }

    onMouseDown(coord, e) {
        this.ctx.drawImage(this.heart, coord[0], coord[1]);
        console.log("Heart stamp");
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}

class StampStar extends PaintFunction {
    constructor(ctx, ctxDraft) {
        super();
        this.ctx = ctx;
        this.star = new Image();
        this.star.src = "./assets/images/star.png" 
    }

    onMouseDown(coord, e) {
        this.ctx.drawImage(this.star, coord[0], coord[1]);
        console.log("Star stamp");
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}

class StampTroll extends PaintFunction {
    constructor(ctx, ctxDraft) {
        super();
        this.ctx = ctx;
        this.troll = new Image();
        this.troll.src = "./assets/images/troll.png";
    }

    onMouseDown(coord, e) {
        this.ctx.drawImage(this.troll, coord[0], coord[1]);
        console.log("Troll stamp");
        restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}