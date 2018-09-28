//资源管理
(function () {
    //全局和块都有一个作用域
    var Game = window.Game = function (params) {
        //得到画布
        this.canvas = document.querySelector(params.canvasid);
        this.ctx = this.canvas.getContext("2d");
        //资源文件地址
        this.Rjsonurl = params.Rjsonurl;
        //帧编号
        this.fno = 0;
        //设置画布的宽度和高度
        this.init();
        this.score = 0;
        //读取资源 异步语句
        var self = this;
        this.loadAllResource(function () {
        //    封装回调函数，表示全部资源读取完毕
        //     alert("done...");
            self.start();
        });
    };
    //初始化，设置画布的宽度和高度
    Game.prototype.init = function () {
        var windowW = document.documentElement.clientWidth;
        var windowH = document.documentElement.clientHeight;
        //屏幕的适配
        if (windowW > 414){
            windowW = 414;
        } else if (windowW < 320){
            windowW = 320;
        }
        if (windowH > 650){
            windowH = 650 ;
        } else if (windowH < 500){
            windowH = 500;
        }
        //canvas匹配视口
        this.canvas.width = windowW;
        this.canvas.height = windowH;
    };
    //读取资源
    Game.prototype.loadAllResource = function (callback) {
        this.R = {};
        var self = this;
        //设置计数器
        var alreadyDoneNumber = 0;
        //发出请求，请求json
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4){
                var Robj = JSON.parse(xhr.responseText);
                //遍历数组
                for (var i=0; i < Robj.images.length; i++){
                   self.R[Robj.images[i].name] = new Image();
                   self.R[Robj.images[i].name].src = Robj.images[i].url;
                   self.R[Robj.images[i].name].onload = function () {
                       alreadyDoneNumber++;
                       self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
                       //提示文字
                       var txt = "正在加载" + alreadyDoneNumber + "/" +Robj.images.length + "请稍后";
                       self.ctx.textAlign = "center";
                       self.ctx.font = "20px 微软雅黑";
                       //文字居中 1-0.618 屏幕上半部分的黄金分割率
                       self.ctx.fillText(txt,self.canvas.width / 2, self.canvas.height * (1-0.618));
                   //    判断是否全部加载完毕
                       if (alreadyDoneNumber == Robj.images.length ){
                           callback();
                       }
                   }
                }
            }
        };
        xhr.open("get",this.Rjsonurl,true);
        xhr.send(null);
    };
//    开始游戏
    Game.prototype.start = function () {
        //实例化场景管理器
        this.sceneManager = new sceneManager();
        var self = this;
        this.timer =setInterval(function () {
            // 清屏
            self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
            self.fno++;
            //场景管理器的渲染和更新
            self.sceneManager.update();
            self.sceneManager.render();
            //打印帧编号
            self.ctx.font = "16px consolas";
            self.ctx.textAlign = "left";
            self.ctx.fillText("FNO:" + self.fno, 10, 20);
        },20);
    };
})();