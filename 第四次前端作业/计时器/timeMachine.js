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
window.setInterval(function(){timer(2017,9,14,'timerBox');}, 1000);/*1000ms = 1s*/
/*我也不是很清楚是不是9.14开学，反正这天是我离开家来到重庆的日子，我就认为它是开学*/