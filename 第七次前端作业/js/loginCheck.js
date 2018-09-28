 window.onload=function () {
    var email = document.getElementById("email")
    var Name = document.getElementById("name");
    var Pwd = document.getElementById("pwd");
    var msg =document.getElementsByTagName("span");
    var submit = document.getElementById("submit")
    var msgOne = msg[0];
    var msgTwo = msg[1];
    var msgThree = msg[2];
    var re = /[A-Za-z0-9_]/g;
    var reg=/^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/gi;
    email.onfocus=function () {
        msgOne.style.visibility="visible";
        msgOne.innerHTML="请输入邮箱地址";
    }
    email.onblur=function () {
        if(this.value==""){
            msgOne.innerHTML="不能为空！";
        }
        else if (!reg.test(this.value)){
            msgOne.innerHTML="请正确输入邮箱地址！"
        }
    }
    Name.onfocus=function () {
        msgTwo.style.visibility="visible";
        msgTwo.innerHTML="";
    }
    Name.onblur=function () {
        if(this.value==""){
            msgTwo.innerHTML="不能为空！";
        }
        else if (!re.test(this.value)){
            msgTwo.innerHTML="只能使用英文字母、数字和下划线"
        }
    }
    Pwd.onfocus=function () {
        msgThree.style.visibility="visible";
        msgThree.innerHTML="密码不超过八位";
    }
    Pwd.onblur=function () {
        if(this.value==""){
            msgThree.innerHTML="不能为空!";
        } else if(this.value.length>8){
            msgThree.innerHTML="密码不能超过八位";
        }else {
            msgThree.style.visibility="hidden";
        }
    }
    
}