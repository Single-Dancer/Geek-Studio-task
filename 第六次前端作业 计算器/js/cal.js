function appContent(td){
    var content = document.getElementById("content");
    var result = document.getElementById("result");
    var text = td.innerText;
    if("DEL" == text){
        if(content.innerText.length > 0){
            content.innerText = content.innerText.substring(0,content.innerText.length-1);
        }
    }else if("AC" == text){
        content.innerText = "";
    }else if("=" == text){
        var resultText = parse(content.innerText);
        result.innerText = content.innerText + "=" + resultText;
        content.innerText = "";
    }else{
        content.innerText = content.innerText + text;
    }    
}
function parse(content){
    var index = content.lastIndexOf("(");
    if(index > -1){
        var endIndex = content.indexOf(")",index);
        if(endIndex > -1){
            var result = parse(content.substring(index + 1,endIndex));
            return parse(content.substring(0,index) + ("" + result) + content.substring(endIndex + 1)) 
        }
    }
    index = content.indexOf("+");
    if(index > -1){
        return parse(content.substring(0,index)) + parse(content.substring(index + 1));
    }
    index = content.lastIndexOf("-");
    if(index > -1){
        return parse(content.substring(0,index)) - parse(content.substring(index + 1));
    }
    index = content.lastIndexOf("x");
    if(index > -1){
        return parse(content.substring(0,index)) * parse(content.substring(index + 1));
    }
    index = content.lastIndexOf("÷");
    if(index > -1){
        return parse(content.substring(0,index)) / parse(content.substring(index + 1));
    }
    if("" == content){ 
        return 0;
    }else{
        return content - 1 + 1;
    }
}