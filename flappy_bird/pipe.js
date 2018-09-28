//管子类
(function () {
    var pipe = window.pipe = function () {
        this.imageUp = game.R.pipe_up;
        this.imageDown = game.R.pipe_down;
        //总高度 = 上管子 + 空隙 + 下管子
        this.allHeight = game.canvas.height * 0.78;
        //空隙
        this.interSpace = 120;
        this.picHeight = 320;
        //上管子的高度随机化
        this.height1 = 100 + parseInt(Math.random() * (this.picHeight - 100));
        //下管子的高度自动定死
        this.height2 = this.allHeight - this.height1 - this.interSpace;
        this.x = game.canvas.width;
        //判断是否已经被加过分了
        this.alreadyPass = false;
        //将管子推入数组
        game.pipeArr.push(this);
    };
    //更新
    pipe.prototype.update = function () {
        this.x -= 2;
        //    碰撞检测，检查管子有无碰撞小鸟
        if (game.bird.R > this.x && game.bird.L < this.x + 52){
            if (game.bird.T < this.height1 || game.bird.B > this.height1 + this.interSpace) {
                // clearInterval(game.timer);
                game.sceneManager.enter(4);
            }
        }
        //    计分
        if (game.bird.R > this.x + 52 && !this.alreadyPass) {
            game.score++;
            // 标记为已经通过
            this.alreadyPass = true;
        }
        //    检测管子是否已经离开视口，如果是，则从数组中删除这个管子
        if (this.x < -52){
            for (var i = 0; i < game.pipeArr.length; i++) {
                if (game.pipeArr[i] === this){
                    game.pipeArr.splice(i, 1);
                }
            }
        }
    };
    //渲染
    pipe.prototype.render = function () {
        game.ctx.drawImage(this.imageDown, 0, this.picHeight - this.height1, 52, this.height1, this.x, 0, 52, this.height1);
        game.ctx.drawImage(this.imageUp, 0, 0, 52, this.height2, this.x, this.height1 + this.interSpace, 52, this.height2);
    }
})();