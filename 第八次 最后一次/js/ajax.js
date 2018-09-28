window.onload = function(){
	var xmlhttp = null;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}else{
		xmlhttp = new ActiveXObject("MicrosOft.XMLHTTP");
	}
	xmlhttp.open("GET","http://rap.taobao.org/mockjsdata/22995/AjaxTask",true);
	xmlhttp.send("");
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4){
			if(xmlhttp.status>=200&&xmlhttp.status<300||xmlhttp.status==304){
	 	    var content = JSON.parse(xmlhttp.responseText);
	 		document.getElementById("main").innerHTML = "<img src='"+content.image+"'>"
				+"<p>姓名："+content.name+"</p>"
				+"<p>学号："+content.id+"</p>"
				+"<p>学校："+content.school+"</p>"
				+"<p>课程："+"</p>"
				+"<li>"+content.lesson[0]+"</li>"
				+"<li>"+content.lesson[1]+"</li>"
				+"<li>"+content.lesson[2]+"</li>"
				
			}else{
				alert("请求失败");
			}
		}
	}
}
