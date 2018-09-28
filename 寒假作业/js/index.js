/*ajax获取轮播图片*/
window.onload = function(){
	var xmlhttp = null;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}else{
		xmlhttp = new ActiveXObject("MicrosOft.XMLHTTP");
	}
	xmlhttp.open("GET","http://rapapi.org/mockjsdata/31846/synaesthesia-design-language",true);
	xmlhttp.send("");
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4){
			if(xmlhttp.status>=200&&xmlhttp.status<300||xmlhttp.status==304){
	 	    var content = JSON.parse(xmlhttp.responseText);
	 		document.getElementById("inner").innerHTML = "<img src='"+content.image1+"'>"
				+"<img src='"+content.image2+"'>"
				+"<img src='"+content.image3+"'>"
				+"<img src='"+content.image4+"'>"
				+"<img src='"+content.image5+"'>"
				+"<img src='"+content.image6+"'>"
				+"<img src='"+content.image7+"'>"
                +"<img src='"+content.image1+"'>"
			}else{
				alert("请求失败");
			}
		}
	}
}
//
/*轮播代码*/
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
// json
var JSONObject_1 = {
    "tab1":"设计文章",
    "post1": [
        "金三银四求职季，我总结了这份超全面的...",
        "Airbnb团队负责人：硅谷新兴的产品内容...",
        "你要的三八节文案来了",
        "阿里设计师：如何用动效创新方法解决产...",
        "版本控制工具 Abstract 是如何提升设...",
        "腾讯干货！虚拟To B支付设计研究之设...",
        "用户体验和可用性之间的联系和差异，...",
        "学会这简单几招，字体设计也能萌萌...",
        "腾讯干货！虚拟To B支付设计研究之...",
        "如何打造极简设计？来看英才APP的..."
    ]
};
document.getElementById("tab1").innerHTML = JSONObject_1.tab1;
document.getElementById("post1").innerHTML = "<li>"+JSONObject_1.post1[0]+"</li>"
                                            +"<li>"+JSONObject_1.post1[1]+"</li>"
                                            +"<li>"+JSONObject_1.post1[2]+"</li>"
                                            +"<li>"+JSONObject_1.post1[3]+"</li>"
                                            +"<li>"+JSONObject_1.post1[4]+"</li>"
                                            +"<li>"+JSONObject_1.post1[5]+"</li>"
                                            +"<li>"+JSONObject_1.post1[6]+"</li>"
                                            +"<li>"+JSONObject_1.post1[7]+"</li>"
                                            +"<li>"+JSONObject_1.post1[8]+"</li>"
                                            +"<li>"+JSONObject_1.post1[9]+"</li>"


var JSONObject_2 = {
    "tab2":"职场规划",
    "post2": [
        "36氪产品总监：求职应该怎么问答+...",
        "想转职成为用户体验设计师？你得从...",
        "系列三部曲！中国式草根设计师的工...",
        "系列三部曲！中国式草根设计师的从...",
        "这些好习惯塑造了优秀而专业的用户...",
        "成功通过Uber 的设计挑战面试后...",
        "设计稿总监都通过了，前端哥哥却说…",
        "全新案例！优设零基础学AI 插画...",
        "优设木鼠UI特训班第五期，最后...",
        "2018年，每个有追求的设计师都..."
    ]
};
document.getElementById("tab2").innerHTML = JSONObject_2.tab2;
document.getElementById("post2").innerHTML = "<li>"+JSONObject_2.post2[0]+"</li>"
                                            +"<li>"+JSONObject_2.post2[1]+"</li>"
                                            +"<li>"+JSONObject_2.post2[2]+"</li>"
                                            +"<li>"+JSONObject_2.post2[3]+"</li>"
                                            +"<li>"+JSONObject_2.post2[4]+"</li>"
                                            +"<li>"+JSONObject_2.post2[5]+"</li>"
                                            +"<li>"+JSONObject_2.post2[6]+"</li>"
                                            +"<li>"+JSONObject_2.post2[7]+"</li>"
                                            +"<li>"+JSONObject_2.post2[8]+"</li>"
                                            +"<li>"+JSONObject_2.post2[9]+"</li>"


var JSONObject_3 = {
    "tab3":"优设专题",
    "post3": [
        "优设新年专题！2018年最值得阅读的...",
        "优设年度盘点专题！2017年最受欢迎...",
        "优设年度盘点专题！2017年最受欢迎...",
        "优设年度专题盘点！2017年最受欢迎...",
        "优设年度专题盘点！2017年最受欢迎...",
        "超全面！海报设计零基础学习指南",
        "从信黑体到腾讯字体，优设专访顶尖...",
        "设计师必读！从零开始掌握Dribbble...",
        "超全面的PPT 零基础自学指南！...",
        "独家福利！零基础也能快速抠图的..."
    ]
};
document.getElementById("tab3").innerHTML = JSONObject_3.tab3;
document.getElementById("post3").innerHTML = "<li>"+JSONObject_3.post3[0]+"</li>"
                                            +"<li>"+JSONObject_3.post3[1]+"</li>"
                                            +"<li>"+JSONObject_3.post3[2]+"</li>"
                                            +"<li>"+JSONObject_3.post3[3]+"</li>"
                                            +"<li>"+JSONObject_3.post3[4]+"</li>"
                                            +"<li>"+JSONObject_3.post3[5]+"</li>"
                                            +"<li>"+JSONObject_3.post3[6]+"</li>"
                                            +"<li>"+JSONObject_3.post3[7]+"</li>"
                                            +"<li>"+JSONObject_3.post3[8]+"</li>"
                                            +"<li>"+JSONObject_3.post3[9]+"</li>"


// tab内容切换
var btns = document.getElementById("btns").getElementsByTagName("button");
var divs = document.getElementById("content-box").getElementsByTagName("div");
for (var i = 0; i < btns.length; i++) {
    btns[i].index = i;
    btns[i].onclick = function () {
        for (var j = 0; j < btns.length; j++) {
            btns[j].className = "";
        }
        this.className = "color";
        for (var i = 0; i < divs.length; i++) {
            divs[i].style.display = "none";
        }
        divs[this.index].style.display = "block";
    }
}