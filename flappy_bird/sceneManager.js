(function () {
    var sceneManager = window.sceneManager = function () {
        //1表示欢迎屏幕，2表示教程，3表示游戏内容，4表示游戏结束,5表示奖牌页面
        this.sceneNumber = 1;
    //    场景管理器负责实例化东西
        game.bg = new background();
        game.land = new land();
        game.bird = new bird();
        this.logoY = -48;
        this.buttonPlayX = game.canvas.width / 2 - 58;
        this.buttonPlayY = game.canvas.height;
    //    添加监听
        this.bindEvent();
    };
    sceneManager.prototype.update = function () {
        switch(this.sceneNumber){
            case 1:
                //logo移动
                this.logoY += 10;
                if(this.logoY > 120){
                    this.logoY = 120;
                }
                //按钮移动
                this.buttonPlayY -= 16;
                if (this.buttonPlayY < 360){
                    this.buttonPlayY = 360;
                }
                break;
            case 2:
                //小鸟扑打翅膀
                game.bird.wing();
        //        改变透明度
                this.tutorialOpacity += this.tutorialOpacityIsDown ? -0.02 : 0.02;
                if (this.tutorialOpacity < 0.02 || this.tutorialOpacity > 0.98) {
                    this.tutorialOpacityIsDown = !this.tutorialOpacityIsDown;
                }
                break;
            case 3:
                //更新小鸟
                game.bird.update();
                //背景和大地的更新
                game.bg.update();
                game.land.update();
                //管子的实例化
                game.fno % 150 == 0 && (new pipe());
                for (var i = 0; i < game.pipeArr.length; i++){
                    game.pipeArr[i] && game.pipeArr[i].update();
                }
                break;
            case 4:
                if (game.bird.y > game.canvas.height * 0.78 - 17){
                    this.isBirdLand = true;
                }
                this.birdFNO++;
                if (!this.isBirdLand){
                    game.bird.y += 1.4 * this.birdFNO;
                }
        //        白屏缓慢变回来
                this.maskOpacity -= 0.1;
                if (this.maskOpacity < 0){
                    this.maskOpacity = 0;
                }
        }
    };
    sceneManager.prototype.render = function () {
    //     根据场景决定做什么
        switch (this.sceneNumber){
            case 1:
                //渲染背景
                game.bg.render();
                //渲染大地
                game.land.render();
                //渲染小鸟
                game.bird.render();
                game.bird.x = game.canvas.width / 2;
                game.bird.y = 260;
                //画logo
                game.ctx.drawImage(game.R["logo"], game.canvas.width / 2 - 89, this.logoY);
                //画按钮
                game.ctx.drawImage(game.R["buttonPlay"], this.buttonPlayX, this.buttonPlayY);
                break;
            case 2:
                //渲染背景
                game.bg.render();
                //渲染大地
                game.land.render();
                //渲染小鸟
                game.bird.render();
                game.bird.x = game.canvas.width / 2;
                game.bird.y = 150;
        //        渲染教程小图
                game.ctx.save();
                game.ctx.globalAlpha = this.tutorialOpacity;
                game.ctx.drawImage(game.R["tutorial"], game.canvas.width / 2 -57, 240);
                game.ctx.restore();
                break;
            case 3:
                game.bg.render();
                //渲染大地
                game.land.render();
                //渲染小鸟
                game.bird.render();
                //渲染所有的管子
                for (var i = 0; i < game.pipeArr.length; i++){
                    game.pipeArr[i] && game.pipeArr[i].render();
                }
                //打印分数
                //当前分数的位数，
                var scoreLength = game.score.toString().length;
                //通过循环设置位数显示数字图片
                for (var i = 0; i < scoreLength; i++){
                    game.ctx.drawImage(game.R["score_" + game.score.toString().charAt(i)], game.canvas.width / 2 - scoreLength / 2 * 34 + 34 * i + 5, 100);
                }
                break;
            case 4:
                game.bg.render();
                //渲染大地
                game.land.render();
                //渲染小鸟
                game.bird.render();
                //渲染所有的管子
                for (var i = 0; i < game.pipeArr.length; i++){
                    game.pipeArr[i] && game.pipeArr[i].render();
                }
                //渲染爆炸特效
                if (!this.isBirdLand){
                    game.bird.render();
                } else{
                    game.ctx.drawImage(game.R["blood"], game.bird.x - 44 , game.bird.y - 24 , 88, 88);
                    this.enter(5);
                }
                //渲染白屏
                game.ctx.fillStyle = "rgba(255,255,255," + this.maskOpacity + ")";
                game.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);
                //打印分数
                //当前分数的位数，
                var scoreLength = game.score.toString().length;
                //通过循环设置位数显示数字图片
                for (var i = 0; i < scoreLength; i++){
                    game.ctx.drawImage(game.R["score_" + game.score.toString().charAt(i)], game.canvas.width / 2 - scoreLength / 2 * 34 + 34 * i + 5, 100);
                }
                break;
            case 5:
                game.bg.render();
                //渲染大地
                game.land.render();
                for (var i = 0; i < game.pipeArr.length; i++){
                    game.pipeArr[i] && game.pipeArr[i].render();
                }
                //渲染爆炸特效
                if (!this.isBirdLand){
                    game.bird.render();
                } else{
                    game.ctx.drawImage(game.R["blood"], game.bird.x - 44 , game.bird.y - 24 , 88, 88);
                    this.enter(5);
                }
                //打印分数
                //当前分数的位数，
                var scoreLength = game.score.toString().length;
                //通过循环设置位数显示数字图片
                for (var i = 0; i < scoreLength; i++){
                    game.ctx.drawImage(game.R["score_" + game.score.toString().charAt(i)], game.canvas.width / 2 - scoreLength / 2 * 34 + 34 * i + 5, 100);
                }
        //        重新游戏
                game.ctx.drawImage(game.R["gameOver"], game.canvas.width / 2 -102, 200);
                break;
        }
    };
//    进入某场景要做的事情
    sceneManager.prototype.enter = function (number) {
        this.sceneNumber = number;
        switch(this.sceneNumber){
            case 1:
        //        进入1号场景动画播放
                this.logoY = -48;
                this.buttonPlayY = game.canvas.height;
                game.bird = new bird();
                break;
            case 2:
                game.bird.y = 150;
        //        tutorial的透明度0~1
                this.tutorialOpacity = 1;
                this.tutorialOpacityIsDown = true;
                break;
            case 3:
                //一进入场景3立即清空管子数组
                game.pipeArr = new Array();
                break;
            case 4:
        //死亡动画
                this.maskOpacity = 1;
        //        小鸟是否已经坠地
                this.isBirdLand = false;
        //        小鸟帧编号
                this.birdFNO = 0;
                break;
            case 5:
                break;
        }
    };
//    添加监听
    sceneManager.prototype.bindEvent = function () {
        var self = this;
        game.canvas.onclick = function(event){
          clickHandler(event.clientX, event.clientY);
        };
        game.canvas.addEventListener("touchstart", function (event) {
            //阻止默认事件；
            event.preventDefault();
            var finger = event.touches[0];
            clickHandler(finger.clientX, finger.clientY);
        },true);
        function clickHandler(mouse_X,mouse_Y) {
            switch (self.sceneNumber){
                case 1:
                    if (mouse_X > self.buttonPlayX && mouse_X < self.buttonPlayX + 116 && mouse_Y > self.buttonPlayY && mouse_Y < self.buttonPlayY + 70){
                    //    说明点击到按钮上,切换场景
                        self.enter(2);
                    }
                    break;
                case 2:
                    self.enter(3);
                    break;
                case 3:
                    game.bird.fly();
                    break;
                case 5:
                    self.enter(1);
                    break;
            }
        }
    }
})();