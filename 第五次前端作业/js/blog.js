// 计时器
function timer(year,month,day,timerBox) { 
var now = new Date(); 
var endDate = new Date(year, month-1, day); /*月份是从0开始的 减一*/
var restTime=now.getTime()-endDate.getTime();/*获取当前时间然后减 .getTime()得到的是毫秒数*/ 
var restSecond = parseInt(restTime/1000); 
var day1=Math.floor(restSecond/(60*60*24)); 
var hour=Math.floor((restSecond-day1*24*60*60)/3600); 
var minute=Math.floor((restSecond-day1*24*60*60-hour*3600)/60); 
var second=Math.floor(restSecond-day1*24*60*60-hour*3600-minute*60); 
var haha = document.getElementById(timerBox); 
haha.innerHTML = "距离开学"+year+"年"+month+"月"+day+"日 已经过了："+day1+"天"+hour+"小时"+minute+"分"+second+"秒"; 
}
// 轮播图
window.setInterval(function(){timer(2017,9,14,'timerBox');}, 1000);/*1000ms = 1s*/
var wrap=document.getElementById("wrap");
var inner=document.getElementById("inner");
var spanList=document.getElementById("paganation").getElementsByTagName("span");
var left=document.getElementById("left");
var right=document.getElementById("right");
var clickFlag=true;
var time
var index=0;
var Distance=wrap.offsetWidth;
function AutoGo(){
    var start=inner.offsetLeft;
    var end=index*Distance*(-1);
    var change=end-start;
    var timer;
    var t=0;
    var maxT=30;
    clear();
    if(index==spanList.length){
        spanList[0].className="selected";
    }else{
        spanList[index].className="selected";
    }
    clearInterval(timer);
    timer=setInterval(function(){
        t++;
        if(t>=maxT){
            clearInterval(timer);
            clickFlag=true;
        }
        inner.style.left=change/maxT*t+start+"px";
        if(index==spanList.length&&t>=maxT){
            inner.style.left=0;
            index=0;
        }
    },17);
}
function forward(){
    index++;
    if(index>spanList.length){
        index=0;
    }
    AutoGo();
}
function backward(){
    index--;
    if(index<0){
        index=spanList.length-1;
        inner.style.left=(index+1)*Distance*(-1)+"px";
    }
    AutoGo();
}

time=setInterval(forward,3000);

wrap.onmouseover=function(){
    clearInterval(time);
}
wrap.onmouseout=function(){
time=setInterval(forward,3000); 
}

for(var i=0;i<spanList.length;i++){
    spanList[i].onclick=function(){
        index=this.innerText-1;
        AutoGo();
    }
}

left.onclick=function(){
    if(clickFlag){
        backward();
    }
    clickFlag=false;
}
right.onclick=function(){
    if(clickFlag){
        forward();
    }
    clickFlag=false;
}

function clear(){
    for(var i=0;i<spanList.length;i++){
        spanList[i].className="";
    }
}