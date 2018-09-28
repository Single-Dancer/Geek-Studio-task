//tab选项卡
$().ready(function () {
    tabFn($('.tabNav1 li'),$('.tabCon1'),'click');
    tabFn($('.tabNav2 li'),$('.tabCon2'),'click');
    tabFn($('.tabNav3 li'),$('.tabCon3'),'mouseover');
    tabFn($('.tabNav4 li'),$('.tabCon4'),'mouseover')
    function tabFn(tabNav,Con,aEvent){
        // tabNav.addClass('active').siblings().removeClass('active');
        Con.hide().eq(0).show();
        tabNav.on(aEvent,function () {
            tabNav.removeClass('active').addClass('gradient');
            $(this).addClass('active').removeClass('gradient');
            // $(this).children(a).addClass('triangle_down_red').removeClass('triangle_down_gray');
            Con.hide().eq($(this).index()).show();
        })
    }
});

//搜索框
$(function () {
    (function () {
        var tab = $('#menu li');
        var search = $('#search').find('.form .text');
        var arrText = ['例如：荷棠鱼坊烧鱼 或 樱花日本料理','例如：昌平区育新站龙旗广场2号楼609室','例如：万达影院双人情侣券','例如：东莞出事了，大老虎是谁？','例如：北京初春降雪，天气变幻莫测'];
        var now = 0;
        search.val(arrText[now]);
        tab.each(function (index) {
            $(this).click(function () {
                $(this).addClass("active").siblings().removeClass("active");
                now = index;
                search.val(arrText[now]);
            });
        });
        //获得焦点
        search.focus(function (){
            if( $(this).val() == arrText[now] ) {
                $(this).val('');
            }
        });
        //失去焦点，清空默认
        search.blur(function (){
            if( $(this).val() == '' ) {
                search.val(arrText[now]);
            }
        });
    })();
});

//BBS
$(function () {
    $('.bbs ol li').mouseover(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
});
//日历
$(function(){
    $('.cal').mouseover(function(){
        $(this).next().css("display","block");
    });
    $('.cal').mouseout(function(){
        $(this).next().css("display","none");
    });
});

//text
$(function(){
    $.fn.textSlider = function(options){
        var defaults = {scrollHeight:25,line:1,speed:'slow',timer:5000};
        var opts = $.extend(defaults,options);
        var btnUp = $('#updateUpBtn');
        var btnDown = $('#updateDownBtn');
        this.each(function(){
            var timerID;
            var obj = $(this);
            var $ul = obj.children("ul");
            var $height = $ul.find("li").height();
            var $Upheight = 0-opts.line*$height;
            obj.hover(function(){
                clearInterval(timerID);
            },function(){
                timerID = setInterval(moveUp,opts.timer);
            });
            function moveUp(){
                $ul.animate({"margin-top":$Upheight},opts.speed,function(){
                    for(i=0;i<opts.line;i++){
                        $ul.find("li:first").appendTo($ul);
                    }
                    $ul.css("margin-top",0);
                });
            };
            timerID = setInterval(moveUp,opts.timer);
        });
        $(function () {
            $(".wrap").Scroll({line:1,speed:500,timer:5000,up:"updateUpBtn",down:"updateDownBtn"});
        });
    };
});
$(function(){
    $(".wrap").textSlider({
        line:1
    });
});
//轮播
$(function (){
    var mainPic = $('#list-image li');
    var smallPic = $('#ol li');
    var pw = $('.box').find('p')
    var arr = [ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
    var now = 0;
    function fnFade() {
        mainPic.each(function (i){
            if ( i != now ) {
                mainPic.eq(i).fadeOut().css('zIndex', 1);//如果不是当前图片地址，则图片层级被覆盖
                smallPic.eq(i).removeClass('active');

            } else {
                mainPic.eq(i).fadeIn().css('zIndex', 2);
                smallPic.eq(i).addClass('active');
            }
        });
        pw.text(arr[now]); //输出与索引相对应的文字
    }
    //缩略图点击事件，当前图片地址显示大图片，上一图片消失
    smallPic.click(function (){
        now = $(this).index();
        fnFade();
    });
    //设置定时器
    function autoPlay() {
        timer = setInterval(function () {
            now++;
            now %= arr.length;
            fnFade();
        }, 2000);
    }
    autoPlay(); //执行函数
    $('#fade').hover(function (){ clearInterval(timer); }, autoPlay); //清除定时器
});
