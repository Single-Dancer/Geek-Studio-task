//背景类
(function () {
    var background = window.background = function () {
        this.image = game.R.bg_day;
        this.y = 0.75 * game.canvas.height - 396;
        //png尺寸
        this.h = 512;
        this.w = 288;
        this.x = 0;
        this.speed = 1;
    };
    //更新背景
    background.prototype.update = function(){
        // console.log(this.x);
        this.x -= this.speed;
        //克隆图片，无缝滚动,到达左边瞬间拉回
        if (this.x < -this.w){
            this.x = 0;
        }
    };
    //渲染背景
    background.prototype.render = function () {
        //渲染图片
        game.ctx.drawImage(this.image, this.x, this.y);
        game.ctx.drawImage(this.image, this.x + this.w, this.y);
        game.ctx.drawImage(this.image, this.x + this.w * 2, this.y);
        //天空矩形
        game.ctx.fillStyle = "#4EC0CA";
        game.ctx.fillRect(0, 0, game.canvas.width, this.y + 10);
        //大地矩形
        // game.ctx.fillStyle = "#5EE270";
        // game.ctx.fillRect(0, this.y + this.h, game.canvas.width, game.canvas.height - this.h - this.y);
    }
})();