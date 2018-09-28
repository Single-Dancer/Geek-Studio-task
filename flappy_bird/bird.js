//小鸟
(function(){
    var bird = window.bird = function(){
        //随机化小鸟的颜色
        this.color = parseInt(Math.random() * 3);
        //决定用图,小鸟有3个翅膀状态
        this.imageArr = [
            game.R["bird" + this.color + "_0"],
            game.R["bird" + this.color + "_1"],
            game.R["bird" + this.color + "_2"]
        ];
        //    翅膀
        this.wingStep = 0;
        this.x = game.canvas.width * (1 - 0.618) -24;
        this.y = 100;
        //小鸟的帧数
        this.fno = 0;
        //小鸟的头偏转角度
        this.d = 0;
        this.flyStatus = false;
    };
    bird.prototype.update = function(){
        //    翅膀状态,固定帧数翅膀扑打一次
        this.wing();
        //    掉落算法
        if (!this.flyStatus){
            this.y += this.fno * 0.5;
        } else{
            //控制上飞的高度
            this.y -= (20 - this.fno) * 0.2;
            //20帧之后，自由落体
            if (this.fno > 20){
                this.flyStatus = false;
                this.fno = 0;
            }
        }
        this.d += 0.04;
        this.fno++;
        //    计算鸟的四个碰撞检测值,13是图片的上面空隙
        this.T = this.y - 12;
        this.R = this.x + 17;
        this.B = this.y + 12;
        this.L = this.x - 17;
        // console.log(this.T, this.R, this.B, this.L);
        //    验证是否落地
        if (this.B > game.canvas.height * 0.78){
            // clearInterval(game.timer);
            //    死亡进入场景4
            game.sceneManager.enter(4);
        }
    };
    //避免小鸟飞出顶部
    if (this.y < 0) {
        this.y = 0;
    }
    bird.prototype.render = function(){
        game.ctx.save();
        //将坐标系拉到小鸟的中心点
        game.ctx.translate(this.x, this.y);
        game.ctx.rotate(this.d);
        game.ctx.drawImage(this.imageArr[this.wingStep], -24, -24);
        game.ctx.restore();
    };
    bird.prototype.fly = function () {
        this.flyStatus = true;
        this.d = -0.6;
        this.fno = 0;
    };
    bird.prototype.wing = function () {
        game.fno % 3 == 0 && this.wingStep++;
        if (this.wingStep > 2){
            this.wingStep = 0;
        }
    }
})();