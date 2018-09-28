var total = 0;
/*把每个月份的天数存入数组中*/
var arr = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var year = Number(prompt("请输入年[1900-至今]"));
d = new Date();
nowYear = +d.getFullYear();
/*和当前年份进行对比*/
while (year > nowYear || year < 1900) {
	alert("超出范围");
	year = Number(prompt("请重新正确输入年"));
}
var month= Number(prompt("请输入月"));
while (month > 12 || month < 1) {
	alert("超出范围")
	month = Number(prompt("请重新正确输入月"))
}
var day = Number(prompt("请输入日"));
while (day > 31 || day < 1) {
	alert("超出范围")
	day = Number(prompt("请重新正确输入日"))
}
/*输入月份之前月份的天数累加*/
for (var i = 0; i < month - 1; i++) {
	total = total + arr[i];
}
/*判断闰年*/
if ((year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) && month > 2) {
        total = total + day + 1
        document.write("该日期为一年中的第" + total  + "天" );
} else {
        total = total + day
	document.write("该日期为一年中的第" + total  + "天" );
}
/*发现自己真的菜*/
