function getQueryString(paramStr,name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
	var r = paramStr.match(reg); 
	if (r != null){
		return r[2];
// 					return unescape(r[2]);
	}
	return null; 
}

$(document).ready(function(){
	if($.trim($("#errorMsg").text()) != ""){
		$("body").show();
		return;
	}
	var flag = false;
	var action = $("#fm1").attr("action");
	if(action.indexOf("?service=") != -1){
		var service = action.substring(action.indexOf("?service=") + "?service=".length);
		var url = decodeURIComponent(service);
//		alert(url);
		if(url.indexOf("?") != -1){
			var parStr = url.substring(url.indexOf("?") + 1);
			var schoolCode = getQueryString(parStr,"dataSourceName");
			var autoAuthToken = getQueryString(parStr,"autoAuthToken");
//			alert(autoAuthToken);
			if(autoAuthToken != null){
				$("#autoAuthToken").val(autoAuthToken);
				if(schoolCode!=null){
					$("select[name=schoolCode]").val(schoolCode);
				}
				flag = true;
				document.forms[0].submit();
			}
		}
	}
	if(!flag){
		$("body").show();
	}
})