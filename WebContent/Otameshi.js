/** お試しプログラム */
var btn = document.getElementById("btn");
btn.onclick = function(){
	var inp = document.getElementById("input");
	var val = inp.value;

	if(val==""){
		inp.style.backgroundColor = "#ffa500";
		inp.focus();
		alert("何か入力してください。");
	}
	else {
		inp.style.backgroundColor = "#ffffff";
		alert("「"+input.value + "」と入力。");
	}

var btn2 = document.getElementById("btn2");
btn2.onclick=function(){
	var otameshi = Java.type("Otameshi");
}

}

