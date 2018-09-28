//大地
(function () {
    var land = window.land =function () {
        this.image = game.R.land;
        this.y = game.canvas.height * 0.78;
        this.x = 0;
        this.w = 336;
    };
    //更新
    land.prototype.update =function () {
        this.x -= 2;
        if (this.x < -336){
            this.x = 0;
        }
    };
    //渲染
    land.prototype.render = function () {
        game.ctx.drawImage(this.image, this.x, this.y);
        game.ctx.drawImage(this.image, this.x + this.w, this.y);
        game.ctx.drawImage(this.image, this.x + this.w * 2, this.y);
        game.ctx.fillStyle = "#DED895";
        game.ctx.fillRect(0, this.y + 112, game.canvas.width, game.canvas.height * 0.25 - 112);
    }
})();